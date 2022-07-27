import React, { useEffect } from "react";
import Header from "components/UI/Header";

import {
  AdditionalCoursesTitleWrapper,
  Splitter,
  AdditionalCoursesTitle,
  CardsWrapper,
} from "./landing-page.style";
import Courses from "components/Courses";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { courseActions } from "store/action-creators";
import AdditionalCourses from "components/Courses/additionalCourses";
import CourseTypes from "components/Courses/courseTypes";

const LandingPage = () => {
  const dispatch = useDispatch();

  const courses = useSelector((state) => state.courses);
  const additionalCourses = useSelector((state) => state.additionalCourses);
  const courseTypes = useSelector((state) => state.types);

  useEffect(() => {
    dispatch(courseActions.getCourses());
    dispatch(courseActions.getAdditionalCourses());
    dispatch(courseActions.getCourseTypes());
  }, [dispatch, courses, additionalCourses]);

  const mainCourseName = courses[0]?.name;

  return (
    <>
      <Header courseName={mainCourseName} />
      <Courses courses={courses} />
      <CardsWrapper>
        <AdditionalCoursesTitleWrapper>
          <Splitter />
          <AdditionalCoursesTitle>Additional Courses</AdditionalCoursesTitle>
          <Splitter left />
        </AdditionalCoursesTitleWrapper>
        <AdditionalCourses courses={additionalCourses} />
        <CourseTypes types={courseTypes} />
      </CardsWrapper>
    </>
  );
};

export default LandingPage;
