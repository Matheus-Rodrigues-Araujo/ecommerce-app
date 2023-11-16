import styled from "styled-components";

export const SCProductCard = styled.li`
    display: grid;
    justify-content: center;
    width: 270px;
    height: 360px;
    max-height: 360px;
    overflow: hidden;

    & .product{
        border: 1px solid var(--white-1);
        box-shadow: 0px 0px 10px var(--white-1);
        transition: 0.3s ease;
        border-radius: 8px 8px 0px 0px;
        padding: 10px;
        height: 100%;
        display: flex;
        flex-direction: column;
      }

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

    & .product-name{
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        width: 80%;
      }
      
    & .product-price{
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 13px;
        font-weight: 700;
        line-height: 15px;
        letter-spacing: 0px;
        text-align: left;
        background-color: var(--light-black);
        border-radius: 5px;
        color: white;
        text-align: center;
        height: 26px;
        width: 64px;
        padding-inline: 5px;
      }

      & .buy-btn {
        display: flex;
        text-transform: uppercase;
        font-size: 16px; /* Set the font size to 16px */
        background-color: var(--blue);
        color: white;
        justify-content: center;
        gap: 14px;
        align-items: center;
        border-radius: 0px 0px 8px 8px;
        padding: 8px;
    }
    
      
    & .buy-btn:hover{
        background-color: #136bee;
      }
`;