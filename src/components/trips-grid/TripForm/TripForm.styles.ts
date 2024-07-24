import styled from 'styled-components';

const FormSection = styled.div`
  margin-bottom: 24px;
`;

const FormRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FormSectionItinerary = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px;
  align-items: baseline;
  background-color: ${({ theme }) => theme.colors.secondary.light};
  border-radius: ${({ theme }) => theme.borders.radius.secondary};
  margin-bottom: 8px;
`;

const FormItirenaryColumn = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  &.day-col {
    flex: 0 0 30%;
    margin-right: 8px;
  }
  &.description-col {
    flex: 1 1 70%;
  }
`;

const FormButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: row;
  margin: 32px auto 0 auto;
  button {
    margin-right: 16px;
    &:last-of-type {
      margin-right: 0;
    }
  }
`;

export { FormSection, FormRow, FormSectionItinerary, FormItirenaryColumn, FormButtonContainer };
