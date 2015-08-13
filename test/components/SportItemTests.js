import expect from 'expect';
import jsdomReact from '../utils/jsdomReact';
import React from 'react/addons';
import SportItem from '../../common/components/SportItem';

const { TestUtils } = React.addons;

function setup() {
  let props = {
    sport: {
      id: 3,
      name: 'NBA',
      selected: false
    },
    onSwitchClick: expect.createSpy()
  };

  let renderer = TestUtils.createRenderer();
  renderer.render(<SportItem {...props} />);
  let output = renderer.getRenderOutput();

  return {
    props: props,
    output: output,
    renderer: renderer
  };
}

describe('components', () => {
  jsdomReact();

  describe('SportItem', () => {
    it('should render correctly', () => {
      const { output } = setup();

      expect(output.type).toBe('li');
      expect(output.props.className).toBe('unselected');
      expect(output.props.children).toEqual(<span>NBA</span>);

    });

    it('should call onSwitchClick with sportId as a param when clicked', () => {
      //cannot actually simulate dom events with shallow rendering for now
      // -_______________________________________________________________-
      //we can access react events through the _store.props property
      //this is hacky and should only be used until simulated events are supported by shallow rendering
      //for a workaround, we call the 'onClick' property manually
      //this essentially simulates a click, (more or less)
      //use Function.prototype.call() with the the this parameter being the component
      const { output, props } = setup();
      expect(props.onSwitchClick.calls.length).toBe(0);
      output._store.props.onClick.call(output);
      expect(props.onSwitchClick.calls.length).toBe(1);
      expect(props.onSwitchClick.calls[0].arguments).toEqual([props.sport.id]);
    });
  });
});
