import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Input,Image, List} from 'semantic-ui-react';
import {Select, SearchPeople} from '../actions/index';

class PeopleList extends Component {
    show () {
        return this.props.peoples.map ((people, index) => {
            return(
                <List.Item 
                onClick={() => this.props.onSelect(people, "")} 
                    key={index} 
                    name={people.general.firstName + people.general.lastName}
                    id={index}
                >
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
            <Input 
                    icon='users' 
                    fluid 
                    iconPosition='left' 
                    placeholder='Search people...' 
                    id="Search" 
                    onChange={() => this.props.onSearch(this.props.peoples, document.getElementById("Search").value)}
                />
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

function matchDispatchToProps(dispatch) {
    return bindActionCreators({onSelect: Select, onSearch: SearchPeople}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(PeopleList);