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
  talent1: "(Select Talent)",
  talent2: "(Select Talent)",
  talent3: "(Select Talent)",
  talent4: "(Select Talent)",
  talent5: "(Select Talent)",
  talent6: "(Select Talent)"
};

export default (state = statisticsReducerDefaultState, action) => {
  switch (action.type) {

    // Attributes Column

    case 'LEVEL_UP':
      /* Add Attribute, Civil, and Combat points */
      if (state.level === 1 || state.level === 5 || state.level === 9 || state.level === 13 || state.level === 21) {
        return {
          ...state,
          level: state.level + 1,
          attrLeft: state.attrLeft + 2,
          attrTotal: state.attrTotal + 2,
          civLeft: state.civLeft + 1,
          civTotal: state.civTotal + 1,
          comLeft: state.comLeft + 1,
          comTotal: state.comTotal + 1
        } 
      }
      /* Add Attribute, Civil, Combat, and Talent points */
      else if (state.level === 17) {
        return {
          ...state,
          level: state.level + 1,
          attrLeft: state.attrLeft + 2,
          attrTotal: state.attrTotal + 2,
          civLeft: state.civLeft + 1,
          civTotal: state.civTotal + 1,
          comLeft: state.comLeft + 1,
          comTotal: state.comTotal + 1,
          talentsLeft: state.talentsLeft + 1,
        } 
      }
      /* Add Attribute, Combat, and Talent points */
      else if (state.level === 2 || state.level === 7 || state.level === 12 || state.level === 22) {
        return {
          ...state,
          level: state.level + 1,
          attrLeft: state.attrLeft + 2,
          attrTotal: state.attrTotal + 2,
          comLeft: state.comLeft + 1,
          comTotal: state.comTotal + 1,
          talentsLeft: state.talentsLeft + 1,
        } 
      }
      /* Add Attribute and Combat points */
      else {
        return {
          ...state,
          level: state.level + 1,
          attrLeft: state.attrLeft + 2,
          attrTotal: state.attrTotal + 2,
          comLeft: state.comLeft + 1,
          comTotal: state.comTotal + 1
        } 
      }
    case 'LEVEL_DOWN':
      /* Remove Attribute, Civil, and Combat points */
      if (state.level === 2 || state.level === 6 || state.level === 10 || state.level === 14 || state.level === 22) {
        return {
          ...state,
          level: state.level - 1,
          attrLeft: state.attrLeft - 2,
          attrTotal: state.attrTotal - 2,
          civLeft: state.civLeft - 1,
          civTotal: state.civTotal - 1,
          comLeft: state.comLeft - 1,
          comTotal: state.comTotal - 1
        } 
      }
      /* Remove Attribute, Civil, Combat, and Talent points */
      else if (state.level === 18) {
        return {
          ...state,
          level: state.level - 1,
          attrLeft: state.attrLeft - 2,
          attrTotal: state.attrTotal - 2,
          civLeft: state.civLeft - 1,
          civTotal: state.civTotal - 1,
          comLeft: state.comLeft - 1,
          comTotal: state.comTotal - 1,
          talentsLeft: state.talentsLeft - 1
        } 
      }
      /* Remove Attribute, Combat, and Talent points */
      else if (state.level === 3 || state.level === 8 || state.level === 13 || state.level === 23) {
        return {
          ...state,
          level: state.level - 1,
          attrLeft: state.attrLeft - 2,
          attrTotal: state.attrTotal - 2,
          comLeft: state.comLeft - 1,
          comTotal: state.comTotal - 1,
          talentsLeft: state.talentsLeft - 1
        } 
      }
      /* Remove Attribute and Combat points */
      else {
        return {
          ...state,
          level: state.level - 1,
          attrLeft: state.attrLeft - 2,
          attrTotal: state.attrTotal - 2,
          comLeft: state.comLeft - 1,
          comTotal: state.comTotal - 1
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
        attrLeft: state.attrLeft - 1,
        memTotal: state.memTotal + 1
      }    
    case 'MEMORY_DOWN':
      return {
        ...state,
        memory: state.memory - 1,
        attrLeft: state.attrLeft + 1,
        memTotal: state.memTotal - 1
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

    // Civil Abilities Column

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

    // Combat Abilities Column

    case 'DUALWIELDING_UP':
      return {
        ...state,
        dualWielding: state.dualWielding + 1,
        comLeft: state.comLeft - 1
      }    
    case 'DUALWIELDING_DOWN':
      return {
        ...state,
        dualWielding: state.dualWielding - 1,
        comLeft: state.comLeft + 1
      }  
    case 'RANGED_UP':
      return {
        ...state,
        ranged: state.ranged + 1,
        comLeft: state.comLeft - 1
      }    
    case 'RANGED_DOWN':
      return {
        ...state,
        ranged: state.ranged - 1,
        comLeft: state.comLeft + 1
      }  
    case 'SINGLEHANDED_UP':
      return {
        ...state,
        singleHanded: state.singleHanded + 1,
        comLeft: state.comLeft - 1
      }    
    case 'SINGLEHANDED_DOWN':
      return {
        ...state,
        singleHanded: state.singleHanded - 1,
        comLeft: state.comLeft + 1
      }  
    case 'TWOHANDED_UP':
      return {
        ...state,
        twoHanded: state.twoHanded + 1,
        comLeft: state.comLeft - 1
      }    
    case 'TWOHANDED_DOWN':
      return {
        ...state,
        twoHanded: state.twoHanded - 1,
        comLeft: state.comLeft + 1
      }  
    case 'LEADERSHIP_UP':
      return {
        ...state,
        leadership: state.leadership + 1,
        comLeft: state.comLeft - 1
      }    
    case 'LEADERSHIP_DOWN':
      return {
        ...state,
        leadership: state.leadership - 1,
        comLeft: state.comLeft + 1
      }  
    case 'PERSEVERANCE_UP':
      return {
        ...state,
        perseverance: state.perseverance + 1,
        comLeft: state.comLeft - 1
      }    
    case 'PERSEVERANCE_DOWN':
      return {
        ...state,
        perseverance: state.perseverance - 1,
        comLeft: state.comLeft + 1
      }  
    case 'RETRIBUTION_UP':
      return {
        ...state,
        retribution: state.retribution + 1,
        comLeft: state.comLeft - 1
      }    
    case 'RETRIBUTION_DOWN':
      return {
        ...state,
        retribution: state.retribution - 1,
        comLeft: state.comLeft + 1
      }  
    case 'AEROTHEURGE_UP':
      return {
        ...state,
        aerotheurge: state.aerotheurge + 1,
        comLeft: state.comLeft - 1
      }    
    case 'AEROTHEURGE_DOWN':
      return {
        ...state,
        aerotheurge: state.aerotheurge - 1,
        comLeft: state.comLeft + 1
      }  
    case 'GEOMANCER_UP':
      return {
        ...state,
        geomancer: state.geomancer + 1,
        comLeft: state.comLeft - 1
      }    
    case 'GEOMANCER_DOWN':
      return {
        ...state,
        geomancer: state.geomancer - 1,
        comLeft: state.comLeft + 1
      }  
    case 'HUNTSMAN_UP':
      return {
        ...state,
        huntsman: state.huntsman + 1,
        comLeft: state.comLeft - 1
      }    
    case 'HUNTSMAN_DOWN':
      return {
        ...state,
        huntsman: state.huntsman - 1,
        comLeft: state.comLeft + 1
      }  
    case 'HYDROSOPHIST_UP':
      return {
        ...state,
        hydrosophist: state.hydrosophist + 1,
        comLeft: state.comLeft - 1
      }    
    case 'HYDROSOPHIST_DOWN':
      return {
        ...state,
        hydrosophist: state.hydrosophist - 1,
        comLeft: state.comLeft + 1
      }  
    case 'NECROMANCER_UP':
      return {
        ...state,
        necromancer: state.necromancer + 1,
        comLeft: state.comLeft - 1
      }    
    case 'NECROMANCER_DOWN':
      return {
        ...state,
        necromancer: state.necromancer - 1,
        comLeft: state.comLeft + 1
      }  
    case 'POLYMORPH_UP':
      return {
        ...state,
        polymorph: state.polymorph + 1,
        comLeft: state.comLeft - 1
      }    
    case 'POLYMORPH_DOWN':
      return {
        ...state,
        polymorph: state.polymorph - 1,
        comLeft: state.comLeft + 1
      }  
    case 'PYROKINETIC_UP':
      return {
        ...state,
        pyrokinetic: state.pyrokinetic + 1,
        comLeft: state.comLeft - 1
      }    
    case 'PYROKINETIC_DOWN':
      return {
        ...state,
        pyrokinetic: state.pyrokinetic - 1,
        comLeft: state.comLeft + 1
      }  
    case 'SCOUNDREL_UP':
      return {
        ...state,
        scoundrel: state.scoundrel + 1,
        comLeft: state.comLeft - 1
      }    
    case 'SCOUNDREL_DOWN':
      return {
        ...state,
        scoundrel: state.scoundrel - 1,
        comLeft: state.comLeft + 1
      }  
    case 'SUMMONING_UP':
      return {
        ...state,
        summoning: state.summoning + 1,
        comLeft: state.comLeft - 1
      }    
    case 'SUMMONING_DOWN':
      return {
        ...state,
        summoning: state.summoning - 1,
        comLeft: state.comLeft + 1
      }  
    case 'WARFARE_UP':
      return {
        ...state,
        warfare: state.warfare + 1,
        comLeft: state.comLeft - 1
      }    
    case 'WARFARE_DOWN':
      return {
        ...state,
        warfare: state.warfare - 1,
        comLeft: state.comLeft + 1
      } 

    // Talents Column

    case 'CHANGE_TALENT_1':
      return {
        ...state,
        talent1: action.talent
      }    
    case 'CHANGE_TALENT_2':
      return {
        ...state,
        talent2: action.talent
      } 
    case 'CHANGE_TALENT_3':
      return {
        ...state,
        talent3: action.talent
      } 
    case 'CHANGE_TALENT_4':
      return {
        ...state,
        talent4: action.talent
      } 
    case 'CHANGE_TALENT_5':
      return {
        ...state,
        talent5: action.talent
      } 
    case 'CHANGE_TALENT_6':
      return {
        ...state,
        talent6: action.talent
      } 

    // Reset Build

    case 'RESET_BUILD':
      return statisticsReducerDefaultState;

    default:
      return state;
  }
};
