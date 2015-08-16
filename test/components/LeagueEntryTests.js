import expect from 'expect';
import jsDomSetUp from '../utils/jsDomSetUp';
import React from 'react/addons';
import LeagueEntry from '../../common/components/LeagueEntry';
import { LeagueEntryPrizeStructures, LeagueEntrySizes } from '../../common/constants/StaticData';

const { TestUtils } = React.addons;

function setup() {
  const props = {
    leagueEntry: {
      name: 'testing a league entry!!!!',
      sportId: 7,
      size: 4,
      price: 15,
      prizeStructure: LeagueEntryPrizeStructures.get('TOP_2_WIN')
    },
    entries: [
      {
        id: 8,
        sportId: 3,
        quantity: 0,
        price: 15,
        maxEntries: 50
      },
      {
        id: 7,
        sportId: 3,
        quantity: 0,
        price: 40,
        maxEntries: 50
      }
    ],
    onUpdateChange: expect.createSpy()
  };

  const renderedComponent = TestUtils.renderIntoDocument(
    <LeagueEntry { ...props }/>
  );

  const h3 = TestUtils.findRenderedDOMComponentWithTag(
    renderedComponent,
    'h3'
  );

  const input = TestUtils.findRenderedDOMComponentWithTag(
    renderedComponent,
    'input'
  );

  const [ sizeSelectList, priceSelectList, prizeTypeSelectList ] = TestUtils.scryRenderedDOMComponentsWithTag(
    renderedComponent,
    'select'
  );


  return {
    props,
    renderedComponent,
    h3: h3.getDOMNode(),
    input: input.getDOMNode(),
    sizeSelectList: sizeSelectList.getDOMNode(),
    priceSelectList: priceSelectList.getDOMNode(),
    prizeTypeSelectList: prizeTypeSelectList.getDOMNode()
  };
}

describe('components', () => {
  jsDomSetUp();
  describe('LeagueEntryItem', () => {
    it('should render correctly', () => {
      const { props, h3, sizeSelectList, priceSelectList, prizeTypeSelectList } = setup();

      expect(h3.textContent).toBe('League Entry Picker');
      expect(sizeSelectList.value).toBe(props.leagueEntry.size.toString());
      expect(priceSelectList.value).toBe(props.leagueEntry.price.toString());
      expect(prizeTypeSelectList.value).toBe(props.leagueEntry.prizeStructure);

    });
  });
});
