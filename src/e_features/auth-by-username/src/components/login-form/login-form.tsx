import { Button } from "@shared/ui-kit/button";
import { Input } from "@shared/ui-kit/input";
import { Text } from "@shared/ui-kit/text";
import cn from "classnames";
import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

import { loginByUsername } from "../../services/login-by-username";
import { loginActions } from "../../store/login-slice";
import { getLoginState } from "../../store/selectors";
import styles from "./styles.module.scss";

export const LoginForm = memo(() => {
    const { t } = useTranslation("login-form");
    const dispatch = useDispatch();
    const { isLoading, password, username, error } = useSelector(getLoginState);

    const onChangeUsername = useCallback(
        (value: string) => {
            dispatch(loginActions.setUsername(value));
        },
        [dispatch]
    );
    const onChangePassword = useCallback(
        (value: string) => {
            dispatch(loginActions.setPassword(value));
        },
        [dispatch]
    );

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ password, username }));
    }, [dispatch, password, username]);

    return (
        <div className={cn(styles["login-form-wrapper"])}>
            <Text Tag="h3">{t("authorization")}</Text>
            {!!error && <Text view="danger">{error}</Text>}
            <Input
                onChange={onChangeUsername}
                label={t("username")}
                value={username}
                view={error ? "danger" : "normal"}
            />
            <Input
                onChange={onChangePassword}
                label={t("password")}
                value={password}
                view={error ? "danger" : "normal"}
            />
            <Button
                disabled={isLoading}
                onClick={onLoginClick}
                className={cn(styles.button)}
            >
                {t("login")}
            </Button>
        </div>
    );
});
