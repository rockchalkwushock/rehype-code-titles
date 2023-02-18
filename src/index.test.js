import { rehype } from 'rehype'
import dedent from 'dedent'
import rehypeCodeTitles from '../index.js'

const processHtml = (html, rehypeCodeTitlesOptions) => {
  return rehype()
    .data('settings', { fragment: true })
    .use(rehypeCodeTitles, { ...rehypeCodeTitlesOptions })
    .processSync(html)
    .toString()
}

const classNameWithTitle = 'language-typescript:lib/mdx.ts'
const className = 'language-typescript'

describe('rehype-code-titles', () => {
  test('Snapshot w/ title block', () => {
    const result = processHtml(dedent`
      <pre><code class="${classNameWithTitle}"></code></pre>
    `)
    expect(result).toMatchSnapshot()
  })
  test('Snapshot w/out title block', () => {
    const result = processHtml(dedent`
      <pre><code class="${className}"></code></pre>
    `)
    expect(result).toMatchSnapshot()
  })
  test('Contains title block', () => {
    const result = processHtml(dedent`
      <pre><code class="${classNameWithTitle}"></code></pre>
    `)
    expect(result.includes('div')).toEqual(true)
    expect(result.includes('rehype-code-title')).toEqual(true)
    expect(result.includes('lib/mdx.ts')).toEqual(true)
  })
  test('Does not contain title block', () => {
    const result = processHtml(dedent`
      <pre><code class="${className}"></code></pre>
    `)
    expect(result.includes('div')).not.toEqual(true)
    expect(result.includes('rehype-code-title')).not.toEqual(true)
    expect(result.includes('lib/mdx.ts')).not.toEqual(true)
  })
})

describe('rehype-code-titles with options', () => {
  test.each([
    [undefined, classNameWithTitle],
    [{}, classNameWithTitle],
    [{ customClassName: 'custom-class-name' }, classNameWithTitle],
    [{ titleSeparator: ':title=' }, 'language-typescript:title=lib/mdx.ts'],
    [
      { customClassName: 'custom-class-name', titleSeparator: ':title=' },
      'language-typescript:title=lib/mdx.ts',
    ],
  ])(`given %p`, (options, classForHtml) => {
    const result = processHtml(
      dedent`
      <pre><code class="${classForHtml}"></code></pre>
    `,
      {
        ...options,
      }
    )
    expect(result.includes('div')).toEqual(true)
    expect(
      result.includes(options?.customClassName ?? 'rehype-code-title')
    ).toEqual(true)
    expect(result.includes('lib/mdx.ts')).toEqual(true)
  })
})
