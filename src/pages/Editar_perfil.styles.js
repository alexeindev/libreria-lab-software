import styled from "styled-components";

export const Container = styled.div`
  @media (min-width: 768px) {
    padding: 0 120px;
  }
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 42px;
  line-height: 84px;
  color: #34325e;
  @media (min-width: 1024px) {
    font-size: 56px;
  }
`;

export const FormInput = styled.input`
  border: 1px solid #c4c4c4;
  padding: 10px;
  width:30%;
  box-sizing: border-box;
  border-radius: 5px;
`;

export const FormGroup = styled.div`
  margin-bottom: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 25px;
  line-height: 28px;
  color: #34325e;
`;

export const FormLabel = styled.label`
  font-weight: bold;
  line-height: 28px;
  padding-bottom: 5px;
`;
