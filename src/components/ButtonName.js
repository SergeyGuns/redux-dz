import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import Button from '../views/Button'
import { toggleShowName } from '../actions/buttons'

function ButtonBorder({ nameIsShow, onClick, name }) {
  return <Button className='btn_back' onClick={onClick}>
    {nameIsShow ? name : ''}
  </Button>
}

function mapStateToProps(state, props) {
  return {
    nameIsShow: state.buttons.nameIsShow,
    name: state.buttons.name
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onClick: bindActionCreators(toggleShowName, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ButtonBorder)