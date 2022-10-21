import React from 'react';
import imgAdara from '../../assets/img/img_adara.png';
import '../../css/Card.css';
import myDataJson from '../../data/json/myData.json';

const loadData = () => JSON.parse(JSON.stringify(myData));
const { myData } =  myDataJson ;

function Card() {
  return (
    <div className="card-container">
        <div className="card">
            
            <h1>{myData.title}</h1>
            {myData.presentationItems.map((item) => {
                return <p key={item.id}>{item.item}</p>
            })}
            
        </div>
        <div className="card">
            <img src={imgAdara} alt="Adara Denis"/>
        </div>
    </div>
    
  );
}

export default Card;
