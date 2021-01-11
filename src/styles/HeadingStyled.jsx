import styled from "styled-components";

const HeadingStyled = styled.h1`
  color: #111;
  font-family: "Helvetica Neue", sans-serif;
  font-size: 275px;
  font-weight: bold;
  letter-spacing: -1px;
  line-height: 1;
  text-align: center;
`;

const HeadingTwoStyled = styled(HeadingStyled)`
  font-family: "Open Sans", sans-serif;
  font-size: 30px;
  font-weight: 300;
  line-height: 32px;
  margin: 0 0 72px;
`;

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

export { HeadingStyled, HeadingTwoStyled, FormStyled };
