CREATE TABLE `agendamentos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `usuario_id` int NOT NULL,
  `nome_pet` varchar(100) NOT NULL,
  `raca` varchar(100) DEFAULT NULL,
  `data_banho` date NOT NULL,
  `horario` time NOT NULL,
  `observacoes` text,
  `imagem` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `usuario_id` (`usuario_id`),
  CONSTRAINT `agendamentos_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


LOCK TABLES `agendamentos` WRITE;
/*!40000 ALTER TABLE `agendamentos` DISABLE KEYS */;
INSERT INTO `agendamentos` VALUES (1,1,'Rex editado','Golden Retriever','2025-09-20','16:00:00','Banho e escovação completa','1745331797446-369364677.jpg'),(3,2,'dhaudhai','dihiaihdioad','2025-04-24','03:40:00','dahduhadiamda','1745334278159-923828730.jpeg'),(4,2,'ozzy','doajkdoajmda','2025-04-19','11:12:00','212sasdadw','1745336029378-199348774.jpg'),(5,2,'ozzy','Vira lata','2025-04-24','11:00:00','medroso com barulho','1745336090256-409994210.jpg'),(6,1,'ozzy','golden ','2025-04-24','11:00:00','...','1745337856246-704222552.jpg'),(7,3,'odhada','dadadwda','2025-04-24','11:00:00','dadwdadada','1745338549791-200764410.jpg'),(8,2,'dadwd','adfwdfadw','2025-04-24','11:00:00','dawdawd','1745338705620-779280096.jpg');
/*!40000 ALTER TABLE `agendamentos` ENABLE KEYS */;
UNLOCK TABLES;

