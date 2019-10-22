import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import { Segment, Form, Button, Grid, Header } from "semantic-ui-react";
import { createEvent, updateEvent } from "../eventActions";
import cuid from "cuid";
import TextInput from "../../../app/common/form/textInputs";

const mapState = (state, ownPropds) => {
  const eventId = ownPropds.match.params.id;

  let event = {
    title: "",
    date: "",
    city: "",
    venue: "",
    hostedBy: ""
  };

  if (eventId && state.events.length > 0) {
    event = state.events.filter(event => event.id === eventId)[0];
  }

  return { event };
};

const actions = {
  createEvent,
  updateEvent
};

class EventForm extends Component {
  state = { ...this.props.event };

  handleFormSubmit = evt => {
    evt.preventDefault();
    if (this.state.id) {
      this.props.updateEvent(this.state);
      this.props.history.push(`events/${this.state.id}`);
    } else {
      const newEvent = {
        ...this.state,
        id: cuid(),
        hostPhotoURL: "/assets/user.png"
      };
      this.props.createEvent(newEvent);
      this.props.history.push(`/events`);
    }
  };

  render() {
    
    return (
      <Grid>
        <Grid.Column width={10}>
          <Segment>
            <Header sub color='teal' content='Event Details'/>
            <Form onSubmit={this.handleFormSubmit}>
              <Field
                name='title'
                component={TextInput}
                placeholder='Event Title'
              />
              <Field
                name='title'
                component={TextInput}
                placeholder='Event Name'
              />
              <Field
                name='description'
                component={TextInput}
                placeholder='Description'
              />
            <Header sub color='teal' content='Event Location Details'/>
              <Field name='city' component={TextInput} placeholder='City' />
              <Field name='venue' component={TextInput} placeholder='Venue' />
              <Field
                name='date'
                component={TextInput}
                placeholder='Event Date'
              />

              <Button positive type='submit'>
                Submit
              </Button>
              <Button onClick={this.props.history.goBack} type='button'>
                Cancel
              </Button>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}

export default connect(
  mapState,
  actions
)(reduxForm({ form: "eventForm" })(EventForm));
