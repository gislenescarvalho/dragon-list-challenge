import styled from 'styled-components'

export const DragonList = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 300px;
`

export const ActionsList = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  & :hover {
    color: #013a20;
  }
  > svg {
    color: #013a20;
  }

  > span {
    font-size: 21px;
    padding-left: 8px;
  }
`

export const Dragon = styled.div`
  padding: 5px 0;
`

export const List = styled.ul`
  padding: 0;
`

export const ListItem = styled.li`
  list-style: none;
  width: 100%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 1px solid #013a20;
  border-radius: 25px;
  & svg {
    margin-right: 8px;
  }
`
export const AddNewDragonBtn = styled.span`
  cursor: pointer;
  border: 1px solid #013a20;
  border-radius: 15px;
  padding: 5px;
  width: 150px;
  justify-content: center;
  align-items: center;
`

export const AddNewDragonContainer = styled.div`
  padding: 10px;
  min-width: 300px;
`
export const Separator = styled.hr`
  margin: 10px 0;
`

export const ErrorMessage = styled.p`
  color: #ff0000;
  font-weight: bold;
`
export const Logo = styled.div`
  color: #013a20;
`
