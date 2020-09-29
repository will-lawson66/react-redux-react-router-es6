import * as types from "./actionTypes";

// this is an action creator
export function createCourse(course) {
  return { type: types.CREATE_COURSE, course }; //object shorthand syntax: replaces 'course: course'
} // all actions must have a type property
