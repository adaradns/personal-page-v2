import React, { useState, useEffect } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';
import '../../css/ScrollButton.css';

const ScrollButton = () => {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true)
        }
        else if (scrolled <= 300) {
            setVisible(false)
        }
    };
    window.addEventListener('scroll', toggleVisible);

    return (
        <div className="scroll-container" style={{display: visible ? 'inline' : 'none'}}>
            <button onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
            }} >

                <FaArrowCircleUp />
            </button>
        </div>
    );
}

export default ScrollButton;