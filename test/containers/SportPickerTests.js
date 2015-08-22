import chai, { expect } from 'chai';
import { spy } from 'sinon';
import sinonChai from 'sinon-chai';
import jsDomSetUp from '../utils/jsDomSetUp';
import React from 'react/addons';
import SportPicker from '../../common/containers/SportPicker';
import SportItem from '../../common/components/SportItem';
import { initialSports } from '../../common/constants/InitialState';
chai.use(sinonChai);

const { TestUtils } = React.addons;

function setup() {
  const props = {
    sports: initialSports,
    onSwitchClick: spy()
  };

  const renderedComponent = TestUtils.renderIntoDocument(
    <SportPicker { ...props }/>
  );

  const h3 = TestUtils.findRenderedDOMComponentWithTag(
    renderedComponent,
    'h3'
  );

  const sportItems = TestUtils.scryRenderedComponentsWithType(
    renderedComponent,
    SportItem
  );

  return {
    h3: h3.getDOMNode(),
    sportItems
  };
}

describe('components', () => {
  jsDomSetUp();
  describe('SportPicker', () => {
    it('should render correctly', () => {
      const { h3, sportItems } = setup();

      expect(h3.textContent).to.equal('Sport Picker');
      expect(sportItems).to.have.length(3);
    });
  });
});
