export const consoleFormat = (text: string) => {
    return console.warn(
        '%c%s',
        'color:blue;padding:12px;font-size: 16px',
        text
    );
};
