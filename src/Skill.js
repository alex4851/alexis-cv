import React, {useRef,useEffect} from 'react';
import './i18n';
import './style/Skill.css';


function Skill({ skillName, skillLevel }) {

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