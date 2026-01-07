// const nextJest = require('next/jest')
import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
	// Path to Next.js app to load next.config.js and .env files
	dir: './',
})

// Custom config to be passed to Jest
const customJestConfig = {
	setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
	testEnvironment: 'jest-environment-jsdom',
}

// Gammal rad (ta bort denna):
// module.exports = createJestConfig(customJestConfig)

// NY RAD (använd denna istället):
export default createJestConfig(customJestConfig)
