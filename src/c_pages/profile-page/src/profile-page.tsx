import { profileReducer } from "@entities/profile";
import {
    DynamicModuleLoader,
    TReducersList,
} from "@shared/ui-kit/dynamic-module-loader";
import { memo, useMemo } from "react";
import { useTranslation } from "react-i18next";

const ProfilePage = memo(() => {
    const { t } = useTranslation("profile-page");

    const reducers: TReducersList = useMemo(
        () => ({
            profile: profileReducer,
        }),
        []
    );

    return (
        <DynamicModuleLoader reducers={reducers} removeReducerAfterUnmount>
            <div>{t("profile page")}</div>
        </DynamicModuleLoader>
    );
});

export default ProfilePage;
