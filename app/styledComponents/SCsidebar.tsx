import styled from "styled-components";

export const SCSidebar = styled.div`
    background-color: var(--blue);
    min-height:100vh;
    width: 486px;
    right: 0px;
    box-shadow: -5px 0px 6px 0px var(--black-2);
    z-index: 1000;
    position: fixed;
    top:0;

    & .sidebar-header{
        height:6.3125rem;
      }
      
    & .sidebar-header h2{
        font-size: 27px;
        font-weight: 700;
        margin-top: 37px;
        color: #FFF;
      }
      
    & .close-sidebar-btn{
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #000;
        color: #FFF;
        width: 38px;
        height: 38px;
        border-radius: 3rem;
        font-weight: 400;
        font-size: 28px;
        line-height: 15px;
      }
      
    & .counter{
        padding: 2px;
        top: 44px;
        left: 212px;
        border-radius: 4px;
        border: 0.3px solid rgba(191, 191, 191, 1);
      }
      
    & .counter .remove-btn{
        border-right: 0.3px solid rgba(191, 191, 191, 1);
        padding-inline: 5px;
      }
    
    & .counter .add-btn{
        border-left: 0.3px solid rgba(191, 191, 191, 1);
        padding-inline: 5px;
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

`;