import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import XModal from './XModal';

describe('XModal Component', () => {
    test('Validates email input field', () => {
        render(<XModal />);

        // Open the modal
        const openButton = screen.getByText('Open Form');
        fireEvent.click(openButton);

        // Get the email input field and enter an invalid email
        const emailInput = screen.getByLabelText('Email:'); // Use getByLabelText for accessibility
        fireEvent.change(emailInput, { target: { value: 'invalid-email' } });

        // Click the submit button
        const submitButton = screen.getByText('Submit');
        fireEvent.click(submitButton);

        // Check if the alert message is displayed
        expect(window.alert).toHaveBeenCalledWith('Invalid email. Please check your email address.');
    });
});
