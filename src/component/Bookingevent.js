import React from 'react';
import axios from 'axios';
import {Form, FormGroup, Input, Label, Button, Col ,Modal, ModalBody, ModalHeader} from 'reactstrap';
 class Create extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email:'',
            event:'',
            phone:'',
            date:'',
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
                    <ModalHeader>Booking Event</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                <Label for="username" sm={2}>Event
                                  <select value={this.state.value} onChange={this.handleChange}>
                                    <option value="Business Management Series">Business Management Series</option>
                                    <option value="Social Series">Social Series</option>
                                    <option value="Tech Series">Tech Series</option>
                                  </select>
                                </Label>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="name" sm={2}>Nama</Label>
                                <Col sm={10}>
                                    <Input type="text" name="name" id="name" onChange={this.handleChange }/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="email" sm={2}>Email</Label>
                                <Col sm={10}>
                                    <Input type="email" name="email" id="email" onChange={this.handleChange }/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="phone" sm={2}>Phone</Label>
                                <Col sm={10}>
                                    <Input type="number" name="phone" id="phone" onChange={this.handleChange }/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="password" sm={2}>Date</Label>
                                <Col sm={10}>
                                    <Input type="date" name="date" id="date" onChange={this.handleChange }/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col sm={{size: 10, offset: 2 }}>
                                    <Button style={{width: '20%'}}>Booking</Button>
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