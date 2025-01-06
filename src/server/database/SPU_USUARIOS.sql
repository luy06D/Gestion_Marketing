USE Gestion_mark;

-- REGISTRO DE USUARIOS 
DELIMITER //
CREATE PROCEDURE spu_registro_user
(
IN _nombre VARCHAR(30),
IN _apellido VARCHAR(30),
IN _doc_identidad CHAR(8), 
IN _email VARCHAR(50),

IN _user_name VARCHAR(30),
IN _password_usu VARCHAR(30),
IN _nivel_acceso VARCHAR(15),
IN _rol VARCHAR(30),
IN _img_perfil VARCHAR(250)
)
BEGIN 
	DECLARE _idpersona INT;
	
    INSERT INTO PERSONAS (nombre, apellido, doc_identidad, email)
				VALUES (_nombre, _apellido, _doc_identidad, _email);
	
    SET _idpersona = LAST_INSERT_ID();
    
    INSERT INTO USUARIOS (idpersona, user_name, password_usu, nivel_acceso, rol, img_perfil)
				VALUES  (_idpersona, _user_name, _password_usu, _nivel_acceso, _rol, _img_perfil);
	
END //
DELIMITER ;

CALL spu_registro_user(
    'Luis David',                 -- _nombre
    'Cusi Gonzales',                 -- _apellido
    '73196921',             -- _doc_identidad
    'cusiluis04@gmail.com',-- _email
    'luisc',                -- _user_name
    '123',           -- _password_usu
    'Admin',              -- _nivel_acceso
    'Gerente',              -- _rol
    ''
);

