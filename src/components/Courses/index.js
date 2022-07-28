import ArrowDown from "assets/Arrow-down.svg";
import ArrowRight from "assets/Arrow-right.svg";
import MainCourse from "components/Courses/MainCourse";
import SecondaryCourse from "components/Courses/SecondaryCourse";
import {
  CardsWrapper,
  SecondaryCoursesWrapper,
} from "pages/landing-page.style";
import { Fragment } from "react";

const Courses = ({ courses }) => {
  const preRenderedCourses = [];

  for (let i = 0; i < courses.length; i++) {
    preRenderedCourses.push({
      name: courses[i].name,
      daysDuration: courses[i].daysDuration,
      hoursDuration: courses[i].hoursDuration,
      image: courses[i].image,
    });
    const allLevels = courses[i].subCourses.map(
      (sub) =>
        +sub.id.substring(sub.id.indexOf(" ") + 1, sub.id.indexOf(" ") + 2)
    );
    const numOfLevels = [...new Set(allLevels)].length;
    for (let j = 1; j < numOfLevels + 1; j++) {
      preRenderedCourses.splice(i, 1, {
        ...preRenderedCourses[i],
        subCourses: {
          ...preRenderedCourses[i].subCourses,
          ["level " + j]: courses[i].subCourses.filter(
            (sub) =>
              +sub.id.substring(
                sub.id.indexOf(" ") + 1,
                sub.id.indexOf(" ") + 2
              ) === j
          ),
        },
      });
    }
  }

  return (
    <CardsWrapper>
      {preRenderedCourses.map((course, index) => (
        <Fragment key={index}>
          <MainCourse course={course} key={course.name} />
          <img src={ArrowDown} alt="Arrow down" key={course.image} />
          <Fragment key={index}>
            {Object.keys(course.subCourses).map((courseLevel, levelIdx) => (
              <Fragment key={courseLevel + levelIdx }>
                <SecondaryCoursesWrapper key={course.name + index}>
                  {course.subCourses[courseLevel].map((sub, idx) => (
                    <Fragment key={sub.id + idx}>
                      <SecondaryCourse course={sub} key={sub.id} />
                      {idx !== course.subCourses[courseLevel].length - 1 ? (
                        <img
                          src={ArrowRight}
                          alt="Arrow right"
                          key={courseLevel + sub.id + '00'}
                        />
                      ) : (
                        ""
                      )}
                    </Fragment>
                  ))}
                </SecondaryCoursesWrapper>
                <br />
                {levelIdx !== Object.keys(course.subCourses).length - 1 ? (
                  <img
                    src={ArrowDown}
                    alt="Arrow down"
                    key={courseLevel + course.id}
                  />
                ) : (
                  ""
                )}
              </Fragment>
            ))}
          </Fragment>
        </Fragment>
      ))}
    </CardsWrapper>
  );
};

export default Courses;
