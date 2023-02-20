import { memo } from "react";
import cn from "classnames";

import { TiconProps } from "./models";
import styles from "./styles.module.scss";

export const SunIcon = memo<TiconProps>(({ view, className }) => (
    <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn(styles.icon, className)}
    >
        <path d="M12 0C12.4734 0 12.8571 0.383756 12.8571 0.857143V2.57143C12.8571 3.04482 12.4734 3.42857 12 3.42857C11.5266 3.42857 11.1429 3.04482 11.1429 2.57143V0.857143C11.1429 0.383756 11.5266 0 12 0Z" />
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.0001 18.8571C6.80153 18.8571 5.08724 17.1429 5.14291 12C5.19857 6.85714 6.80153 5.14286 12.0001 5.14286C17.1986 5.14286 18.8572 6.85714 18.8572 12C18.8572 17.1429 17.1986 18.8571 12.0001 18.8571Z"
        />
        <path d="M12.8571 21.4286C12.8571 20.9552 12.4734 20.5714 12 20.5714C11.5266 20.5714 11.1429 20.9552 11.1429 21.4286V23.1429C11.1429 23.6162 11.5266 24 12 24C12.4734 24 12.8571 23.6162 12.8571 23.1429V21.4286Z" />
        <path d="M24 12C24 12.4734 23.6162 12.8571 23.1429 12.8571H21.4286C20.9552 12.8571 20.5714 12.4734 20.5714 12C20.5714 11.5266 20.9552 11.1429 21.4286 11.1429H23.1429C23.6162 11.1429 24 11.5266 24 12Z" />
        <path d="M2.57143 12.8571C3.04482 12.8571 3.42857 12.4734 3.42857 12C3.42857 11.5266 3.04482 11.1429 2.57143 11.1429H0.857143C0.383756 11.1429 0 11.5266 0 12C0 12.4734 0.383756 12.8571 0.857143 12.8571H2.57143Z" />
        <path d="M2.82248 2.82248C3.15721 2.48774 3.69993 2.48774 4.03466 2.82248L5.24685 4.03466C5.58158 4.3694 5.58158 4.91211 5.24685 5.24685C4.91211 5.58158 4.3694 5.58158 4.03466 5.24685L2.82248 4.03466C2.48774 3.69993 2.48774 3.15721 2.82248 2.82248Z" />
        <path d="M4.03466 21.5324C3.69993 21.8672 3.15721 21.8672 2.82248 21.5324C2.48774 21.1977 2.48774 20.655 2.82248 20.3202L4.03466 19.1081C4.3694 18.7733 4.91211 18.7733 5.24685 19.1081C5.58158 19.4428 5.58158 19.9855 5.24685 20.3202L4.03466 21.5324Z" />
        <path d="M21.5324 2.82248C21.1977 2.48774 20.655 2.48774 20.3202 2.82248L19.1081 4.03466C18.7733 4.3694 18.7733 4.91211 19.1081 5.24685C19.4428 5.58158 19.9855 5.58158 20.3202 5.24685L21.5324 4.03466C21.8672 3.69993 21.8672 3.15721 21.5324 2.82248Z" />
        <path d="M20.3202 21.5324C20.655 21.8672 21.1977 21.8672 21.5324 21.5324C21.8672 21.1977 21.8672 20.655 21.5324 20.3202L20.3202 19.1081C19.9855 18.7733 19.4428 18.7733 19.1081 19.1081C18.7733 19.4428 18.7733 19.9855 19.1081 20.3202L20.3202 21.5324Z" />
    </svg>
));