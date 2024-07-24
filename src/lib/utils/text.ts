/**
 * Truncates text to a specified length and appends a suffix if needed.
 */
const truncateText = (text: string, maxLength: number, suffix: string = '...'): string => {
  if (text.length <= maxLength) {
    return text;
  }

  const adjustedLength = maxLength - suffix.length;

  return text.substring(0, adjustedLength) + suffix;
};

export { truncateText };
