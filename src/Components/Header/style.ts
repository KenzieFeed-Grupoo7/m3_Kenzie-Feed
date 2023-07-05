import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 1rem;

  width: 100%;
  height: 7rem;

  div {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`;

export const StyledUser = styled.div`
  background-color: var(--color-blue);
  border-radius: 50%;

  width: 43px;
  height: 43px;

  font-family: var(--font-secondary);
  color: var(--color-white);
  justify-content: center;
  font-size: 0.875rem;
  font-weight: 700;
`;
