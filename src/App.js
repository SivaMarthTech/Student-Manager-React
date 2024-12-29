import React, { useState } from "react";
import "./App.css";
import ThemeToggle from "./components/ThemeToggle";
import SearchBar from "./components/SearchBar";
import AddStudent from "./components/AddStudent";
import StudentList from "./components/StudentList";
import FavouriteList from "./components/FavouriteList";

const App = () => {
  const [students, setStudents] = useState([
    { id: 1, name: "Alice", isFavourite: false },
    { id: 2, name: "Bob", isFavourite: false },
    { id: 3, name: "Charlie", isFavourite: false },
    { id: 4, name: "David", isFavourite: false },
    { id: 5, name: "Eva", isFavourite: false },
  ]);

  const [favourites, setFavourites] = useState([]);
  const [newStudentName, setNewStudentName] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [editStudentId, setEditStudentId] = useState(null);
  const [editStudentName, setEditStudentName] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const addToFavourite = (student) => {
    setFavourites([...favourites, student]);
    setStudents(students.map((s) => (s.id === student.id ? { ...s, isFavourite: true } : s)));
  };

  const removeFromFavourite = (student) => {
    setFavourites(favourites.filter((fav) => fav.id !== student.id));
    setStudents(students.map((s) => (s.id === student.id ? { ...s, isFavourite: false } : s)));
  };

  const addNewStudent = () => {
    if (newStudentName.trim() === "") {
      alert("Student name cannot be empty!");
      return;
    }
    setStudents([...students, { id: students.length + 1, name: newStudentName.trim(), isFavourite: false }]);
    setNewStudentName("");
  };

  const handleEditStudentName = () => {
    if (editStudentName.trim() === "") {
      alert("Student name cannot be empty!");
      return;
    }
    setStudents(students.map((student) => (student.id === editStudentId ? { ...student, name: editStudentName.trim() } : student)));
    setEditStudentId(null);
    setEditStudentName("");
  };

  const handleDeleteStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
    setFavourites(favourites.filter((fav) => fav.id !== id));
  };

  const markAllAsFavourite = () => {
    setFavourites([...students]);
    setStudents(students.map((s) => ({ ...s, isFavourite: true })));
  };

  const removeAllFavourites = () => {
    setFavourites([]);
    setStudents(students.map((s) => ({ ...s, isFavourite: false })));
  };

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredFavourites = favourites.filter((student) =>
    student.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={`container ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      <h1>Student Manager</h1>
      <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <AddStudent newStudentName={newStudentName} setNewStudentName={setNewStudentName} addNewStudent={addNewStudent} />
      <StudentList
        students={filteredStudents}
        addToFavourite={addToFavourite}
        editStudentId={editStudentId}
        setEditStudentId={setEditStudentId}
        editStudentName={editStudentName}
        setEditStudentName={setEditStudentName}
        handleEditStudentName={handleEditStudentName}
        handleDeleteStudent={handleDeleteStudent}
      />
      <FavouriteList
        favourites={filteredFavourites}
        removeFromFavourite={removeFromFavourite}
        markAllAsFavourite={markAllAsFavourite}
        removeAllFavourites={removeAllFavourites}
      />
    </div>
  );
};

export default App;
