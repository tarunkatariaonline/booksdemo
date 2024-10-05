const express = require('express')
const app = express()
const port = 3000
const books = [
    {
        id:1,
        title: "Spiderman",
        author: "Stan lee",
        price: 10.99,
        review:"good"

    },
    {
        id:2,
        title: "Superman",
        author: "Zack snyder",
        price: 9.99,
        review:"avarage"
    },{
        id:3,
        title: "Iron man ",
        author: "Stan lee",
        price: 12.99,
        review:"nice"
    },{
        id:4,
        title: "mahabharat",
        author: "Ved vyas",
        price: 11.99,
        review:"good"
    }
]

app.get('/api/v1/books', (req, res) => {
  res.json(books)
})

app.get("/api/v1/bookbyid/:id",(req,res)=>{
const id = req.params.id
const book = books.find(book => book.id === parseInt(id))
if(book){
    res.json(book)
    }else{  
        res.status(404).json({message:"book not found"})
        }

})

app.get("/api/v1/book/author",(req,res)=>{
    const name = req.query.name
    console.log(name)
    const book = books.filter(book => book.author.toLowerCase().replaceAll(' ','').includes( name.toLowerCase().replaceAll(' ','')))
    if(book){
        res.json(book)
        }else{
            res.status(404).json({message:"book not found"})
            }


    
    })
    

    app.get("/api/v1/book/title",(req,res)=>{
        const name = req.query.name
        // console.log(name)
        const book = books.filter(book => book.title.toLowerCase().replaceAll(' ','').includes( name.toLowerCase().replaceAll(' ','')))
        if(book){
            res.json(book)
            }else{
                res.status(404).json({message:"book not found"})
                }
    
    
        
        })


        app.get("/api/v1/book/review",(req,res)=>{
            const id = req.query.id
            // console.log(name)

            const book = books.find(book => book.id=== parseInt(id))
            if(book){
                res.json(book.review)
                }else{
                    res.status(404).json({message:"book not found"})
                    }
        
        
            
            })


            app.delete("/api/v1/book/review/delete/:id",(req,res)=>{
                const id = req.params.id
                res.json({
                    message:`The review For the Book with ISBN ${id} has been Deleted Successfully`,
                })    
                
                })



                app.put("/api/v1/book/review/update/:id",(req,res)=>{
                    const id = req.params.id
                    res.json({
                        message:`The review For the Book with ISBN ${id} has been updated`,
                    })    
                    
                    })

                
            
        app.post("/api/v1/user/register",(req,res)=>{
            res.json({
                message:"Customer Registered Successfully. Login Now",
            })
            
            })


            app.post("/api/v1/user/login",(req,res)=>{
                res.json({
                    message:"Login successfully.",
                })
                
                })




                app.get('/api/v1/async/books', async (req, res) => {
                    try {
                        // Simulate an async operation (e.g., database call)
                        const booksList = await new Promise((resolve) => {
                            resolve(books);
                        });
                        res.json(booksList);
                    } catch (error) {
                        res.status(500).json({ message: 'Error fetching books', error: error.message });
                    }
                });


                
                app.get('/api/v1/promise/books', async (req, res) => {
                    try {
                        // Simulate an async operation (e.g., database call)
                        const booksList = await new Promise((resolve) => {
                            resolve(books);
                        });
                        res.json(booksList);
                    } catch (error) {
                        res.status(500).json({ message: 'Error fetching books', error: error.message });
                    }
                });
                
                
    

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})