#!/bin/sh

# Fetch the current branch name from the VERCEL_GIT_COMMIT_REF environment variable
BRANCH=$VERCEL_GIT_COMMIT_REF

# Set the branch you want to build
TARGET_BRANCH="efficientBuilders5"

if [ "$BRANCH" != "$TARGET_BRANCH" ]; then
  echo "Not on the target branch ($TARGET_BRANCH). Skipping build."
  exit 0
fi

# If on the target branch, run the build
echo "On the target branch ($TARGET_BRANCH). Running build."
npm run build
