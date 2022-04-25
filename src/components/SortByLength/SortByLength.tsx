import React from 'react';
import './SortByLength.css';

export const SortByLength: React.FC<PropsForButton> = ({
  goods, setGoods,
}) => {
  const handleSortByLength = () => {
    if (goods) {
      setGoods([...goods].sort((a, b) => a.length - b.length));
    }
  };

  return (
    <button
      type="button"
      className="button button--sort-by-length"
      onClick={handleSortByLength}
    >
      Sort by length
    </button>
  );
};
