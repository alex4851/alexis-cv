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
                <button type="button" onClick={() => changeLanguage('fr')}>Fr</button>
                <button type="button" onClick={() => changeLanguage('en')}>En</button>
            </div>
            <div className='lien'>
                <ul>
                    <li><a href='#Home' ><p className='text-nav'>{t('about')}</p><FaCircle  className='icon'/></a></li>
                    <li><a href='#About'><p className='text-nav'>{t('formation')}</p><FaGraduationCap className='icon'/></a></li>
                    <li><a href='#Experience'><p className='text-nav'>{t('experience')}</p><FaSuitcase className='icon'/></a></li>
                    <li><a href='#Contact' ><p className='text-nav'>{t('contact')}</p><FaPhoneAlt className='icon'/></a></li>
                </ul>
            </div>

            <label className="switch" >
                <input onClick={toggleTheme} label='dark_mode' type="checkbox" defaultChecked form="myform" />
                <span className="slider"></span>
            </label> 
        </nav>
    )

}

export default Nav;