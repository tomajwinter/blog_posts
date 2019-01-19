import React, { Component } from "react";
import PropTypes from "prop-types";
import UserAPI from "../../api/UserAPI";

class UserDetails extends Component {
  static propTypes = {
    userId: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  }

  async componentDidMount() {
    try {
      const { userId } = this.props;
      const userResponse = await UserAPI.getDataForUser(userId);
      this.setState({
        user: userResponse
      });
    } catch (err) {
      // Handle a failed request
    }
  }

  displayUser = () => {
    const { user } = this.state;
    const { name } = user;
    return <span>{`Hello ${name}!`}</span>;
  };

  loading = () => <span>Loading...</span>;

  render() {
    const { user } = this.state;
    return user ? this.displayUser() : this.loading();
  }
}

export default UserDetails;
