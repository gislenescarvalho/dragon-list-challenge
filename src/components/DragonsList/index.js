import React, { useState } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../store/actions'
import NewDragon from '../NewDragon'
import Loading from '../Loading'
import { FaDragon, FaPlus } from 'react-icons/fa'
import { Dragon, List, DragonList, Logo, ErrorMessage, ActionsList, ListItem } from './styles'

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
    return loading
      ? (
      <Loading />
        )
      : (
          props.dragonsList.map(dragon => (
        <Dragon key={dragon.id} >
          <FaDragon />
          <ListItem onClick={onClickDragonHandler.bind(this, dragon)}>
            {dragon.name}
          </ListItem>
        </Dragon>
          ))
        )
  }

  return (
    <DragonList>
      <div>
        <Logo>
          <FaDragon size={96} />
        </Logo>
        <List>{getDragonList(props)}</List>
        <div>
          <hr />
          <ActionsList>
            <FaPlus size={25} />
            <span onClick={addNewDragonHandler}>Add New Dragon</span>
          </ActionsList>
        </div>
        <div>{isAddingNew && <NewDragon />}</div>
        <div>
          {props.error && <ErrorMessage>{props.error}</ErrorMessage>}
        </div>
      </div>
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