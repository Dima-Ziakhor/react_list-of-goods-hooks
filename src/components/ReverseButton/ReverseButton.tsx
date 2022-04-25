import React from 'react';
import './ReverseButton.css';

export const ReverseButton: React.FC<PropsForButton> = ({
  goods, setGoods,
}) => {
  const handleReverse = () => {
    if (goods) {
      setGoods([...goods].reverse());
    }
  };

  return (
    <button
      type="button"
      className="button button--reverse"
      onClick={handleReverse}
    >
      Reverse
    </button>
  );
};
