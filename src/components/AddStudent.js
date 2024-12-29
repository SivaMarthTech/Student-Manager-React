import React from "react";

const AddStudent = ({ newStudentName, setNewStudentName, addNewStudent }) => (
  <div className="add-student">
    <input
      type="text"
      placeholder="Enter student name to Add"
      value={newStudentName}
      onChange={(e) => setNewStudentName(e.target.value)}
      className="input"
    />
    <button onClick={addNewStudent} className="btn btn-primary">
      Add Student
    </button>
  </div>
);

export default AddStudent;
