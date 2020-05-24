/* eslint-disable react/no-danger */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-string-refs */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import b1 from '../../assets/imgs/blog-img/b1.jpg';
import b2 from '../../assets/imgs/blog-img/b2.jpg';
import Rater from './Rater';
import b3 from '../../assets/imgs/blog-img/b3.jpg';
import b4 from '../../assets/imgs/blog-img/b4.jpg';
import b5 from '../../assets/imgs/blog-img/b5.jpg';

export default function Owl({ books }) {
  if (books.items) {
    const {
      imageLinks,
      title,
      description,
      publishedDate,
      averageRating,
      authors,
      publisher,
      categories,
    } = books.items[6].volumeInfo;
    const image = imageLinks
      ? imageLinks.smallThumbnail
      : 'https://indicbookclub.com/backendassets/book_images/default.png';

    return (
      <div
        className="owl-book-item align-items-center wow fadeInUpBig"
        data-wow-delay="0.2s"
      >
        <div className="top-content">
          <div>
            <img src={b3} />
          </div>
          <div className="top-content-r">
            <a>{categories[0]}</a> | <span> Published in {publishedDate}</span>
            <p>{title}</p>
            <span>
              <a>Authors</a> : {authors}
            </span>
            <span>
              <a>publisher</a> : {publisher}
            </span>
            <Rater value={averageRating} />
          </div>
        </div>
        <div className="desc-content">
          <p>{`"${description}"`}</p>
        </div>
      </div>
    );
  }
  return <div />;
}
