const path = require('path');
const { promisify } = require('util');
const globCB = require('glob');
const { watchDirectory } = require('gatsby-page-utils');

const getOptions = require('../utils/get-options');
const PageCreator = require('../utils/page-creator');

const glob = promisify(globCB);

module.exports = async ({ store, actions }, pluginOptions) => {
  const { pagesPath } = getOptions(pluginOptions);
  const { createPage, deletePage } = actions;

  const pagesDirectory = path.resolve(process.cwd(), pagesPath);
  const pagesGlob = '**/*.mdx';
  const pageCreator = new PageCreator({ pagesDirectory, store, createPage, deletePage });

  const files = await glob(pagesGlob, { cwd: pagesPath });
  await Promise.all(files.map((file) => pageCreator.create(file)));

  await watchDirectory(
    pagesPath,
    pagesGlob,
    (addedPath) => pageCreator.create(addedPath),
    (removedPath) => pageCreator.remove(removedPath)
  );
};
