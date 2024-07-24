'use client';

import styled from 'styled-components';

const LabelRoot = styled.label`
  font-size: ${({ theme }) => theme.typography.caption.fontSize};
  line-height: ${({ theme }) => theme.typography.caption.lineHeight};
  color: ${({ theme }) => theme.colors.primary.main};
  display: block;
  margin-bottom: 4px;
`;

export { LabelRoot };
