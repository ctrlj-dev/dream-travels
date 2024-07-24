'use client';

import { styled } from 'styled-components';

export type ButtonRootProps = {
  $variant: 'primary' | 'secondary';
  $size: 'small' | 'medium' | 'large';
  $sx?: React.CSSProperties;
};

const ButtonRoot = styled.button<ButtonRootProps>`
  border: none;
  border-radius: ${({ theme }) => theme.borders.radius.main};
  background-color: ${({ $variant, theme }) => theme.colors[$variant].main};
  height: 48px;
  padding: 12px 14px;
  font-weight: 400;
  cursor: pointer;
  ${({ $variant, $size, theme }) => {
    let color;
    if ($variant === 'primary') {
      color = theme.colors.secondary.main;
    } else if ($variant === 'secondary') {
      color = theme.colors.primary.main;
    }

    let fontSize;
    let lineHeight;
    if ($size === 'small') {
      fontSize = theme.typography.caption.fontSize;
      lineHeight = theme.typography.caption.lineHeight;
    } else if ($size === 'medium') {
      fontSize = theme.typography.body.fontSize;
      lineHeight = theme.typography.body.lineHeight;
    } else if ($size === 'large') {
      fontSize = theme.typography.body.fontSize;
      lineHeight = theme.typography.body.lineHeight;
      let width = '160px';
      return `
      font-size: ${fontSize};
      line-height: ${lineHeight};
      color: ${color};
      width: ${width};
    `;
    }

    return `
      font-size: ${fontSize};
      line-height: ${lineHeight};
      color: ${color};
    `;
  }}
  ${({ $sx }) => $sx && { ...$sx }};
`;

export default ButtonRoot;
