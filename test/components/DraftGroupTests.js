import chai, { expect } from 'chai';
import { spy } from 'sinon';
import sinonChai from 'sinon-chai';
import jsDomSetUp from '../utils/jsDomSetUp';
import React from 'react/addons';
import DrafGroup from '../../common/components/DraftGroup';
chai.use(sinonChai);

const { TestUtils } = React.addons;

function setup() {
  const props = {
    draftGroup: {
      id: 5,
      sportId: 3,
      name: 'Test Draft Group 34343',
      selected: false
    },
    onSwitchClick: spy()
  };

  const renderedComponent = TestUtils.renderIntoDocument(
    <DrafGroup { ...props }/>
  );

  const li = TestUtils.findRenderedDOMComponentWithTag(
    renderedComponent,
    'li'
  );

  const span = TestUtils.findRenderedDOMComponentWithTag(
    renderedComponent,
    'span'
  );

  return {
    props,
    renderedComponent,
    li: li.getDOMNode(),
    span: span.getDOMNode()
  };
}

describe('components', () => {
  jsDomSetUp();
  describe('DraftGroup', () => {
    it('should render correctly', () => {
      const { props, li, span } = setup();

      expect(li.getAttribute('class')).to.equal('unselected');
      expect(span.textContent).to.equal(props.draftGroup.name);
    });

    it('should call onSwitchClick with draftGroup id and sportId as params when clicked', () => {
      const { props, span } = setup();
      expect(props.onSwitchClick).to.not.have.been.called;
      TestUtils.Simulate.click(span);
      expect(props.onSwitchClick).to.have.been.calledWith(props.draftGroup.id, props.draftGroup.sportId);
    });
  });
});
