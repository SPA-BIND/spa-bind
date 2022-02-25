import React from 'react';
import styled from 'styled-components';


const StyledButton = styled.button`

  margin: 5px 100px 5px 100px;
  cursor: pointer;
  line-height: 5;
  font-size: 30px;
  padding: 5px 20px 5px 20px;
  border: 1px solid lightgray;
  background: #ffffff;
  width : 80%;
  diplay: grid;
  place-content: center;
  color: Black;
  &:focus {
   color: #949595;
   border: 1px solid black;
  }
`
const Look_Button = ({children}) =>{
  return <StyledButton>{children}</StyledButton>;
}
export default Look_Button;