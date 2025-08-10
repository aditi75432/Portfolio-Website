"use client"

import { useMemo, useState } from "react"
import type { Category, MergedPR } from "@/lib/github"
import MergedPRCard from "./merged-pr-card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

type Props = {
  items: MergedPR[]
}

const CATEGORY_ORDER: Category[] = ["Feature", "Bug fix", "Docs", "Design", "CI/Infra", "Analysis", "Other"]

export default function MergedPRList({ items }: Props) {
  const [query, setQuery] = useState("")
  const [sort, setSort] = useState<"new" | "old" | "impact">("new")
  const [org, setOrg] = useState<string>("all")
  const [activeCats, setActiveCats] = useState<Category[]>([])

  const orgs = useMemo(() => {
    const s = new Set(items.map((p) => p.owner))
    return ["all", ...Array.from(s)]
  }, [items])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    let arr = items.filter((p) => {
      const matchesQuery =
        !q || `${p.title} ${p.repo} ${p.owner} ${p.body ?? ""} ${p.whatIDid}`.toLowerCase().includes(q)
      const matchesOrg = org === "all" || p.owner === org
      const matchesCat = activeCats.length === 0 || activeCats.includes(p.category)
      return matchesQuery && matchesOrg && matchesCat
    })

    const rank = (p: MergedPR) => (p.impact === "High" ? 3 : p.impact === "Medium" ? 2 : 1)

    arr = arr.sort((a, b) => {
      if (sort === "new") return +new Date(b.mergedAt) - +new Date(a.mergedAt)
      if (sort === "old") return +new Date(a.mergedAt) - +new Date(b.mergedAt)
      return rank(b) - rank(a)
    })

    return arr
  }, [items, query, sort, org, activeCats])

  function toggleCategory(cat: Category) {
    setActiveCats((prev) => (prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]))
  }

  return (
    <section className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-foreground/70">
            Search, filter by organization and category, and sort by recency or impact.
          </p>
        </div>
        <div className="flex flex-col gap-3 md:flex-row md:items-center">
          <Input
            placeholder="Search by repo, org, or title..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-[280px]"
          />
          <Select value={org} onValueChange={setOrg}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Organization" />
            </SelectTrigger>
            <SelectContent>
              {orgs.map((o) => (
                <SelectItem key={o} value={o}>
                  {o === "all" ? "All Orgs" : o}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={sort} onValueChange={(v) => setSort(v as typeof sort)}>
            <SelectTrigger className="w-[160px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="new">Newest</SelectItem>
              <SelectItem value="old">Oldest</SelectItem>
              <SelectItem value="impact">Impact</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {CATEGORY_ORDER.map((cat) => {
          const active = activeCats.includes(cat)
          return (
            <Button
              key={cat}
              variant={active ? "default" : "outline"}
              onClick={() => toggleCategory(cat)}
              className={active ? "" : "border-white/20"}
              size="sm"
            >
              {cat}
            </Button>
          )
        })}
        {activeCats.length > 0 && (
          <Button variant="ghost" size="sm" onClick={() => setActiveCats([])}>
            Clear categories
          </Button>
        )}
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-16 glass rounded-xl border border-white/10">
          <p className="text-lg font-medium">No pull requests match your filters.</p>
          <p className="text-foreground/70 mt-1">Try clearing the filters or adjusting your search.</p>
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {filtered.map((pr, idx) => (
            <motion.div
              key={`${pr.owner}/${pr.repo}#${pr.number}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: Math.min(idx * 0.03, 0.3) }}
            >
              <MergedPRCard pr={pr} />
            </motion.div>
          ))}
        </div>
      )}

      <div className="flex items-center justify-between pt-6">
        <a
          href="https://github.com/search?q=author%3Aaditi75432+is%3Apr+is%3Amerged&type=pullrequests"
          target="_blank"
          rel="noreferrer"
          className="text-sm text-primary hover:underline"
        >
          View full GitHub search
        </a>
      </div>
    </section>
  )
}
