drop database if exists painel-cv19;
create database painel-cv19;
use painel-cv19; 

CREATE TABLE `painel-cv19`.`cidade` (
  `idcidade` INT NOT NULL AUTO_INCREMENT,
  `city_ibge_code` INT NULL,
  `city` VARCHAR(45) NULL,
  PRIMARY KEY (`idcidade`));


CREATE TABLE `painel-cv19`.`dados` (
  `cd_dado` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `city_ibge` INT NULL,
  `city` VARCHAR(45) NULL,
  `date` DATE NULL,
  `epidemiological_week` VARCHAR(45) NULL,
  ` estimated_population` VARCHAR(45) NULL,
  ` estimated_population_2019` VARCHAR(45) NULL,
  ` is_last` VARCHAR(45) NULL,
  `is_repeated` VARCHAR(45) NULL,
  `last_available_confirmed` VARCHAR(45) NULL,
  `last_available_confirmed_per_100k_inhabitants` VARCHAR(45) NULL,
  `last_available_date` VARCHAR(45) NULL,
  ` last_available_death_rate` VARCHAR(45) NULL,
  ` last_available_deaths` VARCHAR(45) NULL,
  `new_confirmed` VARCHAR(45) NULL,
  `new_deaths` VARCHAR(45) NULL,
  ` order_for_place` VARCHAR(45) NULL,
  PRIMARY KEY (`cd_dado`))
  FOREIGN KEY (city_ibge_code) REFERENCES cidade(city_ibge_code);




INSERT INTO `painel-cv19`.`cidade` (`idcidade`, `city_ibge_code`, `city`) VALUES ('1', '4211900', 'Palhoça');
INSERT INTO `painel-cv19`.`dados` (`cd_dado`, `city_ibge`, `city`, `date`, `epidemiological_week`, ` estimated_population`, ` estimated_population_2019`, ` is_last`, `is_repeated`, `last_available_confirmed`, `last_available_confirmed_per_100k_inhabitants`, `last_available_date`, ` last_available_death_rate`, ` last_available_deaths`, `new_confirmed`, `new_deaths`, ` order_for_place`) VALUES ('1', '4211900', 'Palhoça', '2021-04-19', '202116', '175272', '171797', 'true', 'false', '25613', '14613.28678', '2021-04-19', '0.0105', '269', '53', '1', '382');


select * from cidade c
join dados d
on c.city_ibge_code = d.city_ibge;