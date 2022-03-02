import React from 'react';

const UploadSave = () => {
    return (
        <div className='app-middle-block'>
            <div className="app-middle-block-cell">
                <button className="button-small">
                    <nobr className='wtext12px'>Полная замена</nobr>
                </button>
                <button className="button-small">
                    <nobr className='wtext12px'>Добавление</nobr>
                </button>
            </div>
            <div className='app-middle-block-cell'>
                <button className="button-big">
                    <nobr className='wtext16px'>Обновление</nobr>
                </button>
            </div>
        </div>
    );
};

export default UploadSave;