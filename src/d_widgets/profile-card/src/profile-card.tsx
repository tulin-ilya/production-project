import { Avatar } from "@shared/ui-kit/avatar";
import { Input } from "@shared/ui-kit/input";
import { Select } from "@shared/ui-kit/select";
import { Text } from "@shared/ui-kit/text";
import { PageLoader } from "@widgets/page-loader";
import cn from "classnames";
import { memo } from "react";
import { useTranslation } from "react-i18next";

import { TProfileCardProps } from "./models";
import styles from "./styles.module.css";

export const ProfileCard = memo(
    ({
        className,
        countriesList,
        currenciesList,
        data,
        isLoading,
        readonly,
        error,
        onChange,
    }: TProfileCardProps) => {
        const { t } = useTranslation("profile");

        if (isLoading) return <PageLoader />;

        if (error) {
            return <Text align="center">{t("something went wrong")}</Text>;
        }

        return (
            <div className={cn(styles["profile-card"], className)}>
                <div className={cn(styles["profile-card-item"])}>
                    <Avatar src={data?.avatar} />
                    {!readonly && (
                        <Input
                            label={t("avatar")}
                            placeholder={t("type avatar address")}
                            readonly={readonly}
                            onChange={(value) => {
                                onChange?.("avatar", value);
                            }}
                        />
                    )}
                </div>
                <div className={cn(styles["profile-card-item"])}>
                    <Input
                        label={t("username")}
                        value={data?.username}
                        placeholder={t("type username")}
                        readonly={readonly}
                        onChange={(value) => {
                            onChange?.("username", value);
                        }}
                    />
                    <Input
                        label={t("firstname")}
                        value={data?.firstname}
                        placeholder={t("type firstname")}
                        readonly={readonly}
                        onChange={(value) => {
                            onChange?.("firstname", value);
                        }}
                    />
                    <Input
                        label={t("lastname")}
                        value={data?.lastname}
                        placeholder={t("type lastname")}
                        readonly={readonly}
                        onChange={(value) => {
                            onChange?.("lastname", value);
                        }}
                    />
                    <Input
                        label={t("age")}
                        value={data?.age}
                        placeholder={t("type age")}
                        readonly={readonly}
                        onChange={(value) => {
                            onChange?.("age", value);
                        }}
                    />
                    {countriesList && (
                        <Select
                            options={countriesList}
                            label={t("country")}
                            value={data?.country}
                            placeholder={t("select the country")}
                            readonly={readonly}
                            onChange={(value) => {
                                onChange?.("country", value);
                            }}
                        />
                    )}
                    <Input
                        label={t("city")}
                        value={data?.city}
                        placeholder={t("type the city")}
                        readonly={readonly}
                        onChange={(value) => {
                            onChange?.("city", value);
                        }}
                    />
                    {currenciesList && (
                        <Select
                            options={currenciesList}
                            label={t("cuurrency")}
                            value={data?.currency}
                            placeholder={t("select the currency")}
                            readonly={readonly}
                            onChange={(value) => {
                                onChange?.("currency", value);
                            }}
                        />
                    )}
                </div>
            </div>
        );
    }
);
