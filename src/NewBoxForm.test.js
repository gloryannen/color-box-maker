import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import NewBoxForm from './NewBoxForm.js';

// Smoke test
it("renders without crashing", function () {
  render(<NewBoxForm />);
});

// Snapshot test
it("matches snapshot", function () {
  const { asFragment } = render(<NewBoxForm />);
  expect(asFragment()).toMatchSnapshot();
});
