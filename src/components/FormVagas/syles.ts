import styled from 'styled-components'
import { cores } from '../../styles'

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: ${cores.corSecundaria};
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-gap: 16px;
  }
  }
`
export const BtnPesquisar = styled.button`
  background-color: ${cores.corPrincipal};
  border: 1px solid ${cores.corPrincipal};
  height: 40px;
  padding: 0 16px;
  font-size: 18px;
  color: ${cores.corSecundaria};
  margin-left: 8px;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 0 8px;
    margin-left: 0;
  }
`
export const Campo = styled.input`
  padding: 0 16px;
  outline-color: ${cores.corPrincipal};

  @media (max-width: 768px) {
    height: 40px;
  }
`
