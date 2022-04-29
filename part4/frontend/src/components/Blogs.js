import blogService from '../services/bloglist'

const Blogs = ({ blogs, setBlogs }) => {
  const handleDelete = (event) => {
    const id = event.target.getAttribute('data-id')
    if (window.confirm(`Are you sure you want to delete the blog?`)) {
      blogService
        .deleteBlog(id)
        .then(() => {
          setBlogs(blogs.filter((blog) => blog.id !== id))
          console.log('Deleted successfully')
        })
        .catch((error) => {
          console.log(error.response.data)
        })
    }
  }

  return (
    <ul>
      {blogs.map((blog) => (
        <li key={blog.id} className='li-test'>
          <div>
            <b>Author: </b>
            {blog.author}
          </div>
          <div>
            <b>Title: </b>
            {blog.title}
          </div>
          <div>
            <b>Url: </b>
            {blog.url}
          </div>
          <div>{blog.likes} likes</div>
          <button onClick={handleDelete} data-id={blog.id}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  )
}

export default Blogs
