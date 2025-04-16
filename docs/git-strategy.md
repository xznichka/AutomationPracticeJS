# Git Workflow Strategy

## Branching Strategy
- **main** – Contains stable and production-ready code.
- **feature/featureName** – Used for active development of features.

## Rules for Branch Management
- **main**: Modifications are allowed only through Pull Requests (PRs) originating from `feature/featureName`.
- **feature/featureName**: All development work is performed here before being integrated into the `main` branch.

## Commit Guidelines
- Ensure commits are small, focused, and meaningful.
- Provide clear and concise messages for each commit.

## Code Review and Merging Process
- All updates must go through a **Pull Request (PR)**.
- Merging is only permitted after at least one approval from a reviewer.

## Additional Recommendations
- Keep Pull Requests narrow in scope and concise.
- Frequently update your branch with the latest changes from `main` to minimize conflicts.
- Write detailed and informative descriptions for both Pull Requests and commits.