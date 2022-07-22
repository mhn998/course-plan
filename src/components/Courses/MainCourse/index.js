import MainCard from "components/UI/Cards/MainCard";
import colors from "utils/colors";

import {
  MainCourseDurationWrapper,
  MainCourseLogo,
  MainCourseTitle,
  MainCourseTitleContent,
} from "./main-course.style";

const MainCourse = ({ course }) => {
  const { name, daysDuration, hoursDuration, image } = course;

  return (
    <MainCard>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: colors.white,
          borderTopLeftRadius: "2.5rem",
          borderTopRightRadius: "2.5rem",
          width: "100%",
          height: "60%",
          margin: "0",
          boxSizing: "border-box",
        }}
      >
        <MainCourseTitleContent>
          <MainCourseLogo src={image} />
          <MainCourseTitle>{name}</MainCourseTitle>
        </MainCourseTitleContent>
      </div>

      {/* <div style={{ textAlign: "center" }}> */}
      <MainCourseDurationWrapper>
        <h3
          style={{
            color: colors.white,
            fontWeight: "400",
            fontSize: "1.18rem",
            lineHeight: "1.1rem",
          }}
        >
          Total Training Duration:
        </h3>
        <p
          style={{
            color: colors.white,
            fontSize: "1.1rem",
            fontWeight: "700",
            lineHeight: "1.4rem",
          }}
        >
          {hoursDuration} Hours ({daysDuration} Days)
        </p>
      </MainCourseDurationWrapper>
      {/* </div> */}
    </MainCard>
  );
};

export default MainCourse;
