const fs = require('fs');
const { promisify } = require('util');
const slash = require('slash');
const grayMatter = require('gray-matter');
const createPath = require('gatsby-plugin-page-creator/create-path');

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
      const content = await readFile(filePath);
      const { data: frontmatter } = grayMatter(content);

      this.createPage({
        path: createPath(this.pagesDirectory, filePath),
        component: filePath,
        context: frontmatter,
      });
    }
  }

  remove(rawFilePath) {
    // Based on - https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-plugin-page-creator/src/gatsby-node.js#L67
    const filePath = slash(rawFilePath);
    this.store.getState().pages.forEach(page => {
      if (page.component === filePath) {
        this.deletePage({
          path: createPath(this.pagesDirectory, filePath),
          component: filePath,
        });
      }
    });
    this.pages[filePath] = undefined;
  }
}

module.exports = PageCreator;
