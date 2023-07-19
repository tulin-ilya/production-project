import { Button } from "@shared/ui-kit/button";
import cn from "classnames";
import { memo } from "react";
import { useTranslation } from "react-i18next";

import styles from "./styles.module.scss";

export const LoginForm = memo(() => {
    const { t } = useTranslation("login-form");
    return (
        <div className={cn(styles["login-form-wrapper"])}>
            <input type="text" className={cn(styles.input)} />
            <input type="text" className={cn(styles.input)} />
            <Button className={cn(styles.button)}>{t("login")}</Button>
        </div>
    );
});
