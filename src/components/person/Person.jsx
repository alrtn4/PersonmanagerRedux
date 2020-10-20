import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { deletePerson } from './../../actions/deletePerson';
import changePerson from './../../actions/changePerson';

const Person = ({ id , fullName }) => {

  const dispatch = useDispatch();

  return (
    <div className="card text-white bg-info w-25 mb-3 mt-3 mx-auto">
      <div className="card-body text-center">
        <p className="d-block"> {fullName} </p>
        <div className="input-group justify-content-center">
          <input
            className="form-control w-50"
            type="text"
            onChange={(e) => dispatch(changePerson( e , id))}
            placeholder={fullName}
          />
          <div className="input-group-prepend">
            <button
              className="btn btn-sm btn-danger fa fa-trash"
              onClick={() => dispatch( deletePerson(id) )}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

Person.propTypes = {
  fullName: PropTypes.string,
  deleted: PropTypes.func,
  change: PropTypes.func,
};

export default Person;
