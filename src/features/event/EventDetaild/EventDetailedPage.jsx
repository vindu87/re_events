import React from "react";
import { Grid } from "semantic-ui-react";
import EventDetaildHeader from "./EventDetaildHeader";
import EventDetaildInfo from "./EventDetaildInfo";
import EventDetaildSidebar from "./EventDetaildSidebar";
import EventDetaildChat from "./EventDetaildChat";

const EventDetailedPage = () => {
  return (
    <Grid>
      <Grid.Column width={10}>
          <EventDetaildHeader />
          <EventDetaildInfo />
          <EventDetaildChat />
      </Grid.Column>
      <Grid.Column width={6}>
          <EventDetaildSidebar />
      </Grid.Column>
    </Grid>
  );
};

export default EventDetailedPage;
