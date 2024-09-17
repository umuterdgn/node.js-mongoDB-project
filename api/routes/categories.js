var express = require('express');
var router = express.Router();
const Categories = require('../db/models/Categories');
const Response = require('../lib/Response');
const CustomError = require('../lib/Error');
const Enum = require('../config/Enum');
/*// C R U D OPERATIONS
*
Create
Read
Update
Delete
Crud
*/

/* GET categories listing. */
router.get('/', async (req, res, next) => {
  
try {
     let categories = await Categories.find({});

     res.json(Response.successResponse(categories));
  
} catch (err) {

res.json(Response.errorResponse(err));
  
}
});

router.post("/add",async (req,res,next)=>{
     let body = req.body;
    try {

        if(body.name) throw new CustomError(Enum.HTTP_CODES.BAD_REQUEST,"Validation Error","Name field must be filled");
 
         let category = new Categories({
             name:body.name,
             is_active: true,
             created_by: req.user?._id
         });


         await category.save();

         res.json(Response.successResponse({success: true}));

    } catch (error) {
        let errorResponse= Response.errorResponse(error);
        res.statuser(errorResponse.code).json(errorResponse);
    }
});

module.exports = router; // Router nesnesini dışa aktar
