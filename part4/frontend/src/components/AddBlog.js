import blogService from '../services/bloglist'

const AddBlog = ({
  blogs,
  setBlogs,
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
      likes: Number(newLikes),
    }

    blogService
      .create(blogObject)
      .then((returnedBlog) => {
        console.log('added')
        setBlogs(blogs.concat(returnedBlog))
        setNewAuthor('')
        setNewTitle('')
        setNewUrl('')
        setNewLikes('')
      })
      .catch((error) => {
        console.log('not added')
        console.log(error.response.data)
      })
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
          Url: <input value={newUrl} onChange={handleUrlChange} />
        </div>
        <div>
          Upvotes: <input value={newLikes} onChange={handleLikesChange} />
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
    </div>
  )
}

export default AddBlog
