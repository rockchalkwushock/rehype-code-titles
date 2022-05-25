# rehype-code-titles

[![npm](https://img.shields.io/npm/v/rehype-code-titles?style=flat-square)](https://www.npmjs.com/package/rehype-code-titles)

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->

[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)

<!-- ALL-CONTRIBUTORS-BADGE:END -->

Rehype plugin for parsing code blocks and adding titles to code blocks

## Why?

I moved my blog over to using [`mdx-bundler`](https://github.com/kentcdodds/mdx-bundler) which uses [`xdm`](https://github.com/wooorm/xdm) under the hood to parse the markdown and MDX files. I was using [`remark-code-titles`](https://github.com/mottox2/remark-code-titles#readme) prior to this move and unfortunately it no longer worked. I believe this was because of the order plugins were being applied internally for `xdm`. I'd never really worked with `remark` or `rehype` directly before and didn't have a lot of experience with ASTs so this was a fun little project that I initially built directly into my blog before pulling it out at a plugin to ship to other developers.

Many thanks to [@mottox2](https://github.com/mottox2), [@mapbox](https://github.com/mapbox), & [@wooorm](https://github.com/wooorm) for their prior work in this ecosystem it was of great help when creating this plugin.

## Installation

> This package is [ESM only](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c):
> Node 12+ is needed to use it and it must be `import`ed instead of `require`d.

```shell
npm install rehype-code-titles

yarn add rehype-code-titles

pnpm add rehype-code-titles
```

## API

```
rehype().use(rehypeCodeTitles)
```

### Input

````md
## Code Example

```typescript:lib/mdx.ts
// code here
```
````

### Output

```html
<div class="rehype-code-title">lib/mdx.ts</div>
<pre>
  <code class="language-typescript">
  <!-- HTML parse code here -->
  </code>
</pre>
```

## Usage

Use this package [as a rehype plugin](https://github.com/rehypejs/rehype/blob/main/doc/plugins.md#using-plugins).

```javascript
const rehype = require('rehype')
const rehypeCodeTitles = require('rehype-code-titles')
const rehypePrism = require('@mapbox/rehype-prism')

rehype()
  .use(rehypeCodeTitles) // should always be before rehypePrism.
  .use(rehypePrism)
  .process(/* some html */)
```

```javascript
const unified = require('unified')
const rehypeParse = require('rehype-parse')
const rehypeCodeTitles = require('rehype-code-titles')
const rehypePrism = require('@mapbox/rehype-prism')

unified()
  .use(rehypeParse)
  .use(rehypeCodeTitles)
  .use(rehypePrism)
  .processSync(/* some html */)
```

## Development

This repository makes use of [`@arkweid/lefthook`](https://github.com/evilmartians/lefthook) and will run `eslint`, `jest`, and `prettier`
against all staged files.

```shell
git clone https://github.com/rockchalkwushock/rehype-code-titles.git
cd rehype-code-titles
pnpm i
# Do cool stuff with code
git add .
git commit -m "feat(src): a cool new feature"
# pre-commit hooks run: eslint, jest, and prettier
git push
```

## Contributing

Please visit [CONTRIBUTING.md](https://github.com/rockchalkwushock/rehype-code-titles/blob/master/CONTRIBUTING.md)

## License

[MIT](https://github.com/rockchalkwushock/rehype-code-titles/blob/master/LICENSE) © [Cody Brunner](https://codybrunner.com)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://codybrunner.com"><img src="https://avatars.githubusercontent.com/u/19720404?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Cody Brunner</b></sub></a><br /><a href="https://github.com/rockchalkwushock/rehype-code-titles/commits?author=rockchalkwushock" title="Code">💻</a> <a href="https://github.com/rockchalkwushock/rehype-code-titles/commits?author=rockchalkwushock" title="Documentation">📖</a> <a href="https://github.com/rockchalkwushock/rehype-code-titles/commits?author=rockchalkwushock" title="Tests">⚠️</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
