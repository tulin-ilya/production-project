import cn from "classnames";
import { memo } from "react";
import { useTranslation } from "react-i18next";

import { IMAGE_PLACEHOLDER } from "./config";
import { TAvatarProps } from "./models";
import styles from "./styles.module.scss";

export const Avatar = memo(
    ({ className, size = "medium", src = IMAGE_PLACEHOLDER }: TAvatarProps) => {
        const { t } = useTranslation();

        return (
            <img
                src={src}
                className={cn(styles.avatar, styles[size], className)}
                alt={t("avatar")}
            />
        );
    }
);
