-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 25-10-2024 a las 03:54:24
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `naturalezappdb`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comentario`
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
-- Estructura de tabla para la tabla `fauna`
--

CREATE TABLE `fauna` (
  `id_fauna` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `images` text NOT NULL,
  `description` text NOT NULL,
  `habitat` varchar(100) NOT NULL,
  `id_tipoFauna` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `flora`
--

CREATE TABLE `flora` (
  `id_flora` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `images` text NOT NULL,
  `description` text NOT NULL,
  `id_tipoFlora` int(11) NOT NULL,
  `id_temporada` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `noticias`
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
-- Volcado de datos para la tabla `noticias`
--

INSERT INTO `noticias` (`id_noticia`, `title`, `subtitle`, `body`, `author`, `images`, `fecha`, `id_parque`) VALUES
(1, 'Se inaugura primera etapa de reconstrucción del Jardín Botánico de Viña del Mar', 'El Gobierno anunció un plan de restauración para el Jardín Botánico de Viña del Mar que tuvo una afectación en más de 370 hectáreas de su territorio.', 'Tras los incendios de febrero del 2024, un 97% del Jardín Botánico fue dañado, lo que incluye 404 hectáreas y alberga a más de 1.300 especies de plantas.\nEn este sentido, el Gobierno anunció un plan de restauración para el Jardín Botánico de Viña del Mar que tuvo una afectación en más de 370 hectáreas de su territorio.\nEl parque recibía más de 400 mil visitantes al año, lo que se vio interrumpido por el gran deterioro. Sin embargo, gracias a una alianza público-privada, hoy ya se ven avances.', 'Joaquin Toro', 'assets/images/Jardin_Botanico_Vina_Del_Mar_2.jpg,', '2024-08-07', 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `parque`
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
-- Volcado de datos para la tabla `parque`
--

INSERT INTO `parque` (`id_parque`, `name`, `description`, `images`, `location`, `id_region`) VALUES
(3, 'Jardín Botánico Viña del Mar', 'El Jardín Botánico de Viña del Mar es un verdadero oasis de naturaleza y biodiversidad, ubicado en la hermosa costa central de Chile. Inaugurado en 1963, este extenso parque de 25 hectáreas alberga una impresionante colección de más de 3,000 especies de plantas, muchas de las cuales son nativas de Chile y otras provenientes de diferentes regiones del mundo.\r\n\r\nEl jardín se encuentra rodeado de un entorno natural de colinas y bosques, lo que lo convierte en un lugar ideal para disfrutar de caminatas tranquilas y momentos de reflexión en medio de la flora exuberante. Los visitantes pueden explorar diversos senderos que los llevan a través de jardines temáticos, invernaderos, y áreas de conservación, cada uno ofreciendo una experiencia única.\r\n\r\nEntre sus atractivos destacan el Jardín de Rosales, el Jardín de Cactáceas y el Bosque de Alerces, donde se pueden apreciar especies arbóreas de gran altura y antigüedad. Además, el Jardín Botánico cuenta con espacios educativos que fomentan la conservación de la naturaleza y la importancia de la biodiversidad, organizando talleres, charlas y actividades para el público.\r\n\r\nCon su rica variedad de flora y su entorno sereno, el Jardín Botánico de Viña del Mar es un destino imperdible para los amantes de la naturaleza, investigadores, y familias que buscan un lugar para conectar con el medio ambiente y disfrutar de un día al aire libre.', 'assets\\images\\Jardin_Botanico_Vina_Del_Mar.jpg,', '-33.04941824384187, -71.50093820286625', 5),
(4, 'Laguna La Luz', 'La Laguna La Luz es un hermoso cuerpo de agua ubicado en la Región de Valparaíso, cerca de Viña del Mar. Este lugar es conocido por su entorno natural, que incluye una rica biodiversidad, y es hogar de diversas especies de aves, convirtiéndolo en un destino popular para la observación de la fauna. La laguna está rodeada de senderos y bosques, lo que la hace ideal para caminatas y picnics. Los visitantes pueden disfrutar de la tranquilidad del paisaje y participar en actividades recreativas como paseos en kayak y exploraciones de la naturaleza. Es un lugar perfecto para desconectarse y disfrutar de la belleza natural de la región.', 'assets\\images\\Laguna_La_Luz.jpg,', '-33.0288, -71.5077', 5);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `parque_fauna`
--

CREATE TABLE `parque_fauna` (
  `id_parque` int(11) NOT NULL,
  `id_fauna` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `parque_flora`
--

CREATE TABLE `parque_flora` (
  `id_flora` int(11) NOT NULL,
  `id_parque` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `region`
--

CREATE TABLE `region` (
  `id_region` int(11) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `region`
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
-- Estructura de tabla para la tabla `temporada`
--

CREATE TABLE `temporada` (
  `id_temporada` int(11) NOT NULL,
  `season` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `temporada`
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
-- Estructura de tabla para la tabla `tip`
--

CREATE TABLE `tip` (
  `id_tip` int(11) NOT NULL,
  `body` text NOT NULL,
  `id_parque` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipofauna`
