import expect from 'expect';
import jsDomSetUp from '../utils/jsDomSetUp';
import React from 'react/addons';
import UserItem from '../../common/components/UserItem';

const { TestUtils } = React.addons;

function setup() {
  const props = {
    user: {
      id: 3,
      userName: 'Shabananana'
    },
    onRemoveClick: expect.createSpy()
  };

  const renderedComponent = TestUtils.renderIntoDocument(
    <UserItem { ...props }/>
  );

  const span = TestUtils.findRenderedDOMComponentWithTag(
    renderedComponent,
    'span'
  );

  const button = TestUtils.findRenderedDOMComponentWithTag(
    renderedComponent,
    'button'
  );

  return {
    props,
    span: span.getDOMNode(),
    button: button.getDOMNode()
  };
}

describe('components', () => {
  jsDomSetUp();

  describe('UserItem', () => {
    it('should render correctly', () => {
      const { props, span, button } = setup();

      expect(span.textContent).toBe(props.user.userName);
      //expect(button.getAttribute('onclick')).toEqual(props.onSwitchClick);
    });

    it('should call onRemoveClick with userId as a param when clicked', () => {
      const { props, button } = setup();
      expect(props.onRemoveClick.calls.length).toBe(0);
      TestUtils.Simulate.click(button);
      expect(props.onRemoveClick.calls.length).toBe(1);
      expect(props.onRemoveClick.calls[0].arguments).toEqual([props.user.id]);
    });
  });
});
