import React from 'react';

const DownloadSave = (props) => {
    return (
        <div className='app-middle-block'>
            <div className='app-middle-block-cell'>
                {props.children}
            </div>
            <div className='app-middle-block-cell'>
                <button className="button-big">
                    <nobr className='wtext16px'>Загрузка</nobr>
                </button>
            </div>
        </div>
    );
};

export default DownloadSave;