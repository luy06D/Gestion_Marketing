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

CREATE TABLE USUARIOS (
	idusuario INT AUTO_INCREMENT PRIMARY KEY,
    idpersona INT NOT NULL,
    user_name VARCHAR(30) NOT NULL,
    password_usu VARCHAR(30) NOT NULL,
    nivel_acceso VARCHAR(15) NOT NULL,
    estado  BIT NOT NULL DEFAULT 1,
    img_perfil  VARCHAR(250) NULL,
    CONSTRAINT fk_idp_usu FOREIGN KEY (idpersona) REFERENCES PERSONAS (idpersona),
    CONSTRAINT uk_user_usu UNIQUE(user_name)
);

CREATE TABLE CLIENTES (
	idcliente INT AUTO_INCREMENT PRIMARY KEY,
    nombre_cli VARCHAR(30) NOT NULL, 
    industria VARCHAR(30) NOT NULL,
    contacto_principal CHAR(9) NOT NULL,
    email	VARCHAR(50) NULL,
    CONSTRAINT uk_con_ima UNIQUE (contacto_principal , email)
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
    CONSTRAINT fk_idc_pro FOREIGN KEY (idcliente) REFERENCES CLIENTES (idclientes),
    CONSTRAINT uk_nom_pro UNIQUE(nombreP) 
);

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
    CONSTRAINT fk_idp_tar FOREIGN KEY (idproyecto) REFERENCES PROYECTO (idproyecto),
    CONSTRAINT fk_ipc_tar FOREIGN KEY (idcanal) REFERENCES CANAL (idcanal),
    CONSTRAINT uk_tit_tar UNIQUE(titulo)
);

CREATE TABLE ASIGNACIONES (
	idasignaciones INT AUTO_INCREMENT PRIMARY KEY,
    idusuario 	INT NOT NULL,
    idtarea 	INT NOT NULL,
    fecha_asignacion	DATE NOT NULL,
    fecha_atendido		DATE NULL,
    estado_asignacion	
);


	










