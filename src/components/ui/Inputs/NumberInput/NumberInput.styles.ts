'use client';

import { styled } from 'styled-components';

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  height: 24px;
  width: 100%;
  position: relative;
`;

const InputElement = styled.input`
  height: 48px;
  width: 100%;
  padding: 12px 16px;
  padding-right: 40px;
  font-size: ${({ theme }) => theme.typography.body};
  font-size: 16px;
  border: ${({ theme }) => theme.borders.main};
  border-radius: ${({ theme }) => theme.borders.radius.main};
  border-color: ${({ theme }) => theme.colors.secondary.dark};
  text-align: left;
  &::placeholder {
    color: ${({ theme }) => theme.colors.primary.light};
  }
  &:focus {
    border-color: ${({ theme }) => theme.colors.secondary.dark};
    outline: none;
  }
`;

const IconWrapper = styled.button`
  position: absolute;
  right: 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 24px;
  width: 24px;
  background-color: transparent;
  border: 0;
`;

export { InputContainer, InputElement, IconWrapper };
