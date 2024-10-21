import React, {useRef, useContext,useEffect} from 'react';
import './i18n';
import { useTranslation } from 'react-i18next';
import './style/Skill.css';
import { ThemeContext } from './ThemeContext';
import ImgAi from './images/exemple.jpg'


function Skill({ skillName, skillLevel }) {
    const { t, i18n } = useTranslation();
    const { theme, toggleTheme } = useContext(ThemeContext);

    const progressRef = useRef(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              progressRef.current.style.width = `${skillLevel}%`;
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.5 } // Déclenche à 50% de visibilité
      );
  
      if (progressRef.current) {
        observer.observe(progressRef.current);
      }
    }, [skillLevel]);
  
    return (
      <div className="skill">
        <p>{skillName}</p>
        <div className="progress-bar">
          <div ref={progressRef} className="progress"></div>
        </div>
      </div>
    );
  
}



export default Skill;