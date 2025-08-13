import Qaoa from "../projects/qaoa";
import ImgGallery from "../projects/imgalleri";
import EasyBank from "../projects/easybank.js";
import { useTranslation } from "react-i18next";

const Projects = () => {
    const { t } = useTranslation();
    return (
        <div className="projects">
            <h2>{t("projects")}</h2>
            <ImgGallery />
            <Qaoa />
            <EasyBank />
        </div>
    );
}

export default Projects;
