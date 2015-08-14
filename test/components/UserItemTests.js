import expect from 'expect';
import jsdomReact from '../utils/jsdomReact';
import React from 'react/addons';
import UserItem from '../../common/components/UserItem';

const { TestUtils } = React.addons;

function setup() {
  let props = {
    user: {
      id: 3,
      userName: 'Shabananana'
    },
    onRemoveClick: expect.createSpy()
  };

  let renderer = TestUtils.createRenderer();
  renderer.render(<UserItem {...props} />);
  let output = renderer.getRenderOutput();

  return {
    props: props,
    output: output,
    renderer: renderer
  };
}

describe('components', () => {
  jsdomReact();

  describe('UserItem', () => {
    it('should render correctly', () => {
      const { output, props } = setup();

      expect(output.type).toBe('li');
      let [ span, button ] = output.props.children;
      expect(span).toEqual(<span>Shabananana</span>);
    });

    it('should call onRemoveClick with userId as a param when clicked', () => {
      //cannot actually simulate dom events with shallow rendering for now
      // -_______________________________________________________________-
      //we can access react events through the _store.props property
      //this is hacky and should only be used until simulated events are supported by shallow rendering
      //for a workaround, we call the 'onClick' property manually
      //this essentially simulates a click, (more or less)
      //use Function.prototype.call() with the the this parameter being the component
      const { output, props } = setup();
      const button = output.props.children.filter(item => item.type === 'button')[0];
      expect(props.onRemoveClick.calls.length).toBe(0);
      button._store.props.onClick.call(output);
      expect(props.onRemoveClick.calls.length).toBe(1);
      expect(props.onRemoveClick.calls[0].arguments).toEqual([props.user.id]);
    });
  });
});
