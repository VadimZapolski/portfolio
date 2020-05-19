import React from 'react';
import style from './BlockSkills.module.css'
import Skill from "./Skill/Skill";



function BlockSkills() {
    return (
        <div className={style.skillBlock}>
            <div className={style.countainerSkill}>
                <h2 className={style.title}>Skills название</h2>
                <div className={style.skill}>
                    <Skill title={"JS"} description={"JavaScript — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили."}/>
                    <Skill title={"CSS"} description={"CSS — формальный язык описания внешнего вида документа, написанного с использованием языка разметки."}/>
                    <Skill title={"React"}description={"React — JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов."}/>
                </div>
            </div>
        </div>
    );
}

export default BlockSkills;