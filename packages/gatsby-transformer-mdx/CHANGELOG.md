# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [1.0.0](https://github.com/buz-zard/gatsby-mdx/blob/master/packages/gatsby-transformer-mdx/compare/gatsby-transformer-mdx@0.4.1...gatsby-transformer-mdx@1.0.0) (2019-01-01)

### Code Refactoring

- **default-layout:** modify layout in AST ([3c0529b](https://github.com/buz-zard/gatsby-mdx/blob/master/packages/gatsby-transformer-mdx/commit/3c0529b))
- **imports:** rename globalImports -> defaultImports, and change structure ([8f846ee](https://github.com/buz-zard/gatsby-mdx/blob/master/packages/gatsby-transformer-mdx/commit/8f846ee))
- **options:** loader.mdx function does not receive any args ([92c129e](https://github.com/buz-zard/gatsby-mdx/blob/master/packages/gatsby-transformer-mdx/commit/92c129e))

### Features

- options validation via Joi schema ([08fb092](https://github.com/buz-zard/gatsby-mdx/blob/master/packages/gatsby-transformer-mdx/commit/08fb092))

### BREAKING CHANGES

- **options:** loaders.mdx function no longer receives arguments
- **imports:** globalImports renamed to defaultImports and changed the options structure
- **default-layout:** changes the way defaultLayout option value is interpreted

## [0.4.1](https://github.com/buz-zard/gatsby-mdx/blob/master/packages/gatsby-transformer-mdx/compare/gatsby-transformer-mdx@0.4.0...gatsby-transformer-mdx@0.4.1) (2018-12-26)

**Note:** Version bump only for package gatsby-transformer-mdx

# [0.4.0](https://github.com/buz-zard/gatsby-mdx/blob/master/packages/gatsby-transformer-mdx/compare/gatsby-transformer-mdx@0.3.0...gatsby-transformer-mdx@0.4.0) (2018-12-25)

### Features

- add pagesPath option ([1d70e9d](https://github.com/buz-zard/gatsby-mdx/blob/master/packages/gatsby-transformer-mdx/commit/1d70e9d))

# [0.3.0](https://github.com/buz-zard/gatsby-mdx/compare/gatsby-transformer-mdx@0.2.0...gatsby-transformer-mdx@0.3.0) (2018-12-22)

### Bug Fixes

- **frontmatter:** add title fallback ([e63f2ef](https://github.com/buz-zard/gatsby-mdx/commit/e63f2ef))

### Features

- add defaultLayout option ([031b80c](https://github.com/buz-zard/gatsby-mdx/commit/031b80c)), closes [#12](https://github.com/buz-zard/gatsby-mdx/issues/12)

# 0.2.0 (2018-12-19)

### Features

- **gatsby-transformer-mdx:** add ability to define global scope components ([e45b130](https://github.com/buz-zard/gatsby-mdx/commit/e45b130))

# 0.1.0 (2018-12-18)

### Features

- **gatsby-transformer-mdx:** mdx loading with loader option ([1c4ffdc](https://github.com/buz-zard/gatsby-mdx/commit/1c4ffdc))
