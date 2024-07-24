'use client';

import { styled } from 'styled-components';

const InputRoot = styled.input`
  width: 100%;
  padding: 12px 16px;
  height: 48px;
  font-size: ${({ theme }) => theme.typography.body.fontSize};
  border: ${({ theme }) => theme.borders.main};
  border-radius: ${({ theme }) => theme.borders.radius.main};
  border-color: ${({ theme }) => theme.colors.secondary.dark};
  outline: none;
  &::placeholder {
    color: ${({ theme }) => theme.colors.primary.light};
  }
  &.focused,
  &.active,
  &:hover {
    border-color: ${({ theme }) => theme.colors.secondary.dark};
    outline: none;
  }
`;

export { InputRoot };
