// Build Reducer

const buildReducerDefaultState = {
  /* Basics */
  race: "elf",
  gender: "male",
  origin: "custom",

  /* Attributes */
  attrLeft: 3,
  attrTotal: 3,
  level: 1,
  strength: 10,
  intelligence: 10,
  finesse: 10,
  constitution: 10,
  memory: 10,
  wits: 10,

  /* Civil Abilities */
  civLeft: 1,
  civTotal: 1,
  bartering: 0,
  luckyCharm: 0,
  persuasion: 0,
  loremaster: 0,
  telekinesis: 0,
  sneaking: 0,
  thievery: 0,

  /* Combat Abilities */
  comLeft: 2,
  comTotal: 2,
  dualWielding: 0,
  ranged: 0,
  singleHanded: 0,
  twoHanded: 0,
  leadership: 0,
  perseverance: 0,
  retribution: 0,
  aerotheurge: 0,
  geomancer: 0,
  huntsman: 0,
  hydrosophist: 0,
  necromancer: 0,
  polymorph: 0,
  pyrokinetic: 0,
  scoundrel: 0,
  summoning: 0,
  warfare: 0,

  /* Memory */
  memTotal: 3,

  /* Talents */
  talentsLeft: 1,
  talentsTotal: 1
};

export default (state = buildReducerDefaultState, action) => {
  
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

    default:
      return state;
  }
};
