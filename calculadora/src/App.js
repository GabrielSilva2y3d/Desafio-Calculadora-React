import React, { useState } from 'react';
import { Container, Content, Row } from './styles';
import { Buttons } from './components/Buttons';
import { Input } from './components/Input';
import { CalculationString } from './calculate';

function App() {
    const [currentNumber, setCurrentNumber] = useState('0');
    // const [firstNumber, setFirstNumber] = useState('0');

    const clear = () => {
        setCurrentNumber('0');
        // setFirstNumber('0');
    }
    const addNumber = (number) => {
        setCurrentNumber(prev => `${prev === '0' ? '' : prev}${number}`);
    }

    const equationResult = () => {
        setCurrentNumber(String(CalculationString(currentNumber)));
        if (currentNumber === 'NaN') {
            clear();
        }
    }
    return (
        <Container>
            <Content>
                <Input value = {currentNumber}/>
                <Row>
                    <Buttons label={"C"} onClick={clear}/>
                    <Buttons label={"<"} />
                    <Buttons label={"^"} onClick={() => addNumber('^')}/>
                    <Buttons label={"÷"} onClick={() => addNumber('/')}/>
                </Row>
                <Row>
                    <Buttons label={7} onClick={() => addNumber('7')}/>
                    <Buttons label={8} onClick={() => addNumber('8')}/>
                    <Buttons label={9} onClick={() => addNumber('9')}/>
                    <Buttons label={"x"} onClick={() => addNumber('*')}/>
                </Row>
                <Row>
                    <Buttons label={4} onClick={() => addNumber('4')}/>
                    <Buttons label={5} onClick={() => addNumber('5')}/>
                    <Buttons label={6} onClick={() => addNumber('6')}/>
                    <Buttons label={"-"} onClick={() => addNumber('-')}/>
                </Row>
                <Row>
                    <Buttons label={1} onClick={() => addNumber('1')}/>
                    <Buttons label={2} onClick={() => addNumber('2')}/>
                    <Buttons label={3} onClick={() => addNumber('3')}/>
                    <Buttons label={"+"} onClick={() => addNumber('+')}/>
                </Row>
                <Row>
                    <Buttons label={" "}/>
                    <Buttons label={0} onClick={() => addNumber('0')}/>
                    <Buttons label={"."} onClick={() => addNumber('.')}/>
                    <Buttons label={"="} onClick={equationResult}/>
                </Row>
            </Content>
        </Container>
    );
}

export default App;