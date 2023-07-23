import { TAppDispatch } from "@app/providers/store-provider";
import { Button } from "@shared/ui-kit/button";
import {
    DynamicModuleLoader,
    TReducersList,
} from "@shared/ui-kit/dynamic-module-loader";
import { Input } from "@shared/ui-kit/input";
import { Text } from "@shared/ui-kit/text";
import cn from "classnames";
import { memo, useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

import { loginByUsername } from "../../services/login-by-username";
import { loginActions, loginReducer } from "../../store/login-slice";
import { getLoginState } from "../../store/selectors";
import { TLoginFormProps } from "./models";
import styles from "./styles.module.scss";

const LoginForm = memo(({ onSuccess }: TLoginFormProps) => {
    const { t } = useTranslation("login-form");
    const dispatch = useDispatch<TAppDispatch>();
    const { isLoading, password, username, error } = useSelector(getLoginState);

    const initialReducers: TReducersList = useMemo(
        () => ({
            login: loginReducer,
        }),
        []
    );

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

    const onLoginClickHandler = useCallback(async () => {
        const result = await dispatch(loginByUsername({ password, username }));
        dispatch(loginActions.setUsername(""));
        dispatch(loginActions.setPassword(""));
        if (result.meta.requestStatus === "fulfilled") {
            onSuccess?.();
        }
    }, [dispatch, onSuccess, password, username]);

    return (
        <DynamicModuleLoader
            reducers={initialReducers}
            removeReducerAfterUnmount
        >
            <div className={cn(styles["login-form-wrapper"])}>
                <Text Tag="h3">{t("authorization")}</Text>
                {!!error && (
                    <Text view="danger">
                        {t("incorrect username or password")}
                    </Text>
                )}
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
                    onClick={onLoginClickHandler}
                    className={cn(styles.button)}
                >
                    {t("login")}
                </Button>
            </div>
        </DynamicModuleLoader>
    );
});

export default LoginForm;
