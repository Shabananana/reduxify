import chai, { expect } from 'chai';
import { spy } from 'sinon';
import sinonChai from 'sinon-chai';
import jsDomSetUp from '../utils/jsDomSetUp';
import React from 'react/addons';
import ContestType from '../../common/components/ContestType';
import { VisibilityFilters } from '../../common/constants/Filters';
chai.use(sinonChai);

const { TestUtils } = React.addons;

describe('components', () => {
  jsDomSetUp();

  function setup() {
    const props = {
      contestType: VisibilityFilters.SHOW_H2H,
      onSwitchClick: spy()
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
      expect(headToHeadListElement.getAttribute('class')).to.equal('selected');
      expect(leagueListElement.getAttribute('class')).to.equal('unselected');
    });

    it('calls onSwitchClick with contest type provided when clicked', () => {
      const { props, headToHeadspanElement, leagueSpanElement } = setup();
      expect(props.onSwitchClick).to.have.not.been.called;
      TestUtils.Simulate.click(leagueSpanElement);
      expect(props.onSwitchClick).to.have.been.calledWith(VisibilityFilters.SHOW_LEAGUE);
      TestUtils.Simulate.click(headToHeadspanElement);
      expect(props.onSwitchClick).to.have.been.calledTwice;
      expect(props.onSwitchClick).to.have.been.calledWith(VisibilityFilters.SHOW_H2H);
    });
  });
});
