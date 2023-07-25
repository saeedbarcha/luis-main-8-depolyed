import React from "react";

const DeleteForm = ({ handleSubmit }) => {
  return (
    <>
      <form onSubmit={handleSubmit} className="m-auto pt-3">
        <div className="mb-3">
          <p>Do you want to delete this product?</p>
        </div>

        <button type="submit " className="btn btn-primary">
          yes
        </button>
      </form>
    </>
  );
};

export default DeleteForm;
