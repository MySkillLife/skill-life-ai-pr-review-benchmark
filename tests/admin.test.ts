import { describe, expect, it } from "vitest";

import { deleteUser } from "../src/admin";

describe("deleteUser", () => {
  it("requires admin actors", () => {
    expect(() => deleteUser({ id: "u1", role: "member" }, { deleted: false, id: "u2" })).toThrow("admin-required");
  });
});
