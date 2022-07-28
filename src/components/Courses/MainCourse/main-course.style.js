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
  color: ${colors.navyBlue};
`;

export const MainCourseLogo = styled.img`
  width: 70%;
`;

export const MainCourseTitle = styled.h2`
  margin-left: 0.5rem;
`;

export const MainCourseDurationWrapper = styled.div`
  margin-top: 1.4375rem;
  & {
    text-align: center;
  }
`;

export const MainCourseInfoWrapper = styled.div`
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

export const TrainingDuration = styled.div`
  color: ${colors.white};
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.15rem;
  margin-bottom: 0.9375rem;
`;

export const HoursDuration = styled.div`
  color: ${colors.white};
  font-size: 1.1875rem;
  font-weight: 700;
  line-height: 1.4rem;
`;
