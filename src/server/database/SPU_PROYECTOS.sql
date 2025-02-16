USE Gestion_mark;

-- LISTAR PROYECTOS 
DELIMITER //
CREATE PROCEDURE spu_listar_proyectos()
BEGIN
	SELECT idproyecto, CONCAT(nombre,' ', apellido ) AS cliente,
    nombreP, fecha_inicio, fecha_fin, estado_project
    FROM PROYECTOS PRO
    INNER JOIN CLIENTES CLI ON PRO.idcliente = CLI.idcliente
    INNER JOIN PERSONAS PER ON CLI.idpersona = PER.idpersona;

END //
DELIMITER ;

CALL spu_listar_proyectos();

-- DETALLES DEL PROYECTO
DELIMITER // 
CREATE PROCEDURE spu_getDetalles(IN _idproyecto INT)
BEGIN 
	SELECT  fecha_inicio, fecha_fin , CONCAT(nombre, ' ', apellido) AS cliente,
			descripcion
    FROM PROYECTOS PRO
    INNER JOIN CLIENTES CLI ON PRO.idcliente = CLI.idcliente
    INNER JOIN PERSONAS PER ON CLI.idpersona  = PER.idpersona
    WHERE idproyecto = _idproyecto;

END //
DELIMITER ; 

CALL spu_getDetalles(2)

-- RESGISTRAR PROYECTOS
DELIMITER //
CREATE PROCEDURE spu_registrar_proyecto
(
IN _idcliente INT,
IN _nombreP VARCHAR(50),
IN _descripcion VARCHAR(200),
IN _fecha_inicio DATE,
IN 	_fecha_fin DATE
)
BEGIN 

	INSERT INTO PROYECTOS (idcliente, nombreP, descripcion, fecha_inicio, fecha_fin) VALUES
						(_idcliente, _nombreP, _descripcion, _fecha_inicio, _fecha_fin);
END //
DELIMITER ;

CALL spu_registrar_proyecto (
    1, 
    'Campaña de publicidad Digital',
    'Campaña digital para lanzamiento de un producto',
    '2025-01-22',
    '2025-03-01'
);

-- ACTUALIZAR PROYECTO

DELIMITER // 
CREATE PROCEDURE spu_updateProject
(
IN _idproyecto INT,
IN _idcliente INT,
IN _nombreP VARCHAR(50),
IN _descripcion VARCHAR(200),
IN _fecha_inicio DATE,
IN 	_fecha_fin DATE
)
BEGIN 
	
    UPDATE PROYECTOS SET 
    idcliente = _idcliente,
    nombreP = _nombreP,
    descripcion = _descripcion,
    fecha_inicio = _fecha_inicio,
    fecha_fin = fecha_fin
    WHERE idproyecto = _idproyecto;

END // 
DELIMITER ; 

CALL spu_updateProject (
    1, 
    'Campaña de publicidad Digital',
    'Campaña digital para lanzamiento de un producto',
    '2025-01-22',
    '2025-03-01',
    2
);



-- CAMBIO DE ESTADO PARA DAR DE BAJA UN PROYECTO
DELIMITER //
CREATE PROCEDURE spu_deleteProyect(IN _idproyecto INT)
BEGIN 
	UPDATE PROYECTOS SET estado_del = 0
    WHERE idproyecto = _idproyecto;

END // 
DELIMITER ; 






