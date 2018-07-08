import React from 'react';
import { Grid, Segment } from 'semantic-ui-react';

const Details = () => (
        <Grid.Column stretched width={10}>
          <Segment>
            This is an stretched grid column. This segment will always match the tab height
          </Segment>
        </Grid.Column>
);
export default Details;


