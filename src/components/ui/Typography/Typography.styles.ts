'use client';

import styled from 'styled-components';
import { variant } from './typography.utils';

type TypographyRootProps = {
  $variant: variant;
  $sx?: React.CSSProperties;
  $componentVariant?: keyof JSX.IntrinsicElements;
};

const TypographyRoot = styled.div<TypographyRootProps>`
  font-size: ${({ theme, $variant }) => theme.typography[$variant].fontSize};
  line-height: ${({ theme, $variant }) => theme.typography[$variant].lineHeight};
  font-weight: 400;
  &.error {
    color: ${({ theme }) => theme.colors.error.main};
  }
  &.success {
    color: ${({ theme }) => theme.colors.success.main};
  }
  ${({ $sx }) => $sx && { ...$sx }};
`;

export default TypographyRoot;
