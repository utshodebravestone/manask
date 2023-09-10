import styled from "styled-components";

type AddItemButtonProps = { dark?: boolean };

type ColumnTitleProps = { dark?: boolean };

export const AppContainer = styled.div`
  height: 100%;
  overflow-y: scroll;
  width: 100%;
  padding: 20px;
  background-color: #272829;
  display: flex;
  flex-direction: row;
  flex-flow: wrap-reverse;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const ColumnContainer = styled.div`
  width: 300px;
  max-width: 500px;
  min-height: 40px;
  margin-right: 20px;
  padding: 8px;
  background-color: #ebecf0;
  border-radius: 3px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FullColumnContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const ColumnTitle = styled.div<ColumnTitleProps>`
  padding: 6px 16px 12px;
  color: ${(props) => (props.dark ? "#000" : "#fff")};
  font-weight: bold;
  font-size: 2rem;
`;

export const CardContainer = styled.div`
  min-width: 300px;
  margin-bottom: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: #fff;
  border-radius: 3px;
  text-align: center;
  box-shadow: #091e4240 0px 1px 0px 0px;
  cursor: pointer;
`;

export const AddItemButton = styled.button<AddItemButtonProps>`
  min-width: 300px;
  padding: 15px 20px;
  background-color: #ffffff3d;
  color: ${(props) => (props.dark ? "#000" : "#fff")};
  border: none;
  border-radius: 3px;
  cursor: pointer;
  text-align: center;
  font-weight: bold;
  font-size: 1rem;
  transition: background 85ms ease-in;
  &:hover {
    background-color: #ffffff52;
  }
`;

export const NewItemFormContainer = styled.div`
  min-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const NewItemButton = styled.button`
  width: 100%;
  padding: 15px 20px;
  background-color: #5aac44;
  color: #fff;
  border: none;
  border-radius: 3px;
  box-shadow: none;
  text-align: center;
`;

export const NewItemInput = styled.input`
  width: 100%;
  margin-bottom: 0.5rem;
  padding: 15px 20px;
  font-size: 1rem;
  border: none;
  border-radius: 3px;
  box-shadow: #091e4240 0px 1px 0px 0px;
`;
