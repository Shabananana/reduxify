import chai, { expect } from 'chai';
import { spy } from 'sinon';
import sinonChai from 'sinon-chai';
import jsDomSetUp from '../utils/jsDomSetUp';
import React from 'react/addons';
import EntryItem from '../../common/components/EntryItem';
chai.use(sinonChai);

const { TestUtils } = React.addons;

function setup() {
  const props = {
    entry: {
      id: 87,
      sportId: 6,
      quantity: 41,
      price: 6.50,
      maxEntries: 50
    },
    onUpdateChange: spy()
  };

  const renderedComponent = TestUtils.renderIntoDocument(
    <EntryItem { ...props }/>
  );

  const input = TestUtils.findRenderedDOMComponentWithTag(
    renderedComponent,
    'input'
  );

  return {
    props,
    renderedComponent,
    input: input.getDOMNode()
  };
}

describe('components', () => {
  jsDomSetUp();
  describe('EntryItem', () => {
    it('should render correctly', () => {
      const { props, input } = setup();

      expect(input.value).to.equal(props.entry.quantity.toString());
    });

    it('should call onUpdateChange with entry id and the value as params when changed', () => {
      const { props, input } = setup();
      const value = 2;
      expect(props.onUpdateChange).to.not.have.been.called;
      TestUtils.Simulate.change(input, { target: { value: value } });
      expect(props.onUpdateChange).to.have.been.calledWith(props.entry.id, value);
    });

    it('should reject calls where the value exceeds the max quantity', () => {
      const { props, input } = setup();
      const value = 78;
      expect(props.onUpdateChange).to.not.have.been.called;
      TestUtils.Simulate.change(input, { target: { value: value } });
      expect(props.onUpdateChange).to.not.have.been.called;
    });

    it('should reject calls where the value cannot be parsed to an int', () => {
      const { props, input } = setup();
      const value = 'ef';
      expect(props.onUpdateChange).to.not.have.been.called;
      TestUtils.Simulate.change(input, { target: { value: value } });
      expect(props.onUpdateChange).to.not.have.been.called;
    });
  });
});
