import expect from 'expect';
import jsDomSetUp from '../utils/jsDomSetUp';
import React from 'react/addons';
import AccessType from '../../common/components/AccessType';
import { VisibilityFilters } from '../../common/constants/Filters';


const { TestUtils } = React.addons;

describe('components', () => {
  jsDomSetUp();

  function setup() {
    const props = {
      accessType: VisibilityFilters.SHOW_PUBLIC,
      onSwitchClick: expect.createSpy()
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
      expect(privateListElement.getAttribute('class')).toBe('unselected');
      expect(publicListElement.getAttribute('class')).toBe('selected');
    });

    it('calls onSwitchClick with access type provided when clicked', () => {
      const { props, privateSpanElement, publicSpanElement } = setup();
      expect(props.onSwitchClick.calls.length).toBe(0);
      TestUtils.Simulate.click(privateSpanElement);
      expect(props.onSwitchClick.calls.length).toBe(1);
      expect(props.onSwitchClick.calls[0].arguments).toEqual([VisibilityFilters.SHOW_PRIVATE]);
      TestUtils.Simulate.click(publicSpanElement);
      expect(props.onSwitchClick.calls.length).toBe(2);
      expect(props.onSwitchClick.calls[1].arguments).toEqual([VisibilityFilters.SHOW_PUBLIC]);
    });
  });
});
