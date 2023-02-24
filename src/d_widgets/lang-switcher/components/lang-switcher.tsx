import { Button } from "@shared/ui-components/button";
import { memo } from "react";
import { useTranslation } from "react-i18next";

export const LangSwitcher = memo(() => {
    const { t, i18n } = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === "en" ? "ru" : "en");
    };

    return (
        <>
            <Button onClick={toggle}>{t("language")}</Button>
        </>
    );
});
