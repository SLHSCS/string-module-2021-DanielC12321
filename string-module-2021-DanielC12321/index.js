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
    //3
    module.exports.makeNewLines() = (str) => {

        return str.replaceAll(" ", "\n");
            
            
            }

    //4
    module.exports.titleCase() = (str) => {
        var retstr = "";
        if(str.includes("-"))
        {
            
            for (var string of str.split("-")) {
                
                retstr+=string.charAt(0).toUpperCase() + string.slice(1);


            }

        }
        else if(str.includes("_"))
        {
            
            for (var string of str.split("_")) {
                
                retstr+=string.charAt(0).toUpperCase() + string.slice(1)


            }

        }
            return retstr;
            
            }

        //5
            module.exports.count() = (str, substr) => {
                var ans = 0;

                for(var String of str.split(" "))
                {
                    if(String.toLowerCase()=== substr.toLowerCase())
                    {
                        ans++;
                    }
                }
                return ans;
                
                    
                    }


        //6
        module.exports.endsWith() = (str, substr) => {
             if(str.split(" ")[str.split(" ").length-1]===substr)
             {
                 return true;
             }
             return false;
                    
                    }
        //7
        module.exports.pad() = (str, length, rep) => {
           var numpad = length-str.length;
           numpad = Math.floor(numpad/2);
           for(var i = 0; i<numpad; i++)
           {
               str+=" ";
               str = " "+ str;
           }
                    return str;
                    }
        //8
        module.exports.removePunctuation() = (str) => {
           str = str.replaceAll("?", "");
           str = str.replaceAll(".", "");
           str = str.replaceAll(",", "");
           str = str.replaceAll("\"", "");
           str = str.replaceAll("'", "");
           str = str.replaceAll("-", "");
           str = str.replaceAll("!", "");
           str = str.replaceAll(":", "");
           str = str.replaceAll(";", "");
           return str;
                    }
        //9
        module.exports.capitalizeFirst() = (string) => {
            return string.charAt(0).toUpperCase() + string.slice(1);
                     }

        //10
        module.exports.multiplyString() = (string, times) => {
            var retString="";
            for(var i = 0; i<times; i++)
            {
                retString+=string;
            }
            return retString;
                     }
            