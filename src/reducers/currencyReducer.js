const currencyReducer = (state = 0, action) => {
  console.log(action);
  switch (action.type) {
    case 'INCREMENT': {
      return action.currency;
    }
    default:
      return state;
  }
};

export const updateCurrency = currency => (
  {
    type: 'INCREMENT',
    currency,
  }
);

export default currencyReducer;
