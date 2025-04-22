CREATE DATABASE IF NOT EXISTS petshop;
USE petshop;

CREATE TABLE usuarios (
id INT AUTO_INCREMENT PRIMARY KEY,
email VARCHAR(255) UNIQUE NOT NULL,
senha VARCHAR(255) NOT NULL
);
create table agendamentos (
id int auto_increment primary key,
usuario_id int not null,
nome_pet varchar(100) not null,
raca varchar(100),
data_banho date not null,
horario time not null,
observacoes text,
imagem varchar(255) not null,
foreign key (usuario_id) REFERENCES	usuarios(id) on delete cascade,
unique key idx_unico_data_hora (data_banho, horario)
); 



