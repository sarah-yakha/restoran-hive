import imags from './img/CH1apilg2.jpg';
import images from './img/Holtmash-s-dikoy-zelenyu.jpg';
import imG from './img/vtoraya_zhena_16.jpg';
import iMG from './img/unnamed.jpg'


export class MenuItem {
    constructor(name, description, imgUrl, price){
        this.name = name;
        this.description = description;
        this.imgUrl = imgUrl;
        this.price = price;
    }
    render(){
        const menuItem = document.createElement('div');
            menuItem.classList.add('menu-item');
        const img = document.createElement('img');
        img.src = this.imgUrl;
        img.alt = this.name;
        img.alt = this.name;
        img.classList.add('menu-img');

        const title = document.createElement('h2');
        title.textContent = this.name;
        title.classList.add('menu-title');
        
        const desc = document.createElement('p');
        desc.textContent = this.description;
        desc.classList.add('menu-desc');

        const price = document.createElement('p');
        price.textContent = `Цена: ${this.price} рублей`;
        price.classList.add('menu-price')
        const divmenu = document.createElement('div');
        divmenu.classList.add('divmenu');
        divmenu.append(img)

        const secondmenu = document.createElement('div');
        secondmenu.classList.add('secondmenu');
        secondmenu.append(title, desc, price);

        menuItem.append(divmenu, secondmenu);

        return menuItem;
    }
}
export function getMenu(){

    const menuSection = document.createElement('div');
    menuSection.className = 'menu-section';
    menuSection.classList.add('menu-section');
    const galush = new MenuItem(
        'Жижаг-галнаш',
        'Традиционное чеченское блюдо с мясом и галушками из пшеничной муки.Также, к ним подается чесночный соус',
        iMG,
        600,
    )
    
    const hingal = new MenuItem(
        'Хингал',
        'Любимое из сладкого для  чеченцев!тонкие лепешки с тыквой, пропитанные топленным маслом ',
        imG,
        250,
    )
    
    const holtamash = new MenuItem(
        'Холтамаш', 
        'В основном готовятся традиционно в период появления черемши.Курзе из пшеничной муки с начинкой из черемши и творога',
        images,
        400,
    )
  
    const chepalg = new MenuItem(
        'Ч1епалг',
        'Тоже относится к традиционным блюдам чеченцев.Тонкие лепешки с творогом и пропитанные топленным маслом',
        imags,
        250,
    )
    
    
    
    menuSection.append(galush.render(), hingal.render(), holtamash.render(), chepalg.render())

    
    
    return menuSection;
}

