import { MigrationInterface, QueryRunner } from 'typeorm'

export class PostRefactoring21634565629592 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`insert into blog (title, link, text, "authorId", "blogType", id) values ('Account Representative I', 'http://dummyimage.com/118x100.png/dddddd/000000', 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.

Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.

Fusce consequat. Nulla nisl. Nunc nisl.', 1, '{ Mobile Development1 }', 20);
insert into blog (title, link, text, "authorId", "blogType", id) values ('Software Consultant', 'http://dummyimage.com/238x100.png/cc0000/ffffff', 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.

Sed ante. Vivamus tortor. Duis mattis egestas metus.

Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', 1, '{ Mobile Development1 }', 21);
insert into blog (title, link, text, "authorId", "blogType", id) values ('VP Product Management', 'http://dummyimage.com/221x100.png/5fa2dd/ffffff', 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.

Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.

Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', 1, '{ Mobile Development1 }', 22);
insert into blog (title, link, text, "authorId", "blogType", id) values ('Chemical Engineer', 'http://dummyimage.com/186x100.png/5fa2dd/ffffff', 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', 1, '{ Mobile Development1 }', 23);
insert into blog (title, link, text, "authorId", "blogType", id) values ('Senior Developer', 'http://dummyimage.com/116x100.png/5fa2dd/ffffff', 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.

Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.', 1, '{ Mobile Development1 }', 24);
insert into blog (title, link, text, "authorId", "blogType", id) values ('Dental Hygienist', 'http://dummyimage.com/236x100.png/5fa2dd/ffffff', 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.

Phasellus in felis. Donec semper sapien a libero. Nam dui.

Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.', 1, '{ Mobile Development1 }', 25);
insert into blog (title, link, text, "authorId", "blogType", id) values ('Web Developer I', 'http://dummyimage.com/183x100.png/dddddd/000000', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 1, '{ Mobile Development1 }', 26);
insert into blog (title, link, text, "authorId", "blogType", id) values ('Registered Nurse', 'http://dummyimage.com/130x100.png/5fa2dd/ffffff', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.

Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', 1, '{ Mobile Development1 }', 27);
insert into blog (title, link, text, "authorId", "blogType", id) values ('Physical Therapy Assistant', 'http://dummyimage.com/150x100.png/5fa2dd/ffffff', 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.', 1, '{ Mobile Development1 }', 28);
insert into blog (title, link, text, "authorId", "blogType", id) values ('Web Designer I', 'http://dummyimage.com/125x100.png/cc0000/ffffff', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.

Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.

Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', 1, '{ Mobile Development1 }', 29);
insert into blog (title, link, text, "authorId", "blogType", id) values ('Data Coordiator', 'http://dummyimage.com/120x100.png/ff4444/ffffff', 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.', 1, '{ Mobile Development1 }', 30);
insert into blog (title, link, text, "authorId", "blogType", id) values ('Financial Advisor', 'http://dummyimage.com/127x100.png/ff4444/ffffff', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.

Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.

Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', 1, '{ Mobile Development1 }', 31);
insert into blog (title, link, text, "authorId", "blogType", id) values ('Internal Auditor', 'http://dummyimage.com/124x100.png/dddddd/000000', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 1, '{ Mobile Development1 }', 32);
insert into blog (title, link, text, "authorId", "blogType", id) values ('Assistant Professor', 'http://dummyimage.com/176x100.png/dddddd/000000', 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', 1, '{ Mobile Development1 }', 33);
insert into blog (title, link, text, "authorId", "blogType", id) values ('Civil Engineer', 'http://dummyimage.com/172x100.png/ff4444/ffffff', 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', 1, '{ Mobile Development1 }', 34);
insert into blog (title, link, text, "authorId", "blogType", id) values ('Speech Pathologist', 'http://dummyimage.com/233x100.png/5fa2dd/ffffff', 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.', 1, '{ Mobile Development1 }', 35);
insert into blog (title, link, text, "authorId", "blogType", id) values ('Recruiter', 'http://dummyimage.com/156x100.png/ff4444/ffffff', 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.

Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.

In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', 1, '{ Mobile Development1 }', 36);
insert into blog (title, link, text, "authorId", "blogType", id) values ('Structural Engineer', 'http://dummyimage.com/213x100.png/ff4444/ffffff', 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.

Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.

Phasellus in felis. Donec semper sapien a libero. Nam dui.', 1, '{ Mobile Development1 }', 37);
insert into blog (title, link, text, "authorId", "blogType", id) values ('Clinical Specialist', 'http://dummyimage.com/211x100.png/dddddd/000000', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.

Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.

Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', 1, '{ Mobile Development1 }', 38);
insert into blog (title, link, text, "authorId", "blogType", id) values ('Structural Engineer', 'http://dummyimage.com/104x100.png/5fa2dd/ffffff', 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.

Fusce consequat. Nulla nisl. Nunc nisl.

Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', 1, '{ Mobile Development1 }', 39);
insert into blog (title, link, text, "authorId", "blogType", id) values ('Financial Analyst', 'http://dummyimage.com/155x100.png/ff4444/ffffff', 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', 1, '{ Mobile Development1 }', 40);
insert into blog (title, link, text, "authorId", "blogType", id) values ('Clinical Specialist', 'http://dummyimage.com/200x100.png/5fa2dd/ffffff', 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.

Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.

Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', 1, '{ Mobile Development1 }', 41);
insert into blog (title, link, text, "authorId", "blogType", id) values ('GIS Technical Architect', 'http://dummyimage.com/213x100.png/5fa2dd/ffffff', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.

Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', 1, '{ Mobile Development1 }', 42);
insert into blog (title, link, text, "authorId", "blogType", id) values ('Recruiting Manager', 'http://dummyimage.com/207x100.png/cc0000/ffffff', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.

Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.

Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', 1, '{ Mobile Development1 }', 43);
insert into blog (title, link, text, "authorId", "blogType", id) values ('Programmer II', 'http://dummyimage.com/140x100.png/dddddd/000000', 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.

Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', 1, '{ Mobile Development1 }', 44);
insert into blog (title, link, text, "authorId", "blogType", id) values ('Environmental Specialist', 'http://dummyimage.com/132x100.png/dddddd/000000', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.

Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', 1, '{ Mobile Development1 }', 45);
insert into blog (title, link, text, "authorId", "blogType", id) values ('Design Engineer', 'http://dummyimage.com/183x100.png/ff4444/ffffff', 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.

Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', 1, '{ Mobile Development1 }', 46);
insert into blog (title, link, text, "authorId", "blogType", id) values ('Junior Executive', 'http://dummyimage.com/173x100.png/dddddd/000000', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', 1, '{ Mobile Development1 }', 47);
insert into blog (title, link, text, "authorId", "blogType", id) values ('Data Coordiator', 'http://dummyimage.com/162x100.png/dddddd/000000', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.

In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.

Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.', 1, '{ Mobile Development1 }', 48);
insert into blog (title, link, text, "authorId", "blogType", id) values ('Recruiting Manager', 'http://dummyimage.com/190x100.png/cc0000/ffffff', 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.

Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.', 1, '{ Mobile Development1 }', 49);
insert into blog (title, link, text, "authorId", "blogType", id) values ('Sales Associate', 'http://dummyimage.com/171x100.png/5fa2dd/ffffff', 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.

Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', 1, '{ Mobile Development1 }', 50);
insert into blog (title, link, text, "authorId", "blogType", id) values ('Community Outreach Specialist', 'http://dummyimage.com/236x100.png/cc0000/ffffff', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.

Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.

Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.', 1, '{ Mobile Development1 }', 51);
insert into blog (title, link, text, "authorId", "blogType", id) values ('Engineer IV', 'http://dummyimage.com/240x100.png/5fa2dd/ffffff', 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.

Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.

Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', 1, '{ Mobile Development1 }', 52);
insert into blog (title, link, text, "authorId", "blogType", id) values ('Programmer II', 'http://dummyimage.com/191x100.png/cc0000/ffffff', 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.

Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', 1, '{ Mobile Development1 }', 53);
insert into blog (title, link, text, "authorId", "blogType", id) values ('Help Desk Operator', 'http://dummyimage.com/163x100.png/ff4444/ffffff', 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.

Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.

Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', 1, '{ Mobile Development1 }', 54);
insert into blog (title, link, text, "authorId", "blogType", id) values ('Dental Hygienist', 'http://dummyimage.com/188x100.png/ff4444/ffffff', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', 1, '{ Mobile Development1 }', 55);
insert into blog (title, link, text, "authorId", "blogType", id) values ('Computer Systems Analyst I', 'http://dummyimage.com/100x100.png/cc0000/ffffff', 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.

Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', 1, '{ Mobile Development1 }', 56);
insert into blog (title, link, text, "authorId", "blogType", id) values ('Staff Accountant IV', 'http://dummyimage.com/186x100.png/dddddd/000000', 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.

Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', 1, '{ Mobile Development1 }', 57);
insert into blog (title, link, text, "authorId", "blogType", id) values ('Civil Engineer', 'http://dummyimage.com/230x100.png/5fa2dd/ffffff', 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', 1, '{ Mobile Development1 }', 58);
insert into blog (title, link, text, "authorId", "blogType", id) values ('Tax Accountant', 'http://dummyimage.com/155x100.png/dddddd/000000', 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', 1, '{ Mobile Development1 }', 59);
insert into blog (title, link, text, "authorId", "blogType", id) values ('Software Engineer III', 'http://dummyimage.com/203x100.png/ff4444/ffffff', 'In congue. Etiam justo. Etiam pretium iaculis justo.

In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.

Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', 1, '{ Mobile Development1 }', 60);
insert into blog (title, link, text, "authorId", "blogType", id) values ('Quality Engineer', 'http://dummyimage.com/214x100.png/cc0000/ffffff', 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.

Fusce consequat. Nulla nisl. Nunc nisl.', 1, '{ Mobile Development1 }', 61);
insert into blog (title, link, text, "authorId", "blogType", id) values ('GIS Technical Architect', 'http://dummyimage.com/163x100.png/ff4444/ffffff', 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.

Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.

Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', 1, '{ Mobile Development1 }', 62);
insert into blog (title, link, text, "authorId", "blogType", id) values ('Product Engineer', 'http://dummyimage.com/170x100.png/dddddd/000000', 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.

Fusce consequat. Nulla nisl. Nunc nisl.', 1, '{ Mobile Development1 }', 63);
insert into blog (title, link, text, "authorId", "blogType", id) values ('Automation Specialist IV', 'http://dummyimage.com/233x100.png/5fa2dd/ffffff', 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.

Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', 1, '{ Mobile Development1 }', 64);
insert into blog (title, link, text, "authorId", "blogType", id) values ('Information Systems Manager', 'http://dummyimage.com/244x100.png/dddddd/000000', 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.

Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', 1, '{ Mobile Development1 }', 65);
insert into blog (title, link, text, "authorId", "blogType", id) values ('Analyst Programmer', 'http://dummyimage.com/224x100.png/dddddd/000000', 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.

Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', 1, '{ Mobile Development1 }', 66);
insert into blog (title, link, text, "authorId", "blogType", id) values ('Marketing Manager', 'http://dummyimage.com/131x100.png/dddddd/000000', 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.

Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', 1, '{ Mobile Development1 }', 67);
insert into blog (title, link, text, "authorId", "blogType", id) values ('Statistician IV', 'http://dummyimage.com/139x100.png/dddddd/000000', 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.

Phasellus in felis. Donec semper sapien a libero. Nam dui.', 1, '{ Mobile Development1 }', 68);
insert into blog (title, link, text, "authorId", "blogType", id) values ('GIS Technical Architect', 'http://dummyimage.com/153x100.png/5fa2dd/ffffff', 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.

Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.

Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', 1, '{ Mobile Development1 }', 69);
insert into blog (title, link, text, "authorId", "blogType", id) values ('Analyst Programmer', 'http://dummyimage.com/153x100.png/ff4444/ffffff', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', 1, '{ Mobile Development1 }', 70);
insert into blog (title, link, text, "authorId", "blogType", id) values ('Analyst Programmer', 'http://dummyimage.com/120x100.png/5fa2dd/ffffff', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.

Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', 1, '{ Mobile Development1 }', 71);
insert into blog (title, link, text, "authorId", "blogType", id) values ('Chief Design Engineer', 'http://dummyimage.com/221x100.png/dddddd/000000', 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 1, '{ Mobile Development1 }', 72);
insert into blog (title, link, text, "authorId", "blogType", id) values ('Junior Executive', 'http://dummyimage.com/239x100.png/5fa2dd/ffffff', 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.

Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.

Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', 1, '{ Mobile Development1 }', 73);
insert into blog (title, link, text, "authorId", "blogType", id) values ('Software Test Engineer IV', 'http://dummyimage.com/247x100.png/dddddd/000000', 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.

Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.

Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', 1, '{ Mobile Development1 }', 74);
insert into blog (title, link, text, "authorId", "blogType", id) values ('Web Designer IV', 'http://dummyimage.com/120x100.png/dddddd/000000', 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.

Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.

Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 1, '{ Mobile Development1 }', 75);
insert into blog (title, link, text, "authorId", "blogType", id) values ('Internal Auditor', 'http://dummyimage.com/238x100.png/cc0000/ffffff', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', 1, '{ Mobile Development1 }', 76);
insert into blog (title, link, text, "authorId", "blogType", id) values ('GIS Technical Architect', 'http://dummyimage.com/245x100.png/cc0000/ffffff', 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', 1, '{ Mobile Development1 }', 77);
insert into blog (title, link, text, "authorId", "blogType", id) values ('Help Desk Technician', 'http://dummyimage.com/174x100.png/ff4444/ffffff', 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.

Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.

Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 1, '{ Mobile Development1 }', 78);
insert into blog (title, link, text, "authorId", "blogType", id) values ('Pharmacist', 'http://dummyimage.com/221x100.png/dddddd/000000', 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.', 1, '{ Mobile Development1 }', 79);
insert into blog (title, link, text, "authorId", "blogType", id) values ('Speech Pathologist', 'http://dummyimage.com/189x100.png/cc0000/ffffff', 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.', 1, '{ Mobile Development1 }', 80);
insert into blog (title, link, text, "authorId", "blogType", id) values ('Nurse', 'http://dummyimage.com/142x100.png/ff4444/ffffff', 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.

Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.', 1, '{ Mobile Development1 }', 81);
insert into blog (title, link, text, "authorId", "blogType", id) values ('Accounting Assistant II', 'http://dummyimage.com/189x100.png/5fa2dd/ffffff', 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', 1, '{ Mobile Development1 }', 82);
insert into blog (title, link, text, "authorId", "blogType", id) values ('Chief Design Engineer', 'http://dummyimage.com/187x100.png/5fa2dd/ffffff', 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.', 1, '{ Mobile Development1 }', 83);
insert into blog (title, link, text, "authorId", "blogType", id) values ('Environmental Tech', 'http://dummyimage.com/191x100.png/cc0000/ffffff', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', 1, '{ Mobile Development1 }', 84);
insert into blog (title, link, text, "authorId", "blogType", id) values ('Account Representative III', 'http://dummyimage.com/175x100.png/cc0000/ffffff', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.

Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', 1, '{ Mobile Development1 }', 85);
insert into blog (title, link, text, "authorId", "blogType", id) values ('General Manager', 'http://dummyimage.com/178x100.png/cc0000/ffffff', 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.

In congue. Etiam justo. Etiam pretium iaculis justo.', 1, '{ Mobile Development1 }', 86);
insert into blog (title, link, text, "authorId", "blogType", id) values ('Geological Engineer', 'http://dummyimage.com/221x100.png/cc0000/ffffff', 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.

Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', 1, '{ Mobile Development1 }', 87);
insert into blog (title, link, text, "authorId", "blogType", id) values ('Web Designer II', 'http://dummyimage.com/226x100.png/cc0000/ffffff', 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.

Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', 1, '{ Mobile Development1 }', 88);
insert into blog (title, link, text, "authorId", "blogType", id) values ('Executive Secretary', 'http://dummyimage.com/236x100.png/cc0000/ffffff', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', 1, '{ Mobile Development1 }', 89);
insert into blog (title, link, text, "authorId", "blogType", id) values ('Community Outreach Specialist', 'http://dummyimage.com/200x100.png/cc0000/ffffff', 'In congue. Etiam justo. Etiam pretium iaculis justo.

In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', 1, '{ Mobile Development1 }', 90);
insert into blog (title, link, text, "authorId", "blogType", id) values ('Nurse', 'http://dummyimage.com/195x100.png/ff4444/ffffff', 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.

Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', 1, '{ Mobile Development1 }', 91);
insert into blog (title, link, text, "authorId", "blogType", id) values ('Assistant Manager', 'http://dummyimage.com/149x100.png/ff4444/ffffff', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 1, '{ Mobile Development1 }', 92);
insert into blog (title, link, text, "authorId", "blogType", id) values ('Teacher', 'http://dummyimage.com/130x100.png/ff4444/ffffff', 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.

Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', 1, '{ Mobile Development1 }', 93);
insert into blog (title, link, text, "authorId", "blogType", id) values ('Librarian', 'http://dummyimage.com/115x100.png/ff4444/ffffff', 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.

Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.', 1, '{ Mobile Development1 }', 94);
insert into blog (title, link, text, "authorId", "blogType", id) values ('Human Resources Manager', 'http://dummyimage.com/138x100.png/dddddd/000000', 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', 1, '{ Mobile Development1 }', 95);
insert into blog (title, link, text, "authorId", "blogType", id) values ('Engineer I', 'http://dummyimage.com/240x100.png/cc0000/ffffff', 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.

In congue. Etiam justo. Etiam pretium iaculis justo.

In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', 1, '{ Mobile Development1 }', 96);
insert into blog (title, link, text, "authorId", "blogType", id) values ('Structural Analysis Engineer', 'http://dummyimage.com/136x100.png/dddddd/000000', 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.

Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', 1, '{ Mobile Development1 }', 97);
insert into blog (title, link, text, "authorId", "blogType", id) values ('Payment Adjustment Coordinator', 'http://dummyimage.com/187x100.png/5fa2dd/ffffff', 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.

Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.

Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.', 1, '{ Mobile Development1 }', 98);
insert into blog (title, link, text, "authorId", "blogType", id) values ('Desktop Support Technician', 'http://dummyimage.com/198x100.png/dddddd/000000', 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', 1, '{ Mobile Development1 }', 99);
insert into blog (title, link, text, "authorId", "blogType", id) values ('Payment Adjustment Coordinator', 'http://dummyimage.com/129x100.png/5fa2dd/ffffff', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 1, '{ Mobile Development1 }', 100);
`)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
