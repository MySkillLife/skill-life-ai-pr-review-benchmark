import { describe, expect, it } from "vitest";

import { summarizeFindings } from "../src/reviewSummary";

describe("summarizeFindings", () => {
  it("counts critical and warning findings", () => {
    expect(
      summarizeFindings([
        { id: "f1", severity: "critical", title: "critical" },
        { id: "f2", severity: "warning", title: "warning" },
      ]),
    ).toEqual({ critical: 1, total: 2, warning: 1 });
  });
});
