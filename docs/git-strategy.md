# Git Workflow Strategy

## Branching Strategy

- **main** – Stable production-ready code.
- **feature/featureName** – Used for active development of features.

## Rules for Branch Management

- **main**:

  - Direct commits to `main` are not allowed.
  - Updates to `main` happen only via Pull Requests (PRs) from `feature/featureName`.
  - Each PR must be reviewed and approved by at least one reviewer.
  - Only squash merges are allowed for integrating changes.

- **feature/featureName**:
  - Active development occurs here before merging into `main`.

## Commit Guidelines

- Ensure commits are small, focused, and meaningful.
- Use clear and descriptive commit messages.

## Code Review and Merging Process

- All changes must go through a **Pull Request (PR)**.
- At least one approved review is required before merging.
- Keep PRs small and focused to simplify reviews.
- Write meaningful descriptions for both PRs and commits.

## Additional Recommendations

- Regularly sync your branch with `main` to avoid conflicts.
- Follow the repository's rules for merge strategies: **only squash merges are allowed**.
