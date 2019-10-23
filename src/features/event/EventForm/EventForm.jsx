import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import { Segment, Form, Button, Grid, Header } from "semantic-ui-react";
import { createEvent, updateEvent } from "../eventActions";
import cuid from "cuid";
import TextInput from "../../../app/common/form/textInputs";
import TextArea from "../../../app/common/form/textArea";
import SelectInput from "../../../app/common/form/selectInput";
import { combineValidators, composeValidators, isRequired, hasLengthGreaterThan } from 'revalidate';
import DateInput from "../../../app/common/form/dateInput";

const mapState = (state, ownPropds) => {
  const eventId = ownPropds.match.params.id;

  let event = {};

  if (eventId && state.events.length > 0) {
    event = state.events.filter(event => event.id === eventId)[0];
  }

  return { initialValues: event };
};

const actions = {
  createEvent,
  updateEvent
};

const category = [
  { key: "drinks", text: "Drinks", value: "drinks" },
  { key: "culture", text: "Culture", value: "culture" },
  { key: "film", text: "Film", value: "film" },
  { key: "food", text: "Food", value: "food" },
  { key: "music", text: "Music", value: "music" },
  { key: "travel", text: "Travel", value: "travel" }
];

const validate = combineValidators({
  title: isRequired({message: 'Event title is required!'}),
  category: isRequired({message: 'Category is required!'}),
  description: composeValidators(
    isRequired({message: 'Category is required!'}),
    hasLengthGreaterThan(4)({message: 'Description needs to be at least 5 characters'})
  )(),
  city: isRequired('city'),
  venue: isRequired('venue'),
  date: isRequired('date')
})

class EventForm extends Component {
  state = { ...this.props.event };

  onFormSubmit = values => {
    console.log(values);

    //evt.preventDefault();
    if (this.props.initialValues.id) {
      this.props.updateEvent(this.state);
      this.props.history.push(`events/${this.props.initialValues.id}`);
    } else {
      const newEvent = {
        ...values,
        id: cuid(),
        hostPhotoURL: "/assets/user.png",
        hostedBy: "Bob"
      };
      this.props.createEvent(newEvent);
      this.props.history.push(`/events/${newEvent.id}`);
    }
  };

  render() {
    const { history, initialValues, invalid, submitting, pristine } = this.props;

    return (
      <Grid>
        <Grid.Column width={10}>
          <Segment>
            <Header sub color='teal' content='Event Details' />
            <Form
              onSubmit={this.props.handleSubmit(this.onFormSubmit)}
              autocompleta='off'
            >
              <Field
                name='title'
                type='text'
                component={TextInput}
                placeholder='Event Name'
              />
              <Field
                name='category'
                type='text'
                component={SelectInput}
                options={category}
                //multiple={true}
                placeholder='Event Category'
              />
              <Field
                name='description'
                type='text'
                rows={3}
                component={TextArea}
                placeholder='Description'
              />
              <Header sub color='teal' content='Event Location Details' />
              <Field name='city' component={TextInput} placeholder='City' />
              <Field name='venue' component={TextInput} placeholder='Venue' />
              <Field
                name='date'
                component={DateInput}   
                dateFormat='dd LLL yyyy h:mm a'    
                showTimeSelect
                timeFormat='HH:mm'         
                placeholder='Event Date'
              />

              <Button disabled={invalid || pristine || submitting} positive type='submit'>
                Submit
              </Button>
              <Button
                onClick={
                  initialValues.id
                    ? () => history.push(`/events/${initialValues.id}`)
                    : () => history.push(`/events`)
                }
                type='button'
              >
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
)(reduxForm({ form: "eventForm", validate })(EventForm));
