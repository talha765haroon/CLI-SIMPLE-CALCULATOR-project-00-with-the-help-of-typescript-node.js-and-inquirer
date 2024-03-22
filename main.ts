import inquirer from "inquirer";

const answers:{
   "No1":number,
    "No2":number,
    "operator":String

}= await inquirer.prompt([{
type:"number",
name:"No1",
message:"Write Your No1:"

},
{
    type:"number",
    name:"No2",
    message:"Write Your No2:"
    
    },
    {
        type:"list",
        name:"operator",
        choices:["+","-","*","/"]

    },

])

const { No1,No2,operator } = answers
if (No1 && No2 && operator) {
    let result:Number = 0;
    if(operator ==="+"){
        result = No1 + No2
    }else if(operator ==="-"){
        result = No1 - No2
    }else if(operator ==="*"){
        result = No1 * No2
    }else if(operator ==="/"){
        result = No1 / No2

    }console.log("your result is:" + result)
}
else{
    console.log("please select a valid operator")
}















