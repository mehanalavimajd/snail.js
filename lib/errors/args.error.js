/**
 * @description will create a Error
 * @example Throw new Missing_argument("argumentname" , "error")
 */
class Missing_argument{
    constructor(msg , err){
        console.error("Missing argument:"+msg+err)
    }
}
module.exports = Missing_argument