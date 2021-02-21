import { ADD_FAVORITE, DELETE_FAVORITE } from "../actions";

function favoritesReducer(state = [], action) {
  switch (action.type) {
    case ADD_FAVORITE:
      // take everything, add one (action.favorite)
      return [...state, action.favorite];
    case DELETE_FAVORITE:
      let newState = [...state];
      //
      let idx = newState.findIndex((val) => val.id === action.id);
      newState.splice(idx, 1);
      return newState;
    default:
      return state;
  }
}
export default favoritesReducer;

// let phrase = "Hello there friends"
// phrase.split(" ").map(val => val.split("").reverse().join("")).join(" ")
// "olleH erehr sdneirF"
// let phraseSplit = phrase.split (" ");
