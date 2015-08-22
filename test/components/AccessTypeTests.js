import chai, { expect } from 'chai';
import { spy } from 'sinon';
import sinonChai from 'sinon-chai';
import jsDomSetUp from '../utils/jsDomSetUp';
import React from 'react/addons';
import AccessType from '../../common/components/AccessType';
import { VisibilityFilters } from '../../common/constants/Filters';
chai.use(sinonChai);

const { TestUtils } = React.addons;

describe('components', () => {
  jsDomSetUp();

  function setup() {
    const props = {
      accessType: VisibilityFilters.SHOW_PUBLIC,
      onSwitchClick: spy()
    };

    const renderedComponent = TestUtils.renderIntoDocument(
      <AccessType { ...props }/>
    );

    const [ privateListElement, publicListElement ] = TestUtils.scryRenderedDOMComponentsWithTag(
      renderedComponent,
      'li'
    );

    const [ privateSpanElement, publicSpanElement ] = TestUtils.scryRenderedDOMComponentsWithTag(
      renderedComponent,
      'span'
    );

    return {
      props,
      renderedComponent,
      privateListElement: privateListElement.getDOMNode(),
      publicListElement: publicListElement.getDOMNode(),
      privateSpanElement: privateSpanElement.getDOMNode(),
      publicSpanElement: publicSpanElement.getDOMNode()
    };
  }

  describe('AccessType', () => {
    it('should render correctly', () => {
      const { privateListElement, publicListElement } = setup();
      expect(privateListElement.getAttribute('class')).to.equal('unselected');
      expect(publicListElement.getAttribute('class')).to.equal('selected');
    });

    it('calls onSwitchClick with access type provided when clicked', () => {
      const { props, privateSpanElement, publicSpanElement } = setup();
      expect(props.onSwitchClick).to.have.not.been.called;
      TestUtils.Simulate.click(privateSpanElement);
      expect(props.onSwitchClick).to.have.been.calledWith(VisibilityFilters.SHOW_PRIVATE)
      TestUtils.Simulate.click(publicSpanElement);
      expect(props.onSwitchClick).to.have.been.calledTwice;
      expect(props.onSwitchClick).to.have.been.calledWith(VisibilityFilters.SHOW_PUBLIC);
    });
  });
});
