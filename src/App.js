import React, { useState } from "react";
import "./App.css";
import Item from "./components/Item";
import DropWrapper from "./components/DropWrapper";
import Col from "./components/Col";
import { data, columns } from "./data";

const App = () => {
  const [items, setItems] = useState(data);

  const onDrop = (item, monitor, columnId) => {
    setItems((prevState) => {
      const newItems = prevState
        .filter((i) => i.id !== item.id)
        .concat({ ...item, columnId });
      return [...newItems];
    });
  };

  const moveItem = (dragIndex, hoverIndex) => {
    const item = items[dragIndex];
    setItems((prevState) => {
      const newItems = prevState.filter((i, idx) => idx !== dragIndex);
      newItems.splice(hoverIndex, 0, item);
      return [...newItems];
    });
  };

  return (
    <>
      <div className={"row"}>
        {columns.map((column) => {
          return (
            <div key={column.id} className={"col-wrapper"}>
              <h2 className={"col-header"}>{column.name}</h2>
              <DropWrapper onDrop={onDrop} id={column.id}>
                <Col>
                  {items
                    .filter((i) => i.columnId === column.id)
                    .map((i, idx) => (
                      <Item
                        key={i.id}
                        item={i}
                        index={idx}
                        moveItem={moveItem}
                        column={column}
                      />
                    ))}
                </Col>
              </DropWrapper>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default App;
