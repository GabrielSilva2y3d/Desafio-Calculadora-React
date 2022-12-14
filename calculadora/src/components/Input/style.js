import styled  from 'styled-components';

export const InputContainer = styled.div`
    width: 100%;
    height: 75px;
    background: linear-gradient(to top, #E1E1E1 0%, #E7E7E7 34.48%, #D3D3D7 100%); 

    display: flex;
    align-item: center;
    justify-content: flex-end;
    
    font-size: 24px;
    font-family: 'Roboto';

    input {
        width: 90%;
        height: 75px;
        background: radial-gradient(circle, rgba(255,255,255,0) 100%, rgba(21,114,223,1) 100%);
        border: 4px solid ;
        display: flex;
        flex-direction: column;
        align-itens: flex-end;
        padding: 0 10px;

        font-size: 30px;
        font-family: 'Roboto';
        font-weight: 700; 
    }
`