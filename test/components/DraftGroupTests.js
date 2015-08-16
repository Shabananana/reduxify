import expect from 'expect';
import jsDomSetUp from '../utils/jsDomSetUp';
import React from 'react/addons';
import DrafGroup from '../../common/components/DraftGroup';

const { TestUtils } = React.addons;

function setup() {
  const props = {
    draftGroup: {
      id: 5,
      sportId: 3,
      name: 'Test Draft Group 34343',
      selected: false
    },
    onSwitchClick: expect.createSpy()
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

      expect(li.getAttribute('class')).toBe('unselected');
      expect(span.textContent).toBe(props.draftGroup.name);
    });

    it('should call onSwitchClick with draftGroup id and sportId as params when clicked', () => {
      const { props, span } = setup();
      expect(props.onSwitchClick.calls.length).toBe(0);
      TestUtils.Simulate.click(span);
      expect(props.onSwitchClick.calls.length).toBe(1);
      expect(props.onSwitchClick.calls[0].arguments).toEqual([props.draftGroup.id, props.draftGroup.sportId]);
    });
  });
});
