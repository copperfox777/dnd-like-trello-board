import React, { useState } from "react";
import "./App.css";
import Item from "./components/Item";
import DropWrapper from "./components/DropWrapper";
import Col from "./components/Col";
import { data, columns } from "./data";
import ModalWindow from "./components/ModalWindow";

const App = () => {
  const [items, setItems] = useState(data);
  const [showModal, setShowModal] = useState(false);
  const [itemToEdit, setItemToEdit] = useState(null);

  const onSaveHandler = (item) => {
    const newItems = items.filter((i) => i.id !== item.id);
    newItems.push(item);
    setItems(newItems);
    setShowModal(false);
  };

  const onCloseHandler = () => {
    setShowModal(false);
  };

  const onItemClickHandler = (item) => {
    setItemToEdit(item);
    setShowModal(true);
  };

  const onAddHandler = () => {
    const item = {
      id: Math.random(),
      columnId: "order",
      title: "",
      content: "",
    };
    setItemToEdit(item);
    setShowModal(true);
  };

  const onDeleteHandler = (item) => {
    const newItems = items.filter((i) => i.id !== item.id);
    setItems(newItems);
    setShowModal(false);
  };

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
              <div>
                <h2 className={"col-header"}>
                  <div className={"color-bar"} style={{ backgroundColor: column.color }} />
                  {column.name}
                </h2>
              </div>
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
                        onItemClickHandler={onItemClickHandler}
                      />
                    ))}
                </Col>
              </DropWrapper>
            </div>
          );
        })}
      </div>
      <button className="button" onClick={onAddHandler}>
        Добавить тикет
      </button>

      <ModalWindow
        item={itemToEdit}
        onCloseHandler={onCloseHandler}
        show={showModal}
        onSaveHandler={onSaveHandler}
        onDeleteHandler={onDeleteHandler}
      />
    </>
  );
};

export default App;
