const router = require("express").Router();
const {getCitiesList,getAdventuresList,getAdventureDetail,postUserFormdata,getTableData} = require("../controllers/cities.controller")

router.get("/",getCitiesList)
router.get("/adventures",getAdventuresList)
router.get("/adventures/detail",getAdventureDetail)
router.get("/adventures/detail/reservations",getTableData)
router.post("/reservations",postUserFormdata)


module.exports = router;