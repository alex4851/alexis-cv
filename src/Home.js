import React, {useContext} from 'react';
import { useTranslation } from 'react-i18next';
import './i18n';
import './style/Home.css';
import { ThemeContext } from './ThemeContext';


    

const Nav = () => {
        
    const { t } = useTranslation();
    const { theme } = useContext(ThemeContext);



    return(
        <header id='Home' className={`home ${theme}`}>
            <a href='#About'>
                <div className='greeting_part'>
                    <h1>Alexis BELIGNE</h1>
                    <p>{t('greeting')}</p>
                </div>
                <div className="image_accueil"></div>
            </a>
        </header>
    )}


export default Nav;