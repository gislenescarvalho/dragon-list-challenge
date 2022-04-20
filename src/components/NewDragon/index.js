import React, { useState } from 'react'
import { connect } from 'react-redux'
import { updateObject } from '../../utils/utils'
import * as actions from '../../store/actions'
import { FaSave } from 'react-icons/fa'
import { NewDragonContainer, SaveButton, Label, SaveAction, ErrorMessage, InputText, Group, Title } from './styles'

const NewDragon = props => {
  const [addDragon, setNewDragon] = useState({
    name: '',
    type: '',
    createdAt: new Date().toString(),
    histories: []
  })
  const [allowToAdd, setAllowToAdd] = useState(true)

  const submitHandler = event => {
    if (addDragon.name.length > 0 && addDragon.type.length > 0) {
      const creationDate = new Date().toString()
      const histories = []
      const addDragonUpdate = updateObject(addDragon, {
        createdAt: creationDate,
        histories: histories
      })
      setNewDragon({ ...addDragonUpdate })
      setAllowToAdd(!allowToAdd)
      props.addDragon(addDragon)
    }
    event.preventDefault()
  }

  const changeHandler = event => {
    const { id, value } = event.target
    setNewDragon({ ...addDragon, [id]: value })
  }

  return (
    <>
      {allowToAdd && (
        <NewDragonContainer>
          <Group>
              <Title>Add new dragon:</Title>
          <Label for="name">Name:</Label>
          <InputText
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            onChange={changeHandler}
          />
          <Label for="type">Type:</Label>
          <InputText
            type="text"
            id="type"
            name="type"
            placeholder="Type"
            onChange={changeHandler}
          />
         <SaveAction>
          <SaveButton id="save-button-add-dragon" onClick={submitHandler}>
            <FaSave size={25} /> Save
          </SaveButton>
          </SaveAction>
          {props.error && <ErrorMessage>{props.error}</ErrorMessage>}
          </Group>
        </NewDragonContainer>
      )}
    </>
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
