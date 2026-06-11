# Skill Life AI PR Review Benchmark

Synthetic, public-safe benchmark PRs for evaluating AI PR reviewers. The code in this repository is intentionally small and does not contain Skill Life production source, secrets, user data, private logs, or proprietary history.

Each benchmark PR has a matching ground-truth record in `benchmark-cases.json`. Score reviewers by useful findings, false positives, missed critical issues, and time-to-review on the same PR/diff.

## Commands

```bash
npm run quality
npm test
```
