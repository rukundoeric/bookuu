/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { connect } from 'react-redux';
import Rater from './Rater';
import { setBookId, discardViewHistory } from '../../redux/actions/index';
import imagess from '../../assets/imgs/blog_2.png';

function BookItem(props) {
  const { bookInfo, key } = props;
  const {
    id,
    volumeInfo: {
      imageLinks, title, averageRating,
    },
    delay,
  } = bookInfo;
  const image = imageLinks
    ? imageLinks.smallThumbnail
    : 'https://indicbookclub.com/backendassets/book_images/default.png';
  return (
    <div
      className="book-item align-items-center wow fadeInUpBig"
      data-wow-delay={delay}
    >
      <img src={imagess} className="card-img-top" alt="blog" />
      <div className="item-desc-content">
        <Rater value={3} />
        <label>
          {title}
        </label>
      </div>
    </div>
  );
}

export default connect(null, { setBookId, discardViewHistory })(BookItem);
