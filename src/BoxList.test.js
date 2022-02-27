import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import BoxList from './BoxList.js';

// Smoke test
it('renders without crashing', function () {
  render(<BoxList />);
});

// Snapshot test
it('matches snapshot', function () {
  const { asFragment } = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
});

// Test box making
it('Creates a box', function () {
  const { queryByText, getByPlaceholderText, getByText } = render(<BoxList />);

  // Check that there isn't a box already in the BoxList component
  expect(queryByText('X')).not.toBeInTheDocument();

  // Adds box to BoxList
  const backgroundColor = getByPlaceholderText('Color');
  const width = getByPlaceholderText('Width(px)');
  const height = getByPlaceholderText('Height(px)');
  fireEvent.change(backgroundColor, { target: { value: 'blue' } });
  fireEvent.change(width, { target: { value: '500' } });
  fireEvent.change(height, { target: { value: '500' } });
  const button = getByText('Create Box');
  fireEvent.click(button);
})

// Test box removal
it('Remove a box', function () {
  const { getByPlaceholderText, getByText } = render(<BoxList />);

  //  Adds box to BoxList
  const backgroundColor = getByPlaceholderText('Color');
  const width = getByPlaceholderText('Width(px)');
  const height = getByPlaceholderText('Height(px)');
  fireEvent.change(backgroundColor, { target: { value: 'blue' } });
  fireEvent.change(width, { target: { value: '500' } });
  fireEvent.change(height, { target: { value: '500' } });
  const button = getByText('Create Box');
  fireEvent.click(button);

  // Checks box is removed
  const removeBox = getByText('X');
  fireEvent.click(removeBox)
  expect(removeBox).not.toBeInTheDocument();
})