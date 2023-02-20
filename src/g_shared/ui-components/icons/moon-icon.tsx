import cn from "classnames";
import { memo } from "react";

import { TiconProps } from "./models";
import styles from "./styles.module.scss";

export const MoonIcon = memo<TiconProps>(({ view, className }) => (
    <svg
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn(styles.icon, className)}
    >
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M23.923 17.2382C24.0829 16.8498 23.9888 16.4015 23.6867 16.1131C23.3846 15.8247 22.938 15.7569 22.5661 15.9429C21.3101 16.5709 19.8961 16.9241 18.3981 16.9241C13.1801 16.9241 8.95016 12.6295 8.95016 7.33176C8.95016 5.18705 9.64225 3.20939 10.8124 1.61247C11.0597 1.27493 11.075 0.81707 10.8508 0.46331C10.6265 0.109549 10.2097 -0.0659724 9.80466 0.0227794C4.2002 1.25082 2.60834e-07 6.31085 0 12.3692C-3.00331e-07 19.345 5.56986 25 12.4406 25C17.6133 25 22.0464 21.795 23.923 17.2382Z"
            fill="#212135"
        />
    </svg>
));
