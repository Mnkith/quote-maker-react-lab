export const addQuote = quote => {
  // console.log(quote)
  return {
    type: 'ADD_QUOTE',
    quote
  }
}

export const removeQuote = quoteId => {
  console.log(quoteId)
  return {
    type: 'REMOVE_QUOTE',
    quoteId
  }
}

export const upvoteQuote = quoteId => {
  console.log(quoteId)
  return {
    type: 'UPVOTE_QUOTE',
    quoteId
  }
}

export function downvoteQuote(quoteId) {
  return {
    type: 'DOWNVOTE_QUOTE',
    quoteId
  }
}