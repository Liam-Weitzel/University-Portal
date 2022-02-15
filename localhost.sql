-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Feb 15, 2022 at 11:37 AM
-- Server version: 10.3.32-MariaDB-0ubuntu0.20.04.1
-- PHP Version: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
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

CREATE TABLE `accounts` (
  `id` int(11) NOT NULL,
  `forename` varchar(255) NOT NULL,
  `surname` varchar(255) NOT NULL,
  `birthday` varchar(255) NOT NULL,
  `age` int(11) NOT NULL,
  `gender` varchar(255) NOT NULL,
  `hash` varchar(255) NOT NULL,
  `salt` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `accounts`
--

INSERT INTO `accounts` (`id`, `forename`, `surname`, `birthday`, `age`, `gender`, `hash`, `salt`, `role`) VALUES
(24, 'Liam', 'Weitzel', '2002-06-23', 19, 'male', '$2y$10$K/jjJkuai16O9Fm50SBj2OCvt8tBpVxJhu0aSuEpgf3lX46jlYw/K', 'JI9gk-#|YYA', 'student'),
(25, 'Stephanie', 'Rosenkranz', '1965-03-17', 56, 'female', '$2y$10$GGdGH2vwWlT6WMUce73cdufW518iVCEx7eIehGn4flsX1wEoE5UjK', 'Vb0j?,9s0w$', 'student'),
(28, 'testtestt', 'testtestt', '2002-06-23', 19, 'male', '$2y$10$FLc9jD4aWvOnAyQoOKtgFeXgLmkyyHKcDqlQbAz3Jr3xfmQTwfR/a', 'djx|Tb}W}#', 'student'),
(29, 'Sam', 'Collins', '1999-08-08', 22, 'male', '$2y$10$qS2ooKgl9EzzhNckW88jnONcTVbaQ6Di4.S1KZg1jB3E7aBINx2vy', 'u;GoZJ6h/M)', 'student');

-- --------------------------------------------------------

--
-- Table structure for table `courses`
--

CREATE TABLE `courses` (
  `id` int(11) NOT NULL,
  `forename` varchar(255) NOT NULL,
  `surname` varchar(255) NOT NULL,
  `course` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `courses`
--

INSERT INTO `courses` (`id`, `forename`, `surname`, `course`) VALUES
(1, 'testtestt', 'testtestt', 'databases'),
(2, 'Liam', 'Weitzel', 'databases'),
(3, 'Stephanie', 'Rosenkranz', 'databases'),
(4, 'Liam', 'Weitzel', 'networks'),
(5, 'Sam', 'Collins', 'websites');

-- --------------------------------------------------------

--
-- Table structure for table `timetable`
--

CREATE TABLE `timetable` (
  `id` int(11) NOT NULL,
  `day` int(11) NOT NULL,
  `time` int(11) NOT NULL,
  `line1` varchar(255) NOT NULL,
  `line2` varchar(255) NOT NULL,
  `line3` varchar(255) NOT NULL,
  `line4` varchar(255) NOT NULL,
  `course` varchar(255) NOT NULL,
  `color` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `timetable`
--

INSERT INTO `timetable` (`id`, `day`, `time`, `line1`, `line2`, `line3`, `line4`, `course`, `color`) VALUES
(1, 0, 0, 'Lecture', 'Computer graphics', 'Location: LTCC', 'Mark Greenwood', 'databases', 0),
(2, 0, 1, 'Seminar', 'Computer graphics', 'Location: FML301', 'Mark Greenwood', 'databases', 0),
(3, 0, 3, 'Lecture', 'Web development', 'Location: LTCC', 'Neil Buckley', 'databases', 1),
(4, 0, 4, 'Seminar', 'Web development', 'Location: FML401', 'Neil Buckley', 'databases', 1),
(5, 0, 6, 'Lecture', 'OOSD', 'Location: EDEN1', 'Kapil', 'databases', 2),
(8, 1, 1, 'Lecture', 'Datalink Layer', 'Location: FML411', 'Mark Greenwood', 'networks', 5);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `accounts`
--
ALTER TABLE `accounts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `courses`
--
ALTER TABLE `courses`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `timetable`
--
ALTER TABLE `timetable`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `accounts`
--
ALTER TABLE `accounts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT for table `courses`
--
ALTER TABLE `courses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `timetable`
--
ALTER TABLE `timetable`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
