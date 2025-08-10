import Qaoa from "../projects/qaoa";
import ImgGallery from "../projects/imgalleri";
import EasyBank from "../projects/easybank.js";

const Projects = () => {
    return (
        <div className="projects">
            <h2>Projects</h2>
            <ImgGallery />
            <Qaoa />
            <EasyBank />
        </div>
    );
}

export default Projects;
