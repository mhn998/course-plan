import colors from "utils/colors";
import styled from "styled-components";

export const CardsWrapper = styled.div`
  display: flex;
  width: 90vw;
  flex-direction: column;
  margin: auto;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 4rem;
`;

export const AdditionalCoursesTitleWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Splitter = styled.div`
  width: 20rem;
  height: 0.8rem;
  border-top: 4px solid ${colors.grey};
  margin-top: 2.8rem;
  ${({ left }) => (left ? "margin-left: 2.9rem" : "margin-right: 2.9rem")}
`;

export const AdditionalCoursesTitle = styled.h2`
  text-align: center;
  font-size: 1.9rem;
`;

export const AdditionalCoursesWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const TwoSecondaryCoursesWrapper = styled.div`
  display: flex;
`;

export const CourseTypesTextWrapper = styled.div`
  width: 60.625rem;
  height: 6.25rem;
  border: 0.25rem solid ${colors.grey};
  display: flex;
  border-radius: 2.5rem;
  margin: 5rem auto;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

export const SingleCourseTypeText = styled.div`
  margin: 1rem;
  border: 4px solid ${(props) => props.borderColor};
  padding: 0.5rem 1.5rem;
  border-radius: 2.5rem;
  font-size: 1.81rem;
  text-align: center;
  color: ${colors.navyBlue};
  font-weight: 700;
`;
