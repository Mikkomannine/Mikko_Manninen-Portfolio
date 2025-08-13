import Metropolia from "../education/metropolia";
import Seoultech from "../education/seoultech";     
import { useTranslation } from "react-i18next";

const Education = () => {
  const { t } = useTranslation();
  return (
    <div className="education">
      <h2>{t("education")}</h2>
      <Metropolia />
      <Seoultech />
    </div>
  );
};

export default Education;
