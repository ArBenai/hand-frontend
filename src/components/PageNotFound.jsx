import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./PageNotFound.css"; 
import Lottie from "lottie-react";
import errorAnimation from "../assets/animation/Animation - error.json";



function ErrorPage() {
  const [loading, setLoading] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000); // 2 seconds delay
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="spinner-container">
        <div className="skeleton-container">
          <div className={`skeleton-overlay ${imageLoaded ? "hidden" : ""}`} />
         {/*<img
            src={spinnerImage}
            alt="Lädt..."
            className="spinner-image"
            onLoad={() => setImageLoaded(true)}
          />)*/}
        </div>
        <p className="loading-text">Wird geladen... Bitte haben Sie einen Moment Geduld</p>
      </div>
    );
  }

  

return (
  <div className="notfound-content">
    <div className="notfound-404">
      <h3>Ups!</h3>
      <h1>
        <span>#</span>
        <span>4</span>
        <span>0</span>
        <span>4</span>
      </h1>
      <h2>Entschuldigung! Die gewünschte Seite wurde nicht gefunden</h2>
    </div>
    <Link to="/" className="notfound-button">Zurück zur Startseite</Link>
    <div className="error-page">
      <Lottie
        animationData={errorAnimation}
        loop={true}
        className="error-animation"
      />
    </div>
  </div>
);
}
export default ErrorPage;
