import React, {Component} from 'react';
import {bindActiveCreators} from 'redux';
import {connect} from 'react-redux';
import {Menu,Input} from 'semantic-ui-react';

class PeopleList extends Component {
    render () {
        return (
            <Menu fluid vertical tabular>
                <Input icon='users' iconPosition='left' placeholder='Search people...' />
                <Menu.Item name='bio' />
                <Menu.Item name='pics' />
                <Menu.Item
                  name='companies'
                />
                <Menu.Item
                  name='links'
                />
            </Menu>
        );
    }
}

export default PeopleList;
