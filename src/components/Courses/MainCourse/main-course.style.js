import styled from "styled-components";
import colors from "../../../utils/colors";

export const MainCourseTitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${colors.white};
  border-top-left-radius: 2.5rem;
  border-top-right-radius: 2.5rem;
  width: 100%;
  height: 60%;
  margin: 0;
  box-sizing: border-box;
`;

export const MainCourseTitleContent = styled.div`
  display: flex;
  align-items: center;
  
`;

export const MainCourseLogo = styled.img`
  width: 70%;
`;

export const MainCourseTitle = styled.h2`
  margin-left: 0.5rem;
`;

export const MainCourseDurationWrapper = styled.div`
  & {
    text-align: center;
  }
`;