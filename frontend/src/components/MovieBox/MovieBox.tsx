import React, {useContext, useState} from 'react';
import './MovieBox.css';
import Store from '../../mobx/store'

interface Props {
    id: string;
    title: string;
    duration: string;
    genres: string[];
    imgUrl: string;
    year: number;
    imdbRating: number;
}

const MovieBox = (props: Props) => {
    const store = useContext(Store);
    const { updateSelect } = store;
    let duration = props.duration.slice(2);
    duration = duration.substring(0, duration.length - 1);
    duration += " min";
    let imdbRating = "Unknown";

    if (props.imdbRating) {
        imdbRating = props.imdbRating.toString();
        imdbRating += "/10";
    }


    return (
        <div className="movieBox" onClick={() => {
            updateSelect(props.id);
        }}>
            <div className="movieBox" id="movieBox_grid" onClick={() => updateSelect(props.id)}>
                <img className="movieBox_cover" id={props.id} src={props.imgUrl} alt="Missing poster" width="200" height="300"/>
                <h3>{props.title}</h3>
                <div className="infoLines">
                    <p>Duration: {duration}</p>
                    <p>Genre: {props.genres.join(', ')}</p>
                    <p>Year: {props.year.toString()}</p>
                    <p>IMDB Rating: {imdbRating}</p>
                </div>
            </div>
        </div>
    )
}

export default MovieBox;
