// Image = 4(0,1,2,3)


// Which Image is Visible
let flag = 0;

function controller(x){


    flag = flag + x;

    // Left  flag = 2 + (-1) = 1 Previous  Img
    // Right flag = 2 + (1 ) = 3 Next      Img


    
    slideShow(flag);

   
}



slideShow(flag);

function slideShow(num){

    let slides = document.getElementsByClassName("slide");//Array




    // Index (slides.length = 4) Then Reset to Index 0
    if(num == slides.length){

        flag = 0;
        num = 0;

    }
    // Index -1 then Reset to (slides.length =  4-1  = Index 3)
    if(num < 0){

        flag = slides.length - 1;//4-1 = Index 3
        num = slides.length - 1;

    }





    // When One Called Other Hided
    for(let i of slides){
        i.style.display = "none";
    }

    // Index 0 -  Image 1 Visible
    slides[num].style.display = "block";

    
}





