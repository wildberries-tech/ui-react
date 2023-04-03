/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
export default {
    preset              : 'ts-jest',
    testEnvironment     : 'jsdom',
    moduleFileExtensions: ['js', 'ts', 'tsx'],
    moduleDirectories   : ['node_modules'],
    testMatch           : ['**/__tests__/**/*.ts?(x)'],
    coverageReporters   : ['text'],
    moduleNameMapper    : {
        '\\.(css|pcss)$'   : 'identity-obj-proxy'
    },
    coverageThreshold: {
        global: {
            branches: 65,
            functions: 65,
            lines: 65,
            statements: 65,
        }
    }
};
