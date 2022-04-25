import React from 'react';
import './SortAlphabeticallyButton.css';

export const SortAlphabeticallyButton: React.FC<PropsForButton> = ({
  goods, setGoods,
}) => {
  const handleSortAlphabetically = () => {
    if (goods) {
      setGoods([...goods].sort());
    }
  };

  return (
    <button
      type="button"
      className="button button--sort-alphabetically"
      onClick={handleSortAlphabetically}
    >
      Sort alphabetically
    </button>
  );
};
