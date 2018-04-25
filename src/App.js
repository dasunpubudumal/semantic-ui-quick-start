import React, { Component } from 'react';
import { Button, Icon, Label, Container, Flag } from 'semantic-ui-react'
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Container>
                    <br/><h2>Welcome to Semantic-UI!</h2><br/>
                    <Button as='div' labelPosition='right'>
                        <Button color='red'>
                            <Icon name='heart' />
                            Like
                        </Button>
                        <Label as='a' basic color='red' pointing='left'>2,048</Label>
                    </Button>
                    <Button color='black' size="medium">
                        <Icon name='github' /> <Flag name="lk" />GitHub
                    </Button>
                </Container>
            </div>
        );
    }
}

export default App;
