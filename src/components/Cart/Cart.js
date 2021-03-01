import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUsers } from '@fortawesome/free-solid-svg-icons'

const Cart = (props) => {
    const {cart} = props;
    const totalSalary = cart.reduce((total, player)=> total+player.salary,0);
    return (
        <div>
            <h4 className="mb-3">Team members  <FontAwesomeIcon icon={faUsers} /> : {cart.length}</h4>
            
            {
                cart.map(player => <li>{player.name} - ${player.salary}</li>)
            }
            <h5 className="mt-3">Total budget: ${totalSalary}</h5>
        </div>
    );
};

export default Cart;