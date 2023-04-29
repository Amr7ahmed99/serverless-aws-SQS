const ApiResponse= require('../utils/ApiResponse');

const Orders={
    1: { name: "Amr", total: 120, createdAt: '2023-01-01'},
    2: { name: "Ahmed", total: 320, createdAt: '2023-01-03'},
    3: { name: "Saleh", total: 610, createdAt: '2021-02-02'},
    4: { name: "Omar", total: 40, createdAt: '2021-05-01'},
    5: { name: "Khalid", total: 190, createdAt: '2021-05-03'},
    6: { name: "Mohamed", total: 900, createdAt: '2021-04-02'},
};

module.exports.handler= ({pathParameters}, context, callBack)=>{ 
    const {id}= pathParameters;
    if(!id){
         callBack(null, ApiResponse.badRequest({message: "Missing Order id"}));
    }
    
    if(!Orders[id]){
         callBack(null, ApiResponse.notFound({message: `Order ${id} was not found`}));
    }

     callBack(null, ApiResponse.ok({message: "success", order: Orders[id]}));
};