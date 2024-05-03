const initialState = {
    company: '',
    category: '',
    rating: '',
    priceRange: '',
    availability: '',
  };
  
  const filterReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'UPDATE_FILTERS':
        return { ...state, ...action.payload };
      default:
        return state;
    }
  };
  
  export default filterReducer;