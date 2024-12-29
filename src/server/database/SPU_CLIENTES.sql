USE Gestion_mark;

-- REGISTRAR CLIENTES
DELIMITER 
CREATE PROCEDURE spu_createClientes 
(
IN _nombre VARCHAR(30),
IN _apellido VARCHAR(30),
IN _doc_identidad CHAR(8),
IN _email VARCHAR (50),
IN _industria VARCHAR(30),
IN _contacto_principal CHAR(9)
)
BEGIN 
	DECLARE _idpersona INT;

INSERT INTO PERSONAS (nombre, apellido, doc_identidad, email) 
		VALUES (_nombre, _apellido, _doc_identidad, _email);
	
    SET _idpersona = LAST_INSERT_ID();
    
    INSERT INTO CLIENTES (idpersona , industria, contacto_principal)
			VALUES (_idpersona, _industria, _contacto_principal)
END //
DELIMITER ;

