import {
  SET_RANDOM_COLOR,
  TOGGLE_BORDER,
  TOGGLE_SHOW_NAME
} from '../reducers/buttons'


export const setRandomColor = (event) => {
  console.log(event)
  return {
    type: SET_RANDOM_COLOR
  }
}

export const toggleBorder = (event) => {
  return {
    type: TOGGLE_BORDER
  }
}

export const toggleShowName = (event) => {
  return {
    type: TOGGLE_SHOW_NAME
  }
}



// export const SET_RANDOM_COLOR = 'SET_RANDOM_COLOR'
// export const TOGGLE_BORDER = 'TOGGLE_BORDER'
// export const TOGGLE_SHOW_NAME = 'TOGGLE_SHOW_NAME'