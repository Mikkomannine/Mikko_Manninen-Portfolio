import { useTranslation } from "react-i18next";

const Seoultech = () => {
  const { t } = useTranslation();
  return (
        <a className="project-link" href="https://en.seoultech.ac.kr/" target="_blank" rel="noopener noreferrer">
            <div className="seoultech">
                <div className="education-header">
                    <img src="./images/seoultech.png" alt="Seoultech" className="education-image" />
                    <div className="wrapper">
                        <h2>Seoul National University of Science and Technology</h2>
                        <p>Department of Computer Science and Engineering, Student Exchange Program</p>
                        <p>{t("seoultech")}</p>
                    </div>
                </div>
            </div>
        </a>
  );
};

export default Seoultech;
