import styled from "styled-components";
import colors from "utils/colors";

export const SmallCourseTitleWrapper = styled.div`
  display: flex;
  margin-bottom: 2rem;
  align-items: center;
`;

export const SmallCourseTypeTitle = styled.h3`
  color: ${colors.grey};
  margin: 0;
  font-weight: 400;
`;

export const SmallCourseInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${colors.navyBlue};
`;

export const SmallCourseType = styled.h3`
  width: 5.5rem;
  margin: 0.625rem;
  margin-bottom: 0;
  margin-left: 0;
`;

export const SmallCourseDuration = styled.h3`
  text-align: center;
  margin-top: 0.625rem;
`;

export const SmallCourseLogo = styled.img`
  margin-right: 0.8rem;
`;

export const SmallCourseName = styled.h3`
  font-size: 1.8125rem;
  margin: 0;
  color: ${colors.navyBlue};
`;
