const config = require('./utils/config')
const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]

const url = config.MONGODB_URI

mongoose.connect(url)

const blogSchema = new mongoose.Schema({
  title: String,
  author: String,
  url: String,
  likes: Number,
})

const Blog = mongoose.model('Blog', blogSchema)

const blog = new Blog({
  title: 'CSS is hard',
  author: 'Test',
  url: 'www.wweqeq.com',
  likes: 9,
})

Blog.find({}).then((result) => {
  result.forEach((blog) => {
    console.log(blog)
  })
  mongoose.connection.close()
})
