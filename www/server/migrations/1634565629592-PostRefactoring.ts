import { MigrationInterface, QueryRunner } from 'typeorm'

export class PostRefactoring216345265629592 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`insert into blog (title, text, link, "authorId", "blogType") values ('Human Resources Assistant IV', 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.

Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 'http://dummyimage.com/145x100.png/cc0000/ffffff', 1, '{ Mobile Development1 }');
insert into blog (title, text, link, "authorId", "blogType") values ('Civil Engineer', 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'http://dummyimage.com/145x100.png/5fa2dd/ffffff', 1, '{ Mobile Development1 }');
insert into blog (title, text, link, "authorId", "blogType") values ('Community Outreach Specialist', 'In congue. Etiam justo. Etiam pretium iaculis justo.

In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', 'http://dummyimage.com/148x100.png/ff4444/ffffff', 1, '{ Mobile Development1 }');
insert into blog (title, text, link, "authorId", "blogType") values ('Senior Quality Engineer', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.

Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.', 'http://dummyimage.com/169x100.png/ff4444/ffffff', 1, '{ Mobile Development1 }');
insert into blog (title, text, link, "authorId", "blogType") values ('Technical Writer', 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.

Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', 'http://dummyimage.com/192x100.png/ff4444/ffffff', 1, '{ Mobile Development1 }');
insert into blog (title, text, link, "authorId", "blogType") values ('Data Coordiator', 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.

Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', 'http://dummyimage.com/186x100.png/ff4444/ffffff', 1, '{ Mobile Development1 }');
insert into blog (title, text, link, "authorId", "blogType") values ('Computer Systems Analyst III', 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.', 'http://dummyimage.com/164x100.png/cc0000/ffffff', 1, '{ Mobile Development1 }');
insert into blog (title, text, link, "authorId", "blogType") values ('Assistant Manager', 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.

Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.

Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', 'http://dummyimage.com/150x100.png/cc0000/ffffff', 1, '{ Mobile Development1 }');
insert into blog (title, text, link, "authorId", "blogType") values ('Tax Accountant', 'Phasellus in felis. Donec semper sapien a libero. Nam dui.

Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.', 'http://dummyimage.com/181x100.png/cc0000/ffffff', 1, '{ Mobile Development1 }');
insert into blog (title, text, link, "authorId", "blogType") values ('Account Representative III', 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.

Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', 'http://dummyimage.com/142x100.png/5fa2dd/ffffff', 1, '{ Mobile Development1 }');
insert into blog (title, text, link, "authorId", "blogType") values ('VP Sales', 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', 'http://dummyimage.com/158x100.png/ff4444/ffffff', 1, '{ Mobile Development1 }');
insert into blog (title, text, link, "authorId", "blogType") values ('Senior Sales Associate', 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.

Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', 'http://dummyimage.com/176x100.png/5fa2dd/ffffff', 1, '{ Mobile Development1 }');
insert into blog (title, text, link, "authorId", "blogType") values ('Business Systems Development Analyst', 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.

Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', 'http://dummyimage.com/168x100.png/ff4444/ffffff', 1, '{ Mobile Development1 }');
insert into blog (title, text, link, "authorId", "blogType") values ('Editor', 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.

In congue. Etiam justo. Etiam pretium iaculis justo.

In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', 'http://dummyimage.com/138x100.png/5fa2dd/ffffff', 1, '{ Mobile Development1 }');
insert into blog (title, text, link, "authorId", "blogType") values ('Marketing Assistant', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.', 'http://dummyimage.com/218x100.png/ff4444/ffffff', 1, '{ Mobile Development1 }');
insert into blog (title, text, link, "authorId", "blogType") values ('Chief Design Engineer', 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', 'http://dummyimage.com/176x100.png/ff4444/ffffff', 1, '{ Mobile Development1 }');
insert into blog (title, text, link, "authorId", "blogType") values ('General Manager', 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.

Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', 'http://dummyimage.com/177x100.png/dddddd/000000', 1, '{ Mobile Development1 }');
insert into blog (title, text, link, "authorId", "blogType") values ('Nuclear Power Engineer', 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', 'http://dummyimage.com/237x100.png/cc0000/ffffff', 1, '{ Mobile Development1 }');
insert into blog (title, text, link, "authorId", "blogType") values ('Registered Nurse', 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.

Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.', 'http://dummyimage.com/123x100.png/ff4444/ffffff', 1, '{ Mobile Development1 }');
insert into blog (title, text, link, "authorId", "blogType") values ('VP Quality Control', 'Phasellus in felis. Donec semper sapien a libero. Nam dui.

Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.

Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.', 'http://dummyimage.com/111x100.png/ff4444/ffffff', 1, '{ Mobile Development1 }');
insert into blog (title, text, link, "authorId", "blogType") values ('Sales Associate', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.

Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.

Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', 'http://dummyimage.com/195x100.png/ff4444/ffffff', 1, '{ Mobile Development1 }');
insert into blog (title, text, link, "authorId", "blogType") values ('Account Representative III', 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', 'http://dummyimage.com/107x100.png/ff4444/ffffff', 1, '{ Mobile Development1 }');
insert into blog (title, text, link, "authorId", "blogType") values ('VP Accounting', 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', 'http://dummyimage.com/149x100.png/cc0000/ffffff', 1, '{ Mobile Development1 }');
insert into blog (title, text, link, "authorId", "blogType") values ('Teacher', 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', 'http://dummyimage.com/135x100.png/ff4444/ffffff', 1, '{ Mobile Development1 }');
insert into blog (title, text, link, "authorId", "blogType") values ('Executive Secretary', 'Fusce consequat. Nulla nisl. Nunc nisl.', 'http://dummyimage.com/236x100.png/cc0000/ffffff', 1, '{ Mobile Development1 }');
insert into blog (title, text, link, "authorId", "blogType") values ('Programmer IV', 'Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', 'http://dummyimage.com/107x100.png/ff4444/ffffff', 1, '{ Mobile Development1 }');
insert into blog (title, text, link, "authorId", "blogType") values ('Help Desk Technician', 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', 'http://dummyimage.com/163x100.png/dddddd/000000', 1, '{ Mobile Development1 }');
insert into blog (title, text, link, "authorId", "blogType") values ('Assistant Manager', 'Fusce consequat. Nulla nisl. Nunc nisl.

Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', 'http://dummyimage.com/162x100.png/ff4444/ffffff', 1, '{ Mobile Development1 }');
insert into blog (title, text, link, "authorId", "blogType") values ('Social Worker', 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.

Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', 'http://dummyimage.com/169x100.png/cc0000/ffffff', 1, '{ Mobile Development1 }');
insert into blog (title, text, link, "authorId", "blogType") values ('Dental Hygienist', 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.', 'http://dummyimage.com/144x100.png/cc0000/ffffff', 1, '{ Mobile Development1 }');
insert into blog (title, text, link, "authorId", "blogType") values ('Data Coordiator', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.

Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', 'http://dummyimage.com/176x100.png/ff4444/ffffff', 1, '{ Mobile Development1 }');
insert into blog (title, text, link, "authorId", "blogType") values ('Technical Writer', 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.

Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.', 'http://dummyimage.com/160x100.png/dddddd/000000', 1, '{ Mobile Development1 }');
insert into blog (title, text, link, "authorId", "blogType") values ('Civil Engineer', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', 'http://dummyimage.com/181x100.png/5fa2dd/ffffff', 1, '{ Mobile Development1 }');
insert into blog (title, text, link, "authorId", "blogType") values ('VP Product Management', 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.

Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.

Phasellus in felis. Donec semper sapien a libero. Nam dui.', 'http://dummyimage.com/104x100.png/5fa2dd/ffffff', 1, '{ Mobile Development1 }');
insert into blog (title, text, link, "authorId", "blogType") values ('Health Coach III', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.

Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.

Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', 'http://dummyimage.com/185x100.png/5fa2dd/ffffff', 1, '{ Mobile Development1 }');
insert into blog (title, text, link, "authorId", "blogType") values ('GIS Technical Architect', 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.

Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.

In congue. Etiam justo. Etiam pretium iaculis justo.', 'http://dummyimage.com/237x100.png/ff4444/ffffff', 1, '{ Mobile Development1 }');
insert into blog (title, text, link, "authorId", "blogType") values ('VP Accounting', 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', 'http://dummyimage.com/229x100.png/ff4444/ffffff', 1, '{ Mobile Development1 }');
insert into blog (title, text, link, "authorId", "blogType") values ('Assistant Media Planner', 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.

Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', 'http://dummyimage.com/200x100.png/dddddd/000000', 1, '{ Mobile Development1 }');
insert into blog (title, text, link, "authorId", "blogType") values ('VP Product Management', 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.', 'http://dummyimage.com/211x100.png/cc0000/ffffff', 1, '{ Mobile Development1 }');
insert into blog (title, text, link, "authorId", "blogType") values ('Junior Executive', 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', 'http://dummyimage.com/122x100.png/5fa2dd/ffffff', 1, '{ Mobile Development1 }');
insert into blog (title, text, link, "authorId", "blogType") values ('Account Representative II', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 'http://dummyimage.com/212x100.png/5fa2dd/ffffff', 1, '{ Mobile Development1 }');
insert into blog (title, text, link, "authorId", "blogType") values ('Civil Engineer', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', 'http://dummyimage.com/163x100.png/5fa2dd/ffffff', 1, '{ Mobile Development1 }');
insert into blog (title, text, link, "authorId", "blogType") values ('Associate Professor', 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.

Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.

Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', 'http://dummyimage.com/249x100.png/5fa2dd/ffffff', 1, '{ Mobile Development1 }');
insert into blog (title, text, link, "authorId", "blogType") values ('Speech Pathologist', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.

Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', 'http://dummyimage.com/176x100.png/dddddd/000000', 1, '{ Mobile Development1 }');
insert into blog (title, text, link, "authorId", "blogType") values ('Office Assistant I', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.

Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', 'http://dummyimage.com/123x100.png/cc0000/ffffff', 1, '{ Mobile Development1 }');
insert into blog (title, text, link, "authorId", "blogType") values ('Quality Control Specialist', 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', 'http://dummyimage.com/128x100.png/5fa2dd/ffffff', 1, '{ Mobile Development1 }');
insert into blog (title, text, link, "authorId", "blogType") values ('Professor', 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'http://dummyimage.com/190x100.png/dddddd/000000', 1, '{ Mobile Development1 }');
insert into blog (title, text, link, "authorId", "blogType") values ('Civil Engineer', 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.

Phasellus in felis. Donec semper sapien a libero. Nam dui.', 'http://dummyimage.com/106x100.png/ff4444/ffffff', 1, '{ Mobile Development1 }');
insert into blog (title, text, link, "authorId", "blogType") values ('Human Resources Assistant III', 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', 'http://dummyimage.com/100x100.png/dddddd/000000', 1, '{ Mobile Development1 }');
insert into blog (title, text, link, "authorId", "blogType") values ('Help Desk Operator', 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.

Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', 'http://dummyimage.com/121x100.png/5fa2dd/ffffff', 1, '{ Mobile Development1 }');
insert into blog (title, text, link, "authorId", "blogType") values ('Speech Pathologist', 'Phasellus in felis. Donec semper sapien a libero. Nam dui.

Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.

Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.', 'http://dummyimage.com/154x100.png/cc0000/ffffff', 1, '{ Mobile Development1 }');
insert into blog (title, text, link, "authorId", "blogType") values ('Programmer IV', 'Fusce consequat. Nulla nisl. Nunc nisl.

Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.

In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.', 'http://dummyimage.com/173x100.png/ff4444/ffffff', 1, '{ Mobile Development1 }');
insert into blog (title, text, link, "authorId", "blogType") values ('Operator', 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.

Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.', 'http://dummyimage.com/228x100.png/ff4444/ffffff', 1, '{ Mobile Development1 }');
insert into blog (title, text, link, "authorId", "blogType") values ('VP Marketing', 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.

Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.', 'http://dummyimage.com/142x100.png/cc0000/ffffff', 1, '{ Mobile Development1 }');
insert into blog (title, text, link, "authorId", "blogType") values ('Physical Therapy Assistant', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.

Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.', 'http://dummyimage.com/179x100.png/5fa2dd/ffffff', 1, '{ Mobile Development1 }');
insert into blog (title, text, link, "authorId", "blogType") values ('Environmental Tech', 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.

Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.

Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', 'http://dummyimage.com/200x100.png/ff4444/ffffff', 1, '{ Mobile Development1 }');
insert into blog (title, text, link, "authorId", "blogType") values ('Staff Accountant III', 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.', 'http://dummyimage.com/201x100.png/5fa2dd/ffffff', 1, '{ Mobile Development1 }');
insert into blog (title, text, link, "authorId", "blogType") values ('GIS Technical Architect', 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', 'http://dummyimage.com/228x100.png/5fa2dd/ffffff', 1, '{ Mobile Development1 }');
insert into blog (title, text, link, "authorId", "blogType") values ('Quality Engineer', 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.

Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', 'http://dummyimage.com/192x100.png/5fa2dd/ffffff', 1, '{ Mobile Development1 }');
insert into blog (title, text, link, "authorId", "blogType") values ('Sales Associate', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.

Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.

Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', 'http://dummyimage.com/139x100.png/5fa2dd/ffffff', 1, '{ Mobile Development1 }');
insert into blog (title, text, link, "authorId", "blogType") values ('Tax Accountant', 'Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', 'http://dummyimage.com/138x100.png/dddddd/000000', 1, '{ Mobile Development1 }');
insert into blog (title, text, link, "authorId", "blogType") values ('Software Engineer II', 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', 'http://dummyimage.com/245x100.png/ff4444/ffffff', 1, '{ Mobile Development1 }');
insert into blog (title, text, link, "authorId", "blogType") values ('VP Product Management', 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.

Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', 'http://dummyimage.com/131x100.png/ff4444/ffffff', 1, '{ Mobile Development1 }');
insert into blog (title, text, link, "authorId", "blogType") values ('Librarian', 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.

Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', 'http://dummyimage.com/134x100.png/cc0000/ffffff', 1, '{ Mobile Development1 }');
insert into blog (title, text, link, "authorId", "blogType") values ('Media Manager IV', 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.

Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', 'http://dummyimage.com/144x100.png/5fa2dd/ffffff', 1, '{ Mobile Development1 }');
insert into blog (title, text, link, "authorId", "blogType") values ('Human Resources Assistant I', 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', 'http://dummyimage.com/167x100.png/dddddd/000000', 1, '{ Mobile Development1 }');
insert into blog (title, text, link, "authorId", "blogType") values ('Dental Hygienist', 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', 'http://dummyimage.com/132x100.png/5fa2dd/ffffff', 1, '{ Mobile Development1 }');
insert into blog (title, text, link, "authorId", "blogType") values ('Geological Engineer', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.', 'http://dummyimage.com/156x100.png/5fa2dd/ffffff', 1, '{ Mobile Development1 }');
insert into blog (title, text, link, "authorId", "blogType") values ('Financial Advisor', 'In congue. Etiam justo. Etiam pretium iaculis justo.', 'http://dummyimage.com/242x100.png/ff4444/ffffff', 1, '{ Mobile Development1 }');
insert into blog (title, text, link, "authorId", "blogType") values ('Pharmacist', 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.

Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.', 'http://dummyimage.com/224x100.png/ff4444/ffffff', 1, '{ Mobile Development1 }');
insert into blog (title, text, link, "authorId", "blogType") values ('Human Resources Manager', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.

Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.

Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.', 'http://dummyimage.com/187x100.png/dddddd/000000', 1, '{ Mobile Development1 }');
insert into blog (title, text, link, "authorId", "blogType") values ('Sales Representative', 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.

Fusce consequat. Nulla nisl. Nunc nisl.

Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', 'http://dummyimage.com/140x100.png/cc0000/ffffff', 1, '{ Mobile Development1 }');
insert into blog (title, text, link, "authorId", "blogType") values ('Senior Developer', 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', 'http://dummyimage.com/115x100.png/cc0000/ffffff', 1, '{ Mobile Development1 }');
insert into blog (title, text, link, "authorId", "blogType") values ('Accountant II', 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', 'http://dummyimage.com/161x100.png/cc0000/ffffff', 1, '{ Mobile Development1 }');
insert into blog (title, text, link, "authorId", "blogType") values ('Accounting Assistant III', 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.

Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.

Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.', 'http://dummyimage.com/167x100.png/cc0000/ffffff', 1, '{ Mobile Development1 }');
insert into blog (title, text, link, "authorId", "blogType") values ('Database Administrator III', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.', 'http://dummyimage.com/153x100.png/ff4444/ffffff', 1, '{ Mobile Development1 }');
insert into blog (title, text, link, "authorId", "blogType") values ('Community Outreach Specialist', 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.

Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.

Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', 'http://dummyimage.com/238x100.png/dddddd/000000', 1, '{ Mobile Development1 }');
insert into blog (title, text, link, "authorId", "blogType") values ('Help Desk Operator', 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', 'http://dummyimage.com/235x100.png/5fa2dd/ffffff', 1, '{ Mobile Development1 }');
insert into blog (title, text, link, "authorId", "blogType") values ('Web Designer II', 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.

Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.', 'http://dummyimage.com/158x100.png/dddddd/000000', 1, '{ Mobile Development1 }');
insert into blog (title, text, link, "authorId", "blogType") values ('Financial Advisor', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.

Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', 'http://dummyimage.com/102x100.png/ff4444/ffffff', 1, '{ Mobile Development1 }');
insert into blog (title, text, link, "authorId", "blogType") values ('Account Representative I', 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', 'http://dummyimage.com/123x100.png/dddddd/000000', 1, '{ Mobile Development1 }');
insert into blog (title, text, link, "authorId", "blogType") values ('Payment Adjustment Coordinator', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.

Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', 'http://dummyimage.com/166x100.png/ff4444/ffffff', 1, '{ Mobile Development1 }');
insert into blog (title, text, link, "authorId", "blogType") values ('Senior Editor', 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', 'http://dummyimage.com/194x100.png/ff4444/ffffff', 1, '{ Mobile Development1 }');
insert into blog (title, text, link, "authorId", "blogType") values ('Executive Secretary', 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.

Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.

Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', 'http://dummyimage.com/105x100.png/cc0000/ffffff', 1, '{ Mobile Development1 }');
insert into blog (title, text, link, "authorId", "blogType") values ('Web Designer IV', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.

Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', 'http://dummyimage.com/187x100.png/cc0000/ffffff', 1, '{ Mobile Development1 }');
insert into blog (title, text, link, "authorId", "blogType") values ('Staff Scientist', 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.

Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.

Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.', 'http://dummyimage.com/129x100.png/ff4444/ffffff', 1, '{ Mobile Development1 }');
insert into blog (title, text, link, "authorId", "blogType") values ('Software Engineer IV', 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.

Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', 'http://dummyimage.com/184x100.png/dddddd/000000', 1, '{ Mobile Development1 }');
insert into blog (title, text, link, "authorId", "blogType") values ('Director of Sales', 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', 'http://dummyimage.com/244x100.png/5fa2dd/ffffff', 1, '{ Mobile Development1 }');
insert into blog (title, text, link, "authorId", "blogType") values ('Payment Adjustment Coordinator', 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.

Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.

Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', 'http://dummyimage.com/139x100.png/5fa2dd/ffffff', 1, '{ Mobile Development1 }');
insert into blog (title, text, link, "authorId", "blogType") values ('Compensation Analyst', 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.

Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.

Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.', 'http://dummyimage.com/120x100.png/5fa2dd/ffffff', 1, '{ Mobile Development1 }');
insert into blog (title, text, link, "authorId", "blogType") values ('Senior Developer', 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.

Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.

Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', 'http://dummyimage.com/223x100.png/5fa2dd/ffffff', 1, '{ Mobile Development1 }');
insert into blog (title, text, link, "authorId", "blogType") values ('Assistant Manager', 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', 'http://dummyimage.com/217x100.png/5fa2dd/ffffff', 1, '{ Mobile Development1 }');
insert into blog (title, text, link, "authorId", "blogType") values ('Mechanical Systems Engineer', 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', 'http://dummyimage.com/250x100.png/ff4444/ffffff', 1, '{ Mobile Development1 }');
insert into blog (title, text, link, "authorId", "blogType") values ('Automation Specialist II', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.

In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', 'http://dummyimage.com/156x100.png/ff4444/ffffff', 1, '{ Mobile Development1 }');
insert into blog (title, text, link, "authorId", "blogType") values ('Nuclear Power Engineer', 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'http://dummyimage.com/189x100.png/ff4444/ffffff', 1, '{ Mobile Development1 }');
insert into blog (title, text, link, "authorId", "blogType") values ('VP Sales', 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.

Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', 'http://dummyimage.com/246x100.png/5fa2dd/ffffff', 1, '{ Mobile Development1 }');
insert into blog (title, text, link, "authorId", "blogType") values ('Legal Assistant', 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.

Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.

Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.', 'http://dummyimage.com/238x100.png/dddddd/000000', 1, '{ Mobile Development1 }');
insert into blog (title, text, link, "authorId", "blogType") values ('Information Systems Manager', 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.', 'http://dummyimage.com/143x100.png/ff4444/ffffff', 1, '{ Mobile Development1 }');
insert into blog (title, text, link, "authorId", "blogType") values ('Health Coach I', 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.

Sed ante. Vivamus tortor. Duis mattis egestas metus.

Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', 'http://dummyimage.com/218x100.png/5fa2dd/ffffff', 1, '{ Mobile Development1 }');
insert into blog (title, text, link, "authorId", "blogType") values ('Research Associate', 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', 'http://dummyimage.com/246x100.png/5fa2dd/ffffff', 1, '{ Mobile Development1 }');`)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
