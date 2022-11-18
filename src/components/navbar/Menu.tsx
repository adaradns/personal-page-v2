import React from 'react';
import '../../css/Menu.css';
import { HashLink } from 'react-router-hash-link';

function Menu( {open} : {open : boolean} ) {
    return (
        <div className={ !open ? "menu" : ""}>
            <ul>
                <li><HashLink href="" to={'#presentation'}>Home</HashLink ></li>
                <li><HashLink href="" to={'#about'}>Conóceme</HashLink></li>
                <li><HashLink href="" to={'#skills'}>Skills</HashLink></li>
                <li><HashLink href="" to={'#info'}>Info</HashLink></li>
            </ul>
        </div>

    );
}

export default Menu;