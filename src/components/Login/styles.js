import styled from 'styled-components'
import Input from '../Input'

export const LoginContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  & input {
    color: #282c34;
    background: #fff;
    text-align: center;
  }
  & button {
    background: #013a20;
    color: #fff;
    cursor: pointer;
    &:hover {
      background: #fff;
      color: #013a20;
    }
  }
`
export const InputText = styled(Input)`
  margin: 2px 10px !important;
  padding: 10px;
  margin: 5px;
  border: 1px solid #013a20;
  border-radius: 25px;
`
export const Button = styled.button`
  padding: 10px;
  margin: 5px;
  border: 1px solid #013a20;
  border-radius: 25px;
`
export const Logo = styled.span`
  color: #013a20;
`
export const SignButtons = styled.div`
  display: flex;
  flex-direction: column;
`
export const ErrorMessage = styled.p`
  color: #ff0000;
  font-weight: bold;
`
