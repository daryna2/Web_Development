const allImages = document.getElementsByTagName('img');
for(let img of allImages) {
    console.log(img.src);
}

const squareImages = document.getElementsByClassName('square');
 for(let img  of squareImages) {
    img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Partridge_Silkie_hen.jpg/900px-Partridge_Silkie_hen.jpg'
 }
 console.log(document.getElementById('banner'));

 //QuerySelector
 document.querySelector('p'); //give only first match
 document.querySelector('#banner');
 document.querySelector('.square');
 console.log(document.querySelector('img:nth-of-type(2)'));
 console.log(document.querySelector('a[title ="Java"]'));

 //QuerySelectorAll
 document.querySelectorAll('p');
const links =  document.querySelectorAll('p a');
for (let link of links) {
    console.log(link.href);
}
const h1 = document.querySelector('h1');

console.log(document.querySelector('p').innerText);
console.log(document.querySelector('p').textContent);
const allLinks = document.querySelectorAll('a');
for(let link of allLinks) {
    link.innerText = "I'm a link!!";
}
document.querySelector('h1').innerHTML = '<i> ask</i>';
document.querySelector('#banner').id = 'whoops';
document.querySelector('#whoops').id = 'banner';
document.querySelector('#banner').src ;
const firstLink = document.querySelector('a');
console.log(firstLink.getAttribute('href'));
console.log(firstLink.getAttribute('title'));
firstLink.setAttribute('href','http://www.google.com');
const input = document.querySelectorAll('input [type = "text"]');
//Changing Style
h1.style.color = 'green';
h1.style.fontSize = '3em';
h1.style.border = '2px solid pink';
for(let link of allLinks) {
  link.style.color ='rgb(0,108,134)'  ; 
  link.style.textDecorationColor = 'magenta';
  link.style.textDecorationStyle = 'wavy';
}
console.log(window.getComputedStyle(h1).color);
console.log(window.getComputedStyle(h1).fontSize);
console.log(window.getComputedStyle(h1).fontFamily);
console.log(window.getComputedStyle(h1).margin );

// const text = document.querySelector('#container');
// text.style.textAlign = 'center';
// const image = document.querySelector('img');
// image.style.width = '150px';
// image.style.borderRadius = '50%';


// const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']; 
// const rainbow = document.querySelectorAll('span');

//     for(let i=0;i<colors.length;i++) {
//         for(let i=0;i<rainbow.length; i++) {
//         rainbow[i].style.color = colors[i];
//     }
// }
const h2 = document.querySelector('h2');
h2.setAttribute('class','purple');
h2.setAttribute('class','border');
h2.classList.add('purple');
h2.classList.add('border');
h2.classList.remove('border');
h2.classList.contains('purple');
h2.classList.toggle('purple');

// const elements = document.querySelectorAll('li');
// for(let element of elements){
// element.classList.toggle('highlight')
// }
 const firstBold = document.querySelector('b');
 const paragraph = firstBold.parentElement;
 paragraph.children;
 paragraph.children[0].parentElement;
 const squareImg = document.querySelector('.square');
 squareImg.parentElement;
 squareImg.nextSibling;
 squareImg.previousSibling;
 squareImg.nextElementSibling;
 squareImg.previousElementSibling;
 const newImage = document.createElement('img');
 newImage.src = "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?cs=srgb&dl=pexels-chevanon-photography-1108099.jpg&fm=jpg"
 document.body.appendChild(newImage);
 newImage.classList.add('square');
 const newH3 = document.createElement('h3');
 newH3.innerHTML = "I am new";
 document.body.appendChild(newH3);
 const p = document.querySelector('p');
 p.append('i am new text');
const newB = document.createElement('b');
newB.append('hi');
p.prepend(newB);
const h_2  = document.createElement('h2');
h_2.append("Are adorable chickens");
const h_1 = document.querySelector('h1');
h_1.insertAdjacentElement('afterend',h_2);
// for(let i=0;i<100; i++){
//     const newButton  =   document.createElement('button');
//     newButton.innerText = 'Hey!';
//     const div = document.querySelector('div');
//     div.appendChild(newButton);
//   }
