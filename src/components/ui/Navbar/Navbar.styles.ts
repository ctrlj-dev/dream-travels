'use client';

import styled from 'styled-components';

export const NavbarRoot = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary.main};
  border-radius: 16px;
  padding: 0 16px;
  gap: 10px;
  height: 80px;
  margin: 48px auto 0 auto;
  max-width: calc(100% - 8px);
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    max-width: 1024px;
  }
`;
