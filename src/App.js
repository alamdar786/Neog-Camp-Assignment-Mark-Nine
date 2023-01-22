import "./styles.css";
import React, { useState } from "react";

const genreDatabase = {
  Rock: [
    { songname: "Sadda Haq", rating: "3.5/5" },
    { songname: "Naadan Parinday", rating: "4/5" }
  ],

  Romance: [
    { songname: "Ajeeb Dastan Hai", rating: "2.5/5" },
    { songname: "Dil Diyaan", rating: "5/5" }
  ],

  Indie: [
    { songname: "Choo Lo", rating: "2/5" },
    { songname: "Dil mere", rating: "2.75/5" }
  ]
};

var genreWeKnow = Object.keys(genreDatabase);

export default function App() {
  const [clickedGenre, setGenre] = useState("Rock");

  function genreClickHandler(genre) {
    setGenre(genre);
  }

  return (
    <div className="App">
      <h1> 🎵 MusicWrap </h1>

      <p>Checkout my favourite songs. Click on a genre to get started!</p>

      <div>
        {genreWeKnow.map(function (genre) {
          return (
            <button onClick={() => genreClickHandler(genre)} key={genre}>
              {genre}
            </button>
          );
        })}
      </div>

      <hr />

      <div>
        <ul>
          {genreDatabase[clickedGenre].map(function (music) {
            return (
              <li key={music.songname}>
                <div className="MusicTitle"> {music.songname} </div>
                <div className="MusicRating"> {music.rating} </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