--

CREATE TABLE `tipofauna` (
  `id_tipoFauna` int(11) NOT NULL,
  `species` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipoflora`
--

CREATE TABLE `tipoflora` (
  `id_tipoFlora` int(11) NOT NULL,
  `type` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
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
-- Estructura de tabla para la tabla `usuario_parque`
--

CREATE TABLE `usuario_parque` (
  `id_usuario` int(11) NOT NULL,
  `id_parque` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `comentario`
--
ALTER TABLE `comentario`
  ADD PRIMARY KEY (`id_comentario`),
  ADD UNIQUE KEY `id_comentario` (`id_comentario`),
  ADD KEY `id_usuario` (`id_usuario`),
  ADD KEY `id_parque` (`id_parque`);

--
-- Indices de la tabla `fauna`
--
ALTER TABLE `fauna`
  ADD PRIMARY KEY (`id_fauna`),
  ADD UNIQUE KEY `id_fauna` (`id_fauna`),
  ADD KEY `id_tipoFauna` (`id_tipoFauna`);

--
-- Indices de la tabla `flora`
--
ALTER TABLE `flora`
  ADD PRIMARY KEY (`id_flora`),
  ADD UNIQUE KEY `id_flora` (`id_flora`),
  ADD KEY `id_tipoFlora` (`id_tipoFlora`),
  ADD KEY `id_temporada` (`id_temporada`);

--
-- Indices de la tabla `noticias`
--
ALTER TABLE `noticias`
  ADD PRIMARY KEY (`id_noticia`),
  ADD UNIQUE KEY `id_noticia` (`id_noticia`),
  ADD KEY `id_parque` (`id_parque`);

--
-- Indices de la tabla `parque`
--
ALTER TABLE `parque`
  ADD PRIMARY KEY (`id_parque`),
  ADD UNIQUE KEY `id_parque` (`id_parque`),
  ADD KEY `id_region` (`id_region`);

--
-- Indices de la tabla `parque_fauna`
--
ALTER TABLE `parque_fauna`
  ADD PRIMARY KEY (`id_parque`,`id_fauna`),
  ADD UNIQUE KEY `id_parque` (`id_parque`,`id_fauna`),
  ADD KEY `id_fauna` (`id_fauna`);

--
-- Indices de la tabla `parque_flora`
--
ALTER TABLE `parque_flora`
  ADD PRIMARY KEY (`id_flora`,`id_parque`),
  ADD UNIQUE KEY `id_parque` (`id_parque`,`id_flora`);

--
-- Indices de la tabla `region`
--
ALTER TABLE `region`
  ADD PRIMARY KEY (`id_region`),
  ADD UNIQUE KEY `id_region` (`id_region`);

--
-- Indices de la tabla `temporada`
--
ALTER TABLE `temporada`
  ADD PRIMARY KEY (`id_temporada`),
  ADD UNIQUE KEY `id_temporada` (`id_temporada`);

--
-- Indices de la tabla `tip`
--
ALTER TABLE `tip`
  ADD PRIMARY KEY (`id_tip`),
  ADD UNIQUE KEY `id_tip` (`id_tip`),
  ADD KEY `id_parque` (`id_parque`);

--
-- Indices de la tabla `tipofauna`
--
ALTER TABLE `tipofauna`
  ADD PRIMARY KEY (`id_tipoFauna`),
  ADD UNIQUE KEY `id_tipoFauna` (`id_tipoFauna`);

--
-- Indices de la tabla `tipoflora`
--
ALTER TABLE `tipoflora`
  ADD PRIMARY KEY (`id_tipoFlora`),
  ADD UNIQUE KEY `id_tipoFlora` (`id_tipoFlora`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id_usuario`),
  ADD UNIQUE KEY `id_usuario` (`id_usuario`),
  ADD UNIQUE KEY `username` (`username`),
  ADD KEY `id_region` (`id_region`);

