# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [1.2.1](https://github.com/karolis-sh/gatsby-mdx/tree/master/packages/gatsby-transformer-mdx/compare/gatsby-transformer-mdx@1.2.0...gatsby-transformer-mdx@1.2.1) (2022-06-06)

**Note:** Version bump only for package gatsby-transformer-mdx

# [1.2.0](https://github.com/karolis-sh/gatsby-mdx/tree/master/packages/gatsby-transformer-mdx/compare/gatsby-transformer-mdx@1.1.3...gatsby-transformer-mdx@1.2.0) (2020-10-06)

### Features

- expose mdx body in GraphQL ([45c2533](https://github.com/karolis-sh/gatsby-mdx/tree/master/packages/gatsby-transformer-mdx/commit/45c2533))

## [1.1.3](https://github.com/karolis-sh/gatsby-mdx/tree/master/packages/gatsby-transformer-mdx/compare/gatsby-transformer-mdx@1.1.2...gatsby-transformer-mdx@1.1.3) (2019-09-17)

**Note:** Version bump only for package gatsby-transformer-mdx

## [1.1.2](https://github.com/karolis-sh/gatsby-mdx/tree/master/packages/gatsby-transformer-mdx/compare/gatsby-transformer-mdx@1.1.1...gatsby-transformer-mdx@1.1.2) (2019-08-02)

### Bug Fixes

- **dependency:** swap gatsby-plugin-page-creator with gatsby-page-utils ([5fbe833](https://github.com/karolis-sh/gatsby-mdx/tree/master/packages/gatsby-transformer-mdx/commit/5fbe833))

## [1.1.1](https://github.com/karolis-sh/gatsby-mdx/tree/master/packages/gatsby-transformer-mdx/compare/gatsby-transformer-mdx@1.1.0...gatsby-transformer-mdx@1.1.1) (2019-04-09)

### Bug Fixes

- use relative path for default layout component ([06de9ad](https://github.com/karolis-sh/gatsby-mdx/tree/master/packages/gatsby-transformer-mdx/commit/06de9ad))

# [1.1.0](https://github.com/karolis-sh/gatsby-mdx/tree/master/packages/gatsby-transformer-mdx/compare/gatsby-transformer-mdx@1.0.3...gatsby-transformer-mdx@1.1.0) (2019-04-04)

### Features

- **mdx-js:** update @mdx-js/\*[@0](https://github.com/0).20.3 ([99a3166](https://github.com/karolis-sh/gatsby-mdx/tree/master/packages/gatsby-transformer-mdx/commit/99a3166))

## [1.0.3](https://github.com/karolis-sh/gatsby-mdx/tree/master/packages/gatsby-transformer-mdx/compare/gatsby-transformer-mdx@1.0.2...gatsby-transformer-mdx@1.0.3) (2019-03-27)

**Note:** Version bump only for package gatsby-transformer-mdx

## [1.0.2](https://github.com/karolis-sh/gatsby-mdx/tree/master/packages/gatsby-transformer-mdx/compare/gatsby-transformer-mdx@1.0.1...gatsby-transformer-mdx@1.0.2) (2019-01-20)

### Bug Fixes

- **docs:** wrong repo & git links ([131a1d2](https://github.com/karolis-sh/gatsby-mdx/tree/master/packages/gatsby-transformer-mdx/commit/131a1d2))

## [1.0.1](https://github.com/karolis-sh/gatsby-mdx/blob/master/packages/gatsby-transformer-mdx/compare/gatsby-transformer-mdx@1.0.0...gatsby-transformer-mdx@1.0.1) (2019-01-16)

### Bug Fixes

- **docs:** homepage links ([5ece723](https://github.com/karolis-sh/gatsby-mdx/blob/master/packages/gatsby-transformer-mdx/commit/5ece723))

# [1.0.0](https://github.com/karolis-sh/gatsby-mdx/blob/master/packages/gatsby-transformer-mdx/compare/gatsby-transformer-mdx@0.4.1...gatsby-transformer-mdx@1.0.0) (2019-01-01)

### Code Refactoring

- **default-layout:** modify layout in AST ([3c0529b](https://github.com/karolis-sh/gatsby-mdx/blob/master/packages/gatsby-transformer-mdx/commit/3c0529b))
- **imports:** rename globalImports -> defaultImports, and change structure ([8f846ee](https://github.com/karolis-sh/gatsby-mdx/blob/master/packages/gatsby-transformer-mdx/commit/8f846ee))
- **options:** loader.mdx function does not receive any args ([92c129e](https://github.com/karolis-sh/gatsby-mdx/blob/master/packages/gatsby-transformer-mdx/commit/92c129e))

### Features

- options validation via Joi schema ([08fb092](https://github.com/karolis-sh/gatsby-mdx/blob/master/packages/gatsby-transformer-mdx/commit/08fb092))

### BREAKING CHANGES

- **options:** loaders.mdx function no longer receives arguments
- **imports:** globalImports renamed to defaultImports and changed the options structure
- **default-layout:** changes the way defaultLayout option value is interpreted

## [0.4.1](https://github.com/karolis-sh/gatsby-mdx/blob/master/packages/gatsby-transformer-mdx/compare/gatsby-transformer-mdx@0.4.0...gatsby-transformer-mdx@0.4.1) (2018-12-26)

**Note:** Version bump only for package gatsby-transformer-mdx

# [0.4.0](https://github.com/karolis-sh/gatsby-mdx/blob/master/packages/gatsby-transformer-mdx/compare/gatsby-transformer-mdx@0.3.0...gatsby-transformer-mdx@0.4.0) (2018-12-25)

### Features

- add pagesPath option ([1d70e9d](https://github.com/karolis-sh/gatsby-mdx/blob/master/packages/gatsby-transformer-mdx/commit/1d70e9d))

# [0.3.0](https://github.com/karolis-sh/gatsby-mdx/compare/gatsby-transformer-mdx@0.2.0...gatsby-transformer-mdx@0.3.0) (2018-12-22)

### Bug Fixes

- **frontmatter:** add title fallback ([e63f2ef](https://github.com/karolis-sh/gatsby-mdx/commit/e63f2ef))

### Features

- add defaultLayout option ([031b80c](https://github.com/karolis-sh/gatsby-mdx/commit/031b80c)), closes [#12](https://github.com/karolis-sh/gatsby-mdx/issues/12)

# 0.2.0 (2018-12-19)

### Features

- **gatsby-transformer-mdx:** add ability to define global scope components ([e45b130](https://github.com/karolis-sh/gatsby-mdx/commit/e45b130))

# 0.1.0 (2018-12-18)

### Features

- **gatsby-transformer-mdx:** mdx loading with loader option ([1c4ffdc](https://github.com/karolis-sh/gatsby-mdx/commit/1c4ffdc))
