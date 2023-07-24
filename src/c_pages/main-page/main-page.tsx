import { memo } from "react";
import { useTranslation } from "react-i18next";

const MainPage = memo(() => {
    const { t } = useTranslation("main-page");

    return <div>{t("main page")}</div>;
});

export default MainPage;
