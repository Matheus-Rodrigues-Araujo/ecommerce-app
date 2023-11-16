import styled from "styled-components";

export const SCProduct = styled.div`
    border: 1px solid var(--white-1);
    box-shadow: 0px 0px 10px var(--white-1);
    transition: 0.3s ease;
    border-radius: 8px 8px 0px 0px;
    padding: 10px;
    height: 100%;
    display: flex;
    flex-direction: column;

    & .product-information{
        display: grid;
      }
      
    & .product-image{
        object-fit: cover;
        width: auto;
        margin-inline: auto;
        height: 180px;
        max-height: 180px;
      }
      
    & .info{
        display: flex;
        justify-content: center;
      }
    
    & .description{
        margin-top: 5px;
        width: 100%;
        text-align: justify;
        height: 80px;
        font-size: 12px;
        font-weight: 300;
        color: var(--dark-gray);
        overflow: hidden;
      }

`;