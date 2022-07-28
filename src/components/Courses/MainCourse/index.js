import MainCard from "components/UI/Cards/MainCard";

import {
  MainCourseDurationWrapper,
  MainCourseLogo,
  MainCourseTitle,
  MainCourseTitleContent,
  MainCourseInfoWrapper,
  TrainingDuration,
  HoursDuration
} from "./main-course.style";

const MainCourse = ({ course }) => {
  const { name, daysDuration, hoursDuration, image } = course;

  return (
    <MainCard>
      <MainCourseInfoWrapper>
        <MainCourseTitleContent>
          <MainCourseLogo src={image} />
          <MainCourseTitle>{name}</MainCourseTitle>
        </MainCourseTitleContent>
      </MainCourseInfoWrapper>
      <MainCourseDurationWrapper>
        <TrainingDuration>Total Training Duration:</TrainingDuration>
        <HoursDuration>
          {hoursDuration} Hours ({daysDuration} Days)
        </HoursDuration>
      </MainCourseDurationWrapper>
    </MainCard>
  );
};

export default MainCourse;
