'use client';
import styled from 'styled-components';

const TextareaRoot = styled.textarea<{ $height: string }>`
  width: 100%;
  padding: 12px 16px;
  height: 48px;
  font-size: ${({ theme }) => theme.typography.body.fontSize};
  border: ${({ theme }) => theme.borders.main};
  border-radius: ${({ theme }) => theme.borders.radius.secondary};
  border-color: ${({ theme }) => theme.colors.secondary.dark};
  outline: none;
  height: ${({ $height }) => $height};
  &::placeholder {
    color: ${({ theme }) => theme.colors.primary.light};
  }
  &.focused,
  &.active,
  &:hover {
    outline: none;
    border-color: ${({ theme }) => theme.colors.secondary.dark};
  }
`;

export { TextareaRoot };
