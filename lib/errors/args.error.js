/**
 * @description will create a Error
 * @example Throw new Missing_argument("argumentname" , "error")
 */
class MissingArgument{
    constructor(msg , err){
        this.message = msg.toString()
        this.error = err.toString()
        
        this.evokeError()
    }
    
    evokeError = () => {
        console.log(
            `Missing Argument : ${this.message} ${this.error}`
        )
    }
}
module.exports = MissingArgument
