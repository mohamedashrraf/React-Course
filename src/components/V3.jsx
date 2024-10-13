import React, { Component } from 'react'

export default class V3 extends Component {

  changeName = () => {
    console.log(this); //لو اررو فانكشن يبقي ال this تعود علي السكوب اللي هيا فيها الكلاس
    //لو مش اررو فانكشن ال this هتبقي undefined تتحل بالاررو فانكشن او بال bind
    this.setState({
      name: "mo",
    })
  }
  render() {
    return (
      <div>V3</div>
    )
  }
}


