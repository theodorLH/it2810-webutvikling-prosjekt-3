import * as actionTypes from "./actionTypes"

// Aner ikke hva dette gjør. Har bare kopiert den fra article-eksempelet og byttet ut "article" med "movie"

export function addFavMovie(article: MovieInterface) {
    const action: MovieAction = {
      type: actionTypes.ADD_FAV_MOVIE,
      article,
    }
  
    return simulateHttpRequest(action)
  }
  
  export function removeArticle(article: MovieInterface) {
    const action: MovieAction = {
      type: actionTypes.REMOVE_FAV_MOVIE,
      article,
    }
    return simulateHttpRequest(action)
  }
  
  export function simulateHttpRequest(action: MovieAction) {
    return (dispatch: DispatchType) => {
      setTimeout(() => {
        dispatch(action)
      }, 500)
    }
  }