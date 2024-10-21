import React ,{useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './i18n';
import './style/About.css';
import { ThemeContext } from './ThemeContext';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { FaGraduationCap } from 'react-icons/fa';
import { MdHeight } from 'react-icons/md';

function Home() {
    const { t, i18n } = useTranslation();
    const { theme } = useContext(ThemeContext);

    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    const items = [
      { name:'',  date: '2024 - 2025', icon:<FaGraduationCap />,  title: 'Saint Thomas de Villeneuve', subtitle:t("bac"), description:t("spe") , },
      { name:'',  date: '2024', icon:<FaGraduationCap />,  title: 'Cambridge Exam', subtitle:'First', description:t("first") , },
      { name:'',  date: '2022', icon:<FaGraduationCap />,  title: 'PSC1', subtitle:"", description:t("psc1") , },
      { name:'',  date: '2020 - 2022', icon:<FaGraduationCap />,  title: 'Scoutisme', subtitle:"", description:'Plusieurs années de scoutisme' , },
      // Ajoute d'autres événements ici
    ];

    return(
        <main id='About' className={`about ${theme}`}>
            <h2>{t('formation')}</h2>

            <div className="timeline">
                {items.map((item, index) => (
                    <div
                    key={index}
                    className={`container ${index % 2 === 0 ? 'left' : 'right'}`}
                    style={{
                        opacity: scrollPosition > index * 400 ? 1 : 0,
                        transform: scrollPosition > index * 400 ? 'translateX(0)' : (index % 2 === 0 ? 'translateX(-100%)' : 'translateX(100%)'),
                        transition: 'all 0.6s ease-out',
                    }}
                    >
                                    <VerticalTimelineElement
                                                id='content'
                                                className="vertical-timeline-element--education"
                                                date={item.date}
                                                icon={item.icon}
                                    >
                                                <h3 className="vertical-timeline-element-title">{item.title}</h3>
                                                <h4 className="vertical-timeline-element-subtitle">{item.subtitle}</h4>
                                                <p> {item.description}</p>
                                    </VerticalTimelineElement>
                    </div>
                ))}
            </div>
        </main>
    )

}



export default Home;