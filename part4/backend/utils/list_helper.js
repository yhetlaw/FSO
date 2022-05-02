const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogPosts) => {
  const reducer = (sum, item) => {
    return sum + item
  }
  return blogPosts.reduce(reducer, 0)
}

module.exports = {
  dummy,
  totalLikes,
}
