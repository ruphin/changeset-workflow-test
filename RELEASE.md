# Manual release process

## Making changes

1. Make your changes on a branch or fork
2. If these changes need a release, create a changeset with `yarn changeset`
3. Create a merge request with your changes and the optionally the changeset to `main`

## Approving changes

1. Verify that the merge request includes a changeset if it a release
2. Verify that the tests are passing
3. Merge into `main`

## Releasing

1. Run `yarn release` [details](#release-script)
2. In gitlab, merge the `release` branch onto `main`

### Release script

1. Checkout the `main` branch and pull in all remote changes
2. Verify that the tests pass
3. Checkout the `release` branch and rebase it onto `main`
4. Run `changeset version` to update the package versions and changelogs
5. Make a release commit with these changes
6. Run `changeset publish` to publish the changes and add git tags to the release commit
7. Push the `release` branch
