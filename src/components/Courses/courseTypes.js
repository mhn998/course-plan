import {
  CourseTypesTextWrapper,
  SingleCourseTypeText,
} from "pages/landing-page.style";
import colors from "utils/colors";

const CourseTypes = ({ types }) => {
  return (
    <CourseTypesTextWrapper>
      {types.map((type, idx) => (
        <SingleCourseTypeText
          borderColor={
            idx === 0 ? colors.green : idx === 1 ? "orange" : colors.lighBlue
          }
        >
          {type}
        </SingleCourseTypeText>
      ))}
    </CourseTypesTextWrapper>
  );
};

export default CourseTypes;
