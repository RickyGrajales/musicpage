// src/components/MusicSection.js
import React, { useState, useEffect, useRef } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MusicSection = () => {
  const [tracks, setTracks] = useState([]);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(null);
  const audioRef = useRef(null);

  useEffect(() => {
    fetch("/tracks.json")
      .then((response) => response.json())
      .then((data) => setTracks(data))
      .catch((error) => console.error("Error al obtener los datos:", error));
  }, []);

  const playTrack = (index) => {
    setCurrentTrackIndex(index);
    audioRef.current.src = tracks[index].audioUrl;
    audioRef.current.play();
  };

  const handleNextTrack = () => {
    if (currentTrackIndex !== null && currentTrackIndex < tracks.length - 1) {
      playTrack(currentTrackIndex + 1);
    }
  };

  const handlePrevTrack = () => {
    if (currentTrackIndex !== null && currentTrackIndex > 0) {
      playTrack(currentTrackIndex - 1);
    }
  };

  return (
    <>
      <Header />
      <div style={styles.container}>
        {tracks.map((track, index) => (
          <div
            key={track.id}
            style={styles.trackCard}
            onClick={() => playTrack(index)}
          >
            <img src={track.imageUrl} alt={track.title} style={styles.image} />
            <div style={styles.trackInfo}>
              <h2>{track.title}</h2>
              <p>{track.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div style={styles.player}>
        {currentTrackIndex !== null && (
          <>
            <button onClick={handlePrevTrack} style={styles.controlButton}>
              Anterior
            </button>
            <audio ref={audioRef} controls style={styles.audio} />
            <button onClick={handleNextTrack} style={styles.controlButton}>
              Siguiente
            </button>
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    backgroundColor: "#f5f5f5",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    minHeight: "600px",
  },
  trackCard: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: "15px",
    margin: "10px 0",
    borderRadius: "8px",
    boxShadow: "0 0 5px rgba(0,0,0,0.1)",
    width: "0%",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  image: {
    width: "150px",
    height: "150px",
    objectFit: "cover",
    borderRadius: "8px",
    marginRight: "20px",
  },
  trackInfo: {
    flex: 1,
  },
  player: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    backgroundColor: "black",
    boxShadow: "0 0 10px RGBA( 0, 0, 255, 1 )",
    borderRadius: "8px",
    marginTop: "20px",
    width: "80%",
  },
  audio: {
    margin: "0 20px",
    width: "400px",
  },
  controlButton: {
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "#ffffff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
};

export default MusicSection;
