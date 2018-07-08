import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Grid, Image, Message} from 'semantic-ui-react';

class Details extends Component {
    render () {
        if (!this.props.people) {
            return (
            <Message info>
                <Message.Header>Select a person</Message.Header>
            </Message>
            );
        }
        return (
            <Grid>
             <Grid.Row>
              <Grid.Column width={5}>
                  <Image fluid src={this.props.people.general.avatar} />
                </Grid.Column>
                <Grid.Column width={11}>
                  <Message>
                    <Message.Header>{this.props.people.general.firstName + " " + this.props.people.general.lastName}</Message.Header>
                    <p>
                      Email: {this.props.people.contact.email}
                    </p>
                    <p>
                      Phone: {this.props.people.contact.phone}
                    </p>
                  </Message>
                </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column width={8}>
                <Message>
                    <Message.Header>Address</Message.Header>
                    <p>
                      Country: {this.props.people.address.country}
                    </p>
                    <p>
                      City: {this.props.people.address.city}
                    </p>
                    <p>
                      Street: {this.props.people.address.street}
                    </p>
                    <p>
                      ZipCode: {this.props.people.address.zipCode}
                    </p>
                  </Message>
              </Grid.Column>
              <Grid.Column width={8}>
                <Message>
                    <Message.Header>Job</Message.Header>
                    <p>
                      Company: {this.props.people.job.company}
                    </p>
                    <p>
                      Title: {this.props.people.job.title}
                    </p>
                  </Message>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        );
    }
}

function mapStateToProps(state) {
    return {
      people: state.active  
    };
}

export default connect(mapStateToProps)(Details);
    