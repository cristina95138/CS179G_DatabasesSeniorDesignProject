DROP TABLE IF EXISTS User CASCADE;--OK
DROP TABLE IF EXISTS Channel CASCADE;--OK
DROP TABLE IF EXISTS Subscriber CASCADE;--OK
DROP TABLE IF EXISTS Video CASCADE;--OK
DROP TABLE IF EXISTS // CASCADE;--OK
DROP TABLE IF EXISTS // CASCADE;--OK

-------------
---DOMAINS---
-------------

CREATE DOMAIN us_postal_code AS TEXT CHECK(VALUE ~ '^\d{5}$' OR VALUE ~ '^\d{5}-\d{4}$');
CREATE DOMAIN _STATUS CHAR(1) CHECK (value IN ( 'W' , 'C', 'R' ) );
CREATE DOMAIN _GENDER CHAR(1) CHECK (value IN ( 'F' , 'M' ) );
CREATE DOMAIN _CODE CHAR(2) CHECK (value IN ( 'MJ' , 'MN', 'SV' ) ); --Major, Minimum, Service
CREATE DOMAIN _PINTEGER AS int4 CHECK(VALUE > 0);
CREATE DOMAIN _PZEROINTEGER AS int4 CHECK(VALUE >= 0);
CREATE DOMAIN _YEARS AS int4 CHECK(VALUE >= 0 AND VALUE < 100);
CREATE DOMAIN _YEAR AS int4 CHECK(VALUE >= 1970);

------------
---TABLES---
------------

CREATE TABLE User
(
    userid INTEGER NOT NULL,
    PRIMARY KEY (userid)
);

CREATE TABLE Channel
(
    channelid INTEGER NOT NULL,
    description CHAR(256) NOT NULL,
    PRIMARY KEY (channelid)
);

CREATE TABLE Subscriber
(
    userid INTEGER NOT NULL,
    subid INTEGER NOT NULL,
    PRIMARY KEY (userid)
);

CREATE TABLE Video
(
    likes INTEGER NOT NULL,
    dislikes INTEGER NOT NULL,
    title CHAR(64) NOT NULL,
    description CHAR(256) NOT NULL,
    views INTEGER NOT NULL,
    shares INTEGER NOT NULL,
    duration INTEGER NOT NULL,
    channelid INTEGER NOT NULL,
    tags CHAR(256) NOT NULL,
    videoid INTEGER NOT NULL
    PRIMARY KEY (channelid)
);

---------------
---RELATIONS---
---------------

CREATE TABLE Owns
(

);

CREATE TABLE Subscribed
(

);

CREATE TABLE Uploaded
(

);

----------------------------
-- INSERT DATA STATEMENTS --
----------------------------

COPY User (

)
FROM 'user.csv'
WITH DELIMITER ',';

COPY Channel (

)
FROM 'user.csv'
WITH DELIMITER ',';

COPY Subscriber (

)
FROM 'user.csv'
WITH DELIMITER ',';

COPY Video (

)
FROM 'user.csv'
WITH DELIMITER ',';