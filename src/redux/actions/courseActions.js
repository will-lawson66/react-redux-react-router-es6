import * as types from "./actionTypes";

export function createCourse(course) {
  return { type: types.CREATE_COURSE, course }; //object shorthand syntax: replaces 'course: course'
} // all actions must have a type property
