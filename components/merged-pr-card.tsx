import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GitPullRequest, Building2, LinkIcon, FileDiff, Sparkles } from "lucide-react"
import type { MergedPR } from "@/lib/github"

function categoryBadgeStyles(cat: MergedPR["category"]) {
  switch (cat) {
    case "Feature":
      return "bg-violet-500/20 text-violet-200 border-violet-500/30"
    case "Bug fix":
      return "bg-rose-500/20 text-rose-200 border-rose-500/30"
    case "Docs":
      return "bg-emerald-500/20 text-emerald-200 border-emerald-500/30"
    case "Design":
      return "bg-pink-500/20 text-pink-200 border-pink-500/30"
    case "CI/Infra":
      return "bg-amber-500/20 text-amber-200 border-amber-500/30"
    case "Analysis":
      return "bg-cyan-500/20 text-cyan-200 border-cyan-500/30"
    default:
      return "bg-slate-500/20 text-slate-200 border-slate-500/30"
  }
}

function impactBadgeStyles(impact: MergedPR["impact"]) {
  switch (impact) {
    case "High":
      return "bg-green-600/20 text-green-300 border-green-600/40"
    case "Medium":
      return "bg-yellow-600/20 text-yellow-300 border-yellow-600/40"
    case "Low":
      return "bg-sky-600/20 text-sky-300 border-sky-600/40"
  }
}

export default function MergedPRCard({ pr }: { pr: MergedPR }) {
  const when = new Date(pr.mergedAt)
  const displayDate = isNaN(when.getTime()) ? "" : when.toLocaleDateString()

  return (
    <Card className="glass border border-white/10 shadow-lg hover:shadow-primary/20 transition">
      <CardHeader className="space-y-2">
        <CardTitle className="flex items-start gap-2 text-base md:text-lg leading-snug">
          <GitPullRequest className="h-5 w-5 text-primary mt-0.5 shrink-0" />
          <a
            href={pr.url}
            target="_blank"
            rel="noreferrer"
            className="hover:underline"
            style={{ fontFamily: "Calibri, Arial, Helvetica, sans-serif" }}
          >
            {pr.title}
          </a>
        </CardTitle>
        <div className="flex flex-wrap items-center gap-2 text-xs text-foreground/70">
          <span className="inline-flex items-center gap-1">
            <Building2 className="h-4 w-4 opacity-70" />
            {pr.owner} / {pr.repo} • #{pr.number}
          </span>
          {displayDate ? <span>• Merged {displayDate}</span> : null}
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        {pr.body ? <p className="text-sm text-foreground/80 line-clamp-3">{pr.body}</p> : null}

        <div className="text-sm flex items-start gap-2">
          <Sparkles className="h-4 w-4 text-primary mt-0.5" />
          <p>
            <span className="text-foreground/80">What I did:</span>{" "}
            <span className="text-foreground/90">{pr.whatIDid}</span>
          </p>
        </div>

        <div className="flex flex-wrap gap-2 pt-1">
          <Badge variant="outline" className={categoryBadgeStyles(pr.category)}>
            {pr.category}
          </Badge>
          <Badge variant="outline" className={impactBadgeStyles(pr.impact)}>
            Impact: {pr.impact}
          </Badge>
          {(typeof pr.additions === "number" ||
            typeof pr.deletions === "number" ||
            typeof pr.changedFiles === "number") && (
            <Badge variant="outline" className="inline-flex items-center gap-1 border-white/20 text-foreground/70">
              <FileDiff className="h-3.5 w-3.5" />
              {typeof pr.changedFiles === "number" ? <span>{pr.changedFiles} files</span> : null}
              {typeof pr.additions === "number" || typeof pr.deletions === "number" ? (
                <span>
                  {typeof pr.additions === "number" ? ` +${pr.additions}` : ""}
                  {typeof pr.deletions === "number" ? ` / -${pr.deletions}` : ""}
                </span>
              ) : null}
            </Badge>
          )}
          <a
            href={pr.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-xs text-primary hover:underline"
          >
            <LinkIcon className="h-3.5 w-3.5" />
            View PR
          </a>
        </div>
      </CardContent>
    </Card>
  )
}
