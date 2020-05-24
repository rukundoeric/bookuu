/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header';
import Banner from '../Banner';
import Books from '../Books';
import Service1 from '../Services/Service1';

import { setBookId, discardViewHistory } from '../../redux/actions/index';

class Home extends Component {
  state = {
    query: '',
    books: {},
    bookId: undefined,
    bookIndex: Math.floor(Math.random() * (9 - 0 + 1)) + 0,
  };

  componentDidMount() {
    const {
      match: {
        params: { bookId },
      },
    } = this.props;
    this.setState({ bookId });
  }

  componentWillReceiveProps(newProps) {
    const { books, query, bookId } = newProps;
    this.setState({
      books,
      query,
      bookId,
    });
  }

  handleViewBook(id) {
    this.props.discardViewHistory();
    this.props.setBookId(id);
  }

  render() {
    return (
      <div>
        <Header
          brand="../../assets/images/logo.png"
          fixed
          color="transparent"
          changeColorOnScroll={{
            height: 400,
            color: 'white',
          }}
        />
        <Banner />
        <Books />
        <Service1 />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  books: state.bookoo.books,
  query: state.bookoo.query,
  bookId: state.bookoo.bookId,
});

export default connect(mapStateToProps, { setBookId, discardViewHistory })(
  Home,
);
