import SummaryForm from './SummaryForm'
import { render, fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

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

    fireEvent.click(checkboxEl)

    expect(checkboxEl).toBeChecked()
    expect(submitBtn).toBeEnabled()

    fireEvent.click(checkboxEl)

    expect(checkboxEl).not.toBeChecked()
    expect(submitBtn).toBeDisabled()
});