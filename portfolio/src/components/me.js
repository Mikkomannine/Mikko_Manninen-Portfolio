import { useTranslation } from "react-i18next";

const Me = () => {
    const { t } = useTranslation();

    return (
        <div className="me">
            <div className="profile-header">
                <h1>Mikko Manninen</h1>
                <img src="images/mikko.png" alt="Mikko Manninen" className="profile-pic" />
            </div>
            <p>{t("description")}</p>
        </div>
    );
};


export default Me;