import styled  from 'styled-components';

export const Container = styled.div`
        width: 100vw;
        height: 100vh;
        flex: 1;
        background: linear-gradient(to top, #000000 0%, #222222 34.48%, #777777 100%);

        display: flex;
        align-items: center;
        justify-content: center;
`

export const Content = styled.div`
    background: linear-gradient(to top, #222222 0%, #444444 34.48%, #666666 100%); 
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