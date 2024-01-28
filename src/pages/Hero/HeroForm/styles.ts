import styled from 'styled-components'

export const FormContainer = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: normal;
    justify-content: space-around;
    gap: 0.5rem;
    max-width: 75rem;
  }
`
export const BaseInput = styled.input`
  background: transparent;
  height: 2.5rem;
  border: 0;
  border-bottom: 2px solid ${(props) => props.theme['gray-500']};
  font-weight: bold;
  font-size: 1.125rem;
  padding: 0 0.5rem;
  width: 30rem;
  color: ${(props) => props.theme['gray-100']};
  &:focus {
    box-shadow: none;
    border-color: ${(props) => props.theme['green-500']};
  }
  &::placeholder {
    color: ${(props) => props.theme['gray-500']};
  }
`
export const AmountInput = styled(BaseInput)`
  width: 30rem;
  ::-webkit-inner-spin-button{
        -webkit-appearance: none; 
        margin: 0; 
    }
  ::-webkit-outer-spin-button{
      -webkit-appearance: none; 
      margin: 0; 
  }
`

export const ActionFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin:1rem 0;
  align-items: center;
`
