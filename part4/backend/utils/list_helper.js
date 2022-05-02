const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => {
  const reducer = (sum, item) => {
    return sum + item
  }
  return blogs.reduce(reducer, 0)
}

const favoriteBlog = (blogs) => {
  const likesArray = blogs.map((blog) => blog.likes)
  const favorite = likesArray.reduce((a, b) => {
    return Math.max(a, b)
  }, -Infinity)
  const foundFavorite = blogs.find((blogs) => blogs.likes == favorite)

  return {
    author: foundFavorite.author,
    likes: foundFavorite.likes,
    title: foundFavorite.title,
  }
}

const mostBlogs = (blogs) => {
  const mostBlogsAuthor = ''
}

module.exports = {
  mostBlogs,
  favoriteBlog,
  dummy,
  totalLikes,
}
