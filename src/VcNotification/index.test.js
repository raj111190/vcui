import { shallow } from 'enzyme';
import React from 'react';
import { IconButton, Snackbar, SnackbarContent } from '@material-ui/core';
import { VcNotification } from '../index';

describe('VCNotification', () => {
  it('should render without errors', () => {
    const component = shallow(<VcNotification />);
    expect(component).toBeDefined();
  });

  it('should render all the right message variant', () => {
    const info = shallow(
      <VcNotification
        message="Info message"
        variant="info"
        open
        position={{ vertical: 'top', horizontal: 'center' }}
      />
    );
    const snackBar = info.find(Snackbar).dive();
    expect(snackBar.prop('anchorOrigin')).toEqual({
      vertical: 'top',
      horizontal: 'center',
    });
    expect(snackBar.prop('open')).toEqual(true);
    expect(snackBar.prop('autoHideDuration')).toEqual(6000);

    const content = snackBar
      .children()
      .at(0)
      .dive();
    expect(content.prop('variant')).toEqual('info');
    expect(content.prop('message')).toEqual('Info message');

    const message = content
      .dive()
      .find(SnackbarContent)
      .dive()
      .dive();
    expect(message).toBeDefined();
    expect(message.length).toEqual(1);
  });

  it('should close the message', () => {
    const closeMock = jest.fn();
    const info = shallow(
      <VcNotification
        message="Info message"
        variant="info"
        open
        position={{ vertical: 'top', horizontal: 'center' }}
        onClose={closeMock}
      />
    );
    const snackBar = info.find(Snackbar).dive();
    const content = snackBar
      .children()
      .at(0)
      .dive()
      .dive()
      .find(SnackbarContent)
      .dive()
      .dive();

    const closeBtn = content.find(IconButton);
    closeBtn.simulate('click');
    expect(closeMock.mock.calls.length).toEqual(1);
  });
});
