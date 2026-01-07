// const nextJest = require('next/jest')
import nextJest from 'next/jest'

const createJestConfig = nextJest({
	// Path to Next.js app to load next.config.js and .env files
	dir: './',
})

// Custom config to be passed to Jest
const customJestConfig = {
	setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
	testEnvironment: 'jest-environment-jsdom',
}

module.exports = createJestConfig(customJestConfig)
