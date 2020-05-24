/* eslint-disable react/no-array-index-key */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import { WOW } from 'wowjs';
import BookItem from './BookItem';
import { getbooks, discardHistory } from '../../redux/actions/index';
import { bookCat } from '../Data/index';
import Select from '../Commons/Select';
import BookDetails1 from './BookDetails1';
import { About } from '../Widget';
import Tab from '../Tab';
import Rater from './Rater';
import imagess from '../../assets/imgs/blog_2.png';


class Books extends Component {
  state = {
    currentPage: 1,
    books: {},
    query: '',
    itemsCount: 12,
    options: bookCat.map(cat => <option value={1}>{cat}</option>),
  };

  componentDidMount() {
    const { query } = this.state;
    this.props.getbooks(
      query || 'a',
      this.state.itemsCount,
      this.state.currentPage,
    );
    const wow = new WOW();
    wow.init();
  }

  componentWillReceiveProps(newProps) {
    const { books, query } = newProps;
    this.setState({
      books,
      query,
    });
    if (query !== this.state.query) {
      this.props.getbooks(
        query || 'a',
        this.state.itemsCount,
        this.state.currentPage,
      );
    }
  }

  render() {
    const { books, options } = this.state;
    if (books.items) {
      return (
        <section className="books_part">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-lg-12">
                <div className="mb-50">
                  <div className="books_category_area">
                    <div className="tab-content" id="myTabContent">
                      <div
                        className="tab-pane fade show active"
                        id="world-tab-1"
                        role="tabpanel"
                        aria-labelledby="tab1"
                      >
                        <div className="book-list-content">
                          <div className="book-details">
                            <BookDetails1 books={books} />
                          </div>

                          <div className="">
                            <div className="book-item-container">
                              {books.items.map((book, pos) => (
                                <BookItem
                                  key={`key_${pos}`}
                                  bookInfo={book}
                                  delay={`${(pos + 1) / 3}s`}
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    }

    return (
      <div
        style={{
          width: '100%',
          height: '100',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Loader type="ThreeDots" color="#ff7e5f" height="100" width="100" />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  books: state.bookoo.books,
  query: state.bookoo.query,
});

export default connect(mapStateToProps, { getbooks, discardHistory })(Books);
