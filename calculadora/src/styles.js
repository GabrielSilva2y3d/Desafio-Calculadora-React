import styled  from 'styled-components';

export const Container = styled.div`
        width: 100vw;
        height: 100vh;
        flex: 1;
        background-image: url('https://t4.ftcdn.net/jpg/01/16/37/99/360_F_116379970_6WPZUH2P8YTJUrIxCuUTxRMc7hWMsVzp.jpg');
        display: flex;
        align-items: center;
        justify-content: center;
`

export const Content = styled.div`
    width: 20%;
    min-height: 350px;
` 
export const Row = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-item: center;
`

export const Column = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-item: center;
`