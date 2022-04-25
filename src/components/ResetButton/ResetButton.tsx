import React from 'react';
import './ResetButton.css';

export const ResetButton:React.FC<PropsForButton> = ({
  goods, setGoods,
}) => {
  const handleReset = () => {
    if (goods) {
      setGoods(goods);
    }
  };

  return (
    <button
      type="button"
      className="button button--reset"
      onClick={handleReset}
    >
      Reset
    </button>
  );
};
