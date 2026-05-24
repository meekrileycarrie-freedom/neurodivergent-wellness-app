import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import AIHelper from '../components/AIHelper';

describe('AIHelper', () => {
  it('renders system message, input, and disclaimer', () => {
    render(<AIHelper />);
    expect(screen.getByText(/AI guide/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Type your thoughts/i)).toBeInTheDocument();
    expect(screen.getByText(/cannot diagnose, treat, or intervene/i)).toBeInTheDocument();
  });

  it('sends user message and receives mock AI response', async () => {
    render(<AIHelper />);
    const input = screen.getByPlaceholderText(/Type your thoughts/i);
    fireEvent.change(input, { target: { value: 'I am sad' } });
    fireEvent.click(screen.getByText(/send/i));
    expect(screen.getByText('I am sad')).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.getByText(/grounding exercise/i)).toBeInTheDocument();
    });
  });
});
