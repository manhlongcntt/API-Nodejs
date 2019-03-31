var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'sinhvien',
});
var ketnoi = function(){
    connection.connect(function(error){
        console.log("Lỗi: "+error);
        if(!error){
            console.log("kết nối thành công");
        }else{
            console.log("kết nối thất bại");
        }

    });
}
exports.getAllsinhvien = function(callbackQuery){
    ketnoi();
    connection.query('SELECT * FROM student', function(error,results, fields){
        if(!error){
            callbackQuery(results);
        }else{
            console.log("Lỗi SELECT:"+ error);
        }
    });

};
exports.addsinhvien = function(name,idClass,diem,email,callbackFind){
    ketnoi();
    var sql = "INSERT INTO `student`(`id`, `name`, `idCalss`, `diem`, `email`) VALUES (null,'"+name+"','"+idClass+"','"+diem+"','"+email+"')";
    connection.query(sql, function(error,results, fields){
        if(!error){
            callbackFind(results);
        }else{
            console.log("Lỗi INSERT :"+ error);
        }
    });
};
exports.updatesinhvien = function(id,name,idCalss,diem,email,callbackFind){
    ketnoi();
    var sql = "UPDATE student SET name ='"+name+"',idCalss = '"+idCalss+"' , diem = '"+diem+"',email = '"+email+"' WHERE id="+id ;
    connection.query(sql, function(error,results, fields){
        if(!error){
            callbackFind(results);
        }else{
            console.log("Lỗi UPDATE: "+ error);
        }
    });
};
exports.deleteinhvien = function(id,callbackQuery){
    ketnoi();
    connection.query("DELETE FROM student WHERE id ="+id, function(error,results, fields){
        if(!error){
            callbackQuery(results);
        }else{
            console.log("Lỗi DELETE:"+ error);
        }
    });
};