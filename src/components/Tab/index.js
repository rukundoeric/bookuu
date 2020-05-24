import React from 'react';
import { bookCat as Tabs } from '../Data/index';
import Item from './Item';

const index = () => (

  <ul className="nav nav-tabs" id="myTab" role="tablist">
    <li className="title">Don’t Miss</li>
    {Tabs.map(
      (item, pos) => pos < 5 && (
      <Item
        key={item.id}
        id={`tab_${item.id}`}
        caption={item.caption}
        isActive={item.isActive}
        ariaSelected={item.isActive}
        tabs={undefined}
        more={false}
        itemPosition={pos}
      />
      ),
    )}
    <Item
      tabs={Tabs.slice(5, Tabs.length)}
      more
    />
  </ul>
);

export default index;
