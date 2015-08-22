import chai, { expect } from 'chai';
import { spy } from 'sinon';
import sinonChai from 'sinon-chai';
import jsDomSetUp from '../utils/jsDomSetUp';
import React from 'react/addons';
import DraftGroupPicker from '../../common/containers/DraftGroupPicker';
import DraftGroup from '../../common/components/DraftGroup';
chai.use(sinonChai);

const { TestUtils } = React.addons;

function setup() {
  const props = {
    draftGroups: [
      {
        id: 1,
        sportId: 1,
        name: 'Early-NFL',
        selected: true
      },
      {
        id: 2,
        sportId: 2,
        name: 'Midday-MLB',
        selected: true
      },
      {
        id: 3,
        sportId: 2,
        name: 'Late-MLB',
        selected: false
      },
      {
        id: 4,
        sportId: 3,
        name: 'Late-NBA',
        selected: true
      },
    ],
    onSwitchClick: spy()
  };

  const renderedComponent = TestUtils.renderIntoDocument(
    <DraftGroupPicker { ...props }/>
  );

  const h3 = TestUtils.findRenderedDOMComponentWithTag(
    renderedComponent,
    'h3'
  );

  const draftGroups = TestUtils.scryRenderedComponentsWithType(
    renderedComponent,
    DraftGroup
  );

  return {
    h3: h3.getDOMNode(),
    draftGroups
  };
}

describe('components', () => {
  jsDomSetUp();
  describe('DraftGroupPicker', () => {
    it('should render correctly', () => {
      const { h3, draftGroups } = setup();

      expect(h3.textContent).to.equal('DraftGroup Picker');
      expect(draftGroups).to.have.length(4);
    });
  });
});
