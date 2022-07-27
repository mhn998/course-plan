import styled from "styled-components";
import colors from "utils/colors";

export const StyledCard = styled.div`
  width: ${({ isMain }) => (isMain ? "27.375rem" : "33.6rem")};
  height: 15rem;
  outline: none;
  background-color: ${({ isMain }) =>
    isMain ? colors.darkBlue : colors.white};
  border: 0.25rem solid ${({ borderColor }) => borderColor};
  border-radius: 2.8rem;
  box-sizing: border-box;
  padding: ${({ isMain }) => (isMain ? "0" : "1.9rem")};
  margin: 1.2rem;
  font-family: "Roboto", sans-serif;
`;
