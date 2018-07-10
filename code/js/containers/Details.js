import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Grid, Image, Message} from 'semantic-ui-react';
import $ from 'jquery';

class Details extends Component {
    show () {
        return (
            <Message info>
                <Message.Header>Select a person</Message.Header>
            </Message>
        );
    }
    render () {
        if (!this.props.people) {
            return (
                <div>
                    {this.show()}
                </div>
            );
        }
        
        var size = 0;
        for (var key in this.props.people.people) {
            size++;
        }
        
        if (this.props.people.value == "" && size == 4) {
            return (
            <Grid>
             <Grid.Row>
              <Grid.Column width={5}>
                  <Image fluid src={this.props.people.people.general.avatar} />
                </Grid.Column>
                <Grid.Column width={11}>
                  <Message>
                    <Message.Header>{this.props.people.people.general.firstName + " " + this.props.people.people.general.lastName}</Message.Header>
                    <p>
                      Email: {this.props.people.people.contact.email}
                    </p>
                    <p>
                      Phone: {this.props.people.people.contact.phone}
                    </p>
                  </Message>
                </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column width={8}>
                <Message>
                    <Message.Header>Address</Message.Header>
                    <p>
                      Country: {this.props.people.people.address.country}
                    </p>
                    <p>
                      City: {this.props.people.people.address.city}
                    </p>
                    <p>
                      Street: {this.props.people.people.address.street}
                    </p>
                    <p>
                      ZipCode: {this.props.people.people.address.zipCode}
                    </p>
                  </Message>
              </Grid.Column>
              <Grid.Column width={8}>
                <Message>
                    <Message.Header>Job</Message.Header>
                    <p>
                      Company: {this.props.people.people.job.company}
                    </p>
                    <p>
                      Title: {this.props.people.people.job.title}
                    </p>
                  </Message>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        );
        } 
        
        this.props.people.people.map ((people, index) => {
            var str = people.general.firstName + " " + people.general.lastName;
            $('#' + index).hide();
            if (str.indexOf(this.props.people.value) + 1 || str.indexOf(this.props.people.value.toUpperCase()) + 1 || str.indexOf(this.props.people.value.toLowerCase()) + 1) {
                $('#' + index).show();
            }
        })
            
        return (
            <div>
                {this.show()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
      people: state.active  
    };
}

export default connect(mapStateToProps)(Details);
    