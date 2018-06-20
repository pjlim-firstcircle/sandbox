import React, { Component, Fragment } from 'react';
import ContentLoader from 'react-content-loader';
import './User.css'

class User extends Component {
  state = {
    user: {},
    isLoading: true
  }

  showLoader() {
    return (
      <div className="loader">
        <ContentLoader
          height={160}
          width={488}
          speed={2}
          primaryColor="#f3f3f3"
          secondaryColor="#ecebeb"
        >
          <rect x="70" y="15" rx="4" ry="4" width="117" height="6.4" />
          <rect x="70" y="35" rx="3" ry="3" width="85" height="6.4" />
          <rect x="0" y="80" rx="3" ry="3" width="350" height="6.4" />
          <rect x="0" y="100" rx="3" ry="3" width="380" height="6.4" />
          <rect x="0" y="120" rx="3" ry="3" width="201" height="6.4" />
          <circle cx="30" cy="30" r="30" />
        </ContentLoader>
      </div>
    );
  }

  showUser() {
    return (
      <h1>{this.state.user.login}</h1>
    );
  }

  componentDidMount() {
      fetch('https://api.github.com/users/patrickjameslim')
      .then(response => {
        return response.json();
      }).then(user => {
        this.setState({user: user, isLoading: false});
        console.log(user);
      })
  }
  render() {
      console.log(`render: ${this.state.isLoading}`);
      return (
        <Fragment>
          {this.state.isLoading ? this.showLoader() : this.showUser()}
        </Fragment>
      )
  }
}

export default User;
