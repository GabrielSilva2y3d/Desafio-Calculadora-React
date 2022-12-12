import styled  from 'styled-components';

export const ButtonContainer = styled.button`
    padding: 20px;
    border: 2px solid;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(0,0,0,1) 100%); 
    font-size: 25px;
    font-weight: 700;
    flex: 1;


    &:hover{
        background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(255,255,255,1) 100%); 
        color: #FFFFFF;
    }
`
