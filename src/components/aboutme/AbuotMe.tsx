import React from 'react';
import '../../css/AboutMe.css';
import ItemParagraph from './ItemParagraph';

function AboutMe() {
  return (
    <div id="about" className="bg-about">
      <section className="aboutme">
        <div className="container-about ">
          <div className="container-title">
            <h1 className="title-about">Algo sobre mi</h1>
            <img src="https://res.cloudinary.com/dw6c4dado/image/upload/v1668400593/woman-technologist-svgrepo-com_negw7t.svg" alt="technologist-woman" />

          </div>
          <ItemParagraph
            paragraph="Tengo un amor infinito por los animales, tendría muchas mascotas, pero el tiempo y espacio que manejo lamentablemente no me lo permiten, así que convivo con mi Gato Arthur, sisi por R2D2."
          />

          <ItemParagraph
            paragraph="Me gusta mucho viajar, en cuanto puedo me escapo aunque sea un finde semana soy fanática de conocer pueblos de la provincia de Buenos Aires. "
          />
          <ItemParagraph
            paragraph="En fin, espero no haberlos aburrido con mi repertorio, si llegaron hasta aquí, y es de su interés les dejo un stack de tecnologías que manejo, gracias por haber leído."
          />
          <div className="container-image-developer">
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutMe;
