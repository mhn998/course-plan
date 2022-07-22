import ArrowDown from "assets/Arrow-down.svg";
import ArrowRight from "assets/Arrow-right.svg";
import MainCourse from "components/Courses/MainCourse";
import SecondaryCourse from "components/Courses/SecondaryCourse";
import {
  CardsWrapper,
  TwoSecondaryCoursesWrapper,
} from "pages/landing-page.style";

const Courses = ({ courses }) => {
  return (
    <CardsWrapper>
      {courses.map((course, index) => (
        <>
          <MainCourse course={course} key={course.name} />
          <img src={ArrowDown} alt="Arrow down" key={index} />
          <TwoSecondaryCoursesWrapper key={index}>
            {course.subCourses.slice(0, 2).map((course, idx) => (
              <>
                <SecondaryCourse course={course} key={course.id} />
                {idx === 0 ? (
                  <img
                    src={ArrowRight}
                    alt="Arrow right"
                    key={course.id + idx}
                  />
                ) : (
                  ""
                )}
              </>
            ))}
          </TwoSecondaryCoursesWrapper>
          {course.subCourses.slice(2, 4).map((course, idx) => (
            <>
              <img src={ArrowDown} alt="Arrow down" key={course.id + idx} />
              <SecondaryCourse course={course} key={course.id} />
            </>
          ))}
        </>
      ))}
    </CardsWrapper>
  );
};

export default Courses;
