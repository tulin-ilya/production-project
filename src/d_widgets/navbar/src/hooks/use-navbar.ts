import { getUserAuthData, userActions } from "@entities/user";
import { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

export const useNavbar = () => {
    const { t } = useTranslation("navbar");
    const [isAuthOpen, setIsAuthOpen] = useState(false);
    const authData = useSelector(getUserAuthData);
    const dispatch = useDispatch();

    const onToggleAuth = useCallback(() => {
        setIsAuthOpen((prev) => !prev);
    }, []);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    return { t, isAuthOpen, authData, onToggleAuth, onLogout };
};
