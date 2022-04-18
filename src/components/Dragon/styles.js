import styled from 'styled-components'
import Input from '../Input'

export const DragonDetails = styled.div`
  width: 250px;
  height: 100%;
  border: solid 1px #013a20;
  border-radius: 25px;
  padding: 5px;
  margin: 10px;
  > h2 {
    word-wrap: break-word;
  }
`
export const FirstRowInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`

export const DetailsId = styled.span`
  font-size: 9px;
`

export const DetailsCreatedDate = styled.span`
  font-size: 11px;
  font-weight: bold;
`

export const Actions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  color: #013a20;
  > span:hover {
    color: white;
  }
`
export const InputText = styled(Input)`
  margin: 0 10px;
`

export const ErrorMessage = styled.p`
  color: #ff0000;
  font-weight: bold;
`
export const Logo = styled.div`
  color: #013a20;
`
