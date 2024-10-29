import styled from "styled-components";

export const MainStyle = styled.main`
    max-height: 100vh;
    display: flex;
    gap: 1.5rem;
    flex-direction: column;
    justify-content: space-between;
`;

export const StyledLogoMain = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.rem;
    align-items: center;
    justify-content: flex-start;
    padding-top: 2rem;
    flex-wrap: wrap;

    img{
        width: 100%;
        align-self: flex-end;
        max-height: 300px;
        margin-top: 4rem;
    }
`