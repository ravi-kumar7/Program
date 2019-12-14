const readline=require("readline-sync");
console.log('hello username..how r u?');
const b=readline.question("enter the name:");
const c=readline.question('enter the string you want to replace:')
const d=b.replace(c,b);
console.log("hello " + d +"..how r u?");



/*System.out.println("hello username...How are you?");
System.out.println("enter the name:");
s1=scn.next();
System.out.println("enter thr string you want to replace:");
s2=scn.next();
s3=s1.replace(s2, s1);
System.out.println("hello " +s3+" ..how r u");
*/