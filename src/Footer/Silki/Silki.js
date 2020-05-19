import React from 'react';
import style from './Silki.module.css'


function Silki(props) {
    return (
        <div className={style.silki}>
            <div className={style.nameSilki}>
                <h5>{props.title}</h5>
            </div>
        </div>
    );
}

export default Silki;