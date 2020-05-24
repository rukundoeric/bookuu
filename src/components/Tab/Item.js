/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const TabItem = ({
  caption, isActive, id, ariaSelected, more, tabs, itemPosition,
}) => {
  if (more) {
    return (
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          data-toggle="dropdown"
          role="button"
          aria-haspopup="true"
          aria-expanded="false"
        >
          More
        </a>
        <div className="dropdown-menu">
          {tabs.map(item => (
            <a
              key={item.id}
              className="nav-link"
              id={`tab${item.id}`}
              data-toggle="tab"
              role="tab"
              aria-controls={`world-tab-${item.id}`}
              aria-selected="false"
            >
              {item.caption}
            </a>
          ))}
        </div>
      </li>
    );
  }
  return (
    <li className="nav-item">
      <a
        className={`nav-link ${isActive && 'active'}`}
        id={id}
        data-toggle="tab"
        role="tab"
        aria-controls={`world-tab-${itemPosition}`}
        aria-selected={ariaSelected}
      >
        {caption}
      </a>
    </li>
  );
};
export default TabItem;
