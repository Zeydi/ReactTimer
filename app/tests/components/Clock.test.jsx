import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';

import  Clock  from 'Clock';

describe('CLock', () => {
  it('should exist', () => {
    expect(Clock).toExist();
  });
  it('should format seconds', () => {
    var clock = TestUtils.renderIntoDocument(<Clock/>);
    const sec = 615;
    const expected = '10:15';
    const actual = clock.formatSeconds(sec)
    expect(actual).toBe(expected);

  })
});
