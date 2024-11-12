const breakfastMenu = ['Pancakes', 'Eggs Benedict', 'Oatmeal', 'Frittata'];
const mainCourseMenu = ['Steak', 'Pasta', 'Burger', 'Salmon'];
const dessertMenu = ['Cake', 'Ice Cream', 'Pudding', 'Fruit Salad'];

const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
      document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;

let mainCourseItem = '';
mainCourseMenu.forEach((item , index) => {
mainCourseItem += `<p>Item ${index + 1}: ${item} </p>`;});
document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;

let desertMenuItem = '';
dessertMenu.forEach((item , index) => {
    desertMenuItem += `<p>Item ${index + 1} : ${item}</p>`;
});
document.getElementById('dessertMenuItems').innerHTML = desertMenuItem;




const breakfastMenu2 = ['Pancakes- $12', 'Eggs Benedict -$22.99', 'Oatmeal -$21.99', 'Frittata -$15'];
let breakfastMenu2Item = '';
breakfastMenu2.forEach((item,index)=>{
    breakfastMenu2Item += `<p>Item ${index + 1}: ${item}</p>`;
});
document.getElementById('breakfastMenuItems2').innerHTML = breakfastMenu2Item;