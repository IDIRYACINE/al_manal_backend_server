
import express from 'express';
import { createCategory, createProduct, deleteCategory, deleteProduct, fetchCategory, fetchProduct, updateCategory, updateProduct } from './Database/ProductsDatabase';
import cors from 'cors'
import App from './App';
import { Api } from './Config';
import { resetDatabase, synchroniseDatabase } from './Synchroniser/Synchroniser';
import { postData } from './Database/FirebaseRealtime';

const nodeApp = express();


// TODO: authenticate requests

nodeApp.use(cors({
  origin :"*",
  allowedHeaders :["Content-Type", "X-Auth-key"],
  methods : ["GET","POST","PUT","PATCH","DELETE"]
}))

nodeApp.use(express.json())

nodeApp.listen(process.env.PORT || 3001);

App(true)

nodeApp.post(Api.createCategory, (req, res) => {  

  createCategory(req.body.options)
  .then(()=>{
    
      res.json({msg:"Created Category"})
  })
  .catch(error=>{
    res.statusCode = 400
    res.json({error : error})
  })

});

nodeApp.get(Api.fetchCategory, (req, res) => {
  
  const fetchOptions = {startIndex:req.query.startIndex as string ,count:req.query.count as string}

  fetchCategory(fetchOptions)
  .then(result=>{
    res.json(result)
  })
  .catch(error=>{
    res.json({error : error})
  })
  
});


nodeApp.get(Api.deleteCategory, (req, res) => {
  const deleteOptions = {categoryId : req.query.categoryId as string}
  deleteCategory(deleteOptions)
  .then(()=>{
    res.json({response:"Deleted Category"})
  })
  .catch((error)=>{
    res.statusCode = 400
    res.json({error:error.msg})
  })
});


nodeApp.post(Api.updateCategory, (req, res) => {
  console.log(req.body)
  updateCategory(req.body.options)
  .then(()=>{
    res.json({response:"Updated Category"})
  })
  .catch((e:Error) =>{
    res.statusCode = 400
    res.json({error:e.message})
  })
  
});


nodeApp.post(Api.createProduct, (req, res) => {
  createProduct(req.body.options)
  .then(()=>{
    res.json({response:"Created Product"})
  })
  .catch(e=>{
    res.json({error:e})
  })
});


nodeApp.get(Api.fetchProduct, (req, res) => {
  const fetchOptions = {startIndex:req.query.startIndex as string ,count:req.query.count as string,categoryId:req.query.categoryId as string}
  fetchProduct(fetchOptions)
  .then((result)=>{
    res.json(result)
  })
  .catch(e=>{
    res.statusCode = 400
    res.json({error:e})
  })
});


nodeApp.get(Api.deleteProduct, (req, res) => {
  const deleteOptions = {categoryId : req.query.categoryId as string , productId: req.query.productId as string}
  deleteProduct(deleteOptions)
  .then(()=>{
    res.json({response:"Deleted Product"})
  })
  .catch(e=>{
    res.statusCode = 400
    res.json({error:e})
  })
});


nodeApp.post(Api.updateProduct, (req, res) => {
  console.log(req.body)
  updateProduct(req.body.options)
  .then(()=>{
    res.json({response:"Updated Product"})
  })
  .catch(e=>{
    res.json({error:e})
  })
});


nodeApp.get(Api.synchroniseDatabase,(req,res)=>{
  synchroniseDatabase(
    ()=>{
      res.send("Database Synchronised")
    },
    ()=>{
      res.statusCode = 400
      res.send("Synchronisation Failed")
    });
  
})


nodeApp.get(Api.resetDatabase,(req,res)=>{
  resetDatabase(
    ()=>{
      res.send("Database Synchronised")
    },
    ()=>{
      res.statusCode = 400
      res.send("Synchronisation Failed")
    });
  
})


