import { useState } from 'react'
import AddBlog from './components/AddBlog'

const App = () => {
  const [newAuthor, setNewAuthor] = useState('')
  const [newTitle, setNewTitle] = useState('')
  const [newUrl, setNewUrl] = useState('')
  const [newLikes, setNewLikes] = useState()
  const handleAuthorChange = (event) => setNewAuthor(event.target.value)
  const handleTitleChange = (event) => setNewTitle(event.target.value)
  const handleUrlChange = (event) => setNewUrl(event.target.value)
  const handleLikesChange = (event) => setNewLikes(event.target.value)

  return (
    <div>
      <AddBlog
        newAuthor={newAuthor}
        newTitle={newTitle}
        newUrl={newUrl}
        newLikes={newLikes}
        setNewAuthor={setNewAuthor}
        setNewTitle={setNewTitle}
        setNewUrl={setNewUrl}
        setNewLikes={setNewLikes}
        handleAuthorChange={handleAuthorChange}
        handleTitleChange={handleTitleChange}
        handleUrlChange={handleUrlChange}
        handleLikesChange={handleLikesChange}
      />
    </div>
  )
}

export default App
