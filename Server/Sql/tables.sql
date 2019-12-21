CREATE DATABASE IF NOT EXISTS Exam;
USE Exam;
CREATE TABLE IF NOT EXISTS
Users(
  Id INT(6) UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  Username VARCHAR(15) NOT NULL,
  Password VARCHAR(10) NOT NULL
);

INSERT INTO Users VALUES(1,"Savita",HASHBYTES('Admin@123'));
INSERT INTO Users VALUES(1,"Shilpi",HASHBYTES('Shilpi123@'));

-- question qid 4 option
-- qid ansid
-- userid testid score
CREATE TABLE 
IF NOT EXISTS
Question(
    Qid INT(1) NOT NULL,  
    Que varchar(50) NOT NULL,
    Op1 varchar(50) NOT NULL,
    Op2 varchar(50) NOT NULL,
    Op3 varchar(50) NOT NULL,
    Op4 varchar(50) NOT NULL,
    PRIMARY KEY(Qid)
    );
    INSERT INTO Question VALUES (1,'What is full form of AI','Architectural Intelligent',
    'Artifical Intelligent','Artifical integral','Artifical intellectual');
    INSERT INTO Question VALUES(2,'What is full form of RAM','Random Access Memory','Read only memory',
    'Read Address memory','Read only memory');
    INSERT INTO Question VALUES(3,'Related fields in a database are grouped to form a','.Data file','Data record',
    'Menu','Bank');
    INSERT INTO Question VALUES (4,'Which is not used as a refrigerant ?','ammonia',
    'sulphur dioxide','carbon monoxide','carbon dioxide');
    INSERT INTO Question VALUES (5,'Upsetting is the term used in','turning',
    'forging','casting','drilling');

CREATE TABLE IF NOT EXISTS 
Branch( 
  Bid  INT (3) NOT NULL ,
  Qid  INT (1) NOT NULL,
  Branch varchar(10) NOT NULL,
  PRIMARY KEY(Bid),
  FOREIGN KEY (Qid)
  REFERENCES Question(Qid)
);

INSERT INTO Branch VALUES (101,1,'CS');
INSERT INTO Branch VALUES (102,2,'CS');
INSERT INTO Branch VALUES (103,3,'CS');
INSERT INTO Branch VALUES (104,4,'ME');
INSERT INTO Branch VALUES (105,5,'ME');


CREATE TABLE answer(
    qid INT NOT NULL,
    correct_ans varchar(50) NOT NULL,
    FOREIGN KEY (qid)
    REFERENCES Question(qid) 
);
INSERT INTO answer VALUES(1,'b');
INSERT INTO answer VALUES(2,'a');
INSERT INTO answer VALUES(3,'b');
INSERT INTO answer VALUES(4,'c');
INSERT INTO answer VALUES(5,'b');

