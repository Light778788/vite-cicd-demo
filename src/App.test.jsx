import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  it('renders the main heading', () => {
    render(<App />);
    expect(screen.getByText(/Vite CI\/CD Demo/i)).toBeInTheDocument();
  });

  it('displays environment information', () => {
    render(<App />);
    expect(screen.getByText(/Environment:/i)).toBeInTheDocument();
    expect(screen.getByText(/API URL:/i)).toBeInTheDocument();
  });

  it('increments counter on button click', () => {
    render(<App />);
    const button = screen.getByRole('button', { name: /count is 0/i });
    
    fireEvent.click(button);
    expect(screen.getByText(/count is 1/i)).toBeInTheDocument();
    
    fireEvent.click(button);
    expect(screen.getByText(/count is 2/i)).toBeInTheDocument();
  });

  it('shows deployment success message', () => {
    render(<App />);
    expect(screen.getByText(/Deployed successfully via GitHub Actions!/i)).toBeInTheDocument();
  });
});