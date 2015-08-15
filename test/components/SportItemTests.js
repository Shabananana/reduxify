import expect from 'expect';
import jsDomSetUp from '../utils/jsDomSetUp';
import React from 'react/addons';
import SportItem from '../../common/components/SportItem';

const { TestUtils } = React.addons;

function setup() {
  const props = {
    sport: {
      id: 3,
      name: 'NBA',
      selected: false
    },
    onSwitchClick: expect.createSpy()
  };

  const renderedComponent = TestUtils.renderIntoDocument(
    <SportItem { ...props }/>
  );
  const [ li ] = TestUtils.scryRenderedDOMComponentsWithTag(
    renderedComponent,
    'li'
  );

  const [ span ] = TestUtils.scryRenderedDOMComponentsWithTag(
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

      expect(li.getAttribute('class')).toBe('unselected');
      expect(span.textContent).toEqual('NBA');
    });

    it('should call onSwitchClick with sportId as a param when clicked', () => {
      const { props, span } = setup();
      expect(props.onSwitchClick.calls.length).toBe(0);
      TestUtils.Simulate.click(span);
      expect(props.onSwitchClick.calls.length).toBe(1);
      expect(props.onSwitchClick.calls[0].arguments).toEqual([props.sport.id]);
    });
  });
});
