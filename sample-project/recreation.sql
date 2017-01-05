-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Oct 18, 2016 at 03:40 PM
-- Server version: 10.1.13-MariaDB
-- PHP Version: 5.6.23

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `recreation`
--

-- --------------------------------------------------------

--
-- Table structure for table `adminprofile`
--

CREATE TABLE `adminprofile` (
  `AdminID` int(16) NOT NULL,
  `AdminName` varchar(63) NOT NULL,
  `AdminPassword` varchar(63) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `adminprofile`
--

INSERT INTO `adminprofile` (`AdminID`, `AdminName`, `AdminPassword`) VALUES
(7001, 'admin', 'admin'),
(7002, 'chandu', '7002');

-- --------------------------------------------------------

--
-- Table structure for table `announcement`
--

CREATE TABLE `announcement` (
  `AnnounceID` int(16) NOT NULL,
  `Heading` varchar(63) NOT NULL,
  `BodyContent` varchar(511) NOT NULL,
  `Publish` varchar(6) NOT NULL,
  `Location` varchar(15) DEFAULT NULL,
  `AdminIDAnnouncement` int(16) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `eventcategory`
--

CREATE TABLE `eventcategory` (
  `CategoryID` int(16) NOT NULL,
  `CategoryName` varchar(31) NOT NULL,
  `CategoryDescription` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `eventcategory`
--

INSERT INTO `eventcategory` (`CategoryID`, `CategoryName`, `CategoryDescription`) VALUES
(1, 'Martial arts', 'Martial arts are of the traditional forms of Asian self-defense or combat that utilize physical skill and coordination without weapons, as karate, aikido, judo, or kung fu, often practiced as sport.'),
(2, 'Yoga', 'Hindu theistic philosophy teaching the suppression of all activity of body, mind, and will in order that the self may realize its distinction from them and attain liberation'),
(3, 'Tennis', 'Tennis is a racket sport that can be played individually against a single opponent (singles) or between two teams of two players each (doubles)'),
(4, 'Badminton', 'Badminton is a sport that involves the volleying of a shuttlecock over a net with the use of rackets.');

-- --------------------------------------------------------

--
-- Table structure for table `eventdata`
--

CREATE TABLE `eventdata` (
  `EventID` int(16) NOT NULL,
  `EventName` varchar(80) NOT NULL,
  `EventDescription` varchar(511) DEFAULT NULL,
  `CoachName` varchar(63) NOT NULL,
  `Duration` int(5) NOT NULL,
  `CostPerPerson` int(6) NOT NULL,
  `DaysInWeek` varchar(25) DEFAULT NULL,
  `LevelOfCourse` varchar(63) DEFAULT NULL,
  `NoOfAvailable` int(5) NOT NULL,
  `StartDate` varchar(20) DEFAULT NULL,
  `TimeOfEvent` varchar(12) DEFAULT NULL,
  `ShowStaus` varchar(6) NOT NULL,
  `CategoryNameEventData` varchar(31) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `eventdata`
--

INSERT INTO `eventdata` (`EventID`, `EventName`, `EventDescription`, `CoachName`, `Duration`, `CostPerPerson`, `DaysInWeek`, `LevelOfCourse`, `NoOfAvailable`, `StartDate`, `TimeOfEvent`, `ShowStaus`, `CategoryNameEventData`) VALUES
(1, 'Karate for Beginners', 'This Event is organised for beginners who are enthusiastic to learn Karate.', 'John Lee', 24, 150, 'Mon Wed Fri', 'Beginner', 19, '2016-10-10', '4:00 PM', 'YES', 'Martial arts'),
(2, 'Meditation', 'This course is to improve your concentration skills through meditation ', 'Arya Khan', 14, 120, 'Fri Sat.', 'Beginner', 40, '2016-10-22', '8:00 AM', 'YES', 'Yoga'),
(3, 'Aerial Yoga', 'Aerial Yoga involves performing a series of exercises inspired by yoga, Pilates, calisthenics and aerial acrobatics in a hammock-like apparatus, in order to achieve a total-body workout.', 'Christopher', 21, 300, 'Mon Tue Thu', 'Intermediate', 7, '2016-10-20', '7:00 AM', 'YES', 'Yoga'),
(6, 'Badminton', 'This is for badminton aspirants and for beginners', 'chandu', 12, 130, 'Mon Tue', 'Beginner', 12, '2016-12-12', '4:30 PM', 'YES', 'Badminton');

-- --------------------------------------------------------

--
-- Table structure for table `reservationdata`
--

CREATE TABLE `reservationdata` (
  `ReservationID` varchar(25) NOT NULL,
  `CandidateName` varchar(63) NOT NULL,
  `Gender` varchar(18) NOT NULL,
  `Age` int(4) NOT NULL,
  `Email` varchar(255) NOT NULL,
  `GuardianName` varchar(63) DEFAULT NULL,
  `GuardianRelation` varchar(31) DEFAULT NULL,
  `ConfirmationStatus` varchar(10) NOT NULL,
  `EventIDReservationData` int(16) NOT NULL,
  `AdminIDReservationData` int(16) DEFAULT NULL,
  `Remarks` varchar(255) DEFAULT NULL,
  `CardNumber` varchar(25) DEFAULT NULL,
  `cvv` varchar(20) DEFAULT NULL,
  `expiryMonth` varchar(6) DEFAULT NULL,
  `expiryYear` varchar(6) DEFAULT NULL,
  `BillingAddress` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `reservationdata`
--

INSERT INTO `reservationdata` (`ReservationID`, `CandidateName`, `Gender`, `Age`, `Email`, `GuardianName`, `GuardianRelation`, `ConfirmationStatus`, `EventIDReservationData`, `AdminIDReservationData`, `Remarks`, `CardNumber`, `cvv`, `expiryMonth`, `expiryYear`, `BillingAddress`) VALUES
('1yrYfmV', 'RaviChand Dhammalapati', 'male', 56, 'chandudammalapati@gmail.com', 'N.A', 'N.A', 'YES', 1, 7001, '', 'N.A', 'N.A', 'N.A', 'N.A', '709 christiana meadows'),
('468rL72', 'ram', 'male', 23, 'sdm@cee.com', 'N.A', 'N.A', 'PENDING', 1, NULL, NULL, 'N.A', 'N.A', 'N.A', 'N.A', 'xsdmoid'),
('74enHyR', 'RaviChand', 'male', 56, 'fvedfcfe@gmail.com', 'N.A', 'N.A', 'PENDING', 2, NULL, NULL, '1234455667671212', '123', '03', '18', '709'),
('dS4rEBa', 'Yasaswini', 'female', 15, 'yash@ucmo.edu', 'ravi', 'brother', 'NO', 3, 7001, 'payment declined', 'N.A', 'N.A', 'N.A', 'N.A', '503 ne tudor rd'),
('fgtH1jY', 'chandu', 'male', 12, 'juiiu@oi.in', 'jakie', 'father', 'PENDING', 1, NULL, NULL, '12234412233451223', '123', '02', '18', 'theskajds aiusjwo oiwee'),
('jaWaifJ', 'RaviChand Dhammalapati', 'male', 34, 'chandudammalapati@gmail.com', 'N.A', 'N.A', 'PENDING', 1, NULL, NULL, 'N.A', 'N.A', 'N.A', 'N.A', '709 christiana meadows'),
('wlipJud', 'krishna', 'male', 23, 'isjdmn@cs.on', 'N.A', 'N.A', 'PENDING', 2, NULL, NULL, 'N.A', 'N.A', 'N.A', 'N.A', 'ceiocmeo');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `adminprofile`
--
ALTER TABLE `adminprofile`
  ADD PRIMARY KEY (`AdminID`);

--
-- Indexes for table `announcement`
--
ALTER TABLE `announcement`
  ADD PRIMARY KEY (`AnnounceID`),
  ADD KEY `AdminIDAnnouncement` (`AdminIDAnnouncement`);

--
-- Indexes for table `eventcategory`
--
ALTER TABLE `eventcategory`
  ADD PRIMARY KEY (`CategoryID`),
  ADD UNIQUE KEY `CategoryName` (`CategoryName`);

--
-- Indexes for table `eventdata`
--
ALTER TABLE `eventdata`
  ADD PRIMARY KEY (`EventID`),
  ADD KEY `CategoryNameEventData` (`CategoryNameEventData`);

--
-- Indexes for table `reservationdata`
--
ALTER TABLE `reservationdata`
  ADD PRIMARY KEY (`ReservationID`),
  ADD KEY `EventIDReservationData` (`EventIDReservationData`),
  ADD KEY `AdminIDReservationData` (`AdminIDReservationData`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `adminprofile`
--
ALTER TABLE `adminprofile`
  MODIFY `AdminID` int(16) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7003;
--
-- AUTO_INCREMENT for table `announcement`
--
ALTER TABLE `announcement`
  MODIFY `AnnounceID` int(16) NOT NULL AUTO_INCREMENT=123457;
--
-- AUTO_INCREMENT for table `eventcategory`
--
ALTER TABLE `eventcategory`
  MODIFY `CategoryID` int(16) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `eventdata`
--
ALTER TABLE `eventdata`
  MODIFY `EventID` int(16) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `announcement`
--
ALTER TABLE `announcement`
  ADD CONSTRAINT `announcement_ibfk_1` FOREIGN KEY (`AdminIDAnnouncement`) REFERENCES `adminprofile` (`AdminID`);

--
-- Constraints for table `eventdata`
--
ALTER TABLE `eventdata`
  ADD CONSTRAINT `eventdata_ibfk_1` FOREIGN KEY (`CategoryNameEventData`) REFERENCES `eventcategory` (`CategoryName`);

--
-- Constraints for table `reservationdata`
--
ALTER TABLE `reservationdata`
  ADD CONSTRAINT `reservationdata_ibfk_1` FOREIGN KEY (`EventIDReservationData`) REFERENCES `eventdata` (`EventID`),
  ADD CONSTRAINT `reservationdata_ibfk_2` FOREIGN KEY (`AdminIDReservationData`) REFERENCES `adminprofile` (`AdminID`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
