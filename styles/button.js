import * as colors from './colors';

export const styles = {
  base: {
    backgroundColor: colors.PRIMARY,
    border: 0,
    borderRadius: 4,
    color: colors.WHITE,
    padding: '1em',
    marginLeft: '2em',

    ':hover': {
      backgroundColor: colors.PRIMARY_DARK_ACCENT
    },

    ':focus': {
      backgroundColor: colors.PRIMARY_LIGHT_ACCENT
    },

    ':active': {
      backgroundColor: colors.PRIMARY_LIGHT_ACCENT
    }
  },
  remove: {
    backgroundColor: colors.SECONDARY,

    ':hover': {
      backgroundColor: colors.SECONDARY_DARK_ACCENT
    },

    ':focus': {
      backgroundColor: colors.SECONDARY_LIGHT_ACCENT
    },

    ':active': {
      backgroundColor: colors.SECONDARY_LIGHT_ACCENT
    }
  }
};
