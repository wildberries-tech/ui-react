declare module '*.pcss' {
    const content: {
        [className: string]: string
    };

    export default content;
}

declare module '*.pcss?raw' {
    const content: string;

    export default content;
}
