import { useTranslation } from "react-i18next";

const Links = () => {
    const { t } = useTranslation();
    return (
        <div className="links">
            <h2>{t("links")}</h2>
            <ul>
                <li>
                    <a href="https://github.com/Mikkomannine/imGalleri" target="_blank" rel="noopener noreferrer">
                        {t("imgalleri")}
                    </a>
                </li>
                <li>
                    <a href="https://github.com/Mikkomannine/QAOA/blob/main/backend/QAOA.py" target="_blank" rel="noopener noreferrer">
                        {t("qaoa")}
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/mikko-manninen-679b352b8/" target="_blank" rel="noopener noreferrer">
                        {t("linkedin")}
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Links;
