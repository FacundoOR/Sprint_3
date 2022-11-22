CREATE TABLE `erebarritas`.`users` (
  `ID_USER` INT NOT NULL,
  `USERNAME` VARCHAR(45) NOT NULL,
  `PASSWORD` VARCHAR(60) NOT NULL,
  `EMAIL` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`ID_USER`));

    INSERT INTO `erebarritas`.`users` (`ID_USER`, `USERNAME`, `PASSWORD`, `EMAIL`) VALUES ('1', 'frosas', '2b$10$w75dF4lRpoxK.Qhp6YYbyOvPM4F.0x4fxv6s3cT0ZiJoAuPMY8/rS', 'facu@gmail.com');
    INSERT INTO `erebarritas`.`users` (`ID_USER`, `USERNAME`, `PASSWORD`, `EMAIL`) VALUES ('2', 'facundo', '$2b$10$w75dF4lRpoxK.Qhp6YYbyOvPM4F.0x4fxv6s3cT0ZiJoAuPMY8/rS', 'oscar@gmail.com');
