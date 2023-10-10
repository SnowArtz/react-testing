import React from 'react';
import { render, fireEvent, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import Like from '../like';

describe('<Like />', () => {
  test('Por defecto, el componente muestra en el párrafo el valor "Likes: 0"', () => {
    render(<Like />);
    const likesElement = screen.getByText('Likes: 0');
    expect(likesElement).toBeInTheDocument();
  });

  test('Cuando se hace clic en el botón Like, el número de likes se incremente en uno', async () => {
    render(<Like />);
    const likeButton = screen.getByText('Like');
    fireEvent.click(likeButton);
    const likesElement = screen.getByText('Likes: 1');
    expect(likesElement).toBeInTheDocument();
  });

  test('Cuando se hace clic en el botón Dislike, el número de likes se decrementa en uno', async () => {
    render(<Like />);
    const likeButton = screen.getByText('Like');
    const dislikeButton = screen.getByText('Dislike');
    fireEvent.click(likeButton);
    fireEvent.click(dislikeButton);
    const likesElement = screen.getByText('Likes: 0');
    expect(likesElement).toBeInTheDocument();
  });
});
