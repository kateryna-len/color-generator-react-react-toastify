import React from 'react';
import SingleColor from './SingleColor';
import { nanoid } from 'nanoid';

function ColorList({ colors }) {
  return (
    <section className="colors">
      {colors.map((color, index) => {
        const id = nanoid();
        return <SingleColor key={id} color={color} index={index} />;
      })}
    </section>
  );
}

export default ColorList;
