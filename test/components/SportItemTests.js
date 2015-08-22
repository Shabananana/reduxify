import chai, { expect } from 'chai';
import { spy } from 'sinon';
import sinonChai from 'sinon-chai';
import jsDomSetUp from '../utils/jsDomSetUp';
import React from 'react/addons';
import SportItem from '../../common/components/SportItem';
chai.use(sinonChai);

const { TestUtils } = React.addons;

function setup() {
  const props = {
    sport: {
      id: 3,
      name: 'NBA',
      selected: false
    },
    onSwitchClick: spy()
  };

  const renderedComponent = TestUtils.renderIntoDocument(
    <SportItem { ...props }/>
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
  describe('SportItem', () => {
    it('should render correctly', () => {
      const { li, span } = setup();

      expect(li.getAttribute('class')).to.equal('unselected');
      expect(span.textContent).to.equal('NBA');
    });

    it('should call onSwitchClick with sportId as a param when clicked', () => {
      const { props, span } = setup();
      expect(props.onSwitchClick).to.have.not.been.called;
      TestUtils.Simulate.click(span);
      expect(props.onSwitchClick).to.have.been.calledWith(props.sport.id);
    });
  });
});
