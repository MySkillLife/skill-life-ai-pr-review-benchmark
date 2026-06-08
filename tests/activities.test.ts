import { describe, expect, it } from "vitest";

import { listVisibleActivities } from "../src/activities";

describe("listVisibleActivities", () => {
  it("hides other users' activities from members", () => {
    expect(
      listVisibleActivities({ id: "u1", role: "member" }, [
        { id: "a1", ownerId: "u1", title: "mine" },
        { id: "a2", ownerId: "u2", title: "private" },
      ]),
    ).toEqual([{ id: "a1", ownerId: "u1", title: "mine" }]);
  });
});
