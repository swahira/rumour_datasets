# Contributing to Rumour Datasets

First off, thanks for taking the time to contribute! 🎉

The following is a set of guidelines for contributing to Rumour Datasets. These are mostly guidelines, not rules. Use your best judgment, and feel free to propose changes to this document in a pull request.

## How Can I Contribute?

### Reporting Bugs
If you find a dataset that doesn't behave as expected or a script that fails, please open an issue with:
*   Steps to reproduce the problem.
*   Expected behavior.
*   Actual behavior.
*   Rumour version used.

### Suggesting New Datasets
We are always looking for new edge cases! If you have a complex API scenario that Rumour should support:
1.  Check if a similar scenario already exists in `suites/`.
2.  If not, create a new subdirectory in the appropriate category.
3.  Include a `.toml` workflow and any necessary data files (JSON, CSV, etc.).
4.  Provide a brief description in a `README.md` within the suite directory.

### Improving Generators
If you can make our data generators faster or more flexible, please submit a PR!

## Style Guide

*   **TOML Naming**: Use `snake_case` for request filenames (e.g., `1_create_user.toml`).
*   **Variable Names**: Use `UPPER_SNAKE_CASE` for environment variables.
*   **Documentation**: Ensure every new suite has a clear purpose documented.

## Pull Request Process

1.  Create a branch from `main`.
2.  Add your changes.
3.  Verify that your dataset runs correctly with `rumour run`.
4.  Update the main `README.md` if you added a new category or a major suite.
5.  Submit the PR!

---
Thanks for making Rumour better!
