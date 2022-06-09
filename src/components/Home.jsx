import React from "react";

function home() {
  return (
    <div className="container my-3">
      <form>
        <h2>Add a note</h2>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            TITLE*
          </label>
          <input
            required
            type="text"
            className="form-control"
            id="exampleInputTitle"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            DESCRIPTION*
          </label>
          <input
            required
            type="text"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default home;
