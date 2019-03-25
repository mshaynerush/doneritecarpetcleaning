if ( document.readyState = 'loading'){
    document.addEventListener('DOMContentLoaded', ready)

} else {
    ready();
}
var i = 0;
var p = 0;
function ready(){


var prevBtn = document.getElementById('prevBtn');
var nextBtn = document.getElementById('nextBtn');
var subBtn = document.getElementById('submitBtn');

prevBtn.addEventListener('click', changeImg);

nextBtn.addEventListener('click', changeImg);

subBtn.addEventListener('click', verifyEmail);

}

function changeImg(event){


    var slideRow = document.getElementsByClassName('carousel-slide')[0];
    var currImg = slideRow.getElementsByTagName('img');
    //currImg[0].classList


    var x = event.target;
    var btn = x.id;
   


        if ( btn == "nextBtn"){
            if( i < currImg.length - 1) {

                i++;
                p = i - 1;
    
        } else {
            i = 0;
            p = currImg.length - 1;
        }

           
            currImg[i].classList.add('active');
            currImg[i].classList.remove('last');
            currImg[p].classList.add('last'); 


    } else if ( btn = "prevBtn"){
            if ( i <= 0 ){
                i = currImg.length - 1;
                p = 0;
            } else {
                i--;
                p = i + 1;
            }

            currImg[i].classList.add('active-img');
            currImg[i].classList.remove('last');
            currImg[p].classList.add('last');
        }
      



  console.log(i, p, currImg[i]);

}

function verifyEmail(){

        var email = document.getElementById('email').value;
        if (email.indexOf("@",0) < 0) {
            alert("Please Enter a valid e-mail address!");
            document.getElementById('email').style = "border-color: #AA0000";
        return;
        }
}