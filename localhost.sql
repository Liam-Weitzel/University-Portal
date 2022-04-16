-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Apr 16, 2022 at 04:04 PM
-- Server version: 5.7.31
-- PHP Version: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `uni_portal`
--
CREATE DATABASE IF NOT EXISTS `uni_portal` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `uni_portal`;

-- --------------------------------------------------------

--
-- Table structure for table `accounts`
--

DROP TABLE IF EXISTS `accounts`;
CREATE TABLE IF NOT EXISTS `accounts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `forename` varchar(255) NOT NULL,
  `surname` varchar(255) NOT NULL,
  `birthday` varchar(255) NOT NULL,
  `age` int(11) NOT NULL,
  `gender` varchar(255) NOT NULL,
  `hash` varchar(255) NOT NULL,
  `salt` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=74 DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `accounts`
--

INSERT INTO `accounts` (`id`, `forename`, `surname`, `birthday`, `age`, `gender`, `hash`, `salt`, `role`) VALUES
(24, 'Liam', 'Weitzel', '2002-06-23', 19, 'male', '$2y$10$K/jjJkuai16O9Fm50SBj2OCvt8tBpVxJhu0aSuEpgf3lX46jlYw/K', 'JI9gk-#|YYA', 'tutor'),
(25, 'Stephanie', 'Rosenkranz', '1965-03-17', 56, 'female', '$2y$10$GGdGH2vwWlT6WMUce73cdufW518iVCEx7eIehGn4flsX1wEoE5UjK', 'Vb0j?,9s0w$', 'student'),
(28, 'testtestt', 'testtestt', '2002-06-23', 19, 'male', '$2y$10$FLc9jD4aWvOnAyQoOKtgFeXgLmkyyHKcDqlQbAz3Jr3xfmQTwfR/a', 'djx|Tb}W}#', 'un-authorized'),
(29, 'Sam', 'Collins', '1999-08-08', 22, 'male', '$2y$10$qS2ooKgl9EzzhNckW88jnONcTVbaQ6Di4.S1KZg1jB3E7aBINx2vy', 'u;GoZJ6h/M)', 'student'),
(73, 'John', 'Doe', '2001-05-05', 20, 'male', '$2y$10$EYg6NmQ4EsgJUze45z4Tgus7nBBpGFd3OTnrFobJQYIl4d6ZjVKCS', 'g^peGirIM|', 'tutor');

-- --------------------------------------------------------

--
-- Table structure for table `course`
--

DROP TABLE IF EXISTS `course`;
CREATE TABLE IF NOT EXISTS `course` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `creditvalue` int(11) NOT NULL,
  `ownerid` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `course`
--

INSERT INTO `course` (`id`, `name`, `creditvalue`, `ownerid`) VALUES
(1, 'databases', 20, 73),
(2, 'websites', 20, 24),
(3, 'networks', 20, 24);

-- --------------------------------------------------------

--
-- Table structure for table `courseusingresource`
--

DROP TABLE IF EXISTS `courseusingresource`;
CREATE TABLE IF NOT EXISTS `courseusingresource` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `resourceid` int(11) NOT NULL,
  `courseid` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `courseusingresource`
--

INSERT INTO `courseusingresource` (`id`, `resourceid`, `courseid`) VALUES
(1, 1, 2),
(2, 2, 2),
(3, 3, 3);

-- --------------------------------------------------------

--
-- Table structure for table `resource`
--

DROP TABLE IF EXISTS `resource`;
CREATE TABLE IF NOT EXISTS `resource` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `datefrom` date NOT NULL,
  `dateuntil` date NOT NULL,
  `ownerid` int(11) NOT NULL,
  `extension` varchar(255) NOT NULL,
  `size` int(11) NOT NULL,
  `path` varchar(255) NOT NULL,
  `folder` varchar(255) NOT NULL,
  `available` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `resource`
--

INSERT INTO `resource` (`id`, `name`, `datefrom`, `dateuntil`, `ownerid`, `extension`, `size`, `path`, `folder`, `available`) VALUES
(1, 'loremipsum.txt', '2022-04-16', '2022-04-29', 24, 'txt', 16, 'uploads/loremipsum.txt', 'root', 'available'),
(2, 'second_file.txt', '2022-04-17', '2022-04-20', 24, 'txt', 0, 'uploads/second_file.txt', 'root', ''),
(3, 'third_file.txt', '2022-04-21', '2022-04-30', 24, 'txt', 0, 'uploads/third_file.txt', 'root', 'available');

-- --------------------------------------------------------

--
-- Table structure for table `studenttakingcourse`
--

DROP TABLE IF EXISTS `studenttakingcourse`;
CREATE TABLE IF NOT EXISTS `studenttakingcourse` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `forename` varchar(255) NOT NULL,
  `surname` varchar(255) NOT NULL,
  `course` varchar(255) NOT NULL,
  `courseid` int(11) NOT NULL,
  `authorized` int(11) NOT NULL,
  `userid` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=50 DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `studenttakingcourse`
--

INSERT INTO `studenttakingcourse` (`id`, `forename`, `surname`, `course`, `courseid`, `authorized`, `userid`) VALUES
(1, 'testtestt', 'testtestt', 'databases', 1, 0, 28),
(2, 'Liam', 'Weitzel', 'databases', 1, 1, 24),
(3, 'Stephanie', 'Rosenkranz', 'databases', 1, 0, 25),
(4, 'Liam', 'Weitzel', 'networks', 3, 1, 24),
(5, 'Sam', 'Collins', 'websites', 2, 0, 29),
(48, 'John', 'Doe', 'databases', 1, 1, 73),
(49, 'John', 'Doe', 'websites', 2, 1, 73);

-- --------------------------------------------------------

--
-- Table structure for table `timetable`
--

DROP TABLE IF EXISTS `timetable`;
CREATE TABLE IF NOT EXISTS `timetable` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `day` int(11) NOT NULL,
  `time` int(11) NOT NULL,
  `line1` varchar(255) NOT NULL,
  `line2` varchar(255) NOT NULL,
  `line3` varchar(255) NOT NULL,
  `line4` varchar(255) NOT NULL,
  `courseid` int(11) NOT NULL,
  `color` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `timetable`
--

INSERT INTO `timetable` (`id`, `day`, `time`, `line1`, `line2`, `line3`, `line4`, `courseid`, `color`) VALUES
(1, 0, 0, 'Lecture', 'Computer graphics', 'Location: LTCC', 'Mark Greenwood', 1, 0),
(2, 0, 1, 'Seminar', 'Computer graphics', 'Location: FML301', 'Mark Greenwood', 1, 0),
(3, 0, 3, 'Lecture', 'Web development', 'Location: LTCC', 'Neil Buckley', 1, 1),
(4, 0, 4, 'Seminar', 'Web development', 'Location: FML401', 'Neil Buckley', 1, 1),
(5, 0, 6, 'Lecture', 'OOSD', 'Location: EDEN1', 'Kapil', 1, 2),
(8, 1, 1, 'Lecture', 'Datalink Layer', 'Location: FML411', 'Mark Greenwood', 3, 5);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
