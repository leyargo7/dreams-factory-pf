import React from "react";

const Searchbar = () => {
  return (
    <div>
      <form>
        <input type='text' placeholder='Search...' />
        <button
          type='submit'
          onClick={(e) => {
            e.preventDefault();
            alert("submited");
          }}
        >Search</button>
      </form>
    </div>
  );
};

export default Searchbar;
