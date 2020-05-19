import React from 'react';
import style from './Main.module.css'


function Main() {
    return (
        <div className={style.mainBlock}>
            <div className={style.profile}>
                <div className={style.profileFoto}>
                    <img src="./img/LYW8Gid7t5s.jpg" alt="My foto"/>
                </div>
                <div className={style.infoProfile}>
                    <h2 className={style.infoPrivet}>
                        <span> " Привет" </span>
                    </h2>
                    <h1 className={style.infoName}>
                        <span> " Меня зовут Вадим Запольский " </span>
                    </h1>
                    <div>
                        <ul className={style.profileList}>
                            <li>Возвраст</li>
                            <li>Адресс</li>
                            <li>почта</li>
                            <li>телефон</li>
                        </ul>
                    </div>
                </div>


            </div>
        </div>
    );
}

export default Main;