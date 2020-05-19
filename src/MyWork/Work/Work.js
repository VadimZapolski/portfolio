import React from 'react';
import style from './Work.module.css'


function Work(props) {
    return (
        <div className={style.work}>
            <div className={style.icon}>
                <div>Картинка</div>
                <button>Смотреть</button>
            </div>
            <div className={style.nameWork}>
                <h3>{props.title}</h3>
            </div>
            <div className={style.descriptionWork}>
                <span> {props.description} </span>
            </div>
        </div>
    );
}

export default Work;