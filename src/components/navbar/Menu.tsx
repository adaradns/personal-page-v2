import React, { useState } from 'react';
import '../../css/Menu.css';
import { HashLink } from 'react-router-hash-link';

function Menu( {open} : {open : boolean} ) {
    return (
        <div className={ !open ? "menu" : ""}>
            <ul>
                <li><HashLink to={'#presentation'}>Home</HashLink ></li>
                <li><HashLink to={'#about'}>Conóceme</HashLink></li>
                <li><HashLink to={'#skills'}>Skills</HashLink></li>
                <li><HashLink to={'#info'}>Info</HashLink></li>
            </ul>
        </div>

    );
}

export default Menu;