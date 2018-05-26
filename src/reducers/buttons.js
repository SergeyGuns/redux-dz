export const SET_RANDOM_COLOR = 'SET_RANDOM_COLOR'
export const TOGGLE_BORDER = 'TOGGLE_BORDER'
export const TOGGLE_SHOW_NAME = 'TOGGLE_SHOW_NAME'

const initState = {
  buttonBorder: false,
  buttonBackground: getRandomRGB(),
  nameIsShow: false,
  name: 'Sergey'
}

function getRandomRGB() {
  let color = '#'
  for(let i = 0; i < 6 ; i++) {
    let pare = Math.random() * 15
    let fixedPare = +pare.toFixed()
    color += fixedPare.toString(16)
  }
  console.log('color generate :: ',color)
  return color
}

export default (state = initState, action) => {
  const actions = {
    [SET_RANDOM_COLOR] : ()=> ({
      ...state,
      buttonBackground: getRandomRGB()
    }),
    [TOGGLE_BORDER] : ()=> ({
      ...state,
      buttonBorder: !state.buttonBorder
    }),
    [TOGGLE_SHOW_NAME] : ()=> ({
      ...state,
      nameIsShow: !state.nameIsShow
    })
  }
  return actions[action.type] ? actions[action.type]() : state 
}
