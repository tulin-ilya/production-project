import { TAppDispatch } from "@app/providers/store-provider";
import {
    getProfileState,
    profileActions,
    updateProfileData,
} from "@entities/profile";
import { Button } from "@shared/ui-kit/button";
import { Text } from "@shared/ui-kit/text";
import cn from "classnames";
import { memo, useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

import { TProfileHeaderProps } from "./models";
import styles from "./styles.module.css";

export const ProfileCardHeader = memo(({ className }: TProfileHeaderProps) => {
    const { t } = useTranslation("profile");
    const dispatch = useDispatch<TAppDispatch>();

    const { readonly, data, currentData, error } = useSelector(getProfileState);

    const isDataDiff = useMemo(
        () => JSON.stringify(data) !== JSON.stringify(currentData),
        [currentData, data]
    );

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelChanges());
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateProfileData());
        dispatch(profileActions.setReadonly(true));
    }, [dispatch]);

    if (error) return null;

    return (
        <div className={cn(styles["profile-header"], className)}>
            <Text Tag="h3">{t("profile")}</Text>
            {readonly ? (
                <Button onClick={onEdit}>{t("edit")}</Button>
            ) : (
                <div className={styles["button-wrapper"]}>
                    <Button
                        view={"success"}
                        disabled={!isDataDiff}
                        onClick={onSave}
                    >
                        {t("save")}
                    </Button>
                    <Button view="danger" onClick={onCancelEdit}>
                        {t("cancel")}
                    </Button>
                </div>
            )}
        </div>
    );
});
