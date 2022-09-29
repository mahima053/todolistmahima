import React, { useState } from "react";
import "../App.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Todolist = () => {
  const getUserObj = (firstName, lastName, type) => {
    return {
      firstName: firstName,
      lastName: lastName,
      type: type,
    };
  };

  const [inputData, setInputData] = useState(getUserObj("", "", ""));
  const [items, setItem] = useState([]);
  const [editedItemIndex, setEditedItemIndex] = useState(-1);
  const [show, setShow] = useState(false);

  const addItem = () => {
    console.log(inputData);

    if (inputData.firstName == "") {
      alert("please fill first name");
      return;
    }
    if (inputData.lastName == "") {
      alert("please fill last name");
      return;
    }
    if (inputData.type == "") {
      alert("please fill user type");
      return;
    }
    if (editedItemIndex === -1) {
      setItem([inputData, ...items]);
    } else {
      items[editedItemIndex] = inputData;
      setItem(items);
      setEditedItemIndex(-1);
    }
    setInputData(getUserObj("", "", ""));
  };

  const handleChange = (e, key) => {
    var updatedUser = getUserObj(
      inputData.firstName,
      inputData.lastName,
      inputData.type
    );
    console.log(updatedUser);
    updatedUser[key] = e.target.value;
    setInputData(updatedUser);
  };

  const handleSubmit = (event) => {
    // prevents the submit button from refreshing the page
    event.preventDefault();
  };

  const editItem = (id) => {
    setInputData(items[id]);
    setEditedItemIndex(id);
  };

  const deleteItem = (id) => {
    // console.log(id,'id');
    if (id <= editedItemIndex) {
      setEditedItemIndex(-1);
    }
    // console.log(editedItemIndex,'editedItemIndex');
    const updateItem = items.filter((elem, ind) => {
      return ind !== id;
    });
    setItem(updateItem);
  };

  const removeAll = () => {
    setItem([]);
  };

  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC17pEvWKwchOjew_aBqWmS5w45hv-3DsjSc-wosn3JA&s"
              alt="Image"
            />
            <figcaption>Add Your List Here</figcaption>
          </figure>
          <div className="form-container">
            <form onSubmit={handleSubmit}>
              <div>
                <h3>User Form</h3>
              </div>
              <div className="addItems">
                <div>
                  <input
                    type="text"
                    placeholder="FirstName"
                    value={inputData.firstName}
                    onChange={(e) => {
                      handleChange(e, "firstName");
                    }}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="LastName"
                    value={inputData.lastName}
                    onChange={(e) => {
                      handleChange(e, "lastName");
                    }}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="UserType"
                    value={inputData.type}
                    onChange={(e) => {
                      handleChange(e, "type");
                    }}
                  />
                </div>

                <div>
                  <button onClick={() => addItem()}>Add</button>
                </div>
              </div>
            </form>
          </div>
          <div>
            {items.map((elem,index) => {
              return(
              <h1>{elem}</h1>
              )
              }
            )
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default Todolist;
