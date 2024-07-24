'use client';

import styled from 'styled-components';

const TabsContainerRoot = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  & > :first-child {
    border-top-left-radius: ${({ theme }) => theme.borders.radius.main};
    border-bottom-left-radius: ${({ theme }) => theme.borders.radius.main};
    border-right: 0;
  }
  & > :last-child {
    border-top-right-radius: ${({ theme }) => theme.borders.radius.main};
    border-bottom-right-radius: ${({ theme }) => theme.borders.radius.main};
    border-left: 0;
  }
`;

const TabRoot = styled.button<{ $active: boolean }>`
  border: ${({ theme }) => theme.borders.main};
  font-size: ${({ theme }) => theme.typography.body.fontSize};
  padding: 12px 24px;
  color: ${({ theme }) => theme.colors.primary.main};
  background-color: ${({ $active, theme }) =>
    $active ? theme.colors.secondary.light : 'transparent'};
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary.light};
  }
`;

export { TabRoot, TabsContainerRoot };
