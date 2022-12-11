import styled  from 'styled-components';

export const ButtonContainer = styled.button`
    padding: 20px;
    border: 2px solid;
    background: linear-gradient(to top, #222222 0%, #444444 34.48%, #666666 100%); 
    font-size: 25px;
    font-weight: 700;
    flex: 1;


    &:hover{
        background: linear-gradient(to top, #666666 0%, #444444 34.48%, #222222 100%); 
    }
`
