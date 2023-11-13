import { Component } from 'react';

import { Hourglass } from 'react-loader-spinner';

export class Loader extends Component {
  render() {
    return (
      <Hourglass
        visible={true}
        height="80"
        width="80"
        ariaLabel="hourglass-loading"
        wrapperStyle={{}}
        wrapperClass=""
        colors={['#306cce', '#72a1ed']}
      />
    );
  }
}
