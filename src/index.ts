import { BuildVisitor, visit } from 'unist-util-visit'
import type * as H from 'hast'
import type { VisitorResult } from 'unist-util-visit'

type Options = {
  customClassName?: string
  titleSeparator?: string
}

function rehypeCodeTitles(
  { customClassName = 'rehype-code-title', titleSeparator = ':' }: Options = {
    customClassName: 'rehype-code-title',
    titleSeparator: ':',
  }
) {
  return function transformer(tree: H.Root) {
    const visitor: BuildVisitor<H.Root, 'element'> = (
      node,
      index,
      parent
    ): VisitorResult => {
      // @ts-ignore
      if (!parent || node.tagName !== 'pre') {
        return
      }

      const pre = node
      // @ts-ignore
      const code = Array.isArray(pre.children) ? pre.children[0] : pre.children
      const className =
        ((code as H.Element)?.properties?.className as Array<string>) ??
        ([] as Array<string>)

      const updatedClassName = className.reduce((acc, cls) => {
        // If cls is something like...
        // i.e. language-typescript:lib/mdx.ts
        if (cls.includes(titleSeparator)) {
          // Split on the ':'
          const [langClassName, title] = cls.split(titleSeparator)
          // Add the title block to the tree at the index prior
          // to the <pre /> with the title we found.
          parent.children.splice(index!, 0, {
            // @ts-ignore
            children: [{ type: 'text', value: title }],
            properties: { className: [customClassName] },
            tagName: 'div',
            type: 'element',
          })
          acc.push(langClassName)
          return acc
        }
        if (cls.slice(0, 9) === 'language-') {
          acc.push(cls)
          return acc
        }
        return acc
      }, [] as Array<string>)

      pre.children = [
        // @ts-ignore
        { ...code, properties: { className: updatedClassName } },
      ]
    }

    visit(tree, 'element', visitor)
  }
}

export default rehypeCodeTitles
