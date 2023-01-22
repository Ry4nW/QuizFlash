import "./Create.css"

const Create = () => {
    return (
      <>
        <h1>Create New Flashcards</h1>
        <form>
          <input 
            type="text"
            id="new-todo-input"
            className="main-input"
            name="text"
            autoComplete="off"
          />
          <button type="submit" className="btn_primary">Add</button>
        </form>
      </>
    
    );
  };
  
  export default Create;
