import React from 'react';
import style from './Skill.module.css'


function Skill(props) {
    return (
        <div className={style.skill}>
            <div className={style.icon}>
                <div>Картинка</div>
            </div>
            <div className={style.nameSkill}>
                <h3>{props.title}</h3>
            </div>
            <div className={style.descriptionSkill}>
               <span> {props.description} </span>
            </div>
        </div>
    );
}

export default Skill;