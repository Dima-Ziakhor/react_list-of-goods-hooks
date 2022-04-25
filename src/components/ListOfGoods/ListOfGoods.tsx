import React from 'react';
import './ListOfGoods.css';

type Props = {
  goods: string[]
};

export const ListOfGoods: React.FC<Props> = ({ goods }) => {
  return (
    <ul className="listOfGoods">
      {
        goods && (
          goods.map(item => (
            <li key={item} className="listOfGoods__item">
              {item}
            </li>
          ))
        )
      }
    </ul>
  );
};
