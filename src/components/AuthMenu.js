import React from 'react';

const AuthMenu = () => {
    return (
        <div className="app-top-account-accountInfoBlock">
            <div className="app-top-account-accountInfoBlock-menuButton">
                <button>Открыть Яндекс Диск</button>
            </div>
            <div className="app-top-account-accountInfoBlock-menuButton">
                <button>Настройки</button>
            </div>
            <div className="app-top-account-accountInfoBlock-menuButton">
                <button>Выйти</button>
            </div>
        </div>
    );
};

export default AuthMenu;