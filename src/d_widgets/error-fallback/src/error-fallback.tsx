import cn from "classnames";
import { memo } from "react";
import { useTranslation } from "react-i18next";

import { TErrorFallbackProps } from "./models";
import styles from "./styles.module.css";

export const ErrorFallback = memo(
    ({ className, error }: TErrorFallbackProps) => {
        const { t } = useTranslation("error-fallback");

        const reloadPage = () => {
            window.location.reload();
        };
        console.log(error);

        return (
            <div
                role="alert"
                className={cn(className, styles["error-fallback"])}
            >
                <p>{t("something went wrong:")}</p>
                <pre>{error?.message}</pre>
                <button onClick={reloadPage}>{t("try again")}</button>
            </div>
        );
    }
);
