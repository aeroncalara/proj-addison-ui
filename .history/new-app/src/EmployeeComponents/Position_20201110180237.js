import React, { Component } from "react";
import { Dropdown, Grid, Segment } from "semantic-ui-react";

const options = [
  { key: 1, text: "Developer", value: 20000 },
  { key: 2, text: "Quality Analyst", value: 19000 },
  { key: 3, text: "Designer", value: 18000 }
];

export default class DropdownExampleControlled extends Component {
  state = {};

  handleChange = (e, { value }) => this.setState({ value });

  render() {
    const { value } = this.state;

    return (
      <Grid columns={1}>
        <Grid.Column>
          <Dropdown
            onChange={this.handleChange}
            options={options}
            placeholder="Choose a Position"
            selection
            value={value}
          />
        </Grid.Column>
        <Grid.Column>
          <Segment>
            <pre>Position: {value}</pre>
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}