-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema vitalia
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema vitalia
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `vitalia` DEFAULT CHARACTER SET utf8mb3 ;
USE `vitalia` ;

-- -----------------------------------------------------
-- Table `vitalia`.`categoria`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `vitalia`.`categoria` (
  `idCategoria` INT NOT NULL AUTO_INCREMENT,
  `tipodeproducto` VARCHAR(45) NOT NULL,
  `nombre` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idCategoria`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `vitalia`.`usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `vitalia`.`usuario` (
  `idUsuario` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(50) NOT NULL,
  `correo` VARCHAR(50) NOT NULL,
  `telefono` VARCHAR(10) NOT NULL,
  `contraseña` VARCHAR(50) NOT NULL,
  `administrador` BIT(1) NOT NULL,
  PRIMARY KEY (`idUsuario`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `vitalia`.`pedido`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `vitalia`.`pedido` (
  `idPedido` INT NOT NULL AUTO_INCREMENT,
  `status` VARCHAR(15) NOT NULL,
  `fechapedido` DATE NOT NULL,
  `fechaentrega` DATE NOT NULL,
  `formadepago` VARCHAR(45) NOT NULL,
  `Usuario_idUsuario` INT NOT NULL,
  PRIMARY KEY (`idPedido`, `Usuario_idUsuario`),
  INDEX `fk_Pedido_Usuario1_idx` (`Usuario_idUsuario` ASC) VISIBLE,
  CONSTRAINT `fk_Pedido_Usuario1`
    FOREIGN KEY (`Usuario_idUsuario`)
    REFERENCES `vitalia`.`usuario` (`idUsuario`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `vitalia`.`productos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `vitalia`.`productos` (
  `idProductos` INT NOT NULL AUTO_INCREMENT,
  `descripcion` VARCHAR(500) NOT NULL,
  `precio` DECIMAL(10,2) NOT NULL,
  `imagen` VARCHAR(250) NOT NULL,
  `nombre` VARCHAR(200) NOT NULL,
  `Categoria_idCategoria` INT NOT NULL,
  PRIMARY KEY (`idProductos`, `Categoria_idCategoria`),
  INDEX `fk_Productos_Categoria_idx` (`Categoria_idCategoria` ASC) VISIBLE,
  CONSTRAINT `fk_Productos_Categoria`
    FOREIGN KEY (`Categoria_idCategoria`)
    REFERENCES `vitalia`.`categoria` (`idCategoria`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `vitalia`.`detallepedido`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `vitalia`.`detallepedido` (
  `total` DECIMAL(10,2) NOT NULL,
  `cantidadOrdenada` INT NOT NULL,
  `precio` DECIMAL(10,2) NOT NULL,
  `Pedido_idPedido` INT NOT NULL,
  `Pedido_Usuario_idUsuario` INT NULL,
  `Productos_idProductos` INT NOT NULL,
  `Productos_Categoria_idCategoria` INT NULL,
  PRIMARY KEY (`Pedido_idPedido`, `Productos_idProductos`),
  INDEX `fk_DetallePedido_Productos1_idx` (`Productos_idProductos` ASC, `Productos_Categoria_idCategoria` ASC) VISIBLE,
  CONSTRAINT `fk_DetallePedido_Pedido1`
    FOREIGN KEY (`Pedido_idPedido` , `Pedido_Usuario_idUsuario`)
    REFERENCES `vitalia`.`pedido` (`idPedido` , `Usuario_idUsuario`),
  CONSTRAINT `fk_DetallePedido_Productos1`
    FOREIGN KEY (`Productos_idProductos` , `Productos_Categoria_idCategoria`)
    REFERENCES `vitalia`.`productos` (`idProductos` , `Categoria_idCategoria`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
