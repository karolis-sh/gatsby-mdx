#!/bin/sh

set -e

if [ -z "$(npm whoami)" ]; then
  echo "🚨 Not logged in to npm"
  exit 1
fi

if [ -z "$(git status --porcelain)" ]; then
  git checkout master
  git pull
  yarn release
else
  git status --porcelain
  echo "🔼 Working directory not clean"
  exit 1
fi
