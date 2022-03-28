/**
 * 
 * 
 * @param {
 * String
 * } st
 * @returns 
 */



//1
module.exports.removeSpaces = (st) => {

return st.replaceAll(" ", "");


}



//2
module.exports.containsAll() = (Arrayin, str) => {

var Arrayout = [];

for(const element of Arrayin)
{


    if(str.containsAll(element.toString()))
    {
        Arrayout.push(element);
    }
}
return Arrayout;

    
    
    }