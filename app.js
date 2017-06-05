class Letter extends React.Component {
  render() {
    var letterStyle = {
      padding: 10,
      margin: 10,
      backgroundColor: this.props.bgcolor,
      color: "#333",
      display: "inline-block",
      fontFamily: "monospace",
      fontSize: 32,
      textAlign: "center"
    };

    return (
      <div style={letterStyle}>
        {this.props.children}
      </div>
    );
  }
}

ReactDOM.render(
  <div>
    <Letter bgcolor="#58B3FF">H</Letter>
    <Letter bgcolor="#FF605F">E</Letter>
    <Letter bgcolor="#FFD52E">L</Letter>
    <Letter bgcolor="#49DD8E">L</Letter>
    <Letter bgcolor="#AE99FF">0</Letter>
  </div>,
  document.querySelector("#container")
);
