import { GET_COURSES, GET_ADDITIONAL_COURSES, GET_COURSE_TYPES } from "./types";

const initialState = {
  courses: [],
  additionalCourses: [],
  types: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COURSES:
      return {
        ...state,
        courses: action.payload,
      };
    case GET_ADDITIONAL_COURSES:
      return {
        ...state,
        additionalCourses: action.payload,
      };
    case GET_COURSE_TYPES:
      return {
        ...state,
        types: action.payload,
      };

    default: {
      return {
        ...state,
      };
    }
  }
};

export default rootReducer;
