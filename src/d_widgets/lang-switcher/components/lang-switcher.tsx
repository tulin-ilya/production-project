import { Button } from "@shared/ui-components/button";
import cn from "classnames";
import { memo } from "react";
import { useTranslation } from "react-i18next";

import { TLangSwitcherProps } from "./models";
import styles from "./styles.module.css";

export const LangSwitcher = memo(({ className, view }: TLangSwitcherProps) => {
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
