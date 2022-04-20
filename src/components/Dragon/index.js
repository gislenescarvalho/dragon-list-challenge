/* eslint-disable max-statements */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../store/actions'
import {
  FaEdit,
  FaDragon,
  FaArrowCircleLeft,
  FaSave,
  FaTrashAlt
} from 'react-icons/fa'
import {
  DragonDetails,
  FirstRowInfo,
  DetailsId,
  DetailsCreatedDate,
  Logo,
  Actions,
  ActionItem,
  InputText,
  ErrorMessage,
  Label,
  Title,
  Group,
  GroupContainer,
  DetailsName,
  DetailsType
} from './styles'

const Dragon = props => {
  const [dragonDetails, setDragonDetails] = useState({})
  const [isEdit, setIsEdit] = useState(false)
  const [wasDeleted, setWasDeleted] = useState(false)

  useEffect(() => {
    const { state } = props.location
    setDragonDetails({
      ...state
    })
    setWasDeleted(false)
  }, [])

  useEffect(() => {
    if (wasDeleted) {
      props.history.goBack()
    }
  }, [wasDeleted])

  const formatDate = date => {
    return new Date(date).toLocaleString('pt-BR')
  }

  const changeHandler = event => {
    const { id, value } = event.target
    setDragonDetails({ ...dragonDetails, [id]: value })
  }

  const goBackHandler = () => {
    props.history.goBack()
  }

  const saveDragonHandler = () => {
    props.saveDragon(dragonDetails)
    setIsEdit(false)
  }

  const deleteDragonHandler = () => {
    props.deleteDragon(dragonDetails.id)
    setWasDeleted(true)
  }

  const editDragonHandler = () => {
    setIsEdit(!isEdit)
  }

  const editMode = () => {
    return (
      <Group>
        <Title> Edit dragon </Title>
          <Label for="name">Name: </Label>
          <InputText
            type="text"
            id="name"
            name="name"
            value={dragonDetails.name}
            onChange={changeHandler}
          />
          <Label for="type">Type: </Label>
          <InputText
            type="text"
            id="type"
            name="type"
            value={dragonDetails.type}
            onChange={changeHandler}
          />
      </Group>
    )
  }
  const infoMode = () => {
    return (
      <>
        <div>
          <DetailsName>Name: {dragonDetails.name}</DetailsName>
          <DetailsType>Type: {dragonDetails.type}</DetailsType>
        </div>
      </>
    )
  }

  const setDisplayMode = () => {
    return isEdit ? editMode() : infoMode()
  }

  const display = (
    <DragonDetails>
      {setDisplayMode()}
      <FirstRowInfo>
        <DetailsId>Id: {dragonDetails.id}</DetailsId>
        <DetailsCreatedDate>
          Created at: {formatDate(dragonDetails.createdAt)}
        </DetailsCreatedDate>
      </FirstRowInfo>
    </DragonDetails>
  )

  return (
    <GroupContainer>
      <Logo>
        <FaDragon size={92} />
      </Logo>
      {display}
      <Actions>
        <ActionItem onClick={goBackHandler}>
          <FaArrowCircleLeft size={32} title="Go Back" />
        </ActionItem>
        <ActionItem onClick={editDragonHandler} >
          <FaEdit size={32} title="Edit" />
        </ActionItem>
        {isEdit ? (
          <ActionItem onClick={saveDragonHandler}>
            <FaSave size={24} title="Save Changes" />
          </ActionItem>
        ) : (
          <ActionItem onClick={deleteDragonHandler}>
            <FaTrashAlt size={24} title="Delete" />
          </ActionItem>
        )}
      </Actions>
      <>{props.error && <ErrorMessage>{props.error}</ErrorMessage>}</>
      </GroupContainer>
  )
}

const mapStateToProps = state => {
  return {
    successMessage: state.dragon.successMessage,
    error: state.dragon.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    saveDragon: dragonDetails => dispatch(actions.saveDragon(dragonDetails)),
    deleteDragon: dragonId => dispatch(actions.deleteDragon(dragonId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dragon)
