import React, { useState, useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "AddStudent":
      return [...state, action.value];
		case "DeleteStudent":
			return state.filter(student => {
				return (student.id !== action.value)
			})
    default:
      return state;
  }
};

export default function Students() {
  const [state, dispatch] = useReducer(reducer, []);
  const [studentInput, setStudentInput] = useState({
    fName: "",
    lName: "",
  });

  const changeInput = (e) => {
    setStudentInput({
      ...studentInput,
      [e.target.name]: e.target.value,
    });
  };

  const addStudent = (e) => {
    e.preventDefault();
    const { fName, lName } = studentInput;
    dispatch({
      type: "AddStudent",
      value: { id: `${fName}${lName}`, fName, lName },
    });
  };

  return (
    <div>
      <form onSubmit={addStudent}>
        <input type="text" name="fName" onChange={changeInput} />
        <input type="text" name="lName" onChange={changeInput} />
        <input type="submit" value="Add Student" />
      </form>
      {state.map((student) => {
        return (
          <div key={student.id}>
            <h3>
              {student.fName} {student.lName}
            </h3>
            <button
              onClick={() =>
                dispatch({ type: "DeleteStudent", value: student.id })
              }
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
}
