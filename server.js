const express = require('express')
const articleRouter = require("./routes/articles")
const  Article= require('./models/article')
const mongoose = require('mongoose')
const methodOverride = require('method-override')


const app = express()



mongoose.connect(`mongodb+srv://hariomsci785:icNhOxZ6VbuHVH2E@cluster0.lwhxs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)

// app.set("views", "./view")
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: false}))
app.use(methodOverride('_method'))

app.get('/', async(req, res) => {
    const articles =await Article.find().sort({ createdAt:'desc'})
    res.render('articles/index', { articles: articles })
})

app.use('/articles', articleRouter)


app.listen(5000 ,()=>{
    console.log("Server is running on port 5000")
})

