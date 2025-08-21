const greet=require('./app.js');
if(greet()==="hello from devops!")
{
    console.log("test passed!");
    Process.exit(0);
}
else
{
    console.log("teat failed!");
    process.exit(1);
}