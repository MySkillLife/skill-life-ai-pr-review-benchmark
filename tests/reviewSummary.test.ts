import { describe, expect, it } from "vitest";

import { summarizeFindings } from "../src/reviewSummary";

describe("summarizeFindings", () => {
  it("counts findings by severity", () => {
    expect(
      summarizeFindings([
        { id: "f1", severity: "critical", title: "critical" },
        { id: "f2", severity: "warning", title: "warning" },
        { id: "f3", severity: "suggestion", title: "suggestion" },
      ]),
    ).toEqual({ critical: 1, total: 3, warning: 1 });
  });
});
