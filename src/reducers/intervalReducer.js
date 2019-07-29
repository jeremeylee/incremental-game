const intervalReducer = (state = 100, action) => {
  if (action.type === 'NEW') {
    const newInterval = state + action.newInterval;
    return newInterval;
  } else {
    return state;
  }
};

export const updateInterval = value => (
  {
    type: 'NEW',
    newInterval: value,
  }
);

export default intervalReducer;
