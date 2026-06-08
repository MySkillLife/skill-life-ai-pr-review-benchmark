import { describe, expect, it } from "vitest";

import { resolveRoute } from "../src/routes";

describe("resolveRoute", () => {
  it("keeps privacy settings authenticated", () => {
    expect(resolveRoute("/settings/privacy")?.requiresAuth).toBe(true);
  });
});
