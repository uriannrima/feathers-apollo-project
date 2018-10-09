const { markdown } = require('markdown');

module.exports = {
  parseMarkdown: (markdownField) => (context) => {
    const { params: { query } } = context;
    if (query.parse && context.result) {
      const { result } = context;
      result[markdownField] = markdown.toHTML(result[markdownField]);
    }
  }
};