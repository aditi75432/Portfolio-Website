export type ImpactLevel = "High" | "Medium" | "Low"
export type Category = "Feature" | "Bug fix" | "Docs" | "Design" | "CI/Infra" | "Analysis" | "Other"

export type MergedPR = {
  url: string
  number: number
  title: string
  owner: string
  repo: string
  mergedAt: string
  body?: string
  whatIDid: string
  impact: ImpactLevel
  category: Category
  // Optional detailed stats when token available
  additions?: number
  deletions?: number
  changedFiles?: number
}

type GitHubIssueSearchItem = {
  html_url: string
  title: string
  number: number
  body?: string | null
  repository_url: string // "https://api.github.com/repos/{owner}/{repo}"
  closed_at?: string | null
}

type GitHubIssueSearchResponse = {
  total_count: number
  incomplete_results: boolean
  items: GitHubIssueSearchItem[]
}

function pickCategory(text: string): Category {
  const t = text.toLowerCase()
  if (/\bfix(e[sd])?\b|\bbug\b|\bpatch\b/.test(t)) return "Bug fix"
  if (/\bdocs?\b|\bdocumentation\b|\breadme\b/.test(t)) return "Docs"
  if (/\bui\b|\bux\b|\bstyle(s|d)?\b|\bimage(s)?\b|\bbanner\b|\bdesign\b/.test(t)) return "Design"
  if (/\bci\b|\bworkflow\b|\baction(s)?\b|\bpipeline\b|\bbuild\b|\bconfig\b|\bsetup\b|\bcontainer\b|\bdocker\b/.test(t))
    return "CI/Infra"
  if (/\badd(ed)?\b|\bimplement(ed|ation)?\b|\bfeature\b|\bnew\b|\benhance(d|ment)?\b/.test(t)) return "Feature"
  if (/\banalysis\b|\balgorithm\b|\bmodel\b|\bsimpoint\b|\btrace(s)?\b/.test(t)) return "Analysis"
  return "Other"
}

function analyzePRSignals(pr: { title: string; body?: string; repo: string }): {
  whatIDid: string
  impact: ImpactLevel
  category: Category
} {
  const text = `${pr.title} ${pr.body ?? ""} ${pr.repo}`
  const category = pickCategory(text)

  let what = "General improvements and maintenance."
  switch (category) {
    case "Feature":
      what = "Implemented new features and functionality."
      break
    case "Bug fix":
      what = "Fixed bugs and improved reliability."
      break
    case "Docs":
      what = "Improved documentation for clarity and onboarding."
      break
    case "Design":
      what = "Refined UI styling and visual assets."
      break
    case "CI/Infra":
      what = "Enhanced CI/build/configuration workflows."
      break
    case "Analysis":
      what = "Added analysis tooling and algorithmic improvements."
      break
    default:
      what = "General improvements and maintenance."
  }

  // Impact heuristic
  let impact: ImpactLevel = "Medium"
  if (category === "Docs" || category === "Design") impact = "Low"
  if (category === "Feature" || category === "Bug fix") impact = "Medium"
  if (category === "CI/Infra" || category === "Analysis") impact = "High"

  if (pr.repo.toLowerCase().includes("riscv") && category === "Analysis") {
    impact = "High"
  }

  return { whatIDid: what, impact, category }
}

