import React, { useContext, useState } from 'react';
import { Context } from "../store/appContext";
import "../../styles/teamCard.css";

export const TeamCard = (props) => {
    const { store, actions } = useContext(Context);

    return (
        <div className="TeamCard__card">
            <div>
                <h5 className="mb-0">Team Name</h5>
                <hr className="mt-0 mb-2"/>
            </div>
            
            <div className='mt-3'>
                <div className="d-flex mb-2">
                    <nav className="TeamCard__card--position">DER</nav><p className="mb-0"> Player 1 </p>
                </div>

                <div className="d-flex">
                    <nav className="TeamCard__card--position">ZUR</nav><p className="mb-0">Player 2</p>
                </div>
            </div>
        </div>
    );
};