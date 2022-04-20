import styled from 'styled-components'

import Input from '../Input'


export const NewDragonContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 100%;
`

export const InputText = styled(Input)`
  border: 1px solid #013a20;
  border-radius: 5px;
  height: 30px;
`

export const Title = styled.legend`
  font-size: 21px;
  color: #013a20;
  font-weight: bolder;
`

export const Group = styled.fieldset `
  border: 1px solid #013a20;
  border-radius: 5px;
  margin-bottom: 12px;
`

export const Label = styled.label`
  font-size: 16px;
  color: #013a20;
  text-align: left;
  font-weight: bolder;
  margin: 5px 10px;
`

export const SaveButton = styled.span`
  cursor: pointer;
  border: 1px solid #013a20;
  border-radius: 15px;
  padding: 5px;
  with: 150px;
  & :hover {
    color: #fff;
  }
`

export const ErrorMessage = styled.p`
  color: #ff0000;
  font-weight: bold;
`

export const SaveAction = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 10px 0;
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