import React from "react";

export default function MovieCard({ movie }) {

    const handleImageError = (e) => {
        e.target.src = "images/default.jpg"
    }

    return(
    <div key={movie.id} className="movie-card">
        <img 
            src={`images/${movie.image}`} 
            alt={movie.title} 
            onError={handleImageError}/>
        <div className="movie-card-info">
            <h3 className="movie-card-title"> {movie.title}</h3>
            <p className="movie-card-genre"> {movie.genre}</p>
            <p className="movie-card-rating"> {movie.rating}</p>
        </div>
    </div>
    );
}