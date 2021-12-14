import "./styles.css";
import css from "./App.module.css";

import { useState } from "react";

const IMAGE_HEIGHT = 300;
const IMAGE_WIDTH = 600;

const items = [
  {
    id: 1,
    imageUrl: `https://picsum.photos/${IMAGE_WIDTH}/${IMAGE_HEIGHT}?random=1`
  },
  {
    id: 2,
    imageUrl: `https://picsum.photos/${IMAGE_WIDTH}/${IMAGE_HEIGHT}?random=2`
  },
  {
    id: 3,
    imageUrl: `https://picsum.photos/${IMAGE_WIDTH}/${IMAGE_HEIGHT}?random=3`
  },
  {
    id: 4,
    imageUrl: `https://picsum.photos/${IMAGE_WIDTH}/${IMAGE_HEIGHT}?random=4`
  },
  {
    id: 5,
    imageUrl: `https://picsum.photos/${IMAGE_WIDTH}/${IMAGE_HEIGHT}?random=5`
  }
];

export default function App() {
  const [index, setIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);

  function handleIncrementClick() {
    const nextIndex = index >= items.length - 1 ? 0 : index + 1;
    setPrevIndex(index);
    setIndex(nextIndex);
  }

  function handleDecrementClick() {
    const nextIndex = index <= 0 ? items.length - 1 : index - 1;
    setPrevIndex(index);
    setIndex(nextIndex);
  }

  return (
    <div className="App">
      <button onClick={handleIncrementClick}>Increment</button>
      <button onClick={handleDecrementClick}>Decrement</button>
      <div className={css.scrollContainer}>
        <ul className={css.imageList}>
          {items.map((item, itemIndex) => {
            const className =
              itemIndex === index
                ? `${css.imageListItem} ${css.imageListItemActive}`
                : css.imageListItem;
            const direction = index > prevIndex ? "down" : "up";
            const delay =
              (direction === "down" && itemIndex > index) ||
              (direction === "up" && itemIndex < index)
                ? "200ms"
                : "0ms";

            return (
              <li
                className={className}
                style={{
                  position: "absolute",
                  top: `${(itemIndex - index) * IMAGE_HEIGHT + 50}px`,
                  transitionDelay: delay
                }}
              >
                <img src={item.imageUrl} alt="test" />
                <var className={css.imageListItemIndex}>{itemIndex}</var>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
