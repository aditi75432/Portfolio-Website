import MergedPRList from "@/components/merged-pr-list"
import { fetchMergedPRs, FALLBACK_PRS } from "@/lib/github"

export const metadata = {
  title: "Merged GitHub PRs • Aditi Mehta",
  description:
    "A curated list of Aditi Mehta’s merged pull requests across organizations and projects with search and filters.",
}

export default async function Page() {
  const perPage = 50
  let page = 1
  let allItems: any[] = []

  // Fetch pages until we have all results we need (at least 17) or no more pages
  while (true) {
    const batch = await fetchMergedPRs({ author: "aditi75432", page, per_page: perPage })
    if (!batch || batch.length === 0) break
    allItems = allItems.concat(batch)
    if (batch.length < perPage) break
    if (allItems.length >= 17) break
    page += 1
  }

  const items = allItems.length > 0 ? allItems : FALLBACK_PRS

  return (
    <main className="container mx-auto px-4 py-24 relative z-10">
      <header className="mb-8 space-y-2">
        <h1 className="text-4xl font-display gradient-text">GitHub Merged PRs</h1>
        <p className="text-foreground/70 max-w-2xl">
          Links, organizations, descriptions, what I contributed, and a heuristic impact estimate. Use the search and
          filters to explore.
        </p>
      </header>

      <MergedPRList items={items} />
    </main>
  )
}
