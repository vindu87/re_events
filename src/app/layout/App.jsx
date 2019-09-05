import React, { Component, Fragment } from "react";
import EventsDashboard from "../../features/event/EventDashboard/EventsDashboard";
import NavBar from "../../features/nav/NavBar/NavBar";
import { Route } from "react-router";
import HomePage from "../../features/home/HomePage";
import EventDetailedPage from "../../features/event/EventDetaild/EventDetailedPage";
import PeopleDashboard from "../../features/user/PeopleDashboard/PeopleDashboard";
import UserDetailedPage from "../../features/user/UserDetailed/UserDetailedPage";
import SettingsDashboard from "../../features/user/Settings/SettingsDashboard";
import EventForm from "../../features/event/EventForm/EventForm";
import { Container } from "semantic-ui-react";


class App extends Component {
  render() {
    return (
      <Fragment>
          <Route exact path='/' component={HomePage} />
          <Route 
              path = '/(.+)' 
              render = {() => (
                <Fragment>
                  <NavBar />
                    <Container className="main">   
                      <Route path='/events' component={EventsDashboard} />
                      <Route path='/events/:id' component={EventDetailedPage} />
                      <Route path='/people' component={PeopleDashboard} />
                      <Route path='/profile/:id' component={UserDetailedPage} />
                      <Route path='/settings' component={SettingsDashboard} />
                      <Route path='/createEvent' component={EventForm} />
                    </Container>
                </Fragment>    
              )} 
          />
      </Fragment>    
    );
  }
}

export default App;
