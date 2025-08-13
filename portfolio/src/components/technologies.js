import { useTranslation } from "react-i18next";


const Technologies = () => {
    const { t } = useTranslation();
    const techList = [
        { src: "images/react.png", name: "React" },
        { src: "images/java.png", name: "Java" },
        { src: "images/git.png", name: "Git" },
        { src: "images/nodejs.png", name: "Node.js" },
        { src: "images/python.png", name: "Python" }
    ];

    return (
        <div className="technologies-container">
            <div className="technologies-header">
                <h2>{t("technologies")}</h2>
            </div>
            <div className="technologies">
                {techList.map((tech, index) => (
                    <div className="tech-item" key={index}>
                        <img src={tech.src} alt={tech.name} className="tech-pic" />
                        <span className="tech-name">{tech.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Technologies;

