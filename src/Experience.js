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
// import SkillBar from './Skill.js';


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
            <div className="carousel-container">
                <Slider {...settings}>
                    <div className="carousel-item">
                        <img src={ImgAD} id='brightness'  alt="ADeducation" />
                        <div className="carousel-text">
                            <h3>Stage à ADeducation</h3>
                            <p>{t("ad")}</p>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <img src={ImgSopra} id='brightness'  alt="SopraSteria" />
                        <div className="carousel-text">
                            <h3>Stage à SopraSteria</h3>
                            <p>{t("sopra")}</p>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <a rel='noreferrer' title='Try website' target='_blank' href='https://ai-liberty.fr/'>
                        <img src={ImgAi} alt="Ai Liberty" />
                        </a>
                        <div className="carousel-text">
                            <h3>Ai Liberty</h3>
                            <p>{t("ai_liberty")}</p>
                        </div>
                    </div>


                    <div className="carousel-item">
                        <a rel='noreferrer' title='Try website' target='_blank' href='https://fbgbooks.fr/'>
                            <img src={ImgFbg} alt="FBG Books" title='Visit website'/>
                        </a>
                        <div className="carousel-text">
                            <h3>FBG Books</h3>
                            <p>{t("fbg")}</p>
                        </div>
                    </div>
                </Slider>
            </div>



            {/*

            <h2>Skills :</h2>
            <div className="skills-container">
                <SkillBar skillName="HTML" skillLevel={95} />
                <SkillBar skillName="CSS" skillLevel={70} />
                <SkillBar skillName="Python" skillLevel={50} />
                <SkillBar skillName="PHP" skillLevel={50} />
                <SkillBar skillName="SQL" skillLevel={50} />
                <SkillBar skillName="JavaScript" skillLevel={50} />
            </div>
            
        */}
        </section>

    )

}



export default Experience;