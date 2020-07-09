# Manual release process

## Making changes

1. Make your changes on a branch or fork
2. If these changes need a release, create a changeset with `yarn changeset`
3. Create a merge request with your changes and the optionally the changeset to `main`

## Approving changes

1. Verify that the merge request includes a changeset if it needs to be released
2. Verify that the tests are passing
3. Merge into `main`

## Releasing

1. Merge `main` into `release`
2. On `release`, run `yarn changeset version`
3. Commit the changes
4. Run `yarn changeset publish`
5. Merge `release` into `main`
6. Push git tags
