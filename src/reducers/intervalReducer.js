const intervalReducer = (state = 0, action) => {
  if (action.type === 'NEW') {
    return state + action.rate;
  }

  return state;
};

export const updateInterval = rate => (
  {
    type: 'NEW',
    rate,
  }
);

export default intervalReducer;
