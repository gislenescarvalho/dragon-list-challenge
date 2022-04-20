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
  InputText,
  ErrorMessage
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
      <>
        <div>
          <InputText
            type="text"
            id="name"
            value={dragonDetails.name}
            onChange={changeHandler}
          />
        </div>
        <div>
          <InputText
            type="text"
            id="type"
            value={dragonDetails.type}
            onChange={changeHandler}
          />
        </div>
      </>
    )
  }
  const infoMode = () => {
    return (
      <>
        <div>
          <h2>{dragonDetails.name}</h2>
          <h3>{dragonDetails.type}</h3>
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
    <>
      <Logo>
        <FaDragon size={92} />
      </Logo>
      {display}
      <Actions>
        <span onClick={goBackHandler}>
          <FaArrowCircleLeft size={32} />
        </span>
        <span onClick={editDragonHandler}>
          <FaEdit size={32} />
        </span>
        {isEdit ? (
          <span onClick={saveDragonHandler}>
            <FaSave size={24} />
          </span>
        ) : (
          <span onClick={deleteDragonHandler}>
            <FaTrashAlt size={24} />
          </span>
        )}
      </Actions>
      <>{props.error && <ErrorMessage>{props.error}</ErrorMessage>}</>
    </>
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
