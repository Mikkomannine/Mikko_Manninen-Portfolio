import { useTranslation } from "react-i18next";

const Metropolia = () => {
  const { t } = useTranslation();
  return (
        <a className="project-link" href="https://www.metropolia.fi/en/academics/degree-programmes-in-finnish/information-and-communication-technology" target="_blank" rel="noopener noreferrer">
            <div className="metropolia">
                <div className="education-header">
                    <img src="./images/metropolia.jpg" alt="Metropolia" className="education-image" />
                    <div className="wrapper">
                        <h2>{t("metropolia")}</h2>
                        <p>{t("degree")}</p>
                        <p>{t("graduation")}</p>
                    </div>
                </div>
            </div>
        </a>
  );
};

export default Metropolia;
