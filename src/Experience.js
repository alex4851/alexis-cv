import React, {useContext} from 'react';
import './i18n';
import { useTranslation } from 'react-i18next';
import './style/Experience.css';
import { ThemeContext } from './ThemeContext';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ImgAi from './images/exemple.jpg'
import ImgSopra from './images/sopra_steria.png'
import ImgAD from './images/ad_education.png'
import ImgFbg from './images/fbgbooks.jpg'


function Experience() {
    const { t} = useTranslation();
    const { theme} = useContext(ThemeContext);

    const settings = {
        dots: true,
        infinite: true,
        speed: 400,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000,
      };
    return(
        <section id='Experience' className={theme}>
            <h2>Experience</h2>

            <h3>Création de site web</h3>
            <section className='websites'>
                    
                    <div className='site-web-card'>
                        <h4>FBG BOOKS - Site de ECOMMERCE pour un auteur independant</h4>
                        <p>Technologies utilisées</p>
                        <ul>
                            <li>JavaScript (Framework : Vite)</li>
                            <li>HTML</li>
                            <li>CSS</li>
                        </ul>
                    <img src={ImgFbg} alt="FBG Books" title='Visit website' loading='lazy' height={250} width={450}/>

                    </div>


                    <div className='site-web-card'>
                        <h4>AI LIBERTY - Site de recherche d'IA</h4>
                        <p>Technologies utilisées</p>
                        <ul>
                            <li>JavaScript</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>PHP</li>
                            <li>MySql</li>
                        </ul>
                <img src={ImgAi} alt="Ai Liberty"  width={450} height={250} loading='lazy'/>

                </div>
            </section>



            <h3>Stages :</h3>
            <div className="carousel-container">
                <Slider {...settings}>
                    <div className="carousel-item">
                        <img src={ImgAD} id='brightness' loading='lazy' alt="ADeducation" />
                        <div className="carousel-text">
                            <h3>Stage à ADeducation</h3>
                            <p>{t("ad")}</p>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <img src={ImgSopra} id='brightness' loading='lazy' alt="SopraSteria" />
                        <div className="carousel-text">
                            <h3>Stage à SopraSteria</h3>
                            <p>{t("sopra")}</p>
                        </div>
                    </div>

                </Slider>
            </div>

        </section>

    )

}



export default Experience;