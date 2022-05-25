import { Node } from 'unist'
import { visit } from 'unist-util-visit'
import type { Visitor, VisitorResult } from 'unist-util-visit'

function rehypeCodeTitles() {
  const visitor: Visitor = (node, index, parent): VisitorResult => {
    // @ts-ignore
    if (!parent || node.tagName !== 'pre') {
      return
    }

    const pre = node
    // @ts-ignore
    const code = Array.isArray(pre.children) ? pre.children[0] : pre.children
    const className: Array<string | never> = code.properties.className || []

    const updatedClassName = className.reduce((acc, cls) => {
      // If cls is something like...
      // i.e. language-typescript:lib/mdx.ts
      if (cls.includes(':')) {
        // Split on the ':'
        const [langClassName, title] = cls.split(':')
        // Add the title block to the tree at the index prior
        // to the <pre /> with the title we found.
        parent.children.splice(index!, 0, {
          // @ts-ignore
          children: [{ type: 'text', value: title }],
          properties: { className: ['rehype-code-title'] },
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

    // @ts-ignore
    pre.children = [{ ...code, properties: { className: updatedClassName } }]
  }

  return (tree: Node) => visit(tree, 'element', visitor)
}

export default rehypeCodeTitles
