'use client';

import { styled } from 'styled-components';

export type LinkButtonRootProps = {
  $variant?: 'outlined' | 'error';
  $sx?: React.CSSProperties;
};

const LinkButtonRoot = styled.button<LinkButtonRootProps>`
  border: none;
  background-color: transparent;
  font-weight: 400;
  text-decoration: underline;
  cursor: pointer;
  &:disabled {
    opacity: 0.2;
  }
  ${({ $sx }) => $sx && { ...$sx }};
  ${({ $variant, theme }) => {
    let color = theme.colors.primary.main;
    if ($variant === 'error') {
      color = theme.colors.error.main;
    }
    return `
      color: ${color};
    `;
  }}
`;

export default LinkButtonRoot;
