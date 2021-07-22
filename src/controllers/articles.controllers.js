// Requires
const Article = require('../models/articles')

// Controllers
const ctrl = {}

// Create
ctrl.createArticle = async (req, res) => {
    // Get data from the client
    const {name, measure, stock} = req.body

    // Create a new Article
    const article = await new Article({
        name, 
        measure,
        stock
    })

    // Uploading the new article
    const savedArticle = await article.save()

    // Return
    return res.status(201).json(savedArticle)
}

// Read
ctrl.getArticle = async (req, res) => {
    // Get all the articles
    const articles = await Article.find()

    // Return
    return res.status(200).json(articles)
}

ctrl.getByIdArticle = async (req, res) => {
    // Get article by id
    const article = await Article.findById(req.params.articleid)

    // Validate if the article exist
    if(!article) res.send(404).json({message: 'article not found'})

    // Return
    return res.status(200).json(article)
}

// Update
ctrl.updateArticle = async (req, res) => {
    // Get article by id and update with the data in req body
    const article = await Article.findByIdAndUpdate(req.params.articleid, req.body, {new: true})

    // Validate if the article exist
    if(!article) res.send(404).json({message: 'article not found'})

    // Return
    return res.status(201).json(article)
}

// Delete
ctrl.deleteArticle = async (req, res) => {
    // Get article with id and delete this article
    const article = await Article.findByIdAndDelete(req.params.articleid)
    
    // Validate if the article exist
    if(!article) res.status(404).json({message: 'article not found'})

    // Return
    return res.status(204).json({message: 'article just be removed'})
}

// Export
module.exports = ctrl