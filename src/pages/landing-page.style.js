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

  @media (max-width: 1500px) {
    width: 93.75rem;
    margin: auto;
  }
`;

export const AdditionalCoursesTitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  min-width: 70rem;
`;

export const Splitter = styled.div`
  width: 21rem;
  height: 0.8rem;
  border-top: 4px solid ${colors.grey};
  margin-top: 2.8rem;
  border-color: ${colors.lightGrey};
  ${({ left }) => (left ? "margin-left: 2.9rem" : "margin-right: 2.9rem")}
`;

export const AdditionalCoursesTitle = styled.h3`
  text-align: center;
  font-size: 1.81rem;
  min-width: 3rem;
  color: ${colors.navyBlue};
  width: 16.5rem;
`;

export const AdditionalCoursesWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 60rem; ;
`;

export const SecondaryCoursesWrapper = styled.div`
  display: flex;
  max-width: 40rem;
  justify-content: center;
`;

export const CourseTypesTextWrapper = styled.div`
  width: 50rem;
  height: 6.25rem;
  border: 0.25rem solid ${colors.lightGrey};
  display: flex;
  border-radius: 2.5rem;
  margin: 5rem auto;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

export const SingleCourseTypeText = styled.div`
  margin: 1rem;
  border: 4px solid
    ${({ idx }) =>
      idx === 0 ? colors.green : idx === 1 ? "orange" : colors.lighBlue};
  padding: 0.5rem 1.5rem;
  border-radius: 2.5rem;
  font-size: 1.81rem;
  text-align: center;
  color: ${colors.navyBlue};
  font-weight: 700;
`;
