module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    coverageReporters: ['json-summary'],
    collectCoverageFrom: [
        'src/**/{!(index),}.ts',
    ],
};
