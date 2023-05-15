import { render, screen } from '@testing-library/react'

import Main from '.'

describe('<Main />', () => {
  it('should render the heading', () => {
    const { container } = render(<Main />)
    expect(screen.getByRole('heading', { level: 1 }))
    expect(screen.getByText(/react avançado/i))
    expect(container.firstChild).toMatchSnapshot()
  })
})
