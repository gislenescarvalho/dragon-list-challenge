import styled from 'styled-components'

export const DragonList = styled.div`
  display: flex;
  flex-direction: column;
`

export const ActionsList = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  & svg {
    color: #013a20;
  }
  & :hover {
    color: #013a20;
  }
  > span {
    font-size: 21px;
    padding-left: 8px;
  }
`

export const Dragon = styled.div`
  display: flex;
  flex-grow: 1;
  padding: 2px 0;
  & svg {
    color: #013a20;
  }
`

export const List = styled.ul`
  padding: 0;
`

export const ListItem = styled.li`
  list-style: none;
  flex-grow: 2;
  & :hover {
    color: #bdbdbd;
    cursor: pointer;
  }
`
export const Item = styled.span`
  cursor: pointer;
`

export const ErrorMessage = styled.p`
  color: #ff0000;
  font-weight: bold;
`
export const Logo = styled.div`
  color: #013a20;
`
