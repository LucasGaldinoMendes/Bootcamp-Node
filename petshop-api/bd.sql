create table proprietarios(
  proprietario_id serial primary key,
  nome varchar not null,
  telefone varchar not null
);

create table animais(
  animal_id serial primary key,
  nome varchar not null,
  tipo varchar not null,
  proprietario_id int not null,
  constraint fk_animais foreign key (proprietario_id) references proprietarios (proprietario_id) 
);

INSERT INTO proprietarios(nome, telefone)
VALUES ('Alda Valentim', '(39)98566-1222'),
('Nicolas Avelar', '(28)97432-0379'),
('Emilly Baptista', '(31)99545-2457'),
('Beatriz Bonilha', '(35)98054-4724'),
('Nataniel Faleiro', '(33)99594-3315'),
('Richard Santos', '(27)99597-9170');

INSERT INTO animais(nome, tipo, proprietario_id)
VALUES ('Billy', 'Cachorro', 1),
('Nala', 'Cachorro', 2),
('Mimi', 'Gato', 2),
('Dory', 'Cachorro', 3),
('Lulu', 'Cachorro', 4),
('Bob', 'Cachorro', 5),
('Milu', 'Cachorro', 5),
('Emmy', 'Gato', 5),
('Amora', 'Cachorro', 6);
