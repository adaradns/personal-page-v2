import React from 'react';
import '../../css/Card.css';
import myDataJson from '../../data/json/myData.json';
import Typical from 'react-typical';

function Card() {
  // const loadData = () => JSON.parse(JSON.stringify(myData));
  const { myData } = myDataJson;
  // let presentacion = ['Hola', 'mi'];
  return (
    
    <section id="presentation" className="presentation">
      <div className="card-container">
          <div className="title-card">
            <h1>{myData.title}</h1>
            <img src="https://res.cloudinary.com/dw6c4dado/image/upload/v1668400603/waving-hand-svgrepo-com_ujcg4b.svg" alt="women-technologist" />
          </div>
        <div className="card">

          <Typical
            steps={['Developer', 4000, 'Web Designer!', 4000, 'Architect', 4000]}
            loop={Infinity}
            wrapper="h3"
          />
          {myData.presentationItems.map((item) => {
            return <p key={item.id}>{item.item}</p>
          })}
          
        </div>
      <section  className="card diagonal-section bg-contrast-lower bg-opacity-50%">
          <img src={myData.urlImage} alt="Adara Denis" />
      </section>
      </div>
    </section>

  );
}

export default Card;
