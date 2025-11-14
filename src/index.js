import { visit } from "unist-util-visit";

/**
 * @typedef {import('hast').Root} Root
 * @typedef {import('hast').Element} Element
 * @typedef {import('hast').ElementContent} ElementContent
 * @typedef {import('unist-util-visit').BuildVisitor<Root, 'element'>} Visitor
 */

/**
 * @typedef {Object} Options
 * @property {string} [customClassName='rehype-code-title'] - Custom CSS class name for title div
 * @property {string} [titleSeparator=':'] - Character(s) used to separate language from title
 */

/**
 * Rehype plugin to add title blocks to code elements.
 *
 * This plugin parses code block class names for a title separator and creates
 * a title div before the code block.
 *
 * @example
 * // Input: <pre><code className="language-typescript:lib/mdx.ts">...</code></pre>
 * // Output: <div className="rehype-code-title">lib/mdx.ts</div><pre><code className="language-typescript">...</code></pre>
 *
 * @param {Options} [options] - Plugin configuration options
 * @returns {function(Root): void} Transformer function
 */
function rehypeCodeTitles({
  customClassName = "rehype-code-title",
  titleSeparator = ":",
} = {}) {
  /**
   * Transformer function that processes the AST tree
   * @param {Root} tree - The hast root node
   * @returns {void}
   */
  return function transformer(tree) {
    /**
     * Visitor function for processing element nodes
     * @type {Visitor}
     */
    const visitor = (node, index, parent) => {
      if (!parent || typeof index !== "number" || node.tagName !== "pre") {
        return;
      }

      const pre = node;
      const code = Array.isArray(pre.children) ? pre.children[0] : pre.children;

      // Get className array from code element properties
      const className =
        /** @type {Element} */ (code)?.properties?.className ?? [];

      // Ensure className is an array
      const classNameArray = Array.isArray(className)
        ? /** @type {string[]} */ (className)
        : [];

      const updatedClassName = classNameArray.reduce((acc, cls) => {
        // If cls is something like...
        // i.e. language-typescript:lib/mdx.ts
        if (cls.includes(titleSeparator)) {
          // Split on the separator
          const [langClassName, title] = cls.split(titleSeparator);
          // Add the title block to the tree at the index prior
          // to the <pre /> with the title we found.
          parent.children.splice(index, 0, {
            type: "element",
            tagName: "div",
            properties: { className: [customClassName] },
            children: [{ type: "text", value: title }],
          });
          acc.push(langClassName);
          return acc;
        }
        if (cls.slice(0, 9) === "language-") {
          acc.push(cls);
          return acc;
        }
        return acc;
      }, /** @type {string[]} */ ([]));

      // Update the pre element's children with the updated code element
      pre.children = [
        {
          .../** @type {Element} */ (code),
          properties: { className: updatedClassName },
        },
      ];
    };

    visit(tree, "element", visitor);
  };
}

export default rehypeCodeTitles;
