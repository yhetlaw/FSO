import { useState, useEffect } from 'react'
import AddBlog from './components/AddBlog'
import blogService from './services/bloglist'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [newAuthor, setNewAuthor] = useState('')
  const [newTitle, setNewTitle] = useState('')
  const [newUrl, setNewUrl] = useState('')
  const [newLikes, setNewLikes] = useState('')
  const handleAuthorChange = (event) => setNewAuthor(event.target.value)
  const handleTitleChange = (event) => setNewTitle(event.target.value)
  const handleUrlChange = (event) => setNewUrl(event.target.value)
  const handleLikesChange = (event) => setNewLikes(event.target.value)

  useEffect(() => {
    blogService.getAll().then((initialBlogs) => {
      console.log(initialBlogs)
      console.log('promise fulfilled')
      setBlogs(initialBlogs)
    })
  }, [])

  console.log('render', blogs.length, 'blogs')

  const handleDelete = (event) => {
    const id = event.target.getAttribute('data-id')
    console.log(id)
    if (window.confirm(`Are you sure you want to delete?`)) {
      blogService
        .deleteBlog(id)
        .then(() => {
          setBlogs(blogs.filter((blog) => blog.id !== id))
          console.log('Deleted successfully')
        })
        .catch((error) => {
          console.log('fail')
        })
    }
  }

  return (
    <div>
      <AddBlog
        blogs={blogs}
        newAuthor={newAuthor}
        newTitle={newTitle}
        newUrl={newUrl}
        newLikes={newLikes}
        setBlogs={setBlogs}
        setNewAuthor={setNewAuthor}
        setNewTitle={setNewTitle}
        setNewUrl={setNewUrl}
        setNewLikes={setNewLikes}
        handleAuthorChange={handleAuthorChange}
        handleTitleChange={handleTitleChange}
        handleUrlChange={handleUrlChange}
        handleLikesChange={handleLikesChange}
      />
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id} className='li-test'>
            <div>The author is {blog.author}</div>
            <div>The title is {blog.title}</div>
            <div>The url is {blog.url}</div>
            <div>{blog.likes} likes</div>
            <button onClick={handleDelete} data-id={blog.id}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
