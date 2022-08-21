const arg = process.argv.slice(2);

if (arg.length < 1) {
    console.error("OOps invalid argument");
}
else if(arg[0]=='add'){
    console.log(Number(arg[1])+Number(arg[2]));
}
else if(arg[0]=='sub'){
    console.log(Number(arg[1])-Number(arg[2]));
}
else if(arg[0]=='mult'){
    console.log(Number(arg[1])*Number(arg[2]));
}
else if(arg[0]=='divide'){
    console.log(Number(arg[1])/Number(arg[2]));
}
else if(arg[0]=='sin'){
    console.log(Math.sin(Number(arg[1])));
}
else if(arg[0]=='cos'){
    console.log(Math.cos(Number(arg[1])));
}
else if(arg[0]=='tan'){
    console.log(Math.tan(Number(arg[1])));
}
else if(arg[0]=='random'){
    const n = require('crypto-random');
    console.log(n.range(0, 1000));
}