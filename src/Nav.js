import React, {useContext, useState} from 'react';
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

    const [isActive, setIsActive] = useState(false);

    function toggleMenu() {
      setIsActive(!isActive); // Ouvre/ferme le menu
    }
  
    function closeMenu() {
      setIsActive(false); // Ferme le menu après un clic sur un lien
    }

    return(
        <nav id='Nav' className={`navigation ${theme}`}>
            <div className='button'>
                <button onClick={() => changeLanguage('fr')}>Fr</button>
                <button onClick={() => changeLanguage('en')}>En</button>
            </div>
            <div className={`lien ${isActive ? 'active' : ''}`}>
                <ul>
                    <a href='#Home' onClick={closeMenu}><li>{t('about')}</li></a>
                    <a href='#About' onClick={closeMenu}><li>{t('formation')}</li></a>
                    <a href='#Experience' onClick={closeMenu}><li>{t('experience')}</li></a>
                    <a href='#Contact' onClick={closeMenu}><li>{t('contact')}</li></a>

                </ul>
            </div>

            <label className="switch">
                <input onClick={toggleTheme} type="checkbox" defaultChecked />
                <span className="slider"></span>
            </label>   

            <button onClick={toggleMenu} className={`menu-hamburger ${isActive ? 'active' : ''}`}>
                <div className="barre"></div>
                <div className="barre"></div>
                <div className="barre"></div>
            </button>     
        </nav>
    )

}

export default Nav;