/**
 * Portfolio data is authored for the web and carries inline `<br/>` / `<br></br>`
 * tags. @react-pdf/renderer has no HTML layer, so those have to become real lines
 * before they reach a <Text>.
 */
export const toLines = (value: string): string[] =>
  value
    .split(/<br\s*\/?>(?:\s*<\/br>)?/i)
    .map(line => line.replace(/<[^>]+>/g, "").trim())
    .filter(Boolean);

/** Same as toLines, but flattened back into one string for single-line contexts. */
export const toPlain = (value: string): string => toLines(value).join(" ");
