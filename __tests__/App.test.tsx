/**
 * @format
 */

import 'react-native';

import React from 'react';
import App from '../App';

// Note: import explicitly to use the types shiped with jest.
import {it, expect} from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer, {ReactTestRenderer} from 'react-test-renderer';

jest.useFakeTimers();

it('renders correctly', async () => {
  let tree: ReactTestRenderer | undefined;

  await renderer.act(async () => {
    tree = renderer.create(<App />);
  });

  if (tree) {
    expect(tree.toJSON()).toMatchSnapshot();
  } else {
    throw new Error('Failed to render the component');
  }
});
