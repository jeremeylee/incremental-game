const navigationReducer = (state = 'home', action) => {
  switch (action.type) {
    case '1':
      return 'home';
    case '2':
      return 'shop';
    default:
      return state;
  }
};

export const navigate = key => (
  {
    type: key,
  }
);

export default navigationReducer;
