import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    this.setState({ count: 1 });
    console.log('componentDidMount');
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.count === 10) {
      this.setState({ count: 5 });
    }
    console.log('componentDidUpdate');
  }

  render() {
    return (
      <div className='flex gap-3'>
        {this.state.count}
        <button onClick={() => this.setState({ count: (this.state.count += 1) })}>Tambah</button>
        {console.log('render')}
      </div>
    );
  }
}

export default Counter;
