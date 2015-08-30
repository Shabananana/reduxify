export const styles = {
  base: {
    backgroundColor: 'lightcoral',
    border: 0,
    borderRadius: 4,
    color: 'white',
    padding: '1em',
    marginLeft: '2em',

    ':hover': {
      backgroundColor: 'deeppink'
    },

    ':focus': {
      backgroundColor: 'lightsalmon'
    },

    ':active': {
      backgroundColor: 'salmon'
    }
  },
  remove: {
    backgroundColor: 'violet',

    ':hover': {
      backgroundColor: 'orchid'
    },

    ':focus': {
      backgroundColor: 'lightorchid'
    },

    ':active': {
      backgroundColor: 'rebeccapurple'
    }
  }
};
