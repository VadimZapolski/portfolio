import React from 'react';
import style from './Footer.module.css'
import Silki from "./Silki/Silki";


function Footer() {
    return (
        <div className={style.footer}>
            <div className={style.blockFooter}>
                <h2 className={style.name}>Запольский Вадим</h2>
                <div className={style.blockSilki}>
                    <Silki title={"vk"}/>
                    <Silki title={"Gmail"}/>
                    <Silki title={"tele"}/>
                    <Silki title={"mail"}/>
                </div>
                <div className={style.prava}>
                    <b>2020 Все права защищены</b>
                </div>
            </div>
        </div>
    );
}


export default Footer;
