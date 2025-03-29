import React, {useContext} from 'react';
import './i18n';
import { useTranslation } from 'react-i18next';
import './style/Footer.css';
import { ThemeContext } from './ThemeContext';
import pdf from './images/alexis-beligne-cv.pdf'

function Footer() {
    const { t } = useTranslation();
    const { theme } = useContext(ThemeContext);

    return(
        <footer id='Contact' className={`contact ${theme}`}>
            <a className='cv' href={pdf} download={pdf}>{t("cv")}</a>
            <div className="floating-text-container">
                <h2>Contact</h2>
                <a href='mailto:alexisbeligne@gmail.com'><p>Email : alexisbeligne@gmail.com</p></a>
                <a href='tel:0749531250' ><p>Téléphone : +33 7 49 53 12 50</p></a>
            </div>
        </footer>
    )

}



export default Footer;