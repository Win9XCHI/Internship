import React, {Component} from 'react';
import {bindActiveCreators} from 'redux';
import {connect} from 'react-redux';
import {Menu,Input,Image, List} from 'semantic-ui-react';

class PeopleList extends Component {
    show () {
        return this.props.peoples.map ((people, index) => {
            return(
                <List.Item key={index}>
                  <Image avatar src={people.general.avatar} />
                  <List.Content>
                    <List.Header>{people.general.firstName}</List.Header>
                {people.job.company}
                  </List.Content>
                </List.Item>
            );
        });
    }
    render () {
        return (
            <List celled size='big'>
                <Input icon='users' fluid iconPosition='left' placeholder='Search people...' />
                {this.show()}
            </List>
        );
    }
}

function mapStateToProps(state) {
    return {
      peoples: state.people  
    };
}

export default connect(mapStateToProps)(PeopleList);
