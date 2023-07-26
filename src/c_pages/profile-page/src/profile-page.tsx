import type { TAppDispatch } from "@app/providers/store-provider";
import { fetchProfileData, Profile, profileReducer } from "@entities/profile";
import type { TReducersList } from "@shared/ui-kit/dynamic-module-loader";
import { DynamicModuleLoader } from "@shared/ui-kit/dynamic-module-loader";
import { memo, useEffect, useMemo } from "react";
import { useDispatch } from "react-redux";

const ProfilePage = memo(() => {
    const dispatch = useDispatch<TAppDispatch>();

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    const reducers: TReducersList = useMemo(
        () => ({
            profile: profileReducer,
        }),
        []
    );

    return (
        <DynamicModuleLoader reducers={reducers} removeReducerAfterUnmount>
            <Profile />
        </DynamicModuleLoader>
    );
});

export default ProfilePage;
