import React from 'react';
import style from './BlockWork.module.css'
import Work from "./Work/Work";





function BlockWork() {
    return (
        <div className={style.workBlock}>
            <div className={style.countainerWork}>
                <h2 className={style.title}>MY JOBs</h2>
                <div className={style.work}>
                    <Work title={"Todolist"} description={"Описание Тудулиста"} />
                    <Work title={"Social Set"} description={"Описание Социальной сети"} />
                </div>
            </div>
        </div>
    );
}

export default BlockWork;
