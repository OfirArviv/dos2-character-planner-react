// Statistics Reducer

const statisticsReducerDefaultState = {
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

export default (state = statisticsReducerDefaultState, action) => {
  switch (action.type) {

    case 'LEVEL_UP':
      if (state.level === 1 || state.level === 5 || state.level === 9 || state.level === 13 || state.level === 17 || state.level === 21 || state.level === 25) {
        return {
          ...state,
          level: state.level + 1,
          attrLeft: state.attrLeft + 2,
          attrTotal: state.attrTotal + 2,
          civLeft: state.civLeft + 1,
          civTotal: state.civTotal + 1
        } 
      }
      else {
        return {
          ...state,
          level: state.level + 1,
          attrLeft: state.attrLeft + 2,
          attrTotal: state.attrTotal + 2
        } 
      }
    case 'LEVEL_DOWN':
      if (state.level === 2 || state.level === 6 || state.level === 10 || state.level === 14 || state.level === 18 || state.level === 22 || state.level === 26) {
        return {
          ...state,
          level: state.level - 1,
          attrLeft: state.attrLeft - 2,
          attrTotal: state.attrTotal - 2,
          civLeft: state.civLeft - 1,
          civTotal: state.civTotal - 1
        } 
      }
      else {
        return {
          ...state,
          level: state.level - 1,
          attrLeft: state.attrLeft - 2,
          attrTotal: state.attrTotal - 2
        } 
      }
    case 'STRENGTH_UP':
      return {
        ...state,
        strength: state.strength + 1,
        attrLeft: state.attrLeft - 1
      }    
    case 'STRENGTH_DOWN':
      return {
        ...state,
        strength: state.strength - 1,
        attrLeft: state.attrLeft + 1
      }  
    case 'INTELLIGENCE_UP':
      return {
        ...state,
        intelligence: state.intelligence + 1,
        attrLeft: state.attrLeft - 1
      }    
    case 'INTELLIGENCE_DOWN':
      return {
        ...state,
        intelligence: state.intelligence - 1,
        attrLeft: state.attrLeft + 1
      }
    case 'FINESSE_UP':
      return {
        ...state,
        finesse: state.finesse + 1,
        attrLeft: state.attrLeft - 1
      }    
    case 'FINESSE_DOWN':
      return {
        ...state,
        finesse: state.finesse - 1,
        attrLeft: state.attrLeft + 1
      }
    case 'CONSTITUTION_UP':
      return {
        ...state,
        constitution: state.constitution + 1,
        attrLeft: state.attrLeft - 1
      }    
    case 'CONSTITUTION_DOWN':
      return {
        ...state,
        constitution: state.constitution - 1,
        attrLeft: state.attrLeft + 1
      }  
    case 'MEMORY_UP':
      return {
        ...state,
        memory: state.memory + 1,
        attrLeft: state.attrLeft - 1
      }    
    case 'MEMORY_DOWN':
      return {
        ...state,
        memory: state.memory - 1,
        attrLeft: state.attrLeft + 1
      }  
    case 'WITS_UP':
      return {
        ...state,
        wits: state.wits + 1,
        attrLeft: state.attrLeft - 1
      }    
    case 'WITS_DOWN':
      return {
        ...state,
        wits: state.wits - 1,
        attrLeft: state.attrLeft + 1
      }
    case 'BARTERING_UP':
      return {
        ...state,
        bartering: state.bartering + 1,
        civLeft: state.civLeft - 1
      }    
    case 'BARTERING_DOWN':
      return {
        ...state,
        bartering: state.bartering - 1,
        civLeft: state.civLeft + 1
      }
    case 'LUCKYCHARM_UP':
      return {
        ...state,
        luckyCharm: state.luckyCharm + 1,
        civLeft: state.civLeft - 1
      }    
    case 'LUCKYCHARM_DOWN':
      return {
        ...state,
        luckyCharm: state.luckyCharm - 1,
        civLeft: state.civLeft + 1
      }
    case 'PERSUASION_UP':
      return {
        ...state,
        persuasion: state.persuasion + 1,
        civLeft: state.civLeft - 1
      }    
    case 'PERSUASION_DOWN':
      return {
        ...state,
        persuasion: state.persuasion - 1,
        civLeft: state.civLeft + 1
      }
    case 'LOREMASTER_UP':
      return {
        ...state,
        loremaster: state.loremaster + 1,
        civLeft: state.civLeft - 1
      }    
    case 'LOREMASTER_DOWN':
      return {
        ...state,
        loremaster: state.loremaster - 1,
        civLeft: state.civLeft + 1
      }
    case 'TELEKINESIS_UP':
      return {
        ...state,
        telekinesis: state.telekinesis + 1,
        civLeft: state.civLeft - 1
      }    
    case 'TELEKINESIS_DOWN':
      return {
        ...state,
        telekinesis: state.telekinesis - 1,
        civLeft: state.civLeft + 1
      }
    case 'SNEAKING_UP':
      return {
        ...state,
        sneaking: state.sneaking + 1,
        civLeft: state.civLeft - 1
      }    
    case 'SNEAKING_DOWN':
      return {
        ...state,
        sneaking: state.sneaking - 1,
        civLeft: state.civLeft + 1
      }
    case 'THIEVERY_UP':
      return {
        ...state,
        thievery: state.thievery + 1,
        civLeft: state.civLeft - 1
      }    
    case 'THIEVERY_DOWN':
      return {
        ...state,
        thievery: state.thievery - 1,
        civLeft: state.civLeft + 1
      }

    default:
      return state;
  }
};
