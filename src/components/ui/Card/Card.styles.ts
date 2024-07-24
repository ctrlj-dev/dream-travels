'use client';

import { styled } from 'styled-components';

const CardRoot = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 24px;
  border: ${({ theme }) => theme.borders.main};
  border-radius: ${({ theme }) => theme.borders.radius.secondary};
  flex-direction: column;
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: row;
  }
`;

const ImageContainer = styled.picture`
  position: relative;
  display: block;
  max-height: 100%;
  width: 100%;
  height: 200px;
  border-top-left-radius: ${({ theme }) => theme.borders.radius.secondary};
  border-top-right-radius: ${({ theme }) => theme.borders.radius.secondary};
  img {
    border-top-left-radius: ${({ theme }) => theme.borders.radius.secondary};
    border-top-right-radius: ${({ theme }) => theme.borders.radius.secondary};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    height: 100%;
    max-width: 50%;
    border-top-left-radius: ${({ theme }) => theme.borders.radius.secondary};
    border-bottom-left-radius: ${({ theme }) => theme.borders.radius.secondary};
    border-top-right-radius: 0;
    img {
      border-top-left-radius: ${({ theme }) => theme.borders.radius.secondary};
      border-bottom-left-radius: ${({ theme }) => theme.borders.radius.secondary};
      border-top-right-radius: 0;
    }
  }
`;

const InfoContainer = styled.div`
  padding: 24px;
  width: 100%;
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: 50%;
  }
`;

export { CardRoot, ImageContainer, InfoContainer };
