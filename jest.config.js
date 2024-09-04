module.exports = {
	testEnvironment: 'node',
	transform: {
		'^.+\\.ts?$': 'ts-jest', // Transform TypeScript files using ts-jest
		'^.+\\.(js|jsx)?$': 'babel-jest', // Transform JavaScript/JSX files using babel-jest
	},
	testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.[jt]sx?$', // Match both .js/.jsx and .ts/.tsx files
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
	transformIgnorePatterns: ['/node_modules/'], // Don't transform node_modules
};
