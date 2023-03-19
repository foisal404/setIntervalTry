const images = [
    'images/pic-1.jpg', // 0
    'images/pic-2.jpg', // 1
    'images/pic-3.jpg',
    'images/pic-4.jpg',
    'images/pic-5.jpg',
    'images/pic-6.jpg',
    'images/pic-7.jpg',
    'images/pic-8.jpg',
    'images/pic-9.jpg', // 8
]
let count=0;
const image=document.getElementById('slider-img');
setInterval(()=>{
    if(count>=images.length){
        count=0;
    }
    console.log(count);
    // 2nd way 
    // const image=document.getElementById('slider-img').src=images[count];
    image.setAttribute('src',images[count]);
    count++;
  
},1000);