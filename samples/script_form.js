import React from 'react';

class buildScriptFrom extends React.Component {

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

export default buildScriptFrom;
