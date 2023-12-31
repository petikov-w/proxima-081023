import React from 'react';
import styled from 'styled-components';

import {Title, Heading, Item, TextBox1lvl, TextBox2lvl} from '../styles/text.styled';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

const pstl = styled.p`
   width: 70 vw;
`;

const Main = styled.div` 
     min-height: calc(91.3vh - 85px - 22px);
     padding-top: 1.5rem 0;         
`;

export const UserAgreementPage = () => {

    return (
        <>
                <Header />
                <Main>
                <Title>Политика конфиденциальности</Title>  
                <TextBox1lvl>
                Настоящее пользовательское соглашение (далее – Соглашение) в соответствии со статьями 428 и 437 Гражданского 
                кодекса РФ является соглашением между любым физическим или юридическим лицом, в том числе индивидуальным 
                предпринимателем, использующим Сервис и тем самым выразившим согласие с изложенными в настоящем Соглашении 
                условиями (далее – Пользователь), и обществом с ограниченной ответственностью «ШЕВЦОВ.РУ» (далее – Администрация). 
                Совершение Пользователем действий, направленных на использование Сервиса считается безусловным принятием (акцептом) 
                данного Соглашения. Настоящее Соглашение, содержит условия и положения, действие которых распространяется 
                на каждого Пользователя Сервиса. Используя Сервис, Пользователь выражает свое согласие с данными условиями. 
                Если Пользователь не согласен с каким-либо из условий, Пользователь должен прекратить использование Сервиса.
                </TextBox1lvl>
                    <Heading>
                        1. Термины и определения
                    </Heading>
                    <TextBox2lvl>
                    <Item>1.1.</Item>  Стороны договорились, что следующие ниже термины и определения для целей настоящего Соглашения 
                    будут иметь следующее значение: «Администрация» – ООО «ПУПКИН.РУ», ОГРН 1186372042856, ИНН 6102093865, КПП 611201002 
                    адрес местонахождения: 346705, Ростовская обл., Аксайский р-н, ул. Кирова, д. 87, почтовый адрес: 
                    344000, г. Ростов-на-Дону, а/я 281. «Пользователь» – любое физич еское или юридическое лицо, в том числе индивидуальный 
                    предприниматель, использующее Сервис и тем самым выразившее согласие с изложенными в настоящем Соглашении условиями. 
                    «Сервис» – веб-сайт, доступный в сети Интернет по адресу: https://pupkin.ru, представляющий собой ресурс для 
                    размещения и доведения до всеобщего сведения информации, размещаемой на нем Администрацией. Сервис включает в 
                    себя совокупность информации, текстов, графических элементов, дизайна, изображений, фото и видеоматериалов, и иных 
                    результатов интеллектуальной деятельности. «Кэш» – расположенное на устройстве Пользователя промежуточное хранилище 
                    данных, получаемых от веб-сайта Сервиса и запрашиваемых чаще других с наибольшей вероятностью, доступ к которым их 
                    кэша возможен с гораздо большей скоростью, чем выборка исходных данных из удаленного источника (например, веб-сайта).
                    </TextBox2lvl>
                    <TextBox2lvl>
                    <Item>1.2.</Item>Все остальные термины и определения, встречающиеся в тексте Соглашения, толкуются Сторонами в 
                    соответствии с законодательством Российской Федерации, действующими рекомендациями (RFC) международных органов 
                    по стандартизации в сети Интернет и сложившимися в сети Интернет обычными правилами толкования соответствующих 
                    терминов. 
                    </TextBox2lvl>
                    <TextBox2lvl>
                    <Item>1.3.</Item>Термины и определения, используемые в настоящем Соглашении, могут быть использованы как в 
                    единственном, так и во множественном числе в зависимости от контекста, написание терминов может быть использовано 
                    как с заглавной буквы, так и с прописной.
                    </TextBox2lvl>
                    <TextBox2lvl>
                    <Item>1.4.</Item> Названия заголовков (статей), а также конструкция Соглашения предназначены исключительно для удобства 
                    пользования текстом Соглашения и буквального юридического значения не имеют. 
                    </TextBox2lvl>
                    <TextBox2lvl>
                    <Item></Item> 
                    </TextBox2lvl>

                    <Heading>
                        2. Предмет соглашения
                    </Heading>
                    <TextBox2lvl>
                    <Item>2.1.</Item>Настоящее Соглашение регулирует отношения между Пользователем, с одной стороны, и Администрацией
                     с другой стороны, по предоставлению Пользователю права использования Сервиса, а также регламентирует порядок 
                     использования Сервиса.  
                    </TextBox2lvl>
                    <TextBox2lvl>
                    <Item>2.2.</Item>В соответствии с настоящим Соглашением Администрация предоставляет права пользования Сервисом 
                    в соответствии с его назначением, а именно для возможности ознакомления Пользователем с информацией, размещенной 
                    на веб-сайте Сервиса.
                    </TextBox2lvl>
                    <TextBox2lvl>
                    <Item>2.3.</Item>Использование Сервиса для целей ознакомления Пользователем с информацией, размещенной на веб-сайте
                     Сервиса, осуществляется на безвозмездной основе.
                    </TextBox2lvl>
                    <TextBox2lvl>
                    <Item>2.4.</Item> Настоящее Соглашение регулирует отношения исключительно по использованию Сервиса. Оказание иных
                     услуг или выполнение иных работ регулируется отдельно в порядке, установленном законодательством Российской 
                     Федерации.
                    </TextBox2lvl>
                    
                    <Heading>
                        3. Интеллектуальные права на сервис
                    </Heading>
                    <TextBox2lvl>
                    <Item>3.1.</Item>Сервис, его составляющие и отдельные компоненты (в том числе, но не ограничиваясь: программы для ЭВМ, 
                    базы данных, коды, лежащие в их основе ноу-хау, алгоритмы, элементы дизайна, шрифты, логотипы, а также текстовые, 
                    графические и иные материалы) являются объектами интеллектуальной собственности Администрации, охраняемой в соответствии
                     с российским и международным законодательством, любое использование которых допускается только на основании 
                     разрешения правообладателя.  
                    </TextBox2lvl>
                    <TextBox2lvl>
                    <Item>3.2.</Item>Администрация настоящим предоставляет Пользователю на весь срок действия настоящего Соглашения 
                    неисключительную (без ограничения территории действия и не подлежащую передаче или уступке третьим лицам), отзывную, 
                    ограниченную лицензию на использование Сервиса. Такая неисключительная лицензия предназначена для того, чтобы 
                    обеспечить Пользователю возможность пользования Сервисом в соответствии с его функционалом с учетом ограничений, 
                    предусмотренных настоящим Соглашением.
                    </TextBox2lvl>
                    <TextBox2lvl>
                    <Item>3.3.</Item>Право использования Сервиса включает в себя ограниченное право на воспроизведение Сервиса или 
                    отдельных участков его кода на конечном устройстве Пользователя с помощью веб-браузера и ограниченное право на 
                    копирование отдельных участков кода Сервиса с помощью веб-браузера для целей кэширования, а также право на запуск 
                    с помощью веб-браузера с целью эксплуатации Сервиса в соответствии с его функционалом.
                    </TextBox2lvl>
                    <TextBox2lvl>
                    <Item>3.4.</Item>Право использования Сервиса не включает в себя право изготовить его копию, даже для архивных 
                    целей, поскольку использование Сервиса осуществляется в онлайн-режиме с помощью доступа через сеть Интернет и 
                    необходимость в изготовлении копии отсутствует.
                    </TextBox2lvl>
                    <TextBox2lvl>
                    <Item>3.5.</Item>Использование Сервиса в соответствии с настоящим Соглашением допускается на неограниченном количестве 
                    устройств Пользователя (например, компьютерах или планшетах). 
                    </TextBox2lvl>
                    <TextBox2lvl>
                    <Item>3.6.</Item>Пользователь соглашается, что не вправе (в том числе не вправе разрешать кому-либо) изменять, создавать
                     производные работы, разбирать Сервис на составляющие коды, декомпилировать или иным образом пытаться получить исходный 
                     код программного обеспечения или любой его части, за исключением случаев, когда есть письменное разрешение 
                     Администрации на совершение таких действий. В противном случае, Пользователь несет полную ответственность за подобные 
                     действия, предусмотренную международным и российским законодательством.  
                    </TextBox2lvl>
                    <TextBox2lvl>
                    <Item>3.7.</Item>Соглашение не предусматривает передачу прав на интеллектуальную собственность Администрации 
                    (либо ее часть), за исключением ограниченной лицензии, которая предоставляется на основании вышеизложенного. 
                    Никакие положения Соглашения не являются уступкой прав на интеллектуальную собственность Администрации или отказом от 
                    данных прав на основании законодательства.
                    </TextBox2lvl>
                    <TextBox2lvl>
                    <Item>3.8.</Item>Сервис содержит или может содержать программы для ЭВМ, которые лицензируются (или сублицензируются) 
                    Пользователю в соответствии с общедоступной лицензией GNU или иными аналогичными лицензиями Open Source, которые помимо 
                    прочих прав разрешают Пользователю копировать, модифицировать, перераспределять определенные программы для ЭВМ или их 
                    части и получать доступ к исходному коду. Если такая лицензия предусматривает предоставление исходного кода 
                    пользователям, которым программа для ЭВМ предоставляется в формате исполняемого двоичного кода (объектного кода),
                     исходный код делается доступным при осуществлении запроса на адрес электронной почты Администрации. Если какая-либо 
                     лицензия на программы для ЭВМ с открытым исходным кодом требует, чтобы Администрация предоставляла права на 
                     использование, копирование или модификацию программ для ЭВМ с открытым исходным кодом, выходящие за рамки прав, 
                     предоставляемых настоящим Соглашением, такие права имеют преимущественную силу над правами и ограничениями, 
                     оговоренными в настоящем Соглашении.
                    </TextBox2lvl>
                    <Heading>
                        4. Права и обязаности администрации
                    </Heading>
                    <TextBox2lvl>
                    <Item>4.1.</Item>Администрация обязуется приложить все разумные усилия по обеспечению стабильной работы Сервиса,
                     постепенному его совершенствованию, исправлению ошибок в работе Сервиса, однако, Сервис предоставляется 
                     Пользователю по принципу «как есть». Это означает, что Администрация:  
                    </TextBox2lvl>
                    <TextBox2lvl>
                    <Item>4.2.</Item>не гарантирует отсутствие ошибок в работе Сервиса;
                    </TextBox2lvl>
                    <TextBox2lvl>
                    <Item>4.3.</Item>не несет ответственность за бесперебойную работу Сервиса и его совместимость с программным
                     обеспечением и техническими средствами Пользователя и иных лиц;
                    </TextBox2lvl>
                    <TextBox2lvl>
                    <Item>4.4.</Item>не несет ответственность за причинение любых убытков, которые возникли или могут возникнуть в
                     связи с или при использовании Сервисом;
                    </TextBox2lvl>
                    <TextBox2lvl>
                    <Item>4.5.</Item>не несет ответственность за неисполнение либо ненадлежащее исполнение своих обязательств
                     вследствие сбоев в телекоммуникационных и энергетических сетях, действий вредоносных программ, а также 
                     недобросовестных действий третьих лиц, направленных на несанкционированный доступ и(или) выведение из строя 
                     программного и(или) аппаратного комплекса Администрации. 
                    </TextBox2lvl>
                    <TextBox2lvl>
                    <Item>4.6.</Item>Администрация вправе предоставить Пользователю доступ к Сервису и поддерживать Сервис в 
                    рабочем состоянии, а также вправе приостанавливать предоставление доступа к Сервису на время, необходимое 
                    для проведения планово-профилактических и восстановительных работ на оборудовании с предварительным 
                    уведомлением Пользователя.
                    </TextBox2lvl>
                    <TextBox2lvl>
                    <Item>4.7.</Item>Администрация обязуется обеспечить конфиденциальность и сохранность всех данных полученных 
                    от Пользователя, кроме случаев, когда такое разглашение произошло по не зависящим от Администрации причинам, 
                    а также за исключением случаев, предусмотренных действующим международным и российским законодательством.
                    </TextBox2lvl>

                    <Heading>
                        5. Конфиденциальность
                    </Heading>
                    <TextBox2lvl>
                    <Item>5.1.</Item>Принятие настоящего Соглашения и использование в соответствии с ним Сервиса не предусматривает 
                    необходимость предоставления, сбора и(или) использования персональных данных Пользователей.  
                    </TextBox2lvl> 

                    <Heading>
                        6. Срок действия соглашения
                    </Heading>
                    <TextBox2lvl>
                    <Item>6.1.</Item>Настоящее Соглашение заключается между Сторонами на неопределенный срок.  
                    </TextBox2lvl> 

                    <Heading>
                        7. Дополнительные условия
                    </Heading>
                    <TextBox2lvl>
                    <Item>7.1.</Item>Действующая редакция настоящего Соглашения размещается в сети Интернет на 
                    веб-сайте Администрации по адресу: https://pupkin.ru/terms.pdf.  
                    </TextBox2lvl>
                    <TextBox2lvl>
                    <Item>7.2.</Item>Администрация оставляет за собой право в одностороннем порядке и без предварительного 
                    уведомления Пользователей изменять условия Соглашения, разместив при этом окончательную версию 
                    Соглашения на веб-сайте по адресу: https://shewzov.ru/terms.pdf за 10 (десять) дней до вступления 
                    изменений в силу. Положения новой редакции Соглашения становятся обязательными для всех ранее 
                    зарегистрировавшихся Пользователей Сервиса с даты его вступления в силу.
                    </TextBox2lvl>
                    <TextBox2lvl>
                    <Item>7.3.</Item>Пользователь подтверждает, что ознакомился со всеми положениями Соглашения, понимает 
                    и принимает их.
                    </TextBox2lvl>
                    <TextBox2lvl>
                    <Item>7.4.</Item>Пользователь обязуется использовать Сервис добросовестно и разумно.
                    </TextBox2lvl>
                    <TextBox2lvl>
                    <Item>7.5.</Item>Подлежащим применению к настоящему Соглашению правом является право Российской Федерации. 
                    </TextBox2lvl>    

                    <Heading>
                        8. Реквизиты
                    </Heading>
                    <TextBox1lvl>
                    ООО «ПУПКИН.РУ», ОГРН 1186372042856, ИНН 6102093865, КПП 611201002, юридический адрес: 
                    346705, Ростовская обл., Аксайский р-н, ул. Кирова, д. 87, 
                    почтовый адрес: 344000, г. Ростов-на-Дону, а/я 281.
                    </TextBox1lvl>
                  
                </Main>
                <Footer />
        </>
    );
};

