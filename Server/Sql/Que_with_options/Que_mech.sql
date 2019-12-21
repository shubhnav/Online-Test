CREATE TABLE Que_mech(
    qid INT   NOT NULL,
    que varchar(50) NOT NULL,
    op1 varchar(50) NOT NULL,
    op2 varchar(50) NOT NULL,
    op3 varchar(50) NOT NULL,
    op4 varchar(50) NOT NULL,
    PRIMARY KEY(qid)
);
 INSERT INTO Que_mech (1,'Which of the following is not used as a refrigerant ?','ammonia',
'sulphur dioxide','carbon monoxide','carbon dioxide');
INSERT INTO Que_mech (2,'Upsetting is the term used in one of the following operations','turning',
'forging','casting','drilling');
INSERT INTO Que_mech (3,'Reducing flame is obtained in oxyactetylane welding with','reduced acetylene',
'excess oxygen','equal parts of both gases','excess of acetylene');

cREATE TABLE Ans_mech(
    qid INT NOT NULL,
    correct_ans varchar(50) NOT NULL,
    FOREIGN KEY (qid)
    REFERENCES Que_mech(qid) 
);
INSERT INTO Que_mech (1,'c');
INSERT INTO Que_mech (2,'b');
INSERT INTO Que_mech (3,'d');

-- study http request post*, get, option, put, delete must with documentation
--  study react js documentation
-- all page flow starting with login work
-- node js documentation future work related
-- database 
-- study fetch request in react js 
