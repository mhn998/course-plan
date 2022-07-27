import {
  SmallCourseTitleWrapper,
  SmallCourseTypeTitle,
  SmallCourseInfoWrapper,
  SmallCourseType,
  SmallCourseDuration,
  SmallCourseLogo,
} from "components/Courses/AdditionalCourse/small-course.style";
import SmallCard from "components/UI/Cards/SmallCard";

const SmallCourse = ({ course }) => {
  const { name, type, image, hoursDuration } = course;
  return (
    <SmallCard>
      <SmallCourseTitleWrapper>
        <SmallCourseLogo src={image} alt="small course logo" />
        <h2>{name}</h2>
      </SmallCourseTitleWrapper>
      <SmallCourseTypeTitle>Course type</SmallCourseTypeTitle>
      <SmallCourseInfoWrapper>
        <SmallCourseType>{type}</SmallCourseType>
        <SmallCourseDuration>
          {hoursDuration} <br /> Hours
        </SmallCourseDuration>
      </SmallCourseInfoWrapper>
    </SmallCard>
  );
};

export default SmallCourse;
