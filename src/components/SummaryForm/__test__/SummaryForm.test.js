import SummaryForm from '../SummaryForm'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event'

test('initial checkbox should be unchecked', () => {
    render(<SummaryForm />)
    const checkboxEl = screen.getByRole('checkbox', { name: /i agree to terms and conditions/i })
    
    expect(checkboxEl).not.toBeChecked()
});

test('initial button should be disabled', () => {
    render(<SummaryForm />)
    const submitBtn = screen.getByRole('button', { name: /confirm order/i })

    expect(submitBtn).toBeDisabled()
});

test('if checkbox is checked, button should be enabled. Else, button should be disabled', () =>{
    render(<SummaryForm />)
    const submitBtn = screen.getByRole('button', { name: /confirm order/i })
    const checkboxEl = screen.getByRole('checkbox', { name: /i agree to terms and conditions/i })

    userEvent.click(checkboxEl)

    expect(checkboxEl).toBeChecked()
    expect(submitBtn).toBeEnabled()

    userEvent.click(checkboxEl)

    expect(checkboxEl).not.toBeChecked()
    expect(submitBtn).toBeDisabled()
});

test('Popover responds to hover', () => {
    render(<SummaryForm/>)
    const checkboxLabelEl = screen.getByLabelText(/i agree to terms and conditions/i)
    const popoverEl = screen.getByText(/no ice cream/i) //use query instead of get if you expect it NOT to be in DOM

    expect(popoverEl).toHaveClass('hidden');

    userEvent.hover(checkboxLabelEl)
    expect(popoverEl).not.toHaveClass('hidden');

    userEvent.unhover(checkboxLabelEl)
    expect(popoverEl).toHaveClass('hidden')
})