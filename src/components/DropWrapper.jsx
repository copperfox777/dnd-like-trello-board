import React from "react";
import { useDrop } from "react-dnd";
import ITEM_TYPE from "../data/types";
import { columns } from "../data";

const DropWrapper = ({ onDrop, children, id }) => {
    const [{ isOver }, drop] = useDrop({
        accept: ITEM_TYPE,
        canDrop: (item, monitor) => {
            const itemIndex = columns.findIndex(column => column.id === item.columnId);
            const nameIndex = columns.findIndex(column => column.id === id);
            return [itemIndex + 1, itemIndex - 1, itemIndex].includes(nameIndex);
        },
        drop: (item, monitor) => {
            onDrop(item, monitor, id);
        },
        collect: monitor => ({
            isOver: monitor.isOver()
        })
    });

    return (
        <div ref={drop} className={"drop-wrapper"}>
            {React.cloneElement(children, { isOver })}
        </div>
    )
};

export default DropWrapper;