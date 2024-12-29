import React from "react";

const StudentList = ({
  students,
  addToFavourite,
  editStudentId,
  setEditStudentId,
  editStudentName,
  setEditStudentName,
  handleEditStudentName,
  handleDeleteStudent,
}) => (
  <div className="section">
    <h2>All Students</h2>
    {students.map((student) => (
      <div key={student.id} className="student-item">
        <span>
          {student.id}.{" "}
          {editStudentId === student.id ? (
            <input
              type="text"
              value={editStudentName}
              onChange={(e) => setEditStudentName(e.target.value)}
              placeholder="Edit student name"
              className="input"
            />
          ) : (
            student.name
          )}
        </span>
        <div className="student-actions">
          {editStudentId === student.id ? (
            <button onClick={handleEditStudentName} className="btn btn-success">
              Save
            </button>
          ) : (
            <button
              onClick={() => setEditStudentId(student.id) || setEditStudentName(student.name)}
              className="btn btn-warning"
            >
              Edit
            </button>
          )}
          <button
            onClick={() => handleDeleteStudent(student.id)}
            className="btn btn-danger"
          >
            Delete
          </button>
          <button
            onClick={() => addToFavourite(student)}
            disabled={student.isFavourite}
            className={`btn ${student.isFavourite ? "btn-disabled" : "btn-primary"}`}
          >
            {student.isFavourite ? "Added" : "Add to Favourite"}
          </button>
        </div>
      </div>
    ))}
  </div>
);

export default StudentList;
