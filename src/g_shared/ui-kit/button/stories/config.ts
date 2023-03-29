/* eslint-disable indent */
import { ButtonHTMLAttributes } from "react";

import { TButtonPublicProps } from "../src/models";

export const ARGS: Pick<ButtonHTMLAttributes<HTMLButtonElement>, "children"> &
    TButtonPublicProps = {
    view: "primary",
    children: "hello",
};

export const ARGS_TYPES = {};
