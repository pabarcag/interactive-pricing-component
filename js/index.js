const $range = document.querySelector('.form__range');
const $priceText = document.querySelector('.form__price');
const $pageviewsText = document.querySelector('.form__pagetext');
const $form = document.getElementById('form');
const $switchBg = document.querySelector('.form__switch');
const $switchCircle = document.querySelector('.form__circle');
const $submitButton = document.querySelector('.form__start');
const prices = [8,12,16,24,36];
const pageTexts = ['10K pageviews','50K pageviews','100K pageview','500k pageviews','1M pageviews'];


function filterNum (array,number){
    const numFilter = array.filter((element)=>{ return element == number});
    return numFilter
 }


 function filterText (array,word){
     const textFilter = array.filter((element)=>element == word);
     return textFilter;
 }

 function showPrice(){
    if(range.value == 1){
        $priceText.textContent = '$'+filterNum(prices, 8) +'.00';
        $pageviewsText.textContent = filterText(pageTexts, '10K pageviews')
    }
    if(range.value == 2){
        $priceText.textContent = '$'+filterNum(prices, 12) +'.00';
        $pageviewsText.textContent = filterText(pageTexts, '50K pageviews')
    }
    if(range.value == 3){
        $priceText.textContent = '$'+filterNum(prices, 16) +'.00';
        $pageviewsText.textContent = filterText(pageTexts, '100K pageview')
    }
    if(range.value == 4){
        $priceText.textContent = '$'+filterNum(prices, 24) +'.00';
        $pageviewsText.textContent = filterText(pageTexts, '500k pageviews')
    }
    if(range.value == 5){
        $priceText.textContent = '$'+filterNum(prices, 36) +'.00';
        $pageviewsText.textContent = filterText(pageTexts, '1M pageviews')
    }
}

function calcDiscount(){
    if(switchActive == true && range.value == 1){
        $priceText.textContent = '$'+filterNum(prices, 8)/100*75 +'.00';
    }
    if(switchActive == true && range.value == 2){
        $priceText.textContent = '$'+ Math.round(filterNum(prices, 12)/100*75) +'.00';
    }
    if(switchActive == true && range.value == 3){
        $priceText.textContent = '$'+ filterNum(prices, 16)/100*75 +'.00';
    }
    if(switchActive == true && range.value == 4){
        $priceText.textContent = '$'+ filterNum(prices, 24)/100*75 +'.00';
    }
    if(switchActive == true && range.value == 5){
        $priceText.textContent = '$'+ filterNum(prices, 36)/100*75 +'.00';
    }
}


/*switch*/
 let switchActive = false;

 document.addEventListener('click',(e)=>{
     if(e.target.matches('.form__switch') || e.target.matches('.form__circle')){
         $switchBg.classList.toggle('form__switch--active');
         $switchCircle.classList.toggle('form__circle--active');
         switchActive = !switchActive;
         if(switchActive == true){
            calcDiscount();
         }else{
            showPrice()
         }

     }
 
 });

 /*range*/ 
$range.addEventListener('change',(e)=>{
    showPrice();
        if(switchActive == true){
            calcDiscount();
         }
});

$submitButton.addEventListener('click',(e)=>{
    $form.submit();
})