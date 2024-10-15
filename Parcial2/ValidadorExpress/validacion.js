const { check } = require('express-validator');                                
//MODULO VALIDADOR 
function validaUsuario() {  
return [ check('login','Login debe ser de 5 a 10 caracteres').isLength({min:5, max:10}), 
             check('edad','Edad Debe ser Numérica').isNumeric(), 
             check('correo',"El correo es invalido").isEmail()] 
} 
module.exports.validaUsuario=validaUsuario;            
//Exportamos validación