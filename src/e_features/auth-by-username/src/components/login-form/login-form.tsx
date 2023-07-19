import { Button } from "@shared/ui-kit/button";
import { Input } from "@shared/ui-kit/input";
import cn from "classnames";
import { memo, useState } from "react";
import { useTranslation } from "react-i18next";

import styles from "./styles.module.scss";

export const LoginForm = memo(() => {
    const { t } = useTranslation("login-form");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className={cn(styles["login-form-wrapper"])}>
            <Input onChange={setUsername} label="username" value={username} />
            <Input onChange={setPassword} label="password" value={password} />
            <Button className={cn(styles.button)}>{t("login")}</Button>
        </div>
    );
});
