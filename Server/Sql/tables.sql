CREATE DATABASE IF NOT EXISTS Exam;
USE Exam;
CREATE TABLE IF NOT EXISTS
Users(
  Id INT(6) UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  Username VARCHAR(15) NOT NULL,
  Password VARCHAR(10) NOT NULL
);

INSERT INTO Users VALUES(1,"Admin",'Admin@123');

CREATE TABLE IF NOT EXISTS
Branch(
  BranchId  INT (3) NOT NULL ,
  BranchName varchar(30) NOT NULL,
  PRIMARY KEY(BranchId)
);

INSERT INTO Branch VALUES (101,'Computer Science');
INSERT INTO Branch VALUES (102,'Mechanical ');
INSERT INTO Branch VALUES (103,'Electrical');
INSERT INTO Branch VALUES (104,'Chemical');
INSERT INTO Branch VALUES (105,'Civil');

CREATE TABLE
IF NOT EXISTS
Question(
    Qid INT(1) NOT NULL,
    Que varchar(50) NOT NULL,
    Op1 varchar(50) NOT NULL,
    Op2 varchar(50) NOT NULL,
    Op3 varchar(50) NOT NULL,
    Op4 varchar(50) NOT NULL,
    BranchId INT(3) NOT NULL,
    PRIMARY KEY(Qid),
    CONSTRAINT fk_que_branch FOREIGN KEY
    (BranchId)
    REFERENCES
    Branch(BranchId)
);
INSERT INTO Question VALUES (1,'What is full form of AI','Architectural Intelligent',
'Artifical Intelligent','Artifical integral','Artifical intellectual',101);
INSERT INTO Question VALUES(2,'What is full form of RAM','Random Access Memory','Read only memory',
'Read Address memory','Read only memory',102);
INSERT INTO Question VALUES(3,'Related fields in a database are grouped to form a','.Data file','Data record',
'Menu','Bank',103);
INSERT INTO Question VALUES (4,'Which is not used as a refrigerant ?','ammonia',
'sulphur dioxide','carbon monoxide','carbon dioxide',104);
INSERT INTO Question VALUES (5,'Upsetting is the term used in','turning',
'forging','casting','drilling',105);

CREATE TABLE Answer(
    Qid INT(1) NOT NULL,
    correct_ans varchar(50) NOT NULL,
    FOREIGN KEY (Qid)
    REFERENCES Question(Qid)
);
INSERT INTO answer VALUES(1,'b');
INSERT INTO answer VALUES(2,'a');
INSERT INTO answer VALUES(3,'b');
INSERT INTO answer VALUES(4,'c');
INSERT INTO answer VALUES(5,'b');
