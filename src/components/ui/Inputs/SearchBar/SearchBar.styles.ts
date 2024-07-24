'use client';

import styled from 'styled-components';
import { Button } from '../../Buttons/Button';

const SearchBarRoot = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  width: 100%;
  max-width: 360px;
  padding: 12px 16px;
  border: ${({ theme }) => theme.borders.main};
  border-radius: ${({ theme }) => theme.borders.radius.main};
  &.focused,
  &.active,
  &:hover {
    border-color: ${({ theme }) => theme.colors.secondary.dark};
  }
`;

const SearchBarInput = styled.input`
  flex: 1;
  font-size: ${({ theme }) => theme.typography.body.fontSize};
  border: none;
  outline: none;
  background-color: transparent;
  &::placeholder {
    color: ${({ theme }) => theme.colors.secondary.dark};
    border: ${({ theme }) => theme.typography.body};
  }
  &::-webkit-search-cancel-button {
    -webkit-appearance: none;
    height: 12px;
    width: 12px;
    background-color: ${({ theme }) => theme.colors.primary.main};
    mask: url('/icons/close.svg') center/contain no-repeat;
    cursor: pointer;
  }
`;

const SearchBarButton = styled(Button)`
  padding: 6px 12px;
  cursor: pointer;
  height: 36px;
  margin-left: 8px;
`;

export { SearchBarRoot, SearchBarInput, SearchBarButton };
