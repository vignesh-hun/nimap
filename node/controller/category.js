var dbSql = require("../config/dbconnection")

module.exports = {
    addCategory: (req, res) => {
        console.log(req.body)
        let name = req.body.name
        dbSql.getConnection((err, conn) => {
            if (err) {
                res.status(400).json(err)
            } else {
                let query = `INSERT INTO category ( name) VALUES ('${name}')`;
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

    getCategory: (req, res) => {
        // const limit = 10;
        // const page = req.query.page;
        // const offset = (page - 1) * limit;
        dbSql.getConnection((err, conn) => {
            if (err) {
                res.status(400).json(err)
            } else {
                const prodsQuery = "select * from category"
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