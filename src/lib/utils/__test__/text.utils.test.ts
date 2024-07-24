import { truncateText } from '../text';

describe('truncateText', () => {
  it('should return the original text if it is shorter than the maximum length', () => {
    const text = 'Short text';
    const maxLength = 20;

    const result = truncateText(text, maxLength);

    expect(result).toBe(text);
  });

  it('should truncate the text and append the suffix if it exceeds the maximum length', () => {
    const text = 'This is a very long text that needs to be truncated';
    const maxLength = 20;
    const suffix = '...';

    const result = truncateText(text, maxLength, suffix);

    expect(result).toBe('This is a very lo...');
  });

  it('should use the default suffix if none is provided', () => {
    const text = 'This text will be truncated';
    const maxLength = 10;

    const result = truncateText(text, maxLength);

    expect(result).toBe('This te...');
  });

  it('should handle an empty text input', () => {
    const text = '';
    const maxLength = 10;

    const result = truncateText(text, maxLength);

    expect(result).toBe('');
  });
});
