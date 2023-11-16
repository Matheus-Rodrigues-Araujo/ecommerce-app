import styled from "styled-components";

export const SCCounterContainer = styled.div`
    display: grid;
    
    & .counter{
        display: flex;
        gap: 3px;
        justify-content: center;
        padding: 2px;
        top: 44px;
        left: 212px;
        border-radius: 4px;
        border: 0.3px solid rgba(191, 191, 191, 1);
    }

    & .quantity {
        font-size: 13px;
        font-weight: 400;
        padding-inline:3px;
        margin-block:auto;
        color: rgba(44, 44, 44, 1);
    }

    & .remove-btn{
        border-right: 0.3px solid rgba(191, 191, 191, 1);
        padding-inline: 5px;
      }
    
    & .add-btn{
        border-left: 0.3px solid rgba(191, 191, 191, 1);
        padding-inline: 5px;
    }

`;