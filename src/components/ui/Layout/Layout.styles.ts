'use client';

import { styled } from 'styled-components';

export type ContainerProps = {
  $fluid?: boolean;
  $direction?: 'column' | 'row';
  $sx?: React.CSSProperties;
};

const Container = styled.div<ContainerProps>`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
  flex-direction: ${({ $direction }) => ($direction === 'column' ? 'column' : 'row')};
  max-width: ${({ $fluid }) => ($fluid ? '100%' : 'calc(100% - 8px)')};
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    max-width: ${({ $fluid }) => ($fluid ? '100%' : '1024px')};
  }
  ${({ $sx }) => $sx && { ...$sx }};
`;

export { Container };
