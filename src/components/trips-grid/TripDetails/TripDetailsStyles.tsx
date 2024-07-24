import styled from "styled-components";

const DetailsRoot = styled.div`
    padding: 0 32px;
`

const DetailsInfo = styled.div`
padding-bottom: 24px;
border-bottom: ${({ theme }) => theme.borders.main};
margin-top: 32px;
margin-bottom: 24px;
`

const DetailsStatusRoot = styled.button`
display: flex;
align-content: center;
flex-direction: row;
margin: 8px 0 24px 0;
background: transparent;
border: none;
cursor: pointer;
  svg {
    margin-right: 6px;
}
svg:last-of-type {
    display: none;
}
  &.complete {
    svg:first-of-type {
        display: none;
    }
    svg:last-of-type {
        display: block;
    }
}
`;

const DetailsImageRoot = styled.div`
    position: relative;
    width: 100%;
    height: 250px;
    border-radius: ${({ theme }) => theme.borders.radius.secondary};
`

const DetailsItineraryContainer = styled.div`
    max-height: 100%;
   .itinierary-header {
    margin-bottom: 24px;
   };
`

const DetailsItineraryRow = styled.div`
    position: relative;
    padding-bottom: 24px;
    padding-left: 32px;
    &::after {
    content: '';
    position: absolute;
    display: block;
    background-color: ${({ theme }) => theme.colors.primary.main};
    width: 2px;
    top: 6px;
    height: 100%;
    left: 3px;
    };
    &::before {
    content: '';
    position: absolute;
    display: block;
    background-color: ${({ theme }) => theme.colors.primary.main};
    width: 8px;
    height: 8px;
    border-radius: 100%;
    left: 0;
    top: 6px;   
    }
    &:last-of-type::after  {
    display: none;
    };
    &:last-of-type {
    padding-bottom: 54px;
    }
    .schedule-title {
    margin-bottom: 8px;
    }
    .schedule-description {
    color: ${({ theme }) => theme.colors.primary.light}
    }
`


export { DetailsRoot, DetailsInfo, DetailsImageRoot, DetailsStatusRoot, DetailsItineraryRow, DetailsItineraryContainer };