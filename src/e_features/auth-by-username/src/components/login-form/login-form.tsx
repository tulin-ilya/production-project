import { Button } from "@shared/ui-kit/button";
import { Input } from "@shared/ui-kit/input";
import cn from "classnames";
import { memo, useCallback, useState } from "react";
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
            <Input
                onChange={onChangeUsername}
                label="username"
                value={username}
            />
            <Input
                onChange={onChangePassword}
                label="password"
                value={password}
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
