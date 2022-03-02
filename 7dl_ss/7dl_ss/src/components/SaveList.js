import React from 'react';

const SaveList = (props) => {
    return (
        <div className='app-down-saveList'>
            <div className='app-down-saveList-title'>
                <p className='gtext12px'>{props.title}</p>
            </div>
            <div className='app-down-saveList-block'>
                <div className='app-down-saveList-block_header'>
                    <p className='gtext12px'>Название</p>
                    <p className='gtext12px'>Дата</p>
                </div>
            </div>
        </div>
    );
};

export default SaveList;