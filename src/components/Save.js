import React from 'react';
import { ReactSVG } from 'react-svg'
import SaveSVG from '../images/save.svg'

const getDate = date => {
    const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
    const month = (date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)
    const year = date.getFullYear().toString().substring(2)
    const hour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
    const minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
    return `${day}.${month}.${year} / ${hour}:${minutes}`
}


const Save = (props) => {
    return (
        <div className="app-down-saveList-cell">
            <ReactSVG src={SaveSVG}/>
            <div className="app-down-saveList-cell_info">
                <div className="app-down-saveList-cell_info-name">{props.data.name}</div>
                <div className="app-down-saveList-cell_info-date">{getDate(props.data.date)}</div>
            </div>

        </div>
    );
};

export default Save;