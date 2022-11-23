/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
    preset              : 'ts-jest',
    testEnvironment     : 'jsdom',
    moduleFileExtensions: ['js', 'ts', 'tsx'],
    moduleDirectories   : ['node_modules'],
    testMatch           : ['**/__tests__/**/*.ts?(x)'],
    coverageReporters   : ['clover', 'json', 'lcov', 'text', 'cobertura'],
    moduleNameMapper    : {
        '\\.(css|pcss)$'   : 'identity-obj-proxy'
    }
};
