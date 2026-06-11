export type ReviewFinding = {
  id: string;
  severity: "critical" | "warning" | "suggestion";
  title: string;
};

export function summarizeFindings(findings: ReviewFinding[]) {
  return findings.reduce(
    (summary, finding) => {
      summary.total += 1;
      if (finding.severity === "critical") {
        summary.critical += 1;
      }
      if (finding.severity === "warning") {
        summary.warning += 1;
      }
      return summary;
    },
    { critical: 0, total: 0, warning: 0 },
  );
}
