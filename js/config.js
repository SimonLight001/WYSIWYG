var fs = require('fs');

var filename = "style.css";

if (fs.stat("./css/custom.css")) filename = "custom.css";

var ls = document.createElement('link');
ls.rel="stylesheet";
ls.href= "css/" + filename;
document.getElementsByTagName('head')[0].appendChild(ls);

var ls2  = document.createElement('link');
ls2.rel="stylesheet";
ls2.href="css/colors.css";
document.getElementsByTagName('head')[0].appendChild(ls2);
