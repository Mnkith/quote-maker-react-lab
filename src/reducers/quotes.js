export default (state = [], action) => {
    const indx = state.findIndex(q => q.id === action.quoteId)
  switch (action.type) {
    case 'ADD_QUOTE':
      return [...state, action.quote]

    case 'REMOVE_QUOTE':
      console.log(state)
      return state.filter(q => q.id !== action.quoteId)

    case 'UPVOTE_QUOTE':
      state[indx].votes ? state[indx].votes += 1 : state[indx].votes = 1
      return state

    case 'DOWNVOTE_QUOTE':
      state[indx].votes ? state[indx].votes += -1 : state[indx].votes
      return state

    default:
      return state;
  }

}
