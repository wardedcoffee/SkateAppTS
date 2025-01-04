import * as React from 'react';
import renderer from 'react-test-renderer';

import { MonoText } from '../StyledText';

it(`renders correctly`, () => {
  const tree = renderer.create(<MonoText>Snapshot test!</MonoText>, {
    createNodeMock: (element) => {
      return document.createElement(element.type);
    }
  }).toJSON();

  expect(tree).toMatchSnapshot();
});