import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteExperience } from "../../actions/profileActions";

class Experience extends Component {
  onDeleteClick = id => {
    this.props.deleteExperience(id);
  };

  render() {
    const experience = this.props.experience.map(exp => (
      <tr key={exp._id}>
        <td>{exp.company}</td>
        <td>{exp.title}</td>

        <td>
          <button
            onClick={() => this.onDeleteClick(exp._id)}
            className="btn btn-danger"
          >
            Delete
          </button>
        </td>
      </tr>
    ));
    return (
      <div>
        <h4 className="mb-4">Experience Credentials</h4>
        <table className="table">
          <thead>
            <tr>
              <th>Company</th>
              <th>Title</th>
            </tr>
            {experience}
          </thead>
        </table>
      </div>
    );
  }
}

export default connect(
  null,
  { deleteExperience }
)(Experience);
