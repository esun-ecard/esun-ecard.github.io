const urlParams = new URLSearchParams(window.location.search);
const term = urlParams.get('utm_term')
console.log('Term is: ', term);
switch (term) {
    case 'life':
        $(".kv_pic").attr("src", "life_card.png");
        break;
    case 'fashion':
        $(".kv_pic").attr("src","fashion_card.png");
        break;
}
