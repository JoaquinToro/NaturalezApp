-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 17, 2024 at 12:12 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `naturalezappdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `comentario`
--

CREATE TABLE `comentario` (
  `id_comentario` int(11) NOT NULL,
  `body` text NOT NULL,
  `date` date NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `id_parque` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `fauna`
--

CREATE TABLE `fauna` (
  `id_fauna` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `images` text NOT NULL,
  `description` text NOT NULL,
  `habitat` varchar(100) NOT NULL,
  `id_tipoFauna` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fauna`
--

INSERT INTO `fauna` (`id_fauna`, `name`, `images`, `description`, `habitat`, `id_tipoFauna`) VALUES
(1, 'Zorzal patagónico\r\n', 'assets\\images\\Zorzal.jpg', 'El zorzal patagónico, zorzal (Turdus falcklandii) o huilque, es una especie de ave paseriforme de la familia Turdidae.\n\n', 'Prefiere zonas arboladas, jardines, y áreas abiertas con suelo blando donde pueda buscar insectos, l', 1),
(2, 'Sapito de cuatro ojos', 'assets\\images\\Sapo_Cuatro_Ojos.jpg', 'El coicoy, sapo arriero o sapito de cuatro ojos (Pleurodema thaul) es una especie de pequeño anfibio anuro de la familia Leptodactylidae que habita en Chile, en Argentina y Uruguay. Su tamaño varía entre 3 y 5 cm. Su nombre se debe a que las glándulas que tiene en la parte posterior se asemejan a otro par de ojos. Tiene una gran cabeza en relación con su cuerpo. Es muy común y fácil de escuchar en el horario crepuscular y nocturno, [1]​vive en lagunas, bofedales, ríos, juncales y vertientes, bajo piedras o entre la hojarasca. Se alimenta de insectos y arácnidos. Se reproduce durante casi todo el año.\n', 'Vive en cuerpos de agua dulce como charcas, estanques y cursos de agua pequeños, especialmente con v', 2),
(3, 'Degu', 'assets\\images\\Degu.jpg', 'El degú o degu (mapudungun dewü, rata, ratón)3​ (Octodon degus) es una especie de roedor esciuromorfo de la familia Sciuridae.4​ Es conocido también por multitud de otros nombres, como degú/ratón cola de pincel, degú/ratón de las pircas, ardilla chilena (no confundir con la ardilla roja, la ardilla coreana, la ardilla listada verdadera, la ardilla listada y el resto de ardillas)5​ o, incluso, ratón cola de trompeta.', 'Habita en zonas semiáridas con matorrales, arbustos bajos y pastizales. En el Jardín Botánico, puede', 3),
(4, 'Pato barcino\r\n', 'assets\\images\\Pato_Barcino.jpg', 'El pato barcino, pato paramuno, pato jergón chico o cerceta barcina (Anas flavirostris)2​ es un ave endémica de Sudamérica. Parte de su distribución comprende toda la Argentina y el centro y sur de Chile, así como las islas Malvinas. Durante el invierno esta población migra hacia el norte, llegando hasta Uruguay y el sur de Brasil. Otras poblaciones viven en las regiones andinas, desde Venezuela hasta Perú, Bolivia y el norte de Chile.', 'Vive en lagunas, humedales, y aguas tranquilas con vegetación flotante y emergente.', 4),
(5, 'Focha de ligas\r\n', 'assets\\images\\Focha_De_Ligas.jpg', 'La focha de ligas, gallareta ligas rojas, gallareta grande o tagua común (Fulica armillata)2​ es una especie de ave gruiforme de la familia Rallidae que habita en Sudamérica. Ocupa Brasil, Paraguay, Uruguay, Argentina, Chile hasta Tierra del Fuego, islas Malvinas, Georgias del Sur y Sandwich del Sur.1​ No se conocen subespecies.3​\r\n\r\n', 'Frecuenta cuerpos de agua dulce con abundante vegetación acuática y orillas fangosas. También se mue', 5),
(6, 'Pejerrey Chileno', 'assets\\images\\Pejerrey_Chileno.jpg', 'Este pejerrey es considerado una especie amenazada. Es por eso que se ha realizado un mayor esfuerzo en estudiar su estructura genética, lográndose la secuencia completa de su genoma mitocondrial.\r\n\r\n', 'Habita en lagunas, ríos y embalses con aguas claras y frescas. Suele permanecer en zonas con poca co', 6);

-- --------------------------------------------------------

--
-- Table structure for table `flora`
--

CREATE TABLE `flora` (
  `id_flora` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `images` text NOT NULL,
  `description` text NOT NULL,
  `id_tipoFlora` int(11) NOT NULL,
  `id_temporada` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `flora`
--

INSERT INTO `flora` (`id_flora`, `name`, `images`, `description`, `id_tipoFlora`, `id_temporada`) VALUES
(1, 'Boldo', 'assets\\images\\Boldo.jpg', 'El boldo (Peumus boldus Molina) es la única especie del género monotípico Peumus, de la familia de las monimiáceas. Este árbol es endémico de Chile. Sus hojas, de fuerte aroma, se utilizan con propósitos culinarios y medicinales.\r\n\r\n', 2, 7),
(2, 'Opuntia', 'assets\\images\\Opuntia.jpg', 'Opuntia es un género de plantas de la familia de las cactáceas que consta de más de 300 especies, todas nativas del continente americano, que habitan desde el sur de Canadá hasta el norte de la Patagonia, donde crecen de forma silvestre. También es conocido como árbol de tunas.\n\n', 2, 5),
(3, 'Yucca', 'assets\\images\\Yucca.jpg', 'Yucca es un género de plantas suculentas compuesto por 55 especies2​ de la subfamilia Agavoideae nativas de Norte y Centroamérica, caracterizadas por sus rosetas de hojas con forma de espada y por sus racimos de flores blancas. No debe confundirse con el nombre común yuca de la especie Manihot esculenta.\r\n\r\n', 2, 5),
(4, 'Orquideas', 'assets\\images\\Orquideas.jpg', 'Las orquídeas u orquidáceas (nombre científico Orchidaceae) son una familia de plantas monocotiledóneas que se distinguen por la complejidad de sus flores y por sus interacciones ecológicas con los agentes polinizadores y con los hongos con los que forman micorrizas.\r\n\r\n', 2, 7),
(5, 'Maiten', 'assets\\images\\Maiten.jpg', 'El maitén (Maytenus boaria) es un árbol nativo de Argentina y Chile, originario de los Andes.\r\n\r\n', 1, 5),
(6, 'Maqui', 'assets\\images\\Maqui.jpg', 'Aristotelia chilensis o maqui, es una especie botánica de planta fanerógama de la familia de las elaeocarpáceas, nativa de Chile y zonas adyacentes del sur de Argentina.1​\r\n\r\n', 2, 8);

-- --------------------------------------------------------

--
-- Table structure for table `noticias`
--

CREATE TABLE `noticias` (
  `id_noticia` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `subtitle` varchar(255) NOT NULL,
  `body` text NOT NULL,
  `author` varchar(100) NOT NULL,
  `images` text DEFAULT NULL,
  `fecha` date NOT NULL,
  `id_parque` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `noticias`
--

INSERT INTO `noticias` (`id_noticia`, `title`, `subtitle`, `body`, `author`, `images`, `fecha`, `id_parque`) VALUES
(1, 'Se inaugura primera etapa de reconstrucción del Jardín Botánico de Viña del Mar', 'El Gobierno anunció un plan de restauración para el Jardín Botánico de Viña del Mar que tuvo una afectación en más de 370 hectáreas de su territorio.', 'Tras los incendios de febrero del 2024, un 97% del Jardín Botánico fue dañado, lo que incluye 404 hectáreas y alberga a más de 1.300 especies de plantas.\nEn este sentido, el Gobierno anunció un plan de restauración para el Jardín Botánico de Viña del Mar que tuvo una afectación en más de 370 hectáreas de su territorio.\nEl parque recibía más de 400 mil visitantes al año, lo que se vio interrumpido por el gran deterioro. Sin embargo, gracias a una alianza público-privada, hoy ya se ven avances.', 'Joaquin Toro', 'assets/images/Jardin_Botanico_Vina_Del_Mar_2.jpg,', '2024-08-07', 3);

-- --------------------------------------------------------

--
-- Table structure for table `parque`
--

CREATE TABLE `parque` (
  `id_parque` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `description` text NOT NULL,
  `images` text NOT NULL,
  `location` varchar(200) NOT NULL,
  `id_region` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `parque`
--

INSERT INTO `parque` (`id_parque`, `name`, `description`, `images`, `location`, `id_region`) VALUES
(3, 'Jardín Botánico Viña del Mar', 'El Jardín Botánico de Viña del Mar es un verdadero oasis de naturaleza y biodiversidad, ubicado en la hermosa costa central de Chile. Inaugurado en 1963, este extenso parque de 25 hectáreas alberga una impresionante colección de más de 3,000 especies de plantas, muchas de las cuales son nativas de Chile y otras provenientes de diferentes regiones del mundo.\r\n\r\nEl jardín se encuentra rodeado de un entorno natural de colinas y bosques, lo que lo convierte en un lugar ideal para disfrutar de caminatas tranquilas y momentos de reflexión en medio de la flora exuberante. Los visitantes pueden explorar diversos senderos que los llevan a través de jardines temáticos, invernaderos, y áreas de conservación, cada uno ofreciendo una experiencia única.\r\n\r\nEntre sus atractivos destacan el Jardín de Rosales, el Jardín de Cactáceas y el Bosque de Alerces, donde se pueden apreciar especies arbóreas de gran altura y antigüedad. Además, el Jardín Botánico cuenta con espacios educativos que fomentan la conservación de la naturaleza y la importancia de la biodiversidad, organizando talleres, charlas y actividades para el público.\r\n\r\nCon su rica variedad de flora y su entorno sereno, el Jardín Botánico de Viña del Mar es un destino imperdible para los amantes de la naturaleza, investigadores, y familias que buscan un lugar para conectar con el medio ambiente y disfrutar de un día al aire libre.', 'assets\\images\\Jardin_Botanico_Vina_Del_Mar.jpg', '-33.04941824384187, -71.50093820286625', 5),
(4, 'Laguna La Luz', 'La Laguna La Luz es un hermoso cuerpo de agua ubicado en la Región de Valparaíso, cerca de Viña del Mar. Este lugar es conocido por su entorno natural, que incluye una rica biodiversidad, y es hogar de diversas especies de aves, convirtiéndolo en un destino popular para la observación de la fauna. La laguna está rodeada de senderos y bosques, lo que la hace ideal para caminatas y picnics. Los visitantes pueden disfrutar de la tranquilidad del paisaje y participar en actividades recreativas como paseos en kayak y exploraciones de la naturaleza. Es un lugar perfecto para desconectarse y disfrutar de la belleza natural de la región.', 'assets\\images\\Laguna_La_Luz.jpg', '-33.0288, -71.5077', 5);

-- --------------------------------------------------------

--
-- Table structure for table `parque_fauna`
--

CREATE TABLE `parque_fauna` (
  `id_parque` int(11) NOT NULL,
  `id_fauna` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `parque_fauna`
--

INSERT INTO `parque_fauna` (`id_parque`, `id_fauna`) VALUES
(3, 1),
(3, 2),
(3, 3),
(4, 4),
(4, 5),
(4, 6);

-- --------------------------------------------------------

--
-- Table structure for table `parque_flora`
--

CREATE TABLE `parque_flora` (
  `id_flora` int(11) NOT NULL,
  `id_parque` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `parque_flora`
--

INSERT INTO `parque_flora` (`id_flora`, `id_parque`) VALUES
(1, 4),
(2, 3),
(3, 3),
(4, 3),
(5, 4),
(6, 4);

-- --------------------------------------------------------

--
-- Table structure for table `region`
--

CREATE TABLE `region` (
  `id_region` int(11) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `region`
--

INSERT INTO `region` (`id_region`, `name`) VALUES
(1, 'Región de Tarapacá'),
(2, 'Región de Antofagasta'),
(3, 'Región de Atacama'),
(4, 'Región de Coquimbo'),
(5, 'Región de Valparaíso'),
(6, 'Región del Libertador General Bernardo O’Higgins'),
(7, 'Región del Maule'),
(8, 'Región del Biobío'),
(9, 'Región de La Araucanía'),
(10, 'Región de Los Lagos'),
(11, 'Región de Aysén del General Carlos Ibáñez del Campo'),
(12, 'Región de Magallanes y la Antártica Chilena'),
(13, 'Región Metropolitana de Santiago'),
(14, 'Región de Los Ríos'),
(15, 'Región de Arica y Parinacota'),
(16, 'Región del Ñuble');

-- --------------------------------------------------------

--
-- Table structure for table `temporada`
--

CREATE TABLE `temporada` (
  `id_temporada` int(11) NOT NULL,
  `season` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `temporada`
--

INSERT INTO `temporada` (`id_temporada`, `season`) VALUES
(1, 'Verano'),
(2, 'Otoño'),
(3, 'Invierno'),
(4, 'Primavera'),
(5, 'Verano'),
(6, 'Otoño'),
(7, 'Invierno'),
(8, 'Primavera');

-- --------------------------------------------------------

--
-- Table structure for table `tip`
--

CREATE TABLE `tip` (
  `id_tip` int(11) NOT NULL,
  `body` text NOT NULL,
  `id_parque` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tipofauna`
--

CREATE TABLE `tipofauna` (
  `id_tipoFauna` int(11) NOT NULL,
  `species` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tipofauna`
--

INSERT INTO `tipofauna` (`id_tipoFauna`, `species`) VALUES
(1, 'Turdus falcklandii'),
(2, 'Pleurodema thaul'),
(3, 'Octodon degus'),
(4, 'Anas flavirostris'),
(5, 'Fulica armillata'),
(6, 'Basilichthys microlepidotus');

-- --------------------------------------------------------

--
-- Table structure for table `tipoflora`
--

CREATE TABLE `tipoflora` (
  `id_tipoFlora` int(11) NOT NULL,
  `type` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tipoflora`
--

INSERT INTO `tipoflora` (`id_tipoFlora`, `type`) VALUES
(1, 'Arbol'),
(2, 'Flor'),
(3, 'Arbol Florado');

-- --------------------------------------------------------

--
-- Table structure for table `usuario`
--

CREATE TABLE `usuario` (
  `id_usuario` int(11) NOT NULL,
  `username` varchar(30) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(100) NOT NULL,
  `rol` varchar(20) NOT NULL,
  `activo` int(11) NOT NULL,
  `id_region` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `usuario_parque`
--

CREATE TABLE `usuario_parque` (
  `id_usuario` int(11) NOT NULL,
  `id_parque` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `comentario`
--
ALTER TABLE `comentario`
  ADD PRIMARY KEY (`id_comentario`),
  ADD UNIQUE KEY `id_comentario` (`id_comentario`),
  ADD KEY `id_usuario` (`id_usuario`),
  ADD KEY `id_parque` (`id_parque`);

--
-- Indexes for table `fauna`
--
ALTER TABLE `fauna`
  ADD PRIMARY KEY (`id_fauna`),
  ADD UNIQUE KEY `id_fauna` (`id_fauna`),
  ADD KEY `id_tipoFauna` (`id_tipoFauna`);

--
-- Indexes for table `flora`
--
ALTER TABLE `flora`
  ADD PRIMARY KEY (`id_flora`),
  ADD UNIQUE KEY `id_flora` (`id_flora`),
  ADD KEY `id_tipoFlora` (`id_tipoFlora`),
  ADD KEY `id_temporada` (`id_temporada`);

--
-- Indexes for table `noticias`
--
ALTER TABLE `noticias`
  ADD PRIMARY KEY (`id_noticia`),
  ADD UNIQUE KEY `id_noticia` (`id_noticia`),
  ADD KEY `id_parque` (`id_parque`);

--
-- Indexes for table `parque`
--
ALTER TABLE `parque`
  ADD PRIMARY KEY (`id_parque`),
  ADD UNIQUE KEY `id_parque` (`id_parque`),
  ADD KEY `id_region` (`id_region`);

--
-- Indexes for table `parque_fauna`
--
ALTER TABLE `parque_fauna`
  ADD PRIMARY KEY (`id_parque`,`id_fauna`),
  ADD UNIQUE KEY `id_parque` (`id_parque`,`id_fauna`),
  ADD KEY `id_fauna` (`id_fauna`);

--
-- Indexes for table `parque_flora`
--
ALTER TABLE `parque_flora`
  ADD PRIMARY KEY (`id_flora`,`id_parque`),
  ADD UNIQUE KEY `id_parque` (`id_parque`,`id_flora`);

--
-- Indexes for table `region`
--
ALTER TABLE `region`
  ADD PRIMARY KEY (`id_region`),
  ADD UNIQUE KEY `id_region` (`id_region`);

--
-- Indexes for table `temporada`
--
ALTER TABLE `temporada`
  ADD PRIMARY KEY (`id_temporada`),
  ADD UNIQUE KEY `id_temporada` (`id_temporada`);

--
-- Indexes for table `tip`
--
ALTER TABLE `tip`
  ADD PRIMARY KEY (`id_tip`),
  ADD UNIQUE KEY `id_tip` (`id_tip`),
  ADD KEY `id_parque` (`id_parque`);

--
-- Indexes for table `tipofauna`
--
ALTER TABLE `tipofauna`
  ADD PRIMARY KEY (`id_tipoFauna`),
  ADD UNIQUE KEY `id_tipoFauna` (`id_tipoFauna`);

--
-- Indexes for table `tipoflora`
--
ALTER TABLE `tipoflora`
  ADD PRIMARY KEY (`id_tipoFlora`),
  ADD UNIQUE KEY `id_tipoFlora` (`id_tipoFlora`);

--
-- Indexes for table `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id_usuario`),
  ADD UNIQUE KEY `id_usuario` (`id_usuario`),
  ADD UNIQUE KEY `username` (`username`),
  ADD KEY `id_region` (`id_region`);

--
-- Indexes for table `usuario_parque`
--
ALTER TABLE `usuario_parque`
  ADD PRIMARY KEY (`id_usuario`,`id_parque`),
  ADD KEY `fk_parque` (`id_parque`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `comentario`
--
ALTER TABLE `comentario`
  MODIFY `id_comentario` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `fauna`
--
ALTER TABLE `fauna`
  MODIFY `id_fauna` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `flora`
--
ALTER TABLE `flora`
  MODIFY `id_flora` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `noticias`
--
ALTER TABLE `noticias`
  MODIFY `id_noticia` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `parque`
--
ALTER TABLE `parque`
  MODIFY `id_parque` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `region`
--
ALTER TABLE `region`
  MODIFY `id_region` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `temporada`
--
ALTER TABLE `temporada`
  MODIFY `id_temporada` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `tip`
--
ALTER TABLE `tip`
  MODIFY `id_tip` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tipofauna`
--
ALTER TABLE `tipofauna`
  MODIFY `id_tipoFauna` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `tipoflora`
--
ALTER TABLE `tipoflora`
  MODIFY `id_tipoFlora` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id_usuario` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `comentario`
--
ALTER TABLE `comentario`
  ADD CONSTRAINT `comentario_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id_usuario`),
  ADD CONSTRAINT `comentario_ibfk_2` FOREIGN KEY (`id_parque`) REFERENCES `parque` (`id_parque`);

--
-- Constraints for table `fauna`
--
ALTER TABLE `fauna`
  ADD CONSTRAINT `fauna_ibfk_1` FOREIGN KEY (`id_tipoFauna`) REFERENCES `tipofauna` (`id_tipoFauna`);

--
-- Constraints for table `flora`
--
ALTER TABLE `flora`
  ADD CONSTRAINT `flora_ibfk_1` FOREIGN KEY (`id_tipoFlora`) REFERENCES `tipoflora` (`id_tipoFlora`),
  ADD CONSTRAINT `flora_ibfk_2` FOREIGN KEY (`id_temporada`) REFERENCES `temporada` (`id_temporada`);

--
-- Constraints for table `noticias`
--
ALTER TABLE `noticias`
  ADD CONSTRAINT `noticias_ibfk_1` FOREIGN KEY (`id_parque`) REFERENCES `parque` (`id_parque`);

--
-- Constraints for table `parque`
--
ALTER TABLE `parque`
  ADD CONSTRAINT `parque_ibfk_1` FOREIGN KEY (`id_region`) REFERENCES `region` (`id_region`);

--
-- Constraints for table `parque_fauna`
--
ALTER TABLE `parque_fauna`
  ADD CONSTRAINT `parque_fauna_ibfk_1` FOREIGN KEY (`id_parque`) REFERENCES `parque` (`id_parque`),
  ADD CONSTRAINT `parque_fauna_ibfk_2` FOREIGN KEY (`id_fauna`) REFERENCES `fauna` (`id_fauna`);

--
-- Constraints for table `parque_flora`
--
ALTER TABLE `parque_flora`
  ADD CONSTRAINT `parque_flora_ibfk_1` FOREIGN KEY (`id_parque`) REFERENCES `parque` (`id_parque`),
  ADD CONSTRAINT `parque_flora_ibfk_2` FOREIGN KEY (`id_flora`) REFERENCES `flora` (`id_flora`);

--
-- Constraints for table `tip`
--
ALTER TABLE `tip`
  ADD CONSTRAINT `tip_ibfk_1` FOREIGN KEY (`id_parque`) REFERENCES `parque` (`id_parque`);

--
-- Constraints for table `usuario`
--
ALTER TABLE `usuario`
  ADD CONSTRAINT `usuario_ibfk_1` FOREIGN KEY (`id_region`) REFERENCES `region` (`id_region`);

--
-- Constraints for table `usuario_parque`
--
ALTER TABLE `usuario_parque`
  ADD CONSTRAINT `fk_parque` FOREIGN KEY (`id_parque`) REFERENCES `parque` (`id_parque`) ON DELETE CASCADE,
  ADD CONSTRAINT `fk_usuario` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id_usuario`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
