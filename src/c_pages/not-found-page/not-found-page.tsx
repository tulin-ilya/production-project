import { useTranslation } from "react-i18next";

import styles from "./styles.module.css";

export const NotFoundPage = () => {
    const { t } = useTranslation("not-found-page");

    return (
        <div className={styles["not-found-page"]}>{t("page not found")}</div>
    );
};
