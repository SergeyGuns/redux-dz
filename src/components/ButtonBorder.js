import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import Button from '../views/Button'
import { toggleBorder } from '../actions/buttons'

function ButtonBorder({ buttonBorder, onClick }) {
  let border = (()=>{
    if (buttonBorder) {
      return 'solid 5px green'
    } else {
      return 'none'
    }
  })()
  return <Button className='btn_back' onClick={onClick} style={{ 'border': border }} />
}

function mapStateToProps(state, props) {
  return {
    buttonBorder: state.buttons.buttonBorder
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onClick: bindActionCreators(toggleBorder, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ButtonBorder)