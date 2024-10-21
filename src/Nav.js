import React, {useContext} from 'react';
import { useTranslation } from 'react-i18next';
import './i18n';
import './style/Nav.css';
import { ThemeContext } from './ThemeContext';


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
                    <a href='#Home'><li>{t('about')}</li></a>
                    <a href='#About'><li>{t('formation')}</li></a>
                    <a href='#Experience'><li>{t('experience')}</li></a>
                    <a href='#Contact'><li>{t('contact')}</li></a>

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