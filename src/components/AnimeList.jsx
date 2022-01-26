import React from 'react';


const animeList = (props) => {

    return(
        <div className="grid">
            {
                props.animes.map((anime) => (
                    <div key={anime.mal_id} className="card">
                        <img src={anime.images.jpg.image_url} alt="poster"/>
                        <h3>{anime.title}</h3>
                        <h4>Rank: {anime.rank}</h4>
                        <button>View Anime</button>   
                    </div>
                ))
            }   
        </div>
    )
}


export default animeList;