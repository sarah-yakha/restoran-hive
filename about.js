export function getAbout (){
const aboutSection = document.createElement('div');
aboutSection.classList.add('about-section');
const aboutTitle = document.createElement('h3');
aboutTitle.classList.add('aboutTitle')
const aboutText = document.createElement('p');
aboutText.classList.add('aboutText')
aboutTitle.textContent ='O нас';
const longText = `Оставим описание для лучших времен! И насладимся строками из стихотворения С-Х.Нунаева.\n                  
\nВо тьме глухих тысячелетий,
Под пылью сказочных времен,
Укрыты судьбы поколений
Давно исчезнувших племен.

Там, на Востоке наши корни —
Среди хурритов и шумер,
Среди урартов и дзурздуков,
Среди лулуйцев и гергер.

Восток — таинственный целитель —
Обитель мифов и богов.
Земля легенд, земля истоков.
Для душ заблудших вечный кров.
Здесь средь высоких зикурратов,
Роскошных храмов и дворцов
Гонимых варваром вайнахов
Живет могучий дух отцов.

Мы — нахи! Мы народ бессмертья!
Так-как бессмертен тот Восток
Исток божественного духа —
Нам вечно силы он дает.

Будь горд, мой брат, пускай бесится
В смертельной злобе сатана.
Бессильный, опошленный Запад
Замыслил испытать тебя.
`
aboutText.textContent = longText;

aboutSection.append(aboutTitle, aboutText);
return aboutSection;
}