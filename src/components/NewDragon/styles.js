import styled from 'styled-components'

export const NewDragonContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 100%;
  padding: 10px;
  margin: 10px;
`

export const Label = styled.label`
  font-size: 16px;
  color: #013a20;
  text-align: left;
  font-weight: bolder;
  margin: 5px 10px;
`

export const SaveButton = styled.span`
  color: #013a20;
  cursor: pointer;
  & :hover {
    color: #fff;
  }
`

export const ErrorMessage = styled.p`
  color: #ff0000;
  font-weight: bold;
`
