import { Counter } from "@entities/counter";
import { useTranslation } from "react-i18next";

const MainPage = () => {
    const { t } = useTranslation("main-page");

    return (
        <div>
            {t("main page")}
            <Counter />
        </div>
    );
};

export default MainPage;
