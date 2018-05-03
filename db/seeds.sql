USE supplies_db;

INSERT INTO supplies (supply) VALUES ('Printer Paper');
INSERT INTO supplies (supply) VALUES ('Ink');
INSERT INTO supplies (supply) VALUES ('Highlighters');
INSERT INTO supplies (supply, purchased) VALUES ('Pencils', true);

UPDATE supplies SET purchased = 0 WHERE id = "8";