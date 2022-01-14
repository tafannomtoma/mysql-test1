// user allquery.js

exports.UsersCreateQuery = `INSERT INTO user (name,email,number,password,profileimage)values(?,?,?,?,?)`

exports.UsersUpdateQuery = `UPDATE user SET name=?, email=?, number=? , password=?,profileimage=? where id=?`

exports.UsersDeleteQuery = 'delete FROM user WHERE id =?'