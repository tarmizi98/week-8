const express = require("express")
const pool = require("./queries")
const router = express.Router()

router.get("/", function(req, res){
    pool.query('select * from category', (err, result) => {
        if(err){
            res.status(500).json({message: err.message})
        }
        res.status(200).json(result.rows)
    })
})


module.exports = router