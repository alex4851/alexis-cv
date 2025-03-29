import React, {useContext} from 'react';
import { useTranslation } from 'react-i18next';
import './i18n';
import './style/Nav.css';
import { ThemeContext } from './ThemeContext';
import {FaGraduationCap, FaPhoneAlt, FaSuitcase, FaCircle } from 'react-icons/fa'

function Nav() {
    const { t, i18n } = useTranslation();
  
    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
    };

    const { theme, toggleTheme } = useContext(ThemeContext);


    return(
        <nav id='Nav' className={`navigation ${theme}`}>
            <div className='button'>
                <button onClick={() => changeLanguage('fr')}>Fr</button>
                <button onClick={() => changeLanguage('en')}>En</button>
            </div>
            <div className='lien'>
                <ul>
                    <a href='#Home' ><li>{t('about')}</li><FaCircle  className='icon'/></a>
                    <a href='#About'><li>{t('formation')}</li><FaGraduationCap className='icon'/></a>
                    <a href='#Experience'><li>{t('experience')}</li><FaSuitcase className='icon'/></a>
                    <a href='#Contact' ><li>{t('contact')}</li><FaPhoneAlt className='icon'/></a>
                </ul>
            </div>

            <label className="switch">
                <input onClick={toggleTheme} type="checkbox" defaultChecked />
                <span className="slider"></span>
            </label> 
        </nav>
    )

}

export default Nav;