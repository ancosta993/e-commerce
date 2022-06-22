const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll({
    include:[
      {
        model:Product,
      }
    ]
  })
    .then(dbTagData => res.json(dbTagData))
    .catch(err => {
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findOne({
    include:{
      model:Product
    },

    where: {
      id: req.params.id
    }
  })
    .then(dbTagData => {
      if(!dbTagData){
        res.status(400).json({message: "No Tag was found with this id"});
        return;
      }
      res.json(dbTagData);
    })
    .catch(err => {
      res.status(500).json(err);
    })
});

router.post('/', (req, res) => {
  /* req.body should look like this...
    {
      tag_name: "round",
      productIds: [1, 6]
    }
  */
  Tag.create(req.body)
    .then(tag => {
      if(req.body.productIds.length){
        const productTagProductIdArr = req.body.productIds.map((product_id) => {
          return {
            tag_id: tag.id,
            product_id,
          };
        });
        return ProductTag.bulkCreate(productTagProductIdArr);
      } else {
        res.status(200).json(tag);
      }
    })
    .then(dbTagData => res.status(200).json(dbTagData))
    .catch(err => {
      res.status(500).json(err);
    });
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(
    {
      tag_name: req.body.tag_name
    },
    {
      where:{
        id: req.params.id
      }
    }
  )
    .then(dbTagData => {
      if(!dbTagData) {
        res.status(400).json({message:"No tag with this id was found"})
        return;
      }
      res.json(dbTagData);
    })
    .catch(err => {
      res.status(500).json(err)
    });
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbTagData => {
      if(!dbTagData){
        res.status(400).json({ message: "No tag with this id was found"} );
        return;
      }
      res.json(dbTagData);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;