async function fetchPRStats(owner: string, repo: string, number: number, token?: string) {
  // Optional enrichment: additions/deletions/changed_files
  try {
    const res = await fetch(`https://api.github.com/repos/${owner}/${repo}/pulls/${number}`, {
      headers: {
        Accept: "application/vnd.github+json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
      next: { revalidate: 3600 },
    })
    if (!res.ok) return {}
    const json = (await res.json()) as {
      additions?: number
      deletions?: number
      changed_files?: number
    }
    return {
      additions: json.additions,
      deletions: json.deletions,
      changedFiles: json.changed_files,
    }
  } catch {
    return {}
  }
}

export async function fetchMergedPRs({
  author,
  page = 1,
  per_page = 20,
}: {
  author: string
  page?: number
  per_page?: number
}): Promise<MergedPR[]> {
  const params = new URLSearchParams({
    q: `author:${author}+is:pr+is:merged`,
    sort: "updated",
    order: "desc",
    page: String(page),
    per_page: String(per_page),
  })
  const url = `https://api.github.com/search/issues?${params.toString()}`
  const token = process.env.GITHUB_TOKEN // optional, works only on server

  try {
    const res = await fetch(url, {
      headers: {
        Accept: "application/vnd.github+json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
      cache: "no-store",
    })
    if (!res.ok) throw new Error(`GitHub API error: ${res.status}`)
    const data = (await res.json()) as GitHubIssueSearchResponse

    // Map base data first
    const base = data.items.map((it) => {
      const [owner, repo] = it.repository_url.split("/").slice(-2)
      const mergedAt = it.closed_at ?? new Date().toISOString()
      const { whatIDid, impact, category } = analyzePRSignals({
        title: it.title,
        body: it.body ?? undefined,
        repo,
      })
      const pr: MergedPR = {
        url: it.html_url,
        number: it.number,
        title: it.title,
        owner,
        repo,
        mergedAt,
        body: it.body ?? undefined,
        whatIDid,
        impact,
        category,
      }
      return pr
    })

    // If token exists, enrich a few items with stats (limit concurrency)
    if (token && base.length) {
      const concurrency = 4
      let i = 0
      while (i < base.length) {
        const batch = base.slice(i, i + concurrency)
        const stats = await Promise.all(batch.map((pr) => fetchPRStats(pr.owner, pr.repo, pr.number, token)))
        stats.forEach((s, idx) => Object.assign(batch[idx], s))
        i += concurrency
      }
    }

    return base.length ? base : FALLBACK_PRS
  } catch {
    return FALLBACK_PRS
  }
}

export const FALLBACK_PRS: MergedPR[] = [
  {
    url: "https://github.com/riscv-software-src/riscv-perf-model/pull/266",
    number: 266,
    title: "Added QEMU BBVs workflow and SimPoint analysis under traces",
    owner: "riscv-software-src",
    repo: "riscv-perf-model",
    mergedAt: "2025-07-15T00:00:00.000Z",
    body: "Introduces a containerized, unified workflow for running various benchmarks on QEMU and performing SimPoint-based phase analysis.",
    ...analyzePRSignals({
      title: "Added QEMU BBVs workflow and SimPoint analysis under traces",
      body: "Introduces a containerized, unified workflow for running various benchmarks on QEMU and performing SimPoint-based phase analysis.",
      repo: "riscv-perf-model",
    }),
  },
  {
    url: "https://github.com/AnushaArora/Pun-Intended/pull/4",
    number: 4,
    title: "added documentation",
    owner: "AnushaArora",
    repo: "Pun-Intended",
    mergedAt: "2025-07-10T00:00:00.000Z",
    body: "Comprehensive documentation pass for clearer onboarding.",
    ...analyzePRSignals({
      title: "added documentation",
      body: "Comprehensive documentation pass for clearer onboarding.",
      repo: "Pun-Intended",
    }),
  },
  {
    url: "https://github.com/AnushaArora/Pun-Intended/pull/3",
    number: 3,
    title: "virtual try on, self check out, grocery reminder",
    owner: "AnushaArora",
    repo: "Pun-Intended",
    mergedAt: "2025-07-06T00:00:00.000Z",
    body: "Added virtual try-on, self checkout, and grocery reminder features.",
    ...analyzePRSignals({
      title: "virtual try on, self check out, grocery reminder",
      body: "Added virtual try-on, self checkout, and grocery reminder features.",
      repo: "Pun-Intended",
    }),
  },
  {
    url: "https://github.com/AnushaArora/Pun-Intended/pull/2",
    number: 2,
    title: "self checkout, visual search, dynamic discount",
    owner: "AnushaArora",
    repo: "Pun-Intended",
    mergedAt: "2025-07-04T00:00:00.000Z",
    body: "Adds self-checkout, visual search, and dynamic discount features.",
    ...analyzePRSignals({
      title: "self checkout, visual search, dynamic discount",
      body: "Adds self-checkout, visual search, and dynamic discount features.",
      repo: "Pun-Intended",
    }),
  },
  {
    url: "https://github.com/MicrosoftStudentChapterIGDTUW/reactmsc/pull/44",
    number: 44,
    title: "added Summer Bootcamp 2025 banner and call Buttons",
    owner: "MicrosoftStudentChapterIGDTUW",
    repo: "reactmsc",
    mergedAt: "2025-06-25T00:00:00.000Z",
    body: "Homepage CTA/banner updates for Summer Bootcamp 2025.",
    ...analyzePRSignals({
      title: "added Summer Bootcamp 2025 banner and call Buttons",
      body: "Homepage CTA/banner updates for Summer Bootcamp 2025.",
      repo: "reactmsc",
    }),
  },
  {
    url: "https://github.com/AnushaArora/Pun-Intended/pull/1",
    number: 1,
    title: "added cart and orders",
    owner: "AnushaArora",
    repo: "Pun-Intended",
    mergedAt: "2025-06-22T00:00:00.000Z",
    body: "Introduced shopping cart and order history functionality.",
    ...analyzePRSignals({
      title: "added cart and orders",
      body: "Introduced shopping cart and order history functionality.",
      repo: "Pun-Intended",
    }),
  },
  {
    url: "https://github.com/MicrosoftStudentChapterIGDTUW/reactmsc/pull/42",
    number: 42,
    title: "Updated Team Images",
    owner: "MicrosoftStudentChapterIGDTUW",
    repo: "reactmsc",
    mergedAt: "2025-05-02T00:00:00.000Z",
    body: "Updated assets for team images.",
    ...analyzePRSignals({
      title: "Updated Team Images",
      body: "Updated assets for team images.",
      repo: "reactmsc",
    }),
  },
  {
    url: "https://github.com/MicrosoftStudentChapterIGDTUW/reactmsc/pull/41",
    number: 41,
    title: "Team Leads Profile Image Updated",
    owner: "MicrosoftStudentChapterIGDTUW",
    repo: "reactmsc",
    mergedAt: "2025-05-01T00:00:00.000Z",
    body: "Updated profile images for the team leads.",
    ...analyzePRSignals({
      title: "Team Leads Profile Image Updated",
      body: "Updated profile images for the team leads.",
      repo: "reactmsc",
    }),
  },
  {
    url: "https://github.com/Violetcv/reactmsc-violetcv/pull/22",
    number: 22,
    title: "timeline",
    owner: "Violetcv",
    repo: "reactmsc-violetcv",
    mergedAt: "2025-01-29T00:00:00.000Z",
    body: "Added a new timeline feature.",
    ...analyzePRSignals({
      title: "timeline",
      body: "Added a new timeline feature.",
      repo: "reactmsc-violetcv",
    }),
  },
  {
    url: "https://github.com/Violetcv/reactmsc-violetcv/pull/20",
    number: 20,
    title: "timeline corrected",
    owner: "Violetcv",
    repo: "reactmsc-violetcv",
    mergedAt: "2025-01-29T00:00:00.000Z",
    body: "Corrected issues in the timeline feature.",
    ...analyzePRSignals({
      title: "timeline corrected",
      body: "Corrected issues in the timeline feature.",
      repo: "reactmsc-violetcv",
    }),
  },
  {
    url: "https://github.com/MicrosoftStudentChapterIGDTUW/reactmsc/pull/28",
    number: 28,
    title: "TimeLine",
    owner: "MicrosoftStudentChapterIGDTUW",
    repo: "reactmsc",
    mergedAt: "2025-01-27T00:00:00.000Z",
    body: "Added the initial timeline component.",
    ...analyzePRSignals({
      title: "TimeLine",
      body: "Added the initial timeline component.",
      repo: "reactmsc",
    }),
  },
  {
    url: "https://github.com/Violetcv/reactmsc-violetcv/pull/13",
    number: 13,
    title: "changed contact.css to tailwind and added reset and popup features (requires npm install react-toastify)",
    owner: "Violetcv",
    repo: "reactmsc-violetcv",
    mergedAt: "2024-08-01T00:00:00.000Z",
    body: "Migrated contact styles to Tailwind; added reset and popup (requires react-toastify).",
    ...analyzePRSignals({
      title: "changed contact.css to tailwind and added reset and popup features (requires npm install react-toastify)",
      body: "Migrated contact styles to Tailwind; added reset and popup (requires react-toastify).",
      repo: "reactmsc-violetcv",
    }),
  },
  
  {
    url: "https://github.com/Violetcv/reactmsc-violetcv/pull/2",
    number: 2,
    title: "aligned the contact page texts",
    owner: "Violetcv",
    repo: "reactmsc-violetcv",
    mergedAt: "2024-06-20T00:00:00.000Z",
    body: "Fixed text alignment on the contact page.",
    ...analyzePRSignals({
      title: "aligned the contact page texts",
      body: "Fixed text alignment on the contact page.",
      repo: "reactmsc-violetcv",
    }),
  },
  {
    url: "https://github.com/Violetcv/reactmsc-violetcv/pull/1",
    number: 1,
    title: "Home page image",
    owner: "Violetcv",
    repo: "reactmsc-violetcv",
    mergedAt: "2024-06-20T00:00:00.000Z",
    body: "Connected all the images to the home page successfully.",
    ...analyzePRSignals({
      title: "Home page image",
      body: "Connected all the images to the home page successfully.",
      repo: "reactmsc-violetcv",
    }),
  },
];