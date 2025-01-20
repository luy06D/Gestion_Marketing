CREATE DATABASE Gestion_mark;
USE Gestion_mark;

CREATE TABLE PERSONAS (
	idpersona INT AUTO_INCREMENT PRIMARY KEY,
    nombre 	VARCHAR(30) NOT NULL ,
    apellido VARCHAR(30) NOT NULL,
    doc_identidad CHAR(8) NOT NULL,
    email VARCHAR(50) NULL,
    CONSTRAINT uk_doc_per UNIQUE (doc_identidad , email)
);

-- Insertar datos de prueba en la tabla PERSONAS
INSERT INTO PERSONAS (nombre, apellido, doc_identidad, email)
VALUES 
('Luis', 'Gonzales', '12345678', 'luis.gonzales@example.com'),
('Alejandro', 'Yañez', '87654321', 'alejandro.yanez@example.com'),
('María', 'Lopez', '23456789', 'maria.lopez@example.com'),
('Carlos', 'Perez', '34567890', NULL), -- Email opcional
('Ana', 'Garcia', '45678901', 'ana.garcia@example.com');

CREATE TABLE CLIENTES (
	idcliente INT AUTO_INCREMENT PRIMARY KEY,
    idpersona INT NOT NULL,
    industria VARCHAR(30) NOT NULL,
    contacto_principal CHAR(9) NOT NULL,
    CONSTRAINT uk_con_ima UNIQUE (contacto_principal),
    CONSTRAINT fk_idp_cli FOREIGN KEY (idpersona) REFERENCES PERSONAS (idpersona)
);

INSERT INTO CLIENTES (idpersona, industria, contacto_principal) VALUES
				(4, 'Tecnologia y Software', 925698523);


CREATE TABLE USUARIOS (	
	idusuario INT AUTO_INCREMENT PRIMARY KEY,
    idpersona INT NOT NULL,
    user_name VARCHAR(30) NOT NULL,
    password_usu VARCHAR(30) NOT NULL,
    nivel_acceso VARCHAR(15) NOT NULL,
    rol 	VARCHAR(30) NOT NULL,
    estado  BIT NOT NULL DEFAULT 1,
    img_perfil  VARCHAR(250) NULL,
    CONSTRAINT fk_idp_usu FOREIGN KEY (idpersona) REFERENCES PERSONAS (idpersona),
    CONSTRAINT uk_user_usu UNIQUE(user_name)
);


CREATE TABLE PROYECTOS (
	idproyecto INT AUTO_INCREMENT PRIMARY KEY,
    idcliente INT NOT NULL,
    nombreP 	VARCHAR(50) NOT NULL,
    descripcion VARCHAR(200) NOT NULL,
    fecha_inicio DATE NOT NULL,
    fecha_fin 		DATE NOT NULL,
    estado_project 	VARCHAR(15)  NOT NULL , -- PENDIENTE , PROCESO, CERRADO
    estado_del 	BIT NOT NULL DEFAULT 1,
    CONSTRAINT fk_idc_pro FOREIGN KEY (idcliente) REFERENCES CLIENTES (idcliente),
    CONSTRAINT uk_nom_pro UNIQUE(nombreP) 
);

ALTER TABLE PROYECTOS MODIFY COLUMN estado_project VARCHAR(15) NOT NULL DEFAULT 'PENDIENTE';

CREATE TABLE CANALES (
	idcanal INT AUTO_INCREMENT PRIMARY KEY,
    nombre_canal VARCHAR(30) NOT NULL,
    descripcion VARCHAR(30) NULL,
    estado	 BIT NOT NULL DEFAULT 1,
    CONSTRAINT uk_nom_can UNIQUE(nombre_canal)
);

