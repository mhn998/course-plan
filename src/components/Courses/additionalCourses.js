import SmallCourse from "components/Courses/AdditionalCourse";
import { AdditionalCoursesWrapper } from "pages/landing-page.style";

const AdditionalCourses = ({ courses }) => {
  return (
    <AdditionalCoursesWrapper>
      {courses.map((course,idx) => (
        <SmallCourse key={`${course.name} ${idx}`} course={course} />
      ))}
    </AdditionalCoursesWrapper>
  );
};

export default AdditionalCourses;
