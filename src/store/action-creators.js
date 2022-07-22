import {
  getAllCourses,
  getAdditionalCourses,
  getCourseTypes,
} from "./services";
import { GET_COURSES, GET_ADDITIONAL_COURSES, GET_COURSE_TYPES } from "./types";

export const courseActions = {
  getCourses() {
    return async (dispatch) => {
      dispatch({
        type: GET_COURSES,
        payload: await getAllCourses(),
      });
    };
  },
  getAdditionalCourses() {
    return async (dispatch) => {
      dispatch({
        type: GET_ADDITIONAL_COURSES,
        payload: await getAdditionalCourses(),
      });
    };
  },

  getCourseTypes() {
    return async (dispatch) => {
      dispatch({
        type: GET_COURSE_TYPES,
        payload: await getCourseTypes(),
      });
    };
  },
};
