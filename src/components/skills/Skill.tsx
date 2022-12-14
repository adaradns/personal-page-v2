import React from 'react';
import './Skill.css';
import skillsDataJson from '../../data/json/skills.json'

// const loadData = () => JSON.parse(JSON.stringify(skills));


function Skill() {
    const { skills } = skillsDataJson;
    return (
        <section id="skills" className='skills'>
            <div className="section-title-container">
                <div className="title-container">
                    <h2>Habilidades</h2>
                    <img src="https://cdn-icons-png.flaticon.com/512/3095/3095221.png" alt="skills" />
                </div>

            </div>
            <div className="skills-container">

                {skills.map((skill, index) => {
                    return <div key={index} className='skill-item'>
                        <div className="skill-title-container">
                            <div className="violet"></div>
                            <div className="light-violet"></div>
                        </div>
                        <div className="box-skills">
                            <div className='skill-title'>
                                <h3>{skill.titleEs}</h3>
                            </div>
                            <p className='skill-description'>{skill.description}</p>
                            <div className="container-skills">
                                {skill.images.map((image, index) => {
                                    return (
                                        <div key={index} className="skill-images">
                                            <img src={image.urlImage} alt={image.title} />
                                            <p>{image.title}</p>
                                        </div>

                                    );
                                })}
                            </div>
                        </div>
                    </div>
                })}
            </div>

        </section>
    );
}

export default Skill;
