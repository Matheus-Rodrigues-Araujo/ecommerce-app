import styled from "styled-components";

export const SCShopCarItem = styled.li`
  position: relative;
  background-color: white;
  width: 95%;
  height: 90px;
  border-radius: 8px;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top:20px;

  & .total-price {
    font-weight: 700;
    margin-top: 2px;
  }

  & .delete-item-btn{
    width: 20px;
    height: 20px;
    font-size: 10px;
    background-color: black;
    color: white;
    font-weight: 400;
    line-height: 17px;
    border-radius: 3rem;
    position: absolute;
    top: 0;
    right: 0;
    margin-left: 2px;
  }
`