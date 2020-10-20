import React from "react";
import { Button } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import "react-toastify/dist/ReactToastify.css";

import Persons from "./components/person/Persons";
import Header from "./components/common/Header";
import AddPerson from "./components/person/AddPerson";
import { showPerson } from "./actions/showPerson";

const App = () => {
  const showPersons = useSelector((state) => state.showPerson);

  const dispatch = useDispatch();

  return (
    <div className="rtl text-center">
      <Header appTitle="مدیریت کننده اشخاص" />

      <AddPerson />

      <Button
        onClick={() => {
          dispatch(showPerson());
        }}
        variant={showPersons ? "info" : "danger"}
      >
        اشخاص را نشان بده
      </Button>

      {showPersons ? <Persons /> : null}

      <ToastContainer />
    </div>
  );
};

export default App;