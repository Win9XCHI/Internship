import React from 'react';
import {Grid} from 'semantic-ui-react';
import PeopleList from '../containers/People-list';

const Panel = () => (
        <Grid.Column width={6}>
            <PeopleList /> 
        </Grid.Column>
);
export default Panel;


