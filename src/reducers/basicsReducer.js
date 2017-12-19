// Basics Reducer

const basicsReducerDefaultState = {
  race: "dwarf",
  gender: "male",
  origin: "custom",
};

export default (state = basicsReducerDefaultState, action) => {
  switch (action.type) {

    case 'CHANGE_RACE':
      return {
        ...state,
        race: action.race
      };

    case 'CHANGE_GENDER':
      return {
        ...state,
        gender: action.gender
      };

    case 'CHANGE_ORIGIN':
      if (action.race && action.gender) {
        return {
          ...state,
          race: action.race,
          gender: action.gender,
          origin: action.origin
        };
      } else {
        return {
          ...state,
          origin: action.origin
        };
      }
      
    case 'RESET_BUILD':
      return basicsReducerDefaultState;

    default:
      return state;
  }
};
