import blogService from '../services/bloglist'

const Blogs = ({ blogs, setBlogs }) => {
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
  )
}

export default Blogs
