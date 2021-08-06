var dbSql = require("../config/dbconnection")
const models = require('../model');

module.exports = {
    addProduct: async(req, res) => {
        let name = req.body.name
        let catid = req.body.catId
        let result = await models.product.create({name,catid});
        res.status(200).json({"message":'success',"data":result})
    },

    getProduct: async(req, res) => {
        const fromPage = req.query.from;
        const toPage = req.query.to;
        let from = fromPage == undefined ? 1 : fromPage;
        let to = toPage == undefined ? 25 : toPage;
        let pageSize = Number((to - from) + 1);
        let offset = Number(from - 1);
        let allproduct = await models.product.findAll({
            order: [["id", "DESC"]],
            offset: offset,
            limit: pageSize,
          });
        res.status(200).json({"message":'success',"data":allproduct})

    },
}