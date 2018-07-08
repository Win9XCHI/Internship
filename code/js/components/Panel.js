import React from 'react';
import { Grid, Menu, Input } from 'semantic-ui-react';

const Panel = () => (
        <Grid.Column width={4}>
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
        </Grid.Column>
);
export default Panel;


