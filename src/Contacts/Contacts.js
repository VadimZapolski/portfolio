import React from 'react';
import style from './Contacts.module.css'


function Contacts() {
    return (
        <div className={style.contacts}>
            <div className={style.blockContracts}>
                <h2 className={style.title}>Контакты</h2>
                <div className={style.blockEnter}>
                    <form className={style.enter}>
                        <b>Ваше имя:</b>
                        <input placeholder={"input"} className={style.input1}/><br/>
                        <b>Ваш номер для связи:</b>
                        <input placeholder={"input"} className={style.input2}/><br/>
                        <b>Ваш коментарий</b>
                        <textarea placeholder={"textarea"}></textarea>
                    </form>
                </div>
                <button className={style.button}>Отправить</button>
            </div>
        </div>
    );
}


export default Contacts;
