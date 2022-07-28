import {
  CourseTypesTextWrapper,
  SingleCourseTypeText,
} from "pages/landing-page.style";

const CourseTypes = ({ types }) => {
  return (
    <CourseTypesTextWrapper>
      {types.map((type, idx) => (
        <SingleCourseTypeText
          idx={idx}
          key={type}
        >
          {type}
        </SingleCourseTypeText>
      ))}
    </CourseTypesTextWrapper>
  );
};

export default CourseTypes;
