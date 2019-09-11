import React from "react";
import { Grid } from "semantic-ui-react";
import { connect } from "react-redux";
import EventDetaildHeader from "./EventDetaildHeader";
import EventDetaildInfo from "./EventDetaildInfo";
import EventDetaildSidebar from "./EventDetaildSidebar";
import EventDetaildChat from "./EventDetaildChat";

const mapState = (state, ownProps) => {
  const eventId = ownProps.match.params.id;

  let event = {};

  if (eventId && state.events.length > 0) {
    event = state.events.filter(e => e.id === eventId)[0];
  }

  return { event };
};

const EventDetailedPage = ({event}) => {
  return (
    <Grid>
      <Grid.Column width={10}>
        <EventDetaildHeader event={event} />
        <EventDetaildInfo event={event} />
        <EventDetaildChat />
      </Grid.Column>
      <Grid.Column width={6}>
        <EventDetaildSidebar attendees={event.attendees} />
      </Grid.Column>
    </Grid>
  );
};

export default connect(mapState)(EventDetailedPage);
