import React from 'react';
import axios from 'axios';
import {Form, FormGroup, Input, Label, Button, Col ,Modal, ModalBody, ModalHeader} from 'reactstrap';
 class Create extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password:'',
            modal: props.modal
        };
         this.handleChange = this.handleChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleClosed = this.handleClosed.bind(this);
        this.close = this.close.bind(this);
    }
     handleChange(event){
        ;
        this.setState({[event.target.username]: event.target.value});
    }
    handleSubmit(event){
        event.preventDefault();
        axios.post('', this.state)
            .then(res => {
                console.log(res);
                console.log(res.data);
            });
    }
    render(){
        return(
            <div >
               
                <Modal isOpen={this.state.modal} onClosed={this.handleClosed}>
                    <ModalHeader>Login Us Member</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                <Label for="username" sm={2}>Username</Label>
                                <Col sm={10}>
                                    <Input type="text" name="username" id="username" onChange={this.handleChange }/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="password" sm={2}>Password</Label>
                                <Col sm={10}>
                                    <Input type="password" name="password" id="password" onChange={this.handleChange }/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col sm={{size: 10, offset: 2 }}>
                                    <Button style={{width: '20%'}}>Login</Button>
                                    <Button style={{width: '20%', marginLeft:'20px'}} type="button" onClick={this.close}>Batal</Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
    handleClosed() {
        this.props.closeModal();
    }
     close() {
        this.setState({
            modal: false
        });
    }
}
 export default Create; 