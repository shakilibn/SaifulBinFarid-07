import React from 'react';
import './Card.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Card = (props) => {
    const {name, img, salary, country} = props.player;
    const handleAddPlayer = props.handleAddPlayer;
        
    return (
        <div className="player">
            <img src={img} alt=""/>
            <h3>{name}</h3>
            <h5>{country}</h5>
            <h4>${salary}</h4>
            <button className="btn btn-primary" onClick={()=> handleAddPlayer(props.player)}><FontAwesomeIcon icon={faUserPlus} /> Add to team</button>
        </div>
    );
};

export default Card;