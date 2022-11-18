import React from 'react';
import '../../css/Footer.css'

function Footer() {
    return (
        <div className="bg-footer">
            <footer>
                <div className="footer-container">
                    <ul>
                        <li><img src="https://res.cloudinary.com/dw6c4dado/image/upload/v1668486197/google-gmail-svgrepo-com_ulch9s.svg" alt="email" /><span>adaradenis@gmail.com</span></li>
                        <li><img src="https://res.cloudinary.com/dw6c4dado/image/upload/v1668486133/github-svgrepo-com_1_j4tynz.svg" alt="github" /><span>adaradns</span></li>
                        <li><img src="https://cdn-icons-png.flaticon.com/512/195/195497.png" alt="lighthouse" /><span>Lighthouse Accesibilidad </span></li>
                    </ul>
                </div>
                <div className="container-copyright">
                    <img src="https://res.cloudinary.com/dw6c4dado/image/upload/v1668489159/copyright-svgrepo-com_f8gcjq.svg" alt="copyright" />
                    <span> Adara Denis | 2022</span>
                </div>
            </footer>
        </div>
    );
}

export default Footer;