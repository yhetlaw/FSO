//The route handlers have also been moved into a dedicated module. The event handlers of routes are commonly referred to as controllers, and for this reason we have created a new controllers directory.
//The module exports the router to be available for all consumers of the module.
//All routes are now defined for the router object, in a similar fashion to what we had previously done with the object representing the entire application.
//The router is in fact a middleware, that can be used for defining "related routes" in a single place, that is typically placed in its own module.

const blogsRouter = require('express').Router()
const Blog = require('../models/blog')

blogsRouter.get('/', (request, response) => {
  Blog.find({}).then((blogs) => {
    response.json(blogs)
  })
})

blogsRouter.get('/:id', (request, response, next) => {
  Blog.findById(request.params.id)
    .then((blog) => {
      blog ? response.json(blog) : response.status(404).end()
    })
    .catch((error) => next(error))
})

blogsRouter.post('/', (request, response, next) => {
  console.log(request)
  const body = request.body

  const blog = new Blog({
    title: body.title,
    author: body.author,
    url: body.url,
    likes: body.likes,
  })

  blog
    .save()
    .then((savedBlog) => {
      response.json(savedBlog)
    })
    .catch((error) => {
      next(error)
    })
})

blogsRouter.delete('/:id', (request, response, next) => {
  Blog.findByIdAndRemove(request.params.id)
    .then(() => {
      response.status(204).end()
    })
    .catch((error) => next(error))
})

blogsRouter.put('/:id', (request, response, next) => {
  const body = request.body
  const blog = new Blog({
    title: body.title,
    author: body.author,
    url: body.url,
    likes: body.likes,
  })

  Blog.findByIdAndUpdate(request.params.id, blog, { new: true })
    .then((updatedBlog) => {
      response.json(updatedBlog)
    })
    .catch((error) => next(error))
})

module.exports = blogsRouter
