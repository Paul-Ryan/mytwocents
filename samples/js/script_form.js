const update = (field) => {
  return e => this.setState({
    [field]: e.currentTarget.value
  });
};

// needs to return script
const handleSubmit = (e) => {
  e.preventDefault();
  // this.props.createScript(this.state);
  this.setState({
    id: ""
  });
};
