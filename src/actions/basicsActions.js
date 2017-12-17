// CHANGE_RACE
export const changeRace = (race) => ({
  type: 'CHANGE_RACE',
  race
});

export const changeGender = (gender) => ({
  type: 'CHANGE_GENDER',
  gender
});

export const changeOrigin = (origin) => {

  switch (origin) {

    case "custom":
      return {
        type: 'CHANGE_ORIGIN',
        origin
      };
      
    case "ifan":
      return {
        type: 'CHANGE_ORIGIN',
        race: 'human',
        gender: 'male',
        origin
      };

    case "redprince":
      return {
        type: 'CHANGE_ORIGIN',
        race: 'lizard',
        gender: 'male',
        origin
      };

    case "sebille":
      return {
        type: 'CHANGE_ORIGIN',
        race: 'elf',
        gender: 'female',
        origin
      };

    case "lohse":
      return {
        type: 'CHANGE_ORIGIN',
        race: 'human',
        gender: 'female',
        origin
      };

    case "beast":
      return {
        type: 'CHANGE_ORIGIN',
        race: 'dwarf',
        gender: 'male',
        origin
      };

    case "fane":
      return {
        type: 'CHANGE_ORIGIN',
        race: 'undeadhuman',
        gender: 'male',
        origin
      };    
  }
};