--
-- Indices de la tabla `usuario_parque`
--
ALTER TABLE `usuario_parque`
  ADD PRIMARY KEY (`id_usuario`,`id_parque`),
  ADD KEY `fk_parque` (`id_parque`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `comentario`
--
ALTER TABLE `comentario`
  MODIFY `id_comentario` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `fauna`
--
ALTER TABLE `fauna`
  MODIFY `id_fauna` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `flora`
--
ALTER TABLE `flora`
  MODIFY `id_flora` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `noticias`
--
ALTER TABLE `noticias`
  MODIFY `id_noticia` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `parque`
--
ALTER TABLE `parque`
  MODIFY `id_parque` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `region`
--
ALTER TABLE `region`
  MODIFY `id_region` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT de la tabla `temporada`
--
ALTER TABLE `temporada`
  MODIFY `id_temporada` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `tip`
--
ALTER TABLE `tip`
  MODIFY `id_tip` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `tipofauna`
--
ALTER TABLE `tipofauna`
  MODIFY `id_tipoFauna` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `tipoflora`
--
ALTER TABLE `tipoflora`
  MODIFY `id_tipoFlora` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id_usuario` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `comentario`
--
ALTER TABLE `comentario`
  ADD CONSTRAINT `comentario_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id_usuario`),
  ADD CONSTRAINT `comentario_ibfk_2` FOREIGN KEY (`id_parque`) REFERENCES `parque` (`id_parque`);

--
-- Filtros para la tabla `fauna`
--
ALTER TABLE `fauna`
  ADD CONSTRAINT `fauna_ibfk_1` FOREIGN KEY (`id_tipoFauna`) REFERENCES `tipofauna` (`id_tipoFauna`);

--
-- Filtros para la tabla `flora`
--
ALTER TABLE `flora`
  ADD CONSTRAINT `flora_ibfk_1` FOREIGN KEY (`id_tipoFlora`) REFERENCES `tipoflora` (`id_tipoFlora`),
  ADD CONSTRAINT `flora_ibfk_2` FOREIGN KEY (`id_temporada`) REFERENCES `temporada` (`id_temporada`);

--
-- Filtros para la tabla `noticias`
--
ALTER TABLE `noticias`
  ADD CONSTRAINT `noticias_ibfk_1` FOREIGN KEY (`id_parque`) REFERENCES `parque` (`id_parque`);

--
-- Filtros para la tabla `parque`
--
ALTER TABLE `parque`
  ADD CONSTRAINT `parque_ibfk_1` FOREIGN KEY (`id_region`) REFERENCES `region` (`id_region`);

--
-- Filtros para la tabla `parque_fauna`
--
ALTER TABLE `parque_fauna`
  ADD CONSTRAINT `parque_fauna_ibfk_1` FOREIGN KEY (`id_parque`) REFERENCES `parque` (`id_parque`),
  ADD CONSTRAINT `parque_fauna_ibfk_2` FOREIGN KEY (`id_fauna`) REFERENCES `fauna` (`id_fauna`);

--
-- Filtros para la tabla `parque_flora`
--
ALTER TABLE `parque_flora`
  ADD CONSTRAINT `parque_flora_ibfk_1` FOREIGN KEY (`id_parque`) REFERENCES `parque` (`id_parque`),
  ADD CONSTRAINT `parque_flora_ibfk_2` FOREIGN KEY (`id_flora`) REFERENCES `flora` (`id_flora`);

--
-- Filtros para la tabla `tip`
--
ALTER TABLE `tip`
  ADD CONSTRAINT `tip_ibfk_1` FOREIGN KEY (`id_parque`) REFERENCES `parque` (`id_parque`);

--
-- Filtros para la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD CONSTRAINT `usuario_ibfk_1` FOREIGN KEY (`id_region`) REFERENCES `region` (`id_region`);

--
-- Filtros para la tabla `usuario_parque`
--
ALTER TABLE `usuario_parque`
  ADD CONSTRAINT `fk_parque` FOREIGN KEY (`id_parque`) REFERENCES `parque` (`id_parque`) ON DELETE CASCADE,
  ADD CONSTRAINT `fk_usuario` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id_usuario`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
