import React, { useState } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../store/actions'
import NewDragon from '../NewDragon'
import Loading from '../Loading'
import { FaDragon, FaPlus, FaArrowCircleLeft } from 'react-icons/fa'
import {
  Dragon,
  List,
  DragonList,
  Logo,
  ErrorMessage,
  ActionsList,
  AddNewDragonBtn,
  ListItem,
  AddNewDragonContainer,
  Separator
} from './styles'

const DragonsList = props => {
  const [isAddingNew, setIsAddingNew] = useState(false)

  const onClickDragonHandler = event => {
    props.history.push({ pathname: `/dragon/${event.id}`, state: event })
  }

  const addNewDragonHandler = () => {
    setIsAddingNew(!isAddingNew)
  }

  const getDragonList = props => {
    const { loading } = props
    return loading ? (
      <Loading />
    ) : (
      props.dragonsList.map(dragon => (
        <Dragon key={dragon.id}>
          <ListItem onClick={onClickDragonHandler.bind(this, dragon)}>
            <FaDragon />
            {dragon.name}
          </ListItem>
        </Dragon>
      ))
    )
  }

  return (
    <DragonList>
        <Logo>
          <FaDragon size={96} />
        </Logo>
        <List>{getDragonList(props)}</List>
          <Separator />
          <AddNewDragonContainer>
          {isAddingNew && <NewDragon />}
          <ActionsList>
            <AddNewDragonBtn onClick={addNewDragonHandler}>
              {' '}
              {!isAddingNew ? (
                <>
                  {' '}
                  <FaPlus size={25} /> Add{' '}
                </>
              ) : (
                <>
                  {' '}
                  <FaArrowCircleLeft size={25} /> Back {' '}
                </>
              )}
            </AddNewDragonBtn>
          </ActionsList>
          </AddNewDragonContainer>
        {props.error && <ErrorMessage>{props.error}</ErrorMessage>}
    </DragonList>
  )
}

const mapStateToProps = state => {
  return {
    dragonsList: state.dragonList.dragons,
    loading: state.dragonList.loading,
    wasAdded: state.dragon.wasAdded,
    wasUpdate: state.dragonList.wasUpdate,
    error: state.dragonList.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onGetDragonsList: () => dispatch(actions.getDragonsList())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DragonsList)
