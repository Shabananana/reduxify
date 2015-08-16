import expect from 'expect';
import jsDomSetUp from '../utils/jsDomSetUp';
import React from 'react/addons';
import ContestType from '../../common/components/ContestType';
import { VisibilityFilters } from '../../common/constants/Filters';


const { TestUtils } = React.addons;

describe('components', () => {
  jsDomSetUp();

  function setup() {
    const props = {
      contestType: VisibilityFilters.SHOW_H2H,
      onSwitchClick: expect.createSpy()
    };

    const renderedComponent = TestUtils.renderIntoDocument(
      <ContestType { ...props }/>
    );

    const [ headToHeadListElement, leagueListElement ] = TestUtils.scryRenderedDOMComponentsWithTag(
      renderedComponent,
      'li'
    );

    const [ headToHeadspanElement, leagueSpanElement ] = TestUtils.scryRenderedDOMComponentsWithTag(
      renderedComponent,
      'span'
    );

    return {
      props,
      renderedComponent,
      headToHeadListElement: headToHeadListElement.getDOMNode(),
      leagueListElement: leagueListElement.getDOMNode(),
      headToHeadspanElement: headToHeadspanElement.getDOMNode(),
      leagueSpanElement: leagueSpanElement.getDOMNode()
    };
  }

  describe('ContestType', () => {
    it('should render correctly', () => {
      const { headToHeadListElement, leagueListElement } = setup();
      expect(headToHeadListElement.getAttribute('class')).toBe('selected');
      expect(leagueListElement.getAttribute('class')).toBe('unselected');
    });

    it('calls onSwitchClick with contest type provided when clicked', () => {
      const { props, headToHeadspanElement, leagueSpanElement } = setup();
      expect(props.onSwitchClick.calls.length).toBe(0);
      TestUtils.Simulate.click(leagueSpanElement);
      expect(props.onSwitchClick.calls.length).toBe(1);
      expect(props.onSwitchClick.calls[0].arguments).toEqual([VisibilityFilters.SHOW_LEAGUE]);
      TestUtils.Simulate.click(headToHeadspanElement);
      expect(props.onSwitchClick.calls.length).toBe(2);
      expect(props.onSwitchClick.calls[1].arguments).toEqual([VisibilityFilters.SHOW_H2H]);
    });
  });
});
