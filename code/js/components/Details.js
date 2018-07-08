import React from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import DetailsConteiner from '../containers/Details';

const Details = () => (
        <Grid.Column stretched width={10}>
          <Segment>
            <DetailsConteiner />
          </Segment>
        </Grid.Column>
);
export default Details;


