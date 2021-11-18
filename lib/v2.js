/********************************
 * ************암호화************
*********************************/
var ckey = '';
const set_ckey = (str)=>{
    ckey = str;
}
var crypto = require('crypto');
//var shasum = crypto.createHash('sha256');
var iv = Buffer.alloc(16,0);
var key =crypto.scryptSync(ckey,'salt',32); //'$!@T!EFQT@#%!#TWGW@T!#@%^';// 비밀키
var cipher = (password) => {
    var cc = crypto.createCipher('aes192', key);
    cc.update(password, 'utf-8', 'base64');
    var cipstr = cc.final('base64');
    return cipstr;
}//암호화 함수 구버전

var dcipher = (password) => {
    var dc = crypto.createDecipheriv('aes192', key);
    dc.update(password, 'base64', 'utf-8');
    var dcipstr = dc.final('utf-8');
    return dcipstr;
}//복호화 함수
////////////////////////////////////////////

var cipheriv = (password) => {
    var cc = crypto.createCipheriv('aes-256-cbc',key,iv);//return -> cipher
    cc.update(password, 'utf-8', 'base64');
    var cipstr = cc.final('base64');
    return cipstr;
}//암호화 함수

var dcipheriv = (password) => {
    var dc = crypto.createDecipheriv('aes-256-cbc', key,iv);
    dc.update(password, 'base64', 'utf-8');
    var dcipstr = dc.final('utf-8');
    return dcipstr;
}//복호화 함수

module.exports ={
    cipher,
    cipheriv,
    dcipher,
    dcipheriv,
    set_ckey
}