CREATE TABLE TAREAS (
	idtarea INT AUTO_INCREMENT PRIMARY KEY,
    idproyecto INT NOT NULL,
    idcanal 	INT NOT NULL,
    titulo 		VARCHAR(30) NOT NULL,
    descripcion  VARCHAR(150) NULL,
    fecha_inicio 	DATE NOT NULL,
    fecha_fin 		DATE NOT NULL,
    estado_tarea	VARCHAR(15) NOT NULL, -- PENDIENTE , PROCESO, CERRADO
    estado_del		BIT NOT NULL DEFAULT 1,
    CONSTRAINT fk_idp_tar FOREIGN KEY (idproyecto) REFERENCES PROYECTOS (idproyecto),
    CONSTRAINT fk_ipc_tar FOREIGN KEY (idcanal) REFERENCES CANALES (idcanal),
    CONSTRAINT uk_tit_tar UNIQUE(titulo)
);

CREATE TABLE ASIGNACIONES (
	idasignacion INT AUTO_INCREMENT PRIMARY KEY,
    idusuario 	INT NOT NULL,
    idtarea 	INT NOT NULL,
    fecha_asignacion	DATE NOT NULL,
    fecha_atendido		DATE NULL,
    estado_del			BIT NOT NULL DEFAULT 1,
    CONSTRAINT fk_idu_asig FOREIGN KEY (idusuario) REFERENCES USUARIOS(idusuario),
    CONSTRAINT fk_idt_asig FOREIGN KEY (idtarea) REFERENCES TAREAS (idtarea)
);

CREATE TABLE ANEXOS (
	idanexo		INT AUTO_INCREMENT PRIMARY KEY,
    idproyecto 	INT NOT NULL,
    idtarea		INT NOT NULL, 
    idasignacion	INT NOT NULL,
    idusuario		INT NOT NULL,
    descripcion 	VARCHAR(200) NULL,
    doc				VARCHAR(200) NULL,
    tipo_recurso	VARCHAR(50) NULL,
	CONSTRAINT fk_idp_ane FOREIGN KEY (idproyecto) REFERENCES PROYECTOS (idproyecto),
    CONSTRAINT fk_idt_ane FOREIGN KEY (idtarea ) REFERENCES TAREAS (idtarea),
    CONSTRAINT fk_asig_ane FOREIGN KEY (idasignacion) REFERENCES ASIGNACIONES (idasignacion),
    CONSTRAINT fk_idusu_ane FOREIGN KEY (idusuario) REFERENCES USUARIOS (idusuario)
);

CREATE TABLE COMENTARIOS (
	idcomentario 	INT AUTO_INCREMENT PRIMARY KEY,
    idproyecto 		INT NOT NULL,
    idtarea 		INT NOT NULL,
    idasignacion	INT NOT NULL,
    idusuario 		INT NOT NULL,
    comentario		VARCHAR(200) NOT NULL,
    fecha_coment 	DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_idp_com FOREIGN KEY (idproyecto) REFERENCES PROYECTOS (idproyecto),
    CONSTRAINT fk_idt_com FOREIGN KEY (idtarea ) REFERENCES TAREAS (idtarea),
    CONSTRAINT fk_asig_com FOREIGN KEY (idasignacion) REFERENCES ASIGNACIONES (idasignacion),
    CONSTRAINT fk_idusu_com FOREIGN KEY (idusuario) REFERENCES USUARIOS (idusuario)
);

CREATE TABLE METRICAS (
	idmetrica 	INT AUTO_INCREMENT PRIMARY KEY,
    idtarea		INT NOT NULL, 
    nombre_metrica 	 VARCHAR(30) NOT NULL,
    valor_decimal    DECIMAL(10,2) NULL,
    valor_entero	 INT NULL,
    tipo_valor 		VARCHAR(30) NOT NULL, -- ENTERO , DECIMAL , CUALITATIVA
    fecha_registro	DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT fk_idt_met FOREIGN KEY (idtarea ) REFERENCES TAREAS (idtarea)
);

CREATE TABLE PRESUPUESTOS (
	idprepuesto	 INT AUTO_INCREMENT PRIMARY KEY,
    idproyecto 		INT NOT NULL,
	monto_estimado  DECIMAL(10, 2) NOT NULL,
    monto_gastado 	DECIMAL(10, 2) NOT NULL,
    detalle_gasto	VARCHAR(250) NOT NULL,
	CONSTRAINT fk_idp_pre FOREIGN KEY (idproyecto) REFERENCES PROYECTOS (idproyecto)
);
	










