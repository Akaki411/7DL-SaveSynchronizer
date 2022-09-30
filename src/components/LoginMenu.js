import React from 'react';
import {ReactSVG} from "react-svg";
import Yandex from '../images/yandex.svg'
import Gear from  '../images/settings.svg'


const LoginMenu = () => {
    return (
        <div className="app-top-account-accountInfoBlock">
            <p className='app-top-account-accountInfoBlock-menuText'>Программа загружает ваши сохранения на Яндекс Диск, войдите в свой аккаунт Яндекс для продолжения работы.</p>
            <div className="app-top-account-accountInfoBlock-authPlace">
                <button className="app-top-account-accountInfoBlock-authPlace-settings">
                    <ReactSVG src={Gear} id='authBlockGear'/>
                </button>
                <button className="app-top-account-accountInfoBlock-authPlace-authButton">
                    <ReactSVG src={Yandex} id='authButtonLogo'/>
                    <p>Войти</p>
                </button>
            </div>
        </div>
    );
};

export default LoginMenu;