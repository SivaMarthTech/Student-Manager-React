import React from "react";

const FavouriteList = ({
  favourites,
  removeFromFavourite,
  markAllAsFavourite,
  removeAllFavourites,
}) => (
  <div className="section">
    <h2>Favourite Students</h2>
    <div className="button-group">
      <button onClick={markAllAsFavourite} className="btn btn-success">
        Mark All as Favourite
      </button>
      <button onClick={removeAllFavourites} className="btn btn-danger">
        Remove All Favourites
      </button>
    </div>
    {favourites.length > 0 ? (
      favourites.map((student) => (
        <div key={student.id} className="student-item">
          <span>
            {student.id}. {student.name}
          </span>
          <button onClick={() => removeFromFavourite(student)} className="btn btn-danger">
            Remove
          </button>
        </div>
      ))
    ) : (
      <p className="empty-message">No favourite students yet.</p>
    )}
  </div>
);

export default FavouriteList;
