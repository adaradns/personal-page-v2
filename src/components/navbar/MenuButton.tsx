import React from 'react';
import './NavBar.css';
import logoAdara from '../../assets/img/logo.png';

function MenuButton( { open, handleClick} : { open: boolean; handleClick: any } ) {
   
    return (

        <div className="logo">
            <a href='https://adaradenis.com.ar'>
                <img src={logoAdara} alt="Logo Adara Denis" />
            </a>
            {!open ? 
                (<span onClick={handleClick} className="material-symbols-outlined">
                    menu
                </span>
                ) : (
                    <span onClick={handleClick} className="material-symbols-outlined">
                        close
                    </span>
                )
            }
        </div>

    );
}

export default MenuButton;
