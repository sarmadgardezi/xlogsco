/**
 * Change markdown text formate text into html text for example:
 * **text** changes into <b>text</b>
 *
 * @param markdown string in markdown format
 * @returns html text forated
 */
export const markdownToHTML = (markdown: string): string => {
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const boldRegex = /\*\*(.*?)\*\*/g;

  let html = markdown.replace(linkRegex, '<a href="$2">$1</a>');

  html = html.replace(boldRegex, '<strong>$1</strong>');

  html = html.replaceAll('\n', '<br />');

  return html;
};
