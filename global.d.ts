// declare module "*.module.css";
// declare module "*.module.scss";

// declare module "*.css" {
//   interface IClassNames {
//     [key: string]: string;
//   }
//   const ClassNames: IClassNames
//   export default ClassNames
// }

declare module "*.module.css" {
    const classes: { [key: string]: string };
    export default classes;
}

declare module "*.module.scss" {
    const classes: { [key: string]: string };
    export default classes;
}

declare module "*.module.sass" {
    const classes: { [key: string]: string };
    export default classes;
}

declare module "*.module.less" {
    const classes: { [key: string]: string };
    export default classes;
}

declare module "*.module.styl" {
    const classes: { [key: string]: string };
    export default classes;
}
