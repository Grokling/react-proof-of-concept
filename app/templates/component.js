import { add, fetchAll } from './actions';
import { connect } from 'react-redux';
import React, { Component } from 'react';

class Add extends Component {
  onSubmit(event) {
    event.preventDefault();

    this.props.add(this.refs.name.value);
    this.refs.name.value = '';
  }

  render() {
    return (
      <form onSubmit={::this.onSubmit}>
        <input type='text' ref='name' autoFocus={true} />
        <button type='submit'>add</button>
      </form>
    );
  }
}

class Templates extends Component {
  componentDidMount() {
    this.props.dispatch(fetchAll());
  }

  render() {
    return (
      <div>
      <Add add={(name) => this.props.dispatch(add({name})) } />
        {this.props.templates.map((template, i) => <p key={i}>{template.name} {template._id}</p>)}
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    templates: state.templates
  };
}

export default connect(mapStateToProps)(Templates);
