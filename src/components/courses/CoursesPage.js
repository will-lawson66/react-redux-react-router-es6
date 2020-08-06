import React from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

class CoursesPage extends React.Component {
  state = {
    course: {
      title: "",
    },
  };

  handleChange = (event) => {
    // arrow function on class field: binds the function to the enclosing scope
    const course = { ...this.state.course, title: event.target.value }; //copy state and overwrite title with input value
    this.setState({ course }); //set state based on previous state
  };

  handleSubmit = (event) => {
    event.preventDefault(); //prevent postback
    this.props.actions.createCourse(this.state.course);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Courses</h2>
        <h3>Add Course</h3>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.course.title}
        />

        <input type="submit" value="Save" />
        {this.props.courses.map((course) => (
          <div key={course.title}>{course.title}</div> // when iterating, React expects a key attribute
        ))}
      </form>
    );
  }
}

// prop types declare the properties your component expects
CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

//react-redux
function mapStateToProps(state) {
  return {
    courses: state.courses,
  };
}

// manual map - also must modify handlers, prop types
// function mapDispatchToProps(dispatch) {
//   return {
//     createCourse: (course) => dispatch(courseActions.createCourse(course)),
//   };
// }

// react-redux
// maps all actions to dispatch
// preferred
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch),
  };
}

// declare mapDispatchToProps as object
// const mapDispatchToProps = {
//   createCourse: courseActions.createCourse,
// };

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
