import React from 'react';
import './SelectLength.css';

type Props = {
  goods: string[] | null;
  setGoods(goods: string[]): void;
};

export const SelectLength: React.FC<Props> = ({ goods, setGoods }) => {
  const arrayOfValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const handleFilter = (value: string): void => {
    if (goods) {
      setGoods([...goods].filter(good => good.length >= Number(value)));
    }
  };

  return (
    <select
      className="select"
      onChange={(event) => handleFilter(event.target.value)}
    >
      {
        arrayOfValues.map(num => (
          <option
            key={num}
            value={num}
          >
            {num}
          </option>
        ))
      }
    </select>
  );
};
