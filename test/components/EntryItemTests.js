import expect from 'expect';
import jsDomSetUp from '../utils/jsDomSetUp';
import React from 'react/addons';
import EntryItem from '../../common/components/EntryItem';

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
    onUpdateChange: expect.createSpy()
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

      expect(input.getAttribute('class')).toBe('unfilled');
      expect(input.value).toBe(props.entry.quantity.toString());
    });

    it('should call onUpdateChange with entry id and the value as params when changed', () => {
      const { props, input } = setup();
      const value = 2;
      expect(props.onUpdateChange.calls.length).toBe(0);
      TestUtils.Simulate.change(input, { target: { value: value } });
      expect(props.onUpdateChange.calls.length).toBe(1);
      expect(props.onUpdateChange.calls[0].arguments).toEqual([props.entry.id, value]);
    });

    it('should reject calls where the value exceeds the max quantity', () => {
      const { props, input } = setup();
      const value = 78;
      expect(props.onUpdateChange.calls.length).toBe(0);
      TestUtils.Simulate.change(input, { target: { value: value } });
      expect(props.onUpdateChange.calls.length).toBe(0);
    });

    it('should reject calls where the value cannot be parsed to an int', () => {
      const { props, input } = setup();
      const value = 'ef';
      expect(props.onUpdateChange.calls.length).toBe(0);
      TestUtils.Simulate.change(input, { target: { value: value } });
      expect(props.onUpdateChange.calls.length).toBe(0);
    });
  });
});
