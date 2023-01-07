-- CreateTable
CREATE TABLE `UploadedFile` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `image` VARCHAR(191) NOT NULL,
    `price` VARCHAR(191) NOT NULL,
    `sale` VARCHAR(191) NOT NULL,
    `brend` VARCHAR(191) NOT NULL,
    `sex` VARCHAR(191) NOT NULL,
    `made` VARCHAR(191) NOT NULL,
    `sell` VARCHAR(191) NOT NULL,
    `season` VARCHAR(191) NOT NULL,
    `user` VARCHAR(191) NOT NULL,
    `category` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
