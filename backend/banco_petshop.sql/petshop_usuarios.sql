
CREATE TABLE `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `senha` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'eduardo@email.com','$2b$10$xxlwYNdjMm2lzaG6ksIv4.aTQC58sZzTLFnI.fu5oVN.miWvlmrLa'),(2,'helio@gmail.com','$2b$10$IEU9JvzfVdw1F06.39vfsO6LHIQ28kTApZ8BUyGI2qVeJG3umIY7q'),(3,'ozzy@email.com','$2b$10$dlAY7USO7XKLESb94BML3OXqlqOZIx1Y8gi/0nskVMOqfryMHD9Zq');


