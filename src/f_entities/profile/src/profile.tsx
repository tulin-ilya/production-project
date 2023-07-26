import { Button } from "@shared/ui-kit/button";
import { Input } from "@shared/ui-kit/input";
import { Spinner } from "@shared/ui-kit/spinner";
import { Text } from "@shared/ui-kit/text";
import cn from "classnames";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import type { TProfileProps } from "./models";
import { getProfileState } from "./store/selectors";
import styles from "./styles.module.css";

export const Profile = ({ className }: TProfileProps) => {
    const { t } = useTranslation("profile");

    const { isLoading, data, error } = useSelector(getProfileState);

    if (isLoading) return <Spinner />;

    return (
        <div className={cn(styles["profile-wrapper"], className)}>
            <Text Tag="h3">{t("profile")}</Text>
            <Button>{t("edit")}</Button>
            <Input
                label={t("firstname")}
                value={data?.firstname}
                placeholder={t("type firstname")}
            />
            <Input
                label={t("lastname")}
                value={data?.lastname}
                placeholder={t("type lastname")}
            />
        </div>
    );
};
