import React from 'react';
import axios from 'axios';
import Left from './Left.js';
import Right from './Right.js';
export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: '',
      images: [],
      currentImage: '',
      currentTitle: '',
    };
  }

  componentDidMount() {
    console.log('mounted');
    axios
      .get('https://jsonplaceholder.typicode.com/photos?albumId=1')
      .then((response) => {
        // handle success
        this.setState({
          loading: false,
          images: response.data,
        });
        console.log(response);
      })
      .catch((error) => {
        // handle error
        this.setState({
          loading: false,
          error: error,
        });
        console.log(error);
      })
      .then(function () {
        // always executed
        console.log('Finished');
      });
  }
  componentWillUnmount() {}

  render() {
    if (this.state.loading) {
      return <div>loading</div>;
    }

    if (this.state.error.length > 0) {
      return <div>Error occurred: {this.state.error}</div>;
    }
    return (
      <div>
        <div class="row">
          <Left
            images={this.state.images}
            onClick={(url, title) => {
              this.setState({ currentImage: url, currentTitle: title });
            }}
          />
          <Right
            image={this.state.currentImage}
            title={this.state.currentTitle}
          />
        </div>
      </div>
    );
  }
}
