import type { TAppDispatch } from "@app/providers/store-provider";
import { getCountriesState } from "@entities/countries";
import { getCurenciesState } from "@entities/currencies";
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

import { TList } from "./models";

const ProfilePage = memo(() => {
    const dispatch = useDispatch<TAppDispatch>();
    const { isLoading, currentData, error, readonly } =
        useSelector(getProfileState);

    const { data: currenciesList = [] } = useSelector(getCurenciesState);
    const { data: countriesList = [] } = useSelector(getCountriesState);

    const normalizeLists = useCallback((list: TList) => {
        return list?.map((item) => ({ value: item.name, name: item.name }));
    }, []);

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
                currenciesList={normalizeLists(currenciesList)}
                countriesList={normalizeLists(countriesList)}
                error={error}
                onChange={onChangeProfile}
            />
        </DynamicModuleLoader>
    );
});

export default ProfilePage;
