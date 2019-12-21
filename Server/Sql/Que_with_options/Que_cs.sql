CREATE TABLE 
IF NOT EXISTS
Question(
    Qid INT(1) NOT NULL,  
    Que varchar(50) NOT NULL,
    Op1 varchar(50) NOT NULL,
    Op2 varchar(50) NOT NULL,
    Op3 varchar(50) NOT NULL,
    Op4 varchar(50) NOT NULL,
    PRIMARY KEY(qid)
);

-- table subject subid
INSERT INTO Question VALUES (1,'What is full form of AI','Architectural Intelligent',
'Artifical Intelligent','Artifical integral','Artifical intellectual');
INSERT INTO Question VALUES (2,'In tuple relational calculus P1 → P2 is equivalent to','¬ P1  ∨ P2','P1 ∨ P2',
'P1 ∨ P2','P1  ∧ ¬P2');
INSERT INTO Question VALUES (3,'Related fields in a database are grouped to form a','.Data file','Data record',
'Menu','Bank');

CREATE TABLE  Answer(
    qid INT NOT NULL,
    correct_ans varchar(50) NOT NULL,
    FOREIGN KEY (qid)
    REFERENCES Question(qid) 
);
INSERT INTO Answer VALUES (1,'b');
INSERT INTO Answer VALUES (2,'a');
INSERT INTO Answer VALUES (3,'b');
