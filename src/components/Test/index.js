/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-console */
/* eslint-disable react/button-has-type */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import Card from './item';

const data = [
  {
    id: 'GFGF4545',
    index: 0,
    picture: 'src/assets/imgs/blog_1.png',
    title: 'How to create a Modejs Application',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas omnis iusto, excepturi sequi, voluptas architecto deleniti fuga fugiat sunt aliquam reprehenderit cum molestiae in, nesciunt incidunt libero quibusdam necessitatibus ea?',
  },
  {
    id: 'GFGF45rrt45',
    index: 1,
    picture: 'src/assets/imgs/blog_2.png',
    title: 'How to create a Modejs Application',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas omnis iusto, excepturi sequi, voluptas architecto deleniti fuga fugiat sunt aliquam reprehenderit cum molestiae in, nesciunt incidunt libero quibusdam necessitatibus ea?',
  },
  {
    id: 'GFGF4533t45',
    index: 2,
    picture: 'src/assets/imgs/blog_3.png',
    title: 'How to create a Modejs Application',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas omnis iusto, excepturi sequi, voluptas architecto deleniti fuga fugiat sunt aliquam reprehenderit cum molestiae in, nesciunt incidunt libero quibusdam necessitatibus ea?',
  },
  {
    id: 'GFGF45356rt45',
    index: 3,
    picture: 'src/assets/imgs/blog_4.png',
    title: 'How to create a Modejs Application',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas omnis iusto, excepturi sequi, voluptas architecto deleniti fuga fugiat sunt aliquam reprehenderit cum molestiae in, nesciunt incidunt libero quibusdam necessitatibus ea?',
  },
  {
    id: 'GFG34565rrt45',
    index: 4,
    picture: 'src/assets/imgs/blog_2.png',
    title: 'How to create a Modejs Application',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas omnis iusto, excepturi sequi, voluptas architecto deleniti fuga fugiat sunt aliquam reprehenderit cum molestiae in, nesciunt incidunt libero quibusdam necessitatibus ea?',
  },
];

export default class index extends Component {
  state = {
    properties: data,
    property: data[0],
    play: undefined,
    interval: 2000,
    currentAction: 'next',
  };

  autoPlay = (next, prev) => {
    const { interval } = this.state;
    setInterval(() => {
      if (this.state.currentAction === 'prev') {
        prev();
      } else {
        next();
      }
    }, interval);
  };

  stopAutoPlay = () => {
    clearInterval(this.state.play);
  };

  nextProperty = () => {
    const nextIndex = this.state.property.index + 1;
    const currentAction = nextIndex === data.length - 1 ? 'prev' : 'next';
    this.setState({
      property: data[nextIndex],
      currentAction,
    });
  };

  prevProperty = () => {
    const prevIndex = this.state.property.index - 1;
    const currentAction = prevIndex === 0 ? 'next' : 'prev';
    this.setState({
      property: data[prevIndex],
      currentAction,
    });
  };

  render() {
    const { property, properties } = this.state;
    return (
      <div className="TestContainer">
        <div className="testBtnsDiv">
          <button
            onClick={() => this.prevProperty()}
            disabled={property.index === 0}
          >
            Prev
          </button>
          <button
            onClick={() => this.autoPlay(this.nextProperty, this.prevProperty)}
          >
            Auto play
          </button>
          <button
            onClick={() => this.nextProperty()}
            disabled={property.index === data.length - 1}
          >
            Next
          </button>
        </div>
        <div className="testPage">
          <div className={`cards-slider active-slider-${property.index}`}>
            <div
              className="cards-slider-wrapper"
              style={{
                transform: `translateX(-${(property.index * 100)
                  / properties.length}%)`,
              }}
            >
              {properties.map(pro => (
                <Card key={pro.id} property={pro} />
              ))}
            </div>
          </div>
        </div>
        
        {/* <div className="testPage2">
          <div
            className="testPage2card one"
            style={{
              transform: `translateX(-${(property.index * 500)
                / properties.length}%)`,
            }}
          >
            {properties.map(({ picture, title, description }) => (
              <div className="testPage2item">
                <img src={picture} />
                <h4>{title}</h4>
                <p>{description}</p>
              </div>
            ))}
          </div>
          <div className="testPage2card" />
        </div> */}
      </div>
    );
  }
}
