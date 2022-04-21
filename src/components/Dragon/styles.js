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
  justify-content: space-between;
  padding: 10px 0;
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
  margin-bottom: 20px;
  & :hover {
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
  border: 1px solid;
  border-radius: 5px;
  height: 30px;
  margin: 0 10px;
`

export const Title = styled.legend`
  font-size: 21px;
  font-weight: bolder;
`

export const GroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: solid 1px #013a20;
  border-radius: 25px;
  align-items: normal;
  justify-content: center;
  width: 300px;
  min-height: 200px;
`

export const Group = styled.fieldset `
  border: none;
  margin-bottom: 12px;
`

export const Label = styled.label`
  font-size: 16px;
  text-align: left;
  font-weight: bolder;
  margin: 5px 10px;
`

export const DetailsName = styled.h2`
  font-size: 16px;
  text-align: left;
`

export const DetailsType = styled.h3`
  font-size: 14px;
  text-align: left;
  padding-bottom: 10px;
`