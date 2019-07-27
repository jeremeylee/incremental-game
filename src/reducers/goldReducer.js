const goldReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT': {
      return state + 1;
    }
    default:
      return state;
  }
};

export const incrementGold = () => (
  {
    type: 'INCREMENT',
  }
);

export default goldReducer;
