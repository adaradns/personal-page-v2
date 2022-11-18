import React, { useState } from 'react';
import '../../css/Info.css';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { useForm, SubmitHandler } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import CustomPopup from '../common/CustomPopup';

interface IFormInputs {
    nombre: string
    email: string
    message: string
    preventDefault: any;
}

function Info() {
    const form = React.useRef<any | null>();
    const [visibility, setVisibility] = useState(false);
    const [data, setData] = useState<EmailJSResponseStatus | null>(null);
    const [isDisabled, setDisabled] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const popupCloseHandler = (e) => {
        setVisibility(e);
    };

    const {
        register,
        formState: { errors },
        handleSubmit
    } = useForm<IFormInputs>({
        criteriaMode: "all"
    });

    const handleClick = () => {
        setVisibility(true);
        if (typeof window != 'undefined' && window.document) {
            document.body.style.overflow = 'hidden';
        }
    };
    
    const renderPopup = (title, description, isDisable) => {
        return (<CustomPopup
                    onClose={popupCloseHandler}
                    show={visibility}
                    title="Hola 👋"
                    isDisabled = {isDisabled}
                    setDisabled = {setDisabled}
                >
                    <h3>{title}</h3>
                    <p className='popup-description'>{description}</p>
                </CustomPopup>);
    }


    const sendEmail: SubmitHandler<IFormInputs> = (e) => {
        emailjs.sendForm('service_0gjqs2h', 'template_4gwvn1b', form.current, 'bTVrGrTCsXhqZeImu')
            .then((result) => {
                console.log(result)
                setData(result)
                setName('');
                setEmail('');
                setMessage('');
                
            }, (error) => {
                console.log(error.text);
            });
    };

    const forItemClass = !visibility ? "form-item" : "";

    return (
        <section id="info" className='info'>
            {data !== null && visibility === true ? renderPopup("Gracias por contactarte conmigo.", "En breve recibiras un mensaje a tu email, con mas información acerca de tu consulta.", isDisabled) : renderPopup("Uppss! Ocurrio un error", "Vuelve a intentarlo", isDisabled)}
            <div className="info-container">

                <div className='info-title'>
                    <h2>Contacto</h2>
                    <img src="https://res.cloudinary.com/dw6c4dado/image/upload/v1668401769/mobile-phone-svgrepo-com_kmqtpy.svg" alt="contact" />
                </div>
                <div id="contact">

                    <div className="contact-box">
                        <div className="contact-links">

                            <div className="links">
                                <div className="link">
                                    <a href="https://github.com/adaradns"><img className='img-social' src="https://res.cloudinary.com/dw6c4dado/image/upload/v1668486133/github-svgrepo-com_1_j4tynz.svg" alt="github" /></a>
                                </div>
                                <div className="link">
                                    <a href="https://gmail.com"><img className='img-social' src="https://res.cloudinary.com/dw6c4dado/image/upload/v1668486357/gmail-svgrepo-com_1_uhryox.svg" alt="email" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="contact-form-wrapper">
                            <form ref={form} onSubmit={handleSubmit(sendEmail)}>
                                <div className={forItemClass}>
                                    <input
                                        {...register("nombre", {
                                            required: "Este campo es requerido.",
                                            pattern: {
                                                value: new RegExp(/^[A-Z]+$/i),
                                                message: "No se admiten numeros."
                                            },
                                            maxLength: {
                                                value: 20,
                                                message: "Caracteres maximos 20."
                                            }
                                        })}
                                        name="nombre"
                                        required
                                        onChange={event => setName(event.target.value)}
                                        value={name}
                                    />
                                    <label>Nombre:</label>
                                    <div className="container-error">
                                        <ErrorMessage
                                            errors={errors}
                                            name="nombre"
                                            render={({ messages }) => {
                                                console.log("messages", messages);
                                                return messages
                                                    ? Object.entries(messages).map(([type, message]) => (
                                                        <p className="error-form" key={type}>{message}</p>
                                                    ))
                                                    : null;
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className={forItemClass}>
                                    <input
                                        {...register("email", {
                                            required: "Este campo es requerido.",
                                            pattern: {
                                                value: new RegExp(/^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/),
                                                message: "No es un email valido."
                                            },
                                            maxLength: {
                                                value: 20,
                                                message: "Caracteres maximos 20."
                                            }
                                        })}
                                        name="email"
                                        required
                                        onChange={event => setEmail(event.target.value)}
                                        value={email}
                                    />
                                    <label>Email:</label>
                                    <div className="container-error">
                                        <ErrorMessage
                                            errors={errors}
                                            name="email"
                                            render={({ messages }) => {
                                                console.log("messages", messages);
                                                return messages
                                                    ? Object.entries(messages).map(([type, message]) => (
                                                        <p className="error-form" key={type}>{message}</p>
                                                    ))
                                                    : null;
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className={forItemClass}>
                                    <textarea
                                        {...register("message", {
                                            required: "Este campo es requerido.",

                                            maxLength: {
                                                value: 200,
                                                message: "Caracteres maximos 200."
                                            }
                                        })}
                                        name="message"
                                        required
                                        onChange={event => setMessage(event.target.value)}
                                        value={message}
                                    />
                                    <label>Mensaje:</label>
                                    <div className="container-error">
                                        <ErrorMessage
                                            errors={errors}
                                            name="message"
                                            render={({ messages }) => {
                                                console.log("messages", messages);
                                                return messages
                                                    ? Object.entries(messages).map(([type, message]) => (
                                                        <p className="error-form" key={type}>{message}</p>
                                                    ))
                                                    : null;
                                            }}
                                        />
                                    </div>

                                <div className="btn-send">
                                    {visibility ? 
                                        <button onClick={handleClick} style={{visibility: 'hidden'} } className="submit-btn">Enviar</button>
                                        :
                                        <button onClick={handleClick} style={{visibility: 'visible'} } className="submit-btn">Enviar</button>
                                    }
                                </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default Info;
