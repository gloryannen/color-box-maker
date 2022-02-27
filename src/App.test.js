import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import App from './App.js';

// Smoke test
it("renders without crashing", function () {
  render(<App />);
});

// Snapshot test
it("matches snapshot", function () {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});
