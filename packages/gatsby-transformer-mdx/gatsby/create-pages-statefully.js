const path = require('path');
const { promisify } = require('util');
const globCB = require('glob');
const chokidar = require('chokidar');

const getOptions = require('../utils/get-options');
const PageCreator = require('../utils/page-creator');

const glob = promisify(globCB);

module.exports = async ({ store, actions }, pluginOptions) => {
  const { pagesPath } = getOptions(pluginOptions);
  const { createPage, deletePage } = actions;

  const pagesDirectory = path.posix.join(pagesPath);
  const pagesGlob = `${pagesDirectory}/**/*.mdx`;
  const pageCreator = new PageCreator({ pagesDirectory, store, createPage, deletePage });

  const files = await glob(pagesGlob);
  await Promise.all(files.map(file => pageCreator.create(file)));

  await new Promise(resolve =>
    chokidar
      .watch(pagesGlob)
      .on('add', async filePath => {
        await pageCreator.create(filePath);
      })
      .on('unlink', filePath => {
        pageCreator.remove(filePath);
      })
      .on('ready', resolve)
  );
};
