const contact =require("../modules/Contact/routes");

module.exports=function router(app){
app
    .use("/contact",contact)
};