create table clientes(
  cliente_id serial primary key,
  nome varchar not null,
  email varchar not null,
  senha varchar not null,
  telefone varchar not null,
  endereco varchar not null
);

create table autores(
  autor_id serial primary key,
  nome varchar not null,
  email varchar not null,
  telefone varchar not null
);

create table livros(
 livro_id serial primary key,
 nome varchar not null,
 valor numeric not null,
 estoque int not null,
 autor_id int not null,
 constraint fk_autores foreign key (autor_id) references autores (autor_id) 
);

create table vendas(
 venda_id serial primary key,
 valor numeric not null,
 data date not null,
 cliente_id int not null,
 livro_id int not null,
 constraint fk_clientes foreign key (cliente_id) references clientes (cliente_id), 
 constraint fk_livros foreign key (livro_id) references livros (livro_id)
);