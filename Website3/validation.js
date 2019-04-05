function validate(){
    var uname = stdreg.uname.value;
    var upwd = stdreg.psw.value;
    var cupwd= stdreg.cpsw.value;
    var str="";
   var flag=false;
  
if(uname.trim()===""){
str+="Username should not be blank!!\n";
flag=true;
 }
if(upwd.trim()==="" && cupwd.trim()==="" || upwd != cupwd )
{
        str +=" Password is Blank or Does not Match!!\n";
       flag=true;
  }

if(flag)
{
alert("Warnings \n" +str);
return false;
}
else {
return true;
}
}