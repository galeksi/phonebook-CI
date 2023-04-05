import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Persons from './Person';

const persons = [
  {
    name: 'Aleksi Rendel',
    number: '123-3237',
    id: '636e3d9d9706f28096aeb606',
  },
  {
    name: 'Arnold Schwarzenegger',
    number: '10-33456',
    id: '636e4098aec0e5466fe25a78',
  },
  {
    name: 'Peter Pan',
    number: '123-4567',
    id: '642d5bf981a1af5607271555',
  },
];

const mockHandler = jest.fn();

test('renders content', () => {
  render(<Persons personsToShow={persons} deletePerson={mockHandler} />);

  const name1 = screen.getByText('Aleksi Rendel');
  const name2 = screen.getByText('Arnold Schwarzenegger');
  const name3 = screen.getByText('Peter Pan');

  expect(name1).toBeDefined();
  expect(name2).toBeDefined();
  expect(name3).toBeDefined();
});
