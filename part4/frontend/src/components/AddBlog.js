const AddBlog = ({
  newAuthor,
  newTitle,
  newUrl,
  newLikes,
  setNewAuthor,
  setNewTitle,
  setNewUrl,
  setNewLikes,
  handleAuthorChange,
  handleTitleChange,
  handleUrlChange,
  handleLikesChange,
}) => {
  const addBlog = (event) => {
    event.preventDefault()
    const blogObject = {
      author: newAuthor,
      title: newTitle,
      url: newUrl,
      likes: newLikes,
    }
  }

  return (
    <div>
      <h1>Blog List</h1>
      <form onSubmit={addBlog}>
        <div>
          Author: <input value={newAuthor} onChange={handleAuthorChange} />
        </div>
        <div>
          Title: <input value={newTitle} onChange={handleTitleChange} />
        </div>
        <div>
          Url: <input />
        </div>
        <div>
          Upvotes: <input />
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
    </div>
  )
}

export default AddBlog
