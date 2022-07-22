import colors from "utils/colors";
import styled from "styled-components";


export const SecondaryCourseUpperWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0;
  margin-bottom: 2.4rem;
`;

export const SecondaryCardTitleWrapper = styled.div`
  display: flex;
  margin: 0;
  color: ${colors.darkBlue};
`;

export const SecondaryCourseLogo = styled.img`
  margin-right: 0.5rem;
`;

export const SecondaryCourseName = styled.h2`
  margin: 0;
`;

export const SecondaryCourseId = styled.h3`
  margin: 0;
  font-weight: 400;
`;

export const SecondryCourseDurationWrapper = styled.div`
  text-align: right;
`;

export const SecondaryCourseHours = styled.h3`
  margin: 0;
  font-size: 1.1rem;
  color: ${colors.navyBlue};
`;

export const SecondaryCourseDays = styled.h3`
  margin: 0;
  font-size: 0.9rem;
  color: ${colors.grey};

`;

export const FullCourseName = styled.div`
  margin-bottom: 0.625rem;
  font-weight: 400;
  color: ${colors.grey};
  font-size: 0.875rem;
`;

export const SecondaryCourseFullName = styled.h2`
  width: 21.375rem;
  margin-top: 0;
  font-size: 1.43rem;
  color: ${colors.darkBlue};
`;
