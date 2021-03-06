import { useState, useEffect } from 'react'

//Components
import AddBlog from './components/AddBlog'
import Blogs from './components/Blogs'

//Services
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
      <Blogs blogs={blogs} setBlogs={setBlogs} />
    </div>
  )
}

export default App
