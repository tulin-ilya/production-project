import { memo, useEffect } from "react";
import { useTranslation } from "react-i18next";

const AboutPage = memo(() => {
    const { t } = useTranslation("about-page");

    useEffect(() => {
        // throw new Error();
    }, []);

    return <div>{t("about page")}</div>;
});

export default AboutPage;
