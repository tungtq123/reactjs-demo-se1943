import React from "react";

class MyComponent extends React.Component {
  state = {
    heading: "Welcome to my component",
    content: "This is a single React component",
  };
  constructor(props) {
    super(props);
    setTimeout(() => {
      this.setState({
        heading: "Updated heading",
        content: "The content has been updated after 5 seconds",
      });
    }, 5000);
  }
  componentDidMount() {
    console.log("Login component mounted");
  }
  componentWillUnmount() {
    console.log("Login component unmounted");
  }

  render() {
    const { heading, content } = this.state;
    return (
      <div>
        <h2>{heading}</h2>
        <h2>{content}</h2>
      </div>
    );
  }
}
export default MyComponent;
