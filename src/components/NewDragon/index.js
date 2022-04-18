import React, { useState } from 'react'
import { connect } from 'react-redux'
import { updateObject } from '../../utils/utils'
import * as actions from '../../store/actions'
import { FaSave } from 'react-icons/fa'
import { NewDragonContainer, SaveButton, Label, ErrorMessage } from './styles'

import Input from '../Input'

const NewDragon = props => {
  const [addDragon, setNewDragon] = useState({
    name: '',
    type: '',
    createdAt: new Date().toString(),
    histories: []
  })

  const submitHandler = event => {
    if (addDragon.name.length > 0 && addDragon.type.length > 0) {
      const creationDate = new Date().toString()
      const histories = []
      const addDragonUpdate = updateObject(addDragon, {
        createdAt: creationDate,
        histories: histories
      })
      setNewDragon({ ...addDragonUpdate })
      props.addDragon(addDragon)
    }
    event.preventDefault()
  }

  const changeHandler = event => {
    const { id, value } = event.target
    setNewDragon({ ...addDragon, [id]: value })
  }

  return (
    <NewDragonContainer>
      <Label>Name:</Label>
      <Input
        type="text"
        id="name"
        placeholder="Name"
        onChange={changeHandler}
      />
      <Label>Type:</Label>
      <Input
        type="text"
        id="type"
        placeholder="Type"
        onChange={changeHandler}
      />

      <SaveButton onClick={submitHandler}>
        <FaSave size={54} />
      </SaveButton>
      <div>{props.error && <ErrorMessage>{props.error}</ErrorMessage>}</div>
    </NewDragonContainer>
  )
}

const mapStateToProps = state => {
  return {
    error: state.dragon.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addDragon: addDragon => dispatch(actions.addDragon(addDragon))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewDragon)
