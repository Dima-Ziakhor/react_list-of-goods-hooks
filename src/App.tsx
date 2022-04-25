import React, { useEffect, useState } from 'react';
import './App.css';
import { ListOfGoods } from './components/ListOfGoods';
import { SelectLength } from './components/SelectLength';
import { ReverseButton } from './components/ReverseButton';
import { SortAlphabeticallyButton }
  from './components/SortAlphabeticallyButton';
import { ResetButton } from './components/ResetButton';

const goodsFromServer: string[] = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

const App: React.FC = () => {
  const [initialGoods, setInitialGoods] = useState<string[] | null>(null);
  const [goods, setGoods] = useState<string[] | null>(null);
  const [isListVisible, setIsListVisible] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(true);

  const handleSortByLength = () => {
    if (goods) {
      setGoods([...goods].sort((a, b) => a.length - b.length));
    }
  };

  useEffect(() => {
    setInitialGoods(goodsFromServer);
  }, []);

  return (
    <div className="App">
      <div className="App__wrapper">
        <h1>Goods</h1>
        {
          isButtonVisible && (
            <button
              type="button"
              className="App__button"
              onClick={() => {
                setIsListVisible(true);
                setIsButtonVisible(false);
                setGoods(initialGoods);
              }}
            >
              Start
            </button>
          )
        }
        {
          !isButtonVisible && (
            <div className="App__buttons-wrapper">
              <SelectLength
                goods={initialGoods}
                setGoods={setGoods}
              />

              <ReverseButton
                goods={goods}
                setGoods={setGoods}
              />

              <SortAlphabeticallyButton
                goods={goods}
                setGoods={setGoods}
              />

              <ResetButton
                goods={initialGoods}
                setGoods={setGoods}
              />

              <button
                type="button"
                className="App__button"
                onClick={handleSortByLength}
              >
                Sort by length
              </button>
            </div>
          )
        }
        {
          isListVisible && goods !== null && (
            <ListOfGoods
              goods={goods}
            />
          )
        }
      </div>
    </div>
  );
};

export default App;
