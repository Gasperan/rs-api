module.exports = {
    verbose: true,
    roots: ['<rootDir>/src'],
    transform: {
        '^.+\\.(ts|js)?$': 'ts-jest',
    },
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(ts|js)?$',
    testPathIgnorePatterns: [
        '<rootDir>/src/integration-test',
        '<rootDir>/src/excluded-integration-test',
    ],
    moduleFileExtensions: ['ts', 'js', 'json', 'node'],
    collectCoverageFrom: [
        '**/*.{ts,js}',
        '!**/node_modules/**',
        '!**/index.js',
        '!**/index.ts',
        '!**/*Repository.ts',
        '!**/Gateway/Gateway.ts',
        '!**/integration-test/**',
        '!**/tests-utils/**',
        '!**/plugins/**',
        '!**/src/excluded-integration-test/**',
    ],

    coverageThreshold: {
        global: {
            statements: 85,
            branches: 80,
            functions: 85,
            lines: 85,
        },
    },
}
