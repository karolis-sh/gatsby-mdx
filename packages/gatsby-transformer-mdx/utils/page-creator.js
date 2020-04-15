const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const grayMatter = require('gray-matter');
const { createPath } = require('gatsby-page-utils');

const readFile = promisify(fs.readFile);

class PageCreator {
  constructor({ store, createPage, deletePage, pagesDirectory }) {
    this.store = store;
    this.createPage = createPage;
    this.deletePage = deletePage;
    this.pagesDirectory = pagesDirectory;
    this.pages = {};

    this.create = this.create.bind(this);
    this.remove = this.remove.bind(this);
  }

  async create(filePath) {
    const shouldCreate = !this.pages[filePath];
    if (shouldCreate) {
      this.pages[filePath] = true;
      const componentPath = path.join(this.pagesDirectory, filePath);
      const content = await readFile(componentPath);
      const { data: frontmatter } = grayMatter(content);

      this.createPage({
        path: createPath(filePath),
        component: componentPath,
        context: frontmatter,
      });
    }
  }

  remove(filePath) {
    // Based on - https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-plugin-page-creator/src/gatsby-node.js#L69
    const componentPath = path.join(this.pagesDirectory, filePath);
    this.store.getState().pages.forEach((page) => {
      if (page.component === componentPath) {
        this.deletePage({
          path: createPath(filePath),
          component: componentPath,
        });
      }
    });
    this.pages[filePath] = undefined;
  }
}

module.exports = PageCreator;
