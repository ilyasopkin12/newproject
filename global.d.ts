declare module '*.svg?react' {
    import type { FunctionComponent, SVGProps } from 'react';
    const content: FunctionComponent<SVGProps<SVGSVGElement>>;
    export default content;
}
declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.css' {
  const content: string;
  export default content;
}