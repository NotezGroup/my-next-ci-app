import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Page from './page'

describe('Page', () => {
	it('renders a heading', () => {
		render(<Page />)
		// Next.js template har oftast en logga eller text som innehåller "Next.js" eller "Docs"
		// Vi kollar bara att något renderas för att bekräfta att testmiljön funkar.
		const main = screen.getByRole('main')
		expect(main).toBeInTheDocument()
	})
})
