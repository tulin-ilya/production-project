import { TComponentBaseProps } from "@shared/configs/component-base-type";

export type TAvatarProps = Omit<TComponentBaseProps, "view"> & {
    /** ссылка на изображение */
    src?: string;
};
