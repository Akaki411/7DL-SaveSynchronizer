import React from 'react';

const UploadSave = () => {
    return (
        <div className='app-middle-block'>
            <div className="app-middle-block-cell">
                <button className="button-small" title="Заменить все сохранения в облаке локальными">
                    <nobr className='wtext12px'>Полная замена</nobr>
                </button>
                <button className="button-small" title="Загрузить в облако локальные сохранения с уникальным названием">
                    <nobr className='wtext12px'>Добавление</nobr>
                </button>
            </div>
            <div className='app-middle-block-cell'>
                <button className="button-big" title="Заменить облачные сохранения локальными с более поздней датой изменения">
                    <nobr className='wtext16px'>Обновление</nobr>
                </button>
            </div>
        </div>
    );
};

export default UploadSave;