import chai, { expect } from 'chai';
import { spy } from 'sinon';
import sinonChai from 'sinon-chai';
import jsDomSetUp from '../utils/jsDomSetUp';
import React from 'react/addons';
import EntryPicker from '../../common/containers/EntryPicker';
chai.use(sinonChai);

const { TestUtils } = React.addons;

function setup() {
  const props = {
    entries: [
      {
        id: 87,
        sportId: 6,
        quantity: 41,
        price: 6.50,
        maxEntries: 50
      },
      {
        id: 22,
        sportId: 6,
        quantity: 3,
        price: 456,
        maxEntries: 50
      }
    ],
    onUpdateChange: spy(),
    onClear: spy()
  };

  const renderedComponent = TestUtils.renderIntoDocument(
    <EntryPicker { ...props }/>
  );

  const h3 = TestUtils.findRenderedDOMComponentWithTag(
    renderedComponent,
    'h3'
  );

  const button = TestUtils.findRenderedDOMComponentWithTag(
    renderedComponent,
    'button'
  );

  return {
    props,
    renderedComponent,
    h3: h3.getDOMNode(),
    button: button.getDOMNode()
  };
}

describe('components', () => {
  jsDomSetUp();
  describe('EntryPicker', () => {
    it('should render correctly', () => {
      const { props, h3 } = setup();

      expect(h3.textContent).to.equal('Entry Picker');
    });

    it('should call onClear with sport id as a param when button is clicked', () => {
      const { props, button } = setup();
      const { sportId } = props.entries[0];

      expect(props.onClear).to.not.have.been.called;
      TestUtils.Simulate.click(button);
      expect(props.onClear).to.have.been.calledWith(sportId);
    });
  });
});
