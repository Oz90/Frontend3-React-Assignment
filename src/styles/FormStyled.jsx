import styled from "styled-components";

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
  align-items: center;

  input {
    width: 400px;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }

  label {
    font-size: 2rem;
  }
`;

export { FormStyled };
