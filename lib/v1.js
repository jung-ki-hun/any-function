/********************************
 * ************기본함수 **********
 *********************************/
var isEmpty = (...str) => { //null을 대신해 비어있음을 확인
    for (let i_str of str) {
        if (typeof i_str == "undefined" || i_str == null || i_str == "")//||(i_str !== null && typeof i_str === "object" && !Object.keys(i_str).length) )
            return true;
        else
            return false;
    }
}
var isNan = (...num) =>{
    for (let i_str of num) {
        if (typeof i_str == "undefined" || i_str == null || i_str == NaN )//||(i_str !== null && typeof i_str === "object" && !Object.keys(i_str).length))
            return true;
        else
            return false;
    }
}
/********************************
 * **********시간 관련함수********
*********************************/
var date_time = () => {
    const date = new Date();
    var str = date;
    return str;
}
var date_ymd = () => {
    const date = new Date();
    var str = `${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()}`;
    return str;
}
var date_local_time = () => {
    let date = new Date();
    const str = `${date.toLocaleTimeString()}`;
    return str;
}//사용자 기준으로 확인
var date_local_time_set = (local) => {
    let date = new Date();
    const str = `${date.toLocaleTimeString(local)}`;
    return str;
}

/********************************
 * ********** 파일생성  ***********
*********************************/
const fs = require('fs');
const file_r = (path,name)=>{ //읽기
    let str = `${path}/${name}.txt`;
    const file = fs.readFile(str,(err,data)=>{
        if(isEmpty(err)){
            console.log("파일 읽기 성공");
            return data;
        }
        else{
            console.log("파일 읽기 실패 : " + err);
            return null;//사용하기전에 isnull체크 필수 
        }
    });
}
const file_w = (path,name,data)=>{ //쓰기
    let str = `${path}/${name}.txt`;
    const file = fs.writeFile(str, data,'utf8',(err)=>{
        if(isEmpty(err)){ //undifind
            console.log("파일 생성 성공");
        }
        else{
            console.log("파일 생성 실패 : " + err);
        }
    });
}//신규 파일이나 파일 전체 갱신후 생성시 사용
const file_a = (path,name,data)=>{
    let str = `${path}/${name}.txt`;
    const file = fs.appendFile(str,data,(err)=>{
        if(isEmpty(err)){ //undifind
            console.log("파일 생성 성공");
        }
        else{
            console.log("파일 생성 실패 : " + err);
        }
    });
}//파일에 데이터 추가용 함수


module.exports = {
    isEmpty,
    isNan,
    date_time,
    date_ymd,
    file_r,
    file_w,
    file_a,
    date_local_time,
    date_local_time_set
}//log save