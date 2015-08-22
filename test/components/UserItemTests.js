import chai, { expect } from 'chai';
import { spy } from 'sinon';
import sinonChai from 'sinon-chai';
import jsDomSetUp from '../utils/jsDomSetUp';
import React from 'react/addons';
import UserItem from '../../common/components/UserItem';
chai.use(sinonChai);

const { TestUtils } = React.addons;

function setup() {
  const props = {
    user: {
      id: 'h3Er_fe',
      userName: 'Shabananana'
    },
    onRemoveClick: spy()
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

      expect(span.textContent).to.equal(props.user.userName);
    });

    it('should call onRemoveClick with userId as a param when clicked', () => {
      const { props, button } = setup();
      expect(props.onRemoveClick).to.not.have.been.called;
      TestUtils.Simulate.click(button);
      expect(props.onRemoveClick).to.have.been.calledWith(props.user.id);
    });
  });
});
