import {useState,useEffect} from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const ModalWindow = ({ show, onCloseHandler, onSaveHandler, item, onDeleteHandler }) => {
  useEffect(()=>{
    setFormValues(item)
  },[item])

  const [formValues, setFormValues] = useState(item)
  const onChangeHandler = (e) => {
    setFormValues({...formValues,[e.target.id]:e.target.value})
  }

  return (
    <Modal
      isOpen={show}
      onRequestClose={onCloseHandler}
      className={"modal"}
      overlayClassName={"overlay"}
    > 
    {formValues &&
      <div>
        <div className="close-btn-ctn">
          <button className="close-btn" onClick={onCloseHandler}> X </button>
        </div>
        <div className="input-line">
          <label htmlFor="title">Заголовок </label>
          <input id="title" type="textarea" onChange={onChangeHandler} value={formValues.title} />
        </div>
        <div  className="input-line">
          <label htmlFor="content">Содержимое </label>
          <input id="content" type="textarea" onChange={onChangeHandler} value={formValues.content} />
        </div>
        <div>
          <button className="button" onClick={()=>onSaveHandler(formValues)}> Save </button>
          <button className="button" onClick={()=>onDeleteHandler(formValues)}> Delete </button>
          <button className="button" onClick={()=>onCloseHandler(formValues)}> Close </button>
        </div>
      </div>
    }
    </Modal>
  );
};

export default ModalWindow;
