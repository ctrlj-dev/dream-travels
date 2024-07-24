'use client';

import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${({ theme }) => theme.colors.overlay.main};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const Container = styled.div<{ $sx?: React.CSSProperties }>`
  background: white;
  border-radius: ${({ theme }) => theme.borders.radius.secondary};
  width: 100%;
  height: calc(100% - 80px);
  max-width: 95%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
  padding-bottom: 80px;
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    max-height: 90vh;
    height: max-content;
    max-width: 640px;
    overflow: auto;
    padding-bottom: 0;
  }
  ${({ $sx }) => $sx && { ...$sx }};
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 32px 32px 0 32px;
  margin-bottom: 24px;
`;

const CloseButton = styled.button<{ $header?: boolean }>`
  position: absolute;
  top: 32px;
  right: 32px;
  z-index: 1000;
  cursor: pointer;
  background: transparent;
  border: none;
  ${({ $header }) => {
    if ($header) {
      return `
      position: relative;
      top: 0;
      right: 0
    `;
    }
  }}
`;

const Title = styled.h2`
  margin-top: 0;
`;

const Content = styled.div<{ $header?: boolean }>`
  height: 100%;
  overflow: auto;
  ${({ $header }) => {
    if ($header) {
      return `
        padding: 0 32px;
        padding-bottom: 32px;
    `;
    }
  }}
`;

export { Overlay, Container, CloseButton, Title, Content, Header };
