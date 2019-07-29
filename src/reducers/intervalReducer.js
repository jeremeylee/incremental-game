const intervalReducer = (state = null, action) => {
  if (action.type === 'NEW') {
    return action.intervalID;
  }

  return state;
};

export const updateInterval = intervalID => (
  {
    type: 'NEW',
    intervalID,
  }
);

export default intervalReducer;
