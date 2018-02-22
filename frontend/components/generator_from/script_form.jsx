import React from 'react';

  class ScriptForm extends React.Component {
    constructor(props) {
      super(props);

    this.state = {
        id: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  // needs to return script
  handleSubmit(e) {
    e.preventDefault();
    // this.props.createScript(this.state);
    this.setState({
      id: ""
    });
  }

  render() {

    return (
      <div className="form-page">
      <form onSubmit={this.handleSumit}>
        <label>Id
          <input
            type="text"
            value={this.state.id}
            onChange={this.update('id')} />
        </label>
        <input type="submit" className="submit" value="Create Script"/>
      </form>

      <div className="script-container"></div>
      </div>
    );
  }
}

export default ScriptForm;
