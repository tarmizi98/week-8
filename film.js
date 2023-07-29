const express = require("express")
const pool = require("./queries")
const router = express.Router()

router.get("/", function(req, res){
    pool.query('select * from film', (err, result) => {
        if(err){
            res.status(500).json({message: err.message})
        }
        res.status(200).json(result.rows)
    })
})

router.get("/:id", function(req, res){
    pool.query('select * from film where film_id = $1', [req.params.id], (err, result) => {
        if(err){
            res.status(500).json({message: err.message})
        }
        const data = result.rows[0]
        
        if(!data){
            res.status(404).json({message: 'Film tidak ditemukan'})
        }
        res.status(200).json(data)
    })
})

router.get('/category/:id', function(req, res){
    pool.query(`
    select f.* from film_category fc
	inner join category c on fc.category_id = c.category_id
	inner join film f on fc.film_id = f.film_id
	where c.category_id = $1;
    `, [req.params.id], (err, result) => {
        if(err){
            res.status(500).json({message: err.message})
        }
        res.status(200).json(result.rows)
    })
})

module.exports = router