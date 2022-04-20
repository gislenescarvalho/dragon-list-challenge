import styled from 'styled-components'
import Input from '../Input'

export const DragonDetails = styled.div`
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
  font-weight: bold;
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

export const ActionItem = styled.span`
  cursor: pointer;

`

export const ErrorMessage = styled.p`
  color: #ff0000;
  font-weight: bold;
`
export const Logo = styled.div`
  color: #013a20;
`
export const InputText = styled(Input)`
  border: 1px solid #013a20;
  border-radius: 5px;
  height: 30px;
  margin: 0 10px;
`

export const Title = styled.legend`
  font-size: 21px;
  color: #013a20;
  font-weight: bolder;
`

export const GroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: solid 1px #013a20;
  border-radius: 25px;
  width: 300px;
  height: 100%;
`

export const Group = styled.fieldset `
  border: none;
  margin-bottom: 12px;
`

export const Label = styled.label`
  font-size: 16px;
  color: #013a20;
  text-align: left;
  font-weight: bolder;
  margin: 5px 10px;
`

export const DetailsName = styled.h2`
   font-size: 21px;
`

export const DetailsType = styled.h3`
   font-size: 16px;
`