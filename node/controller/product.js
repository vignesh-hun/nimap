var dbSql = require("../config/dbconnection")

module.exports = {
    addProduct: (req, res) => {
        console.log(req.body)
        let name = req.body.name
        let catId = req.body.catId

        dbSql.getConnection((err, conn) => {
            if (err) {
                res.status(400).json(err)
            } else {
                let query = `INSERT INTO product (catid,name) VALUES ('${Number(catId)}', '${name}')`;
                conn.query(query, (err, result) => {
                    if (err) {
                        res.status(400).json(err)
                    }
                    res.status(200).json('success')
                })
                conn.release();

            }
        })
    },

    getProduct: (req, res) => {
        const limit = 10;
        const page = req.query.page;
        const offset = (page - 1) * limit;
        dbSql.getConnection((err, conn) => {
            if (err) {
                res.status(400).json(err)
            } else {
                const prodsQuery = "select * from product limit " + limit + " OFFSET " + offset
                //   let query=`select * from category`;
                conn.query(prodsQuery, (err, result) => {
                    if (err) {
                        res.status(400).json(err)
                    }
                    res.status(200).json(result)
                })
                conn.release();

            }
        })
    },
}