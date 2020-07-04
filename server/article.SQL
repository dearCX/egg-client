create database egg_article;
use egg_article;

create table article(
  id int(10) not null auto_increment,
  img text default null comment '缩略图',
  title varchar(80) default null comment '文章标题',
  summary varchar(300) default null comment '文章简介',
  content text default null comment '文章内容',
  createTime timestamp default null comment '发布时间',
  primary key(id)
)engine = InnoDB auto_increment=1 comment '文章表';

insert into article(title, img, summary, content, createTime)
values('编程必备基础知识 计算机组成原理+操作系统+计算机网络', 'https://img2.mukewang.com/szimg/5d1032ab08719e0906000338.jpg', '介绍编程基础知识', '快速、系统补足必备的计算机基础知识，更快更有趣、更贴近实际工作，让你快速学到满足实际工作需要的知识，为以后的工作打下良好的基础', '2019-08-10 10:20:10');