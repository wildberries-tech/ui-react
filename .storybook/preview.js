export const parameters = {
    layout: 'centered',
    actions: {
        argTypesRegex: "^on[A-Z].*"
    },
    controls: {
        expanded: true,
        sort    : 'requiredFirst',
        matchers: {
            color: /(background|color)$/i,
            date : /Date$/,
        },
    },
}
