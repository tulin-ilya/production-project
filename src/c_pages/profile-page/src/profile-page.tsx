import type { TAppDispatch } from "@app/providers/store-provider";
import {
    fetchProfileData,
    profileActions,
    profileReducer,
} from "@entities/profile";
import { getProfileState } from "@entities/profile";
import type { TReducersList } from "@shared/ui-kit/dynamic-module-loader";
import { DynamicModuleLoader } from "@shared/ui-kit/dynamic-module-loader";
import { ProfileCard, TProfileFieldName } from "@widgets/profile-card";
import { ProfileCardHeader } from "@widgets/profile-card-header";
import { memo, useCallback, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

const ProfilePage = memo(() => {
    const dispatch = useDispatch<TAppDispatch>();
    const { isLoading, currentData, error, readonly } =
        useSelector(getProfileState);

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    const reducers: TReducersList = useMemo(
        () => ({
            profile: profileReducer,
        }),
        []
    );

    const onChangeProfile = useCallback(
        (fieldName: TProfileFieldName, value?: string) => {
            dispatch(profileActions.updateProfile({ [fieldName]: value }));
        },
        [dispatch]
    );

    return (
        <DynamicModuleLoader reducers={reducers} removeReducerAfterUnmount>
            <ProfileCardHeader />
            <ProfileCard
                isLoading={isLoading}
                readonly={readonly}
                data={currentData}
                error={error}
                onChange={onChangeProfile}
            />
        </DynamicModuleLoader>
    );
});

export default ProfilePage;
