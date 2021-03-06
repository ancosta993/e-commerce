const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({
    include: [
      {
        model:Product
      }
    ]
  })
    .then(dbCategoryData => res.json(dbCategoryData))
    .catch(err => res.json(err));
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findOne({
    where:{
      id:req.params.id
    },

    include:[
      {
        model:Product
      }
    ]
  })
    .then(dbCategoryData => {
      if (!dbCategoryData){
        res.status(400).json({message: "No category with this id was found"});
        return;
      } else {
        res.json(dbCategoryData)
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
  // create a new category
  // expect to get {"category_name" = "Video Game"} for example
  Category.create({
    category_name: req.body.category_name
  })
    .then(dbCategoryData => res.json(dbCategoryData))
    .catch(err => {
      res.status(500).json(err);
    });
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(req.body, {
    where:{
      id: req.params.id
    }
  })
    .then(dbCategoryData => {
      if(!dbCategoryData){
        res.status(400).json({message: "No category was found with this id"});
        return;
      } else {
        res.json(dbCategoryData);
      }
    })
    .catch(err => {
      res.status(500).json(err);
    })
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where:{
      id:req.params.id
    }
  })
    .then(dbCategoryData => {
      if(!dbCategoryData){
        res.status(400).json({message: "No category found with this id"})
      } else {
        res.json(dbCategoryData)
      }
    }) 
    .catch(err => {
      res.status(500).json(err);
    })
});

module.exports = router;
