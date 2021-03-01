import React, { useEffect, useState } from 'react';
import playersData from '../../data/playersInfo.json';
import Card from '../Card/Card'
import Cart from '../Cart/Cart';
import './Players.css'

const Players = () => {
    const [players, setPlayers] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(()=>{
        setPlayers(playersData);
    },[])

    const handleAddPlayer = (player) => {
        const newCart = [...cart,player];
        setCart(newCart);
    }

    return (
        <div className="player-container">
            <div className="players">
                {
                    players.map(player => <Card key={player.id} handleAddPlayer={handleAddPlayer} player={player}></Card>)
                    
                }
            </div>
            <div className="cart">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Players;