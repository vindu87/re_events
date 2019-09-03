import React, { Component } from 'react'
import { Segment, Form, Button } from 'semantic-ui-react';

class EventForm extends Component {
  state = {
    title: '',
    date: '',
    city: '',
    venue: '',
    hostedBy: ''
  }

    handleFormSubmit = (evt) => {
      evt.preventDefault();
      this.props.createEvetn(this.state);
    }

    handleInputChange = ({target: {name, value}}) =>{
        this.setState({
          [name]: value
        });
    }

    render() {
      const {cancelFormOpen} = this.props;
      const {title, date, city, venue, hostedBy} = this.state;
        return (
                      <Segment>
                        <Form onSubmit={this.handleFormSubmit} autoComplete='off' > 
                          <Form.Field>
                            <label>Event Title</label>
                            <input 
                              name ='title'
                              onChange={this.handleInputChange}
                              value={title} 
                              placeholder="Event Title" />
                          </Form.Field>
                          <Form.Field>
                            <label>Event Date</label>
                            <input name ='date'
                              onChange={this.handleInputChange}
                              value={date} 
                              placeholder="Event Date" />
                          </Form.Field>
                          <Form.Field>
                            <label>City</label>
                            <input name ='city'
                              onChange={this.handleInputChange}
                              value={city} 
                              placeholder="Event City" />
                          </Form.Field>
                          <Form.Field>
                            <label>Venue</label>
                            <input name ='venue'
                              onChange={this.handleInputChange}
                              value={venue} 
                              placeholder="Event Venue" />
                          </Form.Field>
                          <Form.Field>
                            <label>Hosted By</label>
                            <input name ='hostedBy'
                              onChange={this.handleInputChange}
                              value={hostedBy} 
                              placeholder="Hosted By" />
                          </Form.Field>
                          <Button positive type="submit">
                            Submit
                          </Button>
                          <Button onClick={cancelFormOpen} type="button">Cancel</Button>
                        </Form>
                      </Segment>
        )
    }
}
export default EventForm;
