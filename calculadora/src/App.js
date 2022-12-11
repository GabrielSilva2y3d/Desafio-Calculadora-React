import React from 'react';
import { Container, Content, Row } from './styles';
import { Buttons } from './components/Buttons';
import { Input } from './components/Input';

function App() {
    return (
        <Container>
            <Content>
                <Input/>
                <Row>
                    <Buttons label={" "}/>
                    <Buttons label={"C"}/>
                    <Buttons label={"<"}/>
                    <Buttons label={"÷"}/>
                </Row>
                <Row>
                    <Buttons label={7}/>
                    <Buttons label={8}/>
                    <Buttons label={9}/>
                    <Buttons label={"x"}/>
                </Row>
                <Row>
                    <Buttons label={4}/>
                    <Buttons label={5}/>
                    <Buttons label={6}/>
                    <Buttons label={"-"}/>
                </Row>
                <Row>
                    <Buttons label={1}/>
                    <Buttons label={2}/>
                    <Buttons label={3}/>
                    <Buttons label={"+"}/>
                </Row>
                <Row>
                    <Buttons label={"±"}/>
                    <Buttons label={0}/>
                    <Buttons label={"."}/>
                    <Buttons label={"="}/>
                </Row>
            </Content>
        </Container>
    );
}

export default App;