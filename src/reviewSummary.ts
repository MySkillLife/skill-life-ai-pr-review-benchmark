export type ReviewFinding = {
  id: string;
  severity: "critical" | "warning" | "suggestion";
  title: string;
};

export function summarizeFindings(findings: ReviewFinding[]) {
  const critical = findings.filter((finding) => finding.severity === "critical").length;
  const warning = findings.filter((finding) => finding.severity === "warning").length;
  return { critical, total: findings.length, warning };
}

export function groupFindingsBySeverity(findings: ReviewFinding[]) {
  return findings.reduce<Record<ReviewFinding["severity"], ReviewFinding[]>>(
    (groups, finding) => {
      groups[finding.severity].push(finding);
      return groups;
    },
    { critical: [], suggestion: [], warning: [] },
  );
}
