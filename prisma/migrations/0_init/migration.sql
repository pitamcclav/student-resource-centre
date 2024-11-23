-- CreateTable
CREATE TABLE `admin` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL,

    UNIQUE INDEX `IDX_de87485f6489f5d0995f584195`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `category` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `program` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `code` VARCHAR(255) NOT NULL,
    `duration` INTEGER NOT NULL,

    UNIQUE INDEX `IDX_c6b8c4c1adba14ec96387d3c00`(`code`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `resource` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(255) NOT NULL,
    `description` VARCHAR(255) NULL,
    `createdAt` DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `modifiedAt` DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `fileUrl` VARCHAR(255) NOT NULL,
    `year` INTEGER NOT NULL,
    `semester` INTEGER NOT NULL,
    `adminId` INTEGER NOT NULL,
    `categoryId` INTEGER NOT NULL,

    INDEX `FK_21f7b72ad32bbd1a1af49526bfe`(`adminId`),
    INDEX `FK_66faacb332a925bf732256594e5`(`categoryId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `student` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `createdAt` DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `updatedAt` DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `programId` INTEGER NOT NULL,
    `studentNo` VARCHAR(255) NOT NULL,

    UNIQUE INDEX `IDX_a56c051c91dbe1068ad683f536`(`email`),
    UNIQUE INDEX `IDX_9f06708064b961ee046fd00666`(`studentNo`),
    INDEX `FK_8a8e270fd7ea1d86e5c08be66f9`(`programId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `firstName` VARCHAR(255) NOT NULL,
    `lastName` VARCHAR(255) NOT NULL,
    `age` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `resource` ADD CONSTRAINT `FK_21f7b72ad32bbd1a1af49526bfe` FOREIGN KEY (`adminId`) REFERENCES `admin`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `resource` ADD CONSTRAINT `FK_66faacb332a925bf732256594e5` FOREIGN KEY (`categoryId`) REFERENCES `category`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `student` ADD CONSTRAINT `FK_8a8e270fd7ea1d86e5c08be66f9` FOREIGN KEY (`programId`) REFERENCES `program`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

