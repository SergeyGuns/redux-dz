import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import Button from '../views/Button'
import { setRandomColor } from '../actions/buttons'

function ButtonBackground({ buttonBackground, onClick}) {
  return <Button className='btn_back' onClick={onClick} style={{ 'background': buttonBackground}}/>
}

function mapStateToProps(state, props) {
  return {
    buttonBackground: state.buttons.buttonBackground
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onClick: bindActionCreators(setRandomColor, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ButtonBackground)