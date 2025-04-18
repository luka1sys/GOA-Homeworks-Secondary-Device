const image = document.querySelector("img");
const btns = document.getElementsByTagName("button");
const imageSrc = ["https://www.exoticcarhacks.com/wp-content/uploads/2024/04/Rep8kgNA.jpeg","https://www.automoli.com/common/vehicles/_assets/img/gallery/f53/bmw-m5-f90.jpg","https://i.auto-bild.de/ir_img/3/8/1/0/6/8/3/BMW-M5-3797-1010x568-c03feff23bf2dc29.jpg","https://i0.wp.com/www.test.auto.pl/wp-content/uploads/2017/08/BMW-M5-F90-003.jpg?resize=1068%2C709"];
let index = 0;

console.log(index);

const imageSlider = (num) => {
    if(index + num >= 0 && index + num < 4) {
        index += num;
        image.src = imageSrc[index];
        console.log(index);
    }
}

btns[0].addEventListener("click", () => {
    imageSlider(-1);
})

btns[1].addEventListener("click", () => {
    imageSlider(1);
})