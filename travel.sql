-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : mar. 10 sep. 2024 à 21:31
-- Version du serveur : 10.4.28-MariaDB
-- Version de PHP : 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `travel`
--

-- --------------------------------------------------------

--
-- Structure de la table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_reset_tokens_table', 1),
(3, '2016_06_01_000001_create_oauth_auth_codes_table', 1),
(4, '2016_06_01_000002_create_oauth_access_tokens_table', 1),
(5, '2016_06_01_000003_create_oauth_refresh_tokens_table', 1),
(6, '2016_06_01_000004_create_oauth_clients_table', 1),
(7, '2016_06_01_000005_create_oauth_personal_access_clients_table', 1),
(8, '2019_08_19_000000_create_failed_jobs_table', 1),
(9, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(10, '2023_05_05_120003_create_travels_table', 1),
(11, '2023_05_05_120024_create_reviews_table', 1),
(12, '2023_05_05_120043_create_user_travels_table', 1);

-- --------------------------------------------------------

--
-- Structure de la table `oauth_access_tokens`
--

CREATE TABLE `oauth_access_tokens` (
  `id` varchar(100) NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `client_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `scopes` text DEFAULT NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `oauth_access_tokens`
--

INSERT INTO `oauth_access_tokens` (`id`, `user_id`, `client_id`, `name`, `scopes`, `revoked`, `created_at`, `updated_at`, `expires_at`) VALUES
('070931e277496bc25280b9cc989587be0b987e90e7396f81f62e084a84f7c0067c99e7043eecc55e', 4, 1, 'eji$#%@c@dw5#', '[]', 0, '2023-09-01 15:12:41', '2023-09-01 15:12:41', '2024-09-01 16:12:41'),
('07dd3b9a19faa609531e5c1f433fb4484d3106b7f645f72e8c84a702f580ea17efe8066b1709bc03', 3, 1, 'eji$#%@c@dw5#', '[]', 0, '2023-08-28 22:15:45', '2023-08-28 22:15:45', '2024-08-28 23:15:45'),
('0e6fb80c3a2f1445780c3618cd40a2d719455b3ce690b60d8d426309ec3055a4bc30f22a5cdac6da', 1, 1, 'eji$#%@c@dw5#', '[]', 0, '2023-07-26 19:51:58', '2023-07-26 19:51:58', '2024-07-26 20:51:58'),
('12bb11c1b6f24fbcdb7929d4f5ece25039a9f6100e8bfe5b3d7c05be97a96e3b16674ba58d9bea96', 3, 1, 'eji$#%@c@dw5#', '[]', 0, '2023-08-30 21:15:59', '2023-08-30 21:16:00', '2024-08-30 22:15:59'),
('158bfcb0e1125288ea22f99ddc87a8a987062160d67209bc94955c5f589a50d783ed9d6d7ccb24d8', 1, 1, 'eji$#%@c@dw5#', '[]', 0, '2023-08-24 23:55:58', '2023-08-24 23:55:58', '2024-08-25 00:55:58'),
('18a6841b9d3fdcd3c5ed64ac38e34d5ebd81e058cc6dc3d574e39c3e5999749f5e423f6271a9b366', 1, 1, 'eji$#%@c@dw5#', '[]', 0, '2023-07-23 10:40:50', '2023-07-23 10:40:50', '2024-07-23 11:40:50'),
('1a89bf0988a26965c777f3302677e3ffe9e70a5a346710983be11a801a8202533292101641962411', 4, 1, 'eji$#%@c@dw5#', '[]', 0, '2023-09-15 07:49:36', '2023-09-15 07:49:37', '2024-09-15 08:49:36'),
('1b7ab22a46450c3239091f737c1c750fae98aa0f69ea8ae98f252f255898050cb6aee67bc59505e4', 4, 1, 'eji$#%@c@dw5#', '[]', 0, '2023-08-24 23:54:43', '2023-08-24 23:54:43', '2024-08-25 00:54:43'),
('1c69456e642caf9f195257564046611251297e6cf0c3f4a0da1b28319b26b16be6617faba193a0bb', 3, 1, 'eji$#%@c@dw5#', '[]', 0, '2023-08-23 23:05:00', '2023-08-23 23:05:00', '2024-08-24 00:05:00'),
('222889d7fbe7325f76493fd7156b85162c992aefcc49f075c7e3355b7d1c1d3d41b7d8567c8fb75c', 1, 1, 'eji$#%@c@dw5#', '[]', 0, '2023-08-23 23:04:08', '2023-08-23 23:04:08', '2024-08-24 00:04:08'),
('2bcefb3f0cbff31ee68f95b5c0c478d94342cad528bda585caaa35e70fb01201a172543ea2367956', 1, 1, 'eji$#%@c@dw5#', '[]', 0, '2023-07-23 12:04:03', '2023-07-23 12:04:03', '2024-07-23 13:04:03'),
('38e901fe4908f2b7b2683e33e2f68e3299bedba4df1ce0896e0a724d315190379c08f97089dd9312', 1, 1, 'eji$#%@c@dw5#', '[]', 0, '2023-08-25 00:02:30', '2023-08-25 00:02:30', '2024-08-25 01:02:30'),
('3f34c2566a4b41283aae16aae104e3ca7f635943295897974d390331e3f5f733cdc6938467bdb9a9', 1, 1, 'eji$#%@c@dw5#', '[]', 0, '2023-08-24 23:10:08', '2023-08-24 23:10:08', '2024-08-25 00:10:08'),
('4399d9a15e6738c4396df8a2316fe4d126b873b8bdcbbc68ca7c5a33b432c3a6c663415e67858539', 2, 1, 'eji$#%@c@dw5#', '[]', 0, '2023-07-23 12:02:01', '2023-07-23 12:02:01', '2024-07-23 13:02:01'),
('448a382057cadc7f8366d0782ee2ce7d72ff3df17a8d8c34dfd64e4b6857061f5a26b9f6276064fa', 4, 1, 'eji$#%@c@dw5#', '[]', 0, '2023-09-08 17:07:50', '2023-09-08 17:07:50', '2024-09-08 18:07:50'),
('44a6c29374874429bbee422c07c41ad669a5772ba9bf7b27fc451f0a8ea6aba95ffb21cc7c7ae41a', 1, 1, 'eji$#%@c@dw5#', '[]', 0, '2023-08-06 00:54:45', '2023-08-06 00:54:45', '2024-08-06 01:54:45'),
('45381b479b2f7307dc24008336186eca25c50ec2ae8ff3bfd43f1a78087656d82ba751aae940648e', 1, 1, 'eji$#%@c@dw5#', '[]', 0, '2023-07-23 11:51:33', '2023-07-23 11:51:33', '2024-07-23 12:51:33'),
('550a1cbd99fb65cc41a2733d279e8241c255830d8a925512df10115d4b44c4f4863c216f916aaadb', 1, 1, 'eji$#%@c@dw5#', '[]', 0, '2023-07-23 12:07:55', '2023-07-23 12:07:55', '2024-07-23 13:07:55'),
('563cf99a9dcd17dd291e053a1c9a0f21a24d7dfb22825f0529a386dda6747df5ed37e57f0a72824a', 1, 1, 'eji$#%@c@dw5#', '[]', 0, '2023-08-06 00:40:46', '2023-08-06 00:40:46', '2024-08-06 01:40:46'),
('57cff9ad9edfa2994f9dc4ad554579e39a58693609505ae51dbeee1d554e7c3804756dad21a98f72', 1, 1, 'eji$#%@c@dw5#', '[]', 0, '2023-09-08 17:15:47', '2023-09-08 17:15:47', '2024-09-08 18:15:47'),
('5ac1846ce49299c822cf33808bfb61047fd57028fb622afa66bd155105423cefb627a9ddadf796bd', 1, 1, 'eji$#%@c@dw5#', '[]', 0, '2023-08-06 00:56:33', '2023-08-06 00:56:33', '2024-08-06 01:56:33'),
('5b3bbc5e7348f902d9bd9521a1aacc0401ef39a2b3b2d8aed5af82e27792353de5811355c93b7370', 1, 1, 'eji$#%@c@dw5#', '[]', 0, '2023-08-03 22:03:59', '2023-08-03 22:03:59', '2024-08-03 23:03:59'),
('6300d7d16ee98d13e63a126efde9faef88eff8b2095ebe4d5654a130ba0a091b0972700773909845', 1, 1, 'eji$#%@c@dw5#', '[]', 0, '2023-07-23 12:04:41', '2023-07-23 12:04:41', '2024-07-23 13:04:41'),
('646188e2c9a58756c274db81c6f58b09253232dec69da79d3c85891df3a8b740cb0efa2d7367b171', 1, 1, 'eji$#%@c@dw5#', '[]', 0, '2023-09-08 17:08:50', '2023-09-08 17:08:50', '2024-09-08 18:08:50'),
('652b270b72a5d39513ed6af7a83bbcabe3eca1c193acb8f0c98bbc60421a1e939914b20d21dcfcff', 4, 1, 'eji$#%@c@dw5#', '[]', 0, '2023-09-08 17:01:55', '2023-09-08 17:01:55', '2024-09-08 18:01:55'),
('743db493480c91737e7dbb8bb40b3c73a5390b64652804f65c6d39dcb4adfa1155292b05c78ed003', 3, 1, 'eji$#%@c@dw5#', '[]', 0, '2023-08-06 00:53:43', '2023-08-06 00:53:43', '2024-08-06 01:53:43'),
('79542aae7fe736f7f96ee01ac98fd38b88421299f7798a8033f415af8fb368816e830769521c103d', 1, 1, 'eji$#%@c@dw5#', '[]', 0, '2023-07-26 19:53:17', '2023-07-26 19:53:17', '2024-07-26 20:53:17'),
('7a9b0a0d39b513441557ad10b19e9f4e0a6dd4a5e215120e1612d3bc4b301e5e8434314b9e575548', 3, 1, 'eji$#%@c@dw5#', '[]', 0, '2023-08-06 00:55:50', '2023-08-06 00:55:50', '2024-08-06 01:55:50'),
('809025ee1cc966982fed4fb2019aac64cd777fa4bd0edd4aba32d8fdd8143939326642aa64eb66be', 1, 1, 'eji$#%@c@dw5#', '[]', 0, '2023-07-26 19:57:29', '2023-07-26 19:57:29', '2024-07-26 20:57:29'),
('946ae2e3c409144d2dd41618af4dc7a835d7fc5f8b3d19bcb429ffee3c6be1b41a14132f52bfe3f3', 3, 1, 'eji$#%@c@dw5#', '[]', 0, '2023-08-28 23:15:33', '2023-08-28 23:15:33', '2024-08-29 00:15:33'),
('950ca9a6a9006bf7f3f63fb00cf671240f91713e9a6c322a031048b182c63e808741751923780a2c', 1, 1, 'eji$#%@c@dw5#', '[]', 0, '2023-08-24 22:35:22', '2023-08-24 22:35:22', '2024-08-24 23:35:22'),
('a2cb99361eb7ece1296f209b82b5a9d9a84da10ec7c809ef55569124532ac7ddd8c4be72c9da926d', 4, 1, 'eji$#%@c@dw5#', '[]', 0, '2023-09-08 17:11:27', '2023-09-08 17:11:27', '2024-09-08 18:11:27'),
('a4e921a4c1b5f03a9f9aa4e4c16a38e270f21fd35ea31ab08cb1cc39845fac7ab8691f10b750e437', 1, 1, 'eji$#%@c@dw5#', '[]', 0, '2023-08-30 21:31:45', '2023-08-30 21:31:45', '2024-08-30 22:31:45'),
('a6b3db5945ce7d5862cace2ea46db6d9c8a2ace7446c4f380b7a56082ad6dcf91d60ec5486fecb1a', 1, 1, 'eji$#%@c@dw5#', '[]', 0, '2023-08-24 22:33:22', '2023-08-24 22:33:22', '2024-08-24 23:33:22'),
('aa2660b4f935cca08694be70c816f4708f0e39a1712ba3aab8e086fcfa4fa08ef05250cdfa8ba6d2', 1, 1, 'eji$#%@c@dw5#', '[]', 0, '2023-08-24 22:33:17', '2023-08-24 22:33:17', '2024-08-24 23:33:17'),
('aa3075df88d122995fd7105fd55587450cd4a805c01371c83504cf64c298a46f22745344a146cd6b', 3, 1, 'eji$#%@c@dw5#', '[]', 0, '2023-08-28 22:00:34', '2023-08-28 22:00:34', '2024-08-28 23:00:34'),
('ac567e126b1bb7f208937e33cb668f5b8ea35ad903992076ea2c14e15d5f52acbcd7d2a8f7536ced', 3, 1, 'eji$#%@c@dw5#', '[]', 0, '2023-08-28 22:16:07', '2023-08-28 22:16:07', '2024-08-28 23:16:07'),
('b1718dd2b4123a36b6f4b5f13f27905dd7b394b47c4c203fe4314fd4a611c940e776909c301ba0f6', 1, 1, 'eji$#%@c@dw5#', '[]', 0, '2023-08-31 15:32:35', '2023-08-31 15:32:35', '2024-08-31 16:32:35'),
('b19c3620453e74e4e8874466400ca4a7f8c09bb464932567af826bd4c8ac6cdbe9f4e9063c064931', 1, 1, 'eji$#%@c@dw5#', '[]', 0, '2023-09-15 08:14:53', '2023-09-15 08:14:53', '2024-09-15 09:14:53'),
('b4c123802891a54919b58b25956b332dc922ee37d4ede1c1f47038b77c67b9c59617cf514d23398b', 4, 1, 'eji$#%@c@dw5#', '[]', 0, '2023-08-31 15:32:07', '2023-08-31 15:32:07', '2024-08-31 16:32:07'),
('bafef159249762f323b81e2aea6909fee8ad3e8b83caf4347f86f23a49bd7bf6366c500cad7b2076', 4, 1, 'eji$#%@c@dw5#', '[]', 0, '2023-09-08 17:11:30', '2023-09-08 17:11:30', '2024-09-08 18:11:30'),
('bc265743ab7c85a921d20b7a547326769175cddf7e0fa44687ffc0d6b385a1db4cae0f460d24843e', 1, 1, 'eji$#%@c@dw5#', '[]', 0, '2023-09-15 10:21:31', '2023-09-15 10:21:31', '2024-09-15 11:21:31'),
('bd110232bdafaa37c9b486726e74d38c5d55b78dd943da9adf6be95bac8a36892d9cb69db793f522', 1, 1, 'eji$#%@c@dw5#', '[]', 0, '2023-08-28 22:16:34', '2023-08-28 22:16:34', '2024-08-28 23:16:34'),
('bdba1c4a5f50795abe820548bd02b6a52380c9308a2457b9ea5f51d669b15eefacd7a0e53f9a63b6', 5, 1, 'eji$#%@c@dw5#', '[]', 0, '2024-09-10 18:11:54', '2024-09-10 18:11:54', '2025-09-10 19:11:54'),
('c1dda5948934aaf779c13566e1f53a5184e022369638ad9f0267b6ee66578c4546d2892e8650414d', 1, 1, 'eji$#%@c@dw5#', '[]', 0, '2023-07-23 10:34:55', '2023-07-23 10:34:55', '2024-07-23 11:34:55'),
('c68eaf99a1f07bdb27c4831d19ac6b29a5d049cb8164ce2a62f94f44458b38053f9b2bf17d0afac5', 1, 1, 'eji$#%@c@dw5#', '[]', 0, '2023-08-30 21:36:03', '2023-08-30 21:36:04', '2024-08-30 22:36:03'),
('c6b550f730fe9d24bbd7bb8467a1a2311ef6ec9548bc498733843b57785db7f7237b9b980cf64494', 1, 1, 'eji$#%@c@dw5#', '[]', 0, '2023-08-28 23:10:48', '2023-08-28 23:10:48', '2024-08-29 00:10:48'),
('d57607f3a4e00c763d8ac79eeb0b66c63f1e3f9bb870cf617f91f6cd89edf8d58adeeb19e4118fdf', 3, 1, 'eji$#%@c@dw5#', '[]', 0, '2023-08-31 15:27:05', '2023-08-31 15:27:06', '2024-08-31 16:27:05'),
('d81a0908716222a966cd8c3dbd0b95fcecdb9ad3caa2eec6bd8484fdfd12dd00bf3aacd30cd38027', 3, 1, 'eji$#%@c@dw5#', '[]', 0, '2023-08-28 23:07:58', '2023-08-28 23:07:58', '2024-08-29 00:07:58'),
('da34ff25806810e72df91c6160f5794eaf2807580570e2c4c17f572d244c5d7428b47bbcecec7d29', 1, 1, 'eji$#%@c@dw5#', '[]', 0, '2023-07-23 10:43:25', '2023-07-23 10:43:25', '2024-07-23 11:43:25'),
('df9429a6bd483b3fd9e2f6ab807de5c8700408443477e6fecda23eb3cfabac59f38cc87694ad4097', 1, 1, 'eji$#%@c@dw5#', '[]', 0, '2023-07-23 10:37:56', '2023-07-23 10:37:56', '2024-07-23 11:37:56'),
('e012c4051053f64e0c3143e2aa8cdf39f2d5f8b91cc298b7b4e7120ecc9ebd35c3001ac1c24660c7', 4, 1, 'eji$#%@c@dw5#', '[]', 0, '2023-09-02 16:23:06', '2023-09-02 16:23:06', '2024-09-02 17:23:06'),
('e4bd98399a02ed3a323bb089fe3306ad24c8b5fea01bff470d4017afff522ff42bd57ec66ff6f557', 3, 1, 'eji$#%@c@dw5#', '[]', 0, '2023-07-26 21:41:45', '2023-07-26 21:41:46', '2024-07-26 22:41:45'),
('e7360bf2c8011f6d3f17457e4535e90c6a9431f8103be8201fc8e2ce7cbcd61f88fca95b0449da67', 1, 1, 'eji$#%@c@dw5#', '[]', 0, '2023-09-15 08:14:54', '2023-09-15 08:14:54', '2024-09-15 09:14:54'),
('e7c862d10e96f7126dc6202bdc47c6a0dd4b3b59d3de1ee5b020ebece28faa268e74a2cd564e5d1b', 1, 1, 'eji$#%@c@dw5#', '[]', 0, '2023-08-28 23:14:14', '2023-08-28 23:14:14', '2024-08-29 00:14:14'),
('ec58f26e6212aa7556be9308f70622f762ac9788938be1edc8e8706efc19be4fd770531bd63a01ed', 1, 1, 'eji$#%@c@dw5#', '[]', 0, '2023-08-25 00:03:17', '2023-08-25 00:03:17', '2024-08-25 01:03:17'),
('ec67c53923eb65ffa21bdcd6f006693b1957eb12ad074cb28f533dc97357dea740f8f45af5d8bd29', 1, 1, 'eji$#%@c@dw5#', '[]', 0, '2023-07-26 19:51:51', '2023-07-26 19:51:52', '2024-07-26 20:51:51'),
('ed5e56514f025fcaec1dc4e5cb282101567b2ff0a805adf3057a1953251fdd342d15d8b839ae8db1', 1, 1, 'eji$#%@c@dw5#', '[]', 0, '2023-08-23 23:04:04', '2023-08-23 23:04:05', '2024-08-24 00:04:04'),
('eddb153abc095926d2309e82cd48cd7f373275883f2dba11bb709100455f3d42ecd53f8f550efdaf', 1, 1, 'eji$#%@c@dw5#', '[]', 0, '2023-09-01 15:13:04', '2023-09-01 15:13:04', '2024-09-01 16:13:04'),
('f041eb525c18332b3ffba8e566d74d1b0970a3218673f321f2f12f02963e58eacbf6efb226f024b5', 4, 1, 'eji$#%@c@dw5#', '[]', 0, '2023-09-02 16:22:18', '2023-09-02 16:22:19', '2024-09-02 17:22:18'),
('f0abca63834bd7785c141b5170aa366df4f66d587101f17ee34898414391431674ab102944099a45', 1, 1, 'eji$#%@c@dw5#', '[]', 0, '2023-07-23 11:42:31', '2023-07-23 11:42:31', '2024-07-23 12:42:31'),
('f45e879219b76d940f9515a8624d4c36e9b11981f10aa957b4ecd71a55424e4c52b24e0732426591', 3, 1, 'eji$#%@c@dw5#', '[]', 0, '2023-08-30 21:37:33', '2023-08-30 21:37:33', '2024-08-30 22:37:33'),
('f7e3261b6f0689a5185a41c19eddc50eb1aeb02535f1540132101da27867b06938496c728a059ebe', 4, 1, 'eji$#%@c@dw5#', '[]', 0, '2023-09-15 10:53:06', '2023-09-15 10:53:06', '2024-09-15 11:53:06'),
('f878352b5dd70b70df4e1a559e32bf57a7406d82af7fa57a29cff6dc45f11a3d2fa292b05f3047a3', 1, 1, 'eji$#%@c@dw5#', '[]', 0, '2023-08-24 22:37:20', '2023-08-24 22:37:20', '2024-08-24 23:37:20'),
('fd61906fba1d28510f0f71f109e631edf4f8612a5417dd5ac25cd6cc3a5e08ef85f9a9a9531f20bc', 3, 1, 'eji$#%@c@dw5#', '[]', 0, '2023-08-30 21:17:20', '2023-08-30 21:17:20', '2024-08-30 22:17:20'),
('fd9126045769a66873b58fbd43b02d00c542cb7a957568753a7b9b23855b22d78c58db562669e5a4', 4, 1, 'eji$#%@c@dw5#', '[]', 0, '2023-09-01 15:30:58', '2023-09-01 15:30:58', '2024-09-01 16:30:58'),
('ff6b0b0dd83411961cb03b2b0832af5d96f8eae6114f88b36bdbc4b7af3c9646dfda6cdc61f60fc6', 1, 1, 'eji$#%@c@dw5#', '[]', 0, '2023-08-31 15:27:54', '2023-08-31 15:27:54', '2024-08-31 16:27:54');

-- --------------------------------------------------------

--
-- Structure de la table `oauth_auth_codes`
--

CREATE TABLE `oauth_auth_codes` (
  `id` varchar(100) NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `client_id` bigint(20) UNSIGNED NOT NULL,
  `scopes` text DEFAULT NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `oauth_clients`
--

CREATE TABLE `oauth_clients` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `secret` varchar(100) DEFAULT NULL,
  `provider` varchar(255) DEFAULT NULL,
  `redirect` text NOT NULL,
  `personal_access_client` tinyint(1) NOT NULL,
  `password_client` tinyint(1) NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `oauth_clients`
--

INSERT INTO `oauth_clients` (`id`, `user_id`, `name`, `secret`, `provider`, `redirect`, `personal_access_client`, `password_client`, `revoked`, `created_at`, `updated_at`) VALUES
(1, NULL, 'oussama', 'HtIHcXqnBc3eBKt9WvLDKXdKZT9UFOgWaHE7pTnG', NULL, 'http://localhost', 1, 0, 0, '2023-07-23 10:34:48', '2023-07-23 10:34:48');

-- --------------------------------------------------------

--
-- Structure de la table `oauth_personal_access_clients`
--

CREATE TABLE `oauth_personal_access_clients` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `client_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `oauth_personal_access_clients`
--

INSERT INTO `oauth_personal_access_clients` (`id`, `client_id`, `created_at`, `updated_at`) VALUES
(1, 1, '2023-07-23 10:34:48', '2023-07-23 10:34:48');

-- --------------------------------------------------------

--
-- Structure de la table `oauth_refresh_tokens`
--

CREATE TABLE `oauth_refresh_tokens` (
  `id` varchar(100) NOT NULL,
  `access_token_id` varchar(100) NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `reviews`
--

CREATE TABLE `reviews` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `comment` varchar(255) NOT NULL,
  `stars` varchar(255) NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `travel_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `reviews`
--

INSERT INTO `reviews` (`id`, `comment`, `stars`, `user_id`, `travel_id`, `created_at`, `updated_at`) VALUES
(1, 'good travel', '5', 3, 1, '2023-08-28 23:16:50', '2023-08-28 23:16:50');

-- --------------------------------------------------------

--
-- Structure de la table `travels`
--

CREATE TABLE `travels` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `destination` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `description` longtext NOT NULL,
  `start_date` date NOT NULL,
  `end_date` date NOT NULL,
  `ticket_price` double(8,2) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `travels`
--

INSERT INTO `travels` (`id`, `destination`, `image`, `description`, `start_date`, `end_date`, `ticket_price`, `created_at`, `updated_at`) VALUES
(1, 'Marrakech', 'travel/image/Xw6p4j8oj8hgJHFoBq902gOl4s3EH8Gkjz1Dz4Zk.jpg', 'Trésors Culturels et Architecturaux, L\'Extravagance des Jardins et la Sérénité des Oasis, Excursion à la Vallée de l\'Ourika', '2023-07-21', '2023-07-23', 750.00, '2023-07-23 10:39:20', '2023-08-24 22:38:01'),
(2, 'Essaouira', 'travel/image/ISvqGFwnRDx6fCwHLzLKttQmKMQSWFWL4CTR89AZ.jpg', 'Découverte de la Médina d\'Essaouira, Journée à la Plage et Détente, Coucher de soleil, Excursion en Bateau vers l\'île de Mogador, Expérience d\'équitation', '2023-07-23', '2023-07-30', 600.00, '2023-07-23 10:40:02', '2023-08-24 22:47:43');

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `cin` varchar(255) NOT NULL,
  `phone` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `type` enum('admin','client') NOT NULL DEFAULT 'client',
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `name`, `image`, `cin`, `phone`, `email`, `type`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'oussama moufta', 'profile/image/JiZGMGOysWfPYSFmSq1WrRiOoKtsHoPTDOFSHnVh.jpg', 'BH618186', 677227367, 'oussamamoufta2@gmail.com', 'admin', NULL, '$2y$10$w2ECOpLfketpmPuGyXbFrumDWmfY1C43wMHWk4/xbf/UoJMx.46jq', NULL, '2023-07-23 10:34:17', '2023-07-23 10:34:17'),
(3, 'romeo', 'profile/image/e917jjjjMIwDaWbdY6jWB1Wv8XD6TgjJAgUcKWlj.jpg', 'AY1234', 648519225, 'ayasd@gmail.com', 'client', NULL, '$2y$10$ApdavEI1E/fQae0Uop7yB.BgycPSAvCm6mmM0N4kbRHTF.Vy16Ny6', NULL, '2023-07-26 21:41:20', '2023-08-31 15:31:29'),
(4, 'Tomas', 'profile/image/sS9wICDxwN34VNkMwbcMMdLKfwUlT1CXO52u5cG6.jpg', 'TM1283', 38492092, 'tomas.aderson@gmail.com', 'client', NULL, '$2y$10$4PhvUkiuHLjrwpV6fbJ2..0vs52kQ3q6HU/08XU5.oiM0Km0RyeT2', NULL, '2023-08-24 23:54:27', '2023-08-24 23:56:40'),
(5, 'test', 'profile/image/T7ez3PK9oUcNmkGnnFLPGFs7uYEcLNuUC33FnjlJ.png', 'sdvfd567', 654433221, 'test@gmail.com', 'client', NULL, '$2y$10$bPlH1o6o4d9Ep9fkiwLnouLnWsyPEZ94QJqJzZmUxgjyb8zfXdr8S', NULL, '2024-09-10 18:11:33', '2024-09-10 18:11:33');

-- --------------------------------------------------------

--
-- Structure de la table `user_travels`
--

CREATE TABLE `user_travels` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `travel_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `user_travels`
--

INSERT INTO `user_travels` (`id`, `user_id`, `travel_id`, `created_at`, `updated_at`) VALUES
(2, 1, 1, '2023-07-23 10:44:39', '2023-07-23 10:44:39'),
(3, 1, 2, '2023-07-23 11:51:52', '2023-07-23 11:51:52'),
(7, 3, 1, '2023-08-28 23:16:12', '2023-08-28 23:16:12'),
(8, 4, 2, '2023-09-08 17:08:14', '2023-09-08 17:08:14');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Index pour la table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `oauth_access_tokens`
--
ALTER TABLE `oauth_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_access_tokens_user_id_index` (`user_id`);

--
-- Index pour la table `oauth_auth_codes`
--
ALTER TABLE `oauth_auth_codes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_auth_codes_user_id_index` (`user_id`);

--
-- Index pour la table `oauth_clients`
--
ALTER TABLE `oauth_clients`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_clients_user_id_index` (`user_id`);

--
-- Index pour la table `oauth_personal_access_clients`
--
ALTER TABLE `oauth_personal_access_clients`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `oauth_refresh_tokens`
--
ALTER TABLE `oauth_refresh_tokens`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_refresh_tokens_access_token_id_index` (`access_token_id`);

--
-- Index pour la table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Index pour la table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Index pour la table `reviews`
--
ALTER TABLE `reviews`
  ADD PRIMARY KEY (`id`),
  ADD KEY `reviews_user_id_foreign` (`user_id`),
  ADD KEY `reviews_travel_id_foreign` (`travel_id`);

--
-- Index pour la table `travels`
--
ALTER TABLE `travels`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_phone_unique` (`phone`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- Index pour la table `user_travels`
--
ALTER TABLE `user_travels`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_travels_user_id_foreign` (`user_id`),
  ADD KEY `user_travels_travel_id_foreign` (`travel_id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT pour la table `oauth_clients`
--
ALTER TABLE `oauth_clients`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `oauth_personal_access_clients`
--
ALTER TABLE `oauth_personal_access_clients`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `reviews`
--
ALTER TABLE `reviews`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `travels`
--
ALTER TABLE `travels`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT pour la table `user_travels`
--
ALTER TABLE `user_travels`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `reviews`
--
ALTER TABLE `reviews`
  ADD CONSTRAINT `reviews_travel_id_foreign` FOREIGN KEY (`travel_id`) REFERENCES `travels` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `reviews_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Contraintes pour la table `user_travels`
--
ALTER TABLE `user_travels`
  ADD CONSTRAINT `user_travels_travel_id_foreign` FOREIGN KEY (`travel_id`) REFERENCES `travels` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `user_travels_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
