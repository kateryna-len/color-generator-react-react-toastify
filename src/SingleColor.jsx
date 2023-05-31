import React from 'react';
import { toast } from 'react-toastify';

function SingleColor({ color, index }) {
  console.log(color);
  const { hex, weight } = color;

  const navigateToClipboard = async () => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`#${hex}`);
        toast.success('Color copied to clipboard');
      } catch (error) {
        toast.error('Clipboard access not available');
      }
    } else {
      toast.error('Clipboard access not available');
    }
  };
  return (
    <article
      className={index > 10 ? 'color color-light' : 'color'}
      style={{ background: `#${hex}` }}
      onClick={navigateToClipboard}
    >
      <p className="color-value">{weight}%</p>
      <p className="percent-value">#${hex}</p>
    </article>
  );
}

export default SingleColor;
