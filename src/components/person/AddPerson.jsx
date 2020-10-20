import { Button } from "react-bootstrap";
import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { addPerson } from "../../actions/addPerson";
import { setSinglePerson } from "../../actions/setSinglePerson";
import { useSelector } from "react-redux";

const AddPerson = () => {
  const textInput = useRef(null);

  useEffect(() => {
    // textInput.current.focus() ;
  });

  const dispatch = useDispatch();

  const singlePerson = useSelector((state) => state.singlePerson);

  return (
    <div className="m-2 p-2">
      <form
        className="form-inline justify-content-center"
        onSubmit={(event) => event.preventDefault()}
      >
        <div className="input-group w-25">
          <input
            className="form-control"
            type="text"
            id="newName"
            placeholder="نام بهم بده"
            ref={textInput}
            onChange={(e) => dispatch(setSinglePerson(e))}
            value={singlePerson}
          />

          <div className="input-group-prepend">
            <Button
              type="submit"
              className="fa fa-plus-square"
              variant="success"
              size="sm"
              onClick={() => dispatch(addPerson(singlePerson))}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddPerson;
