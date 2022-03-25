const btnScrollToTop = document.querySelector("#btnScrollToTop");

btnScrollToTop.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
});

/*
    Control Quantity of given basket item
    Function will trigger on Click event,
    will change the value of closest .show-number element,
    also change subtotal
*/
function controlQuantity(event, increase = false) {
    let quantityElement = event.target.closest(".counter").children[1];
    let subTotalElement = event.target.closest(".cart_item").children[5].children[0].children[1];
    let itemPriceElement = event.target.closest(".cart_item").children[3].children[0].children[1];
    let itemPrice = parseInt(itemPriceElement.innerHTML);
    let currentValue = parseInt(quantityElement.innerHTML);

    if (!increase) {
        if (currentValue > 1) currentValue -= 1;
    } else {
        currentValue += 1;
    }
    quantityElement.innerHTML = currentValue;
    subTotalElement.innerHTML = (currentValue * itemPrice);
}

/*
    Assign controlQuantity to all required items
*/
window.addEventListener("click", function(event) {
    if (event.target.classList.contains('decrease')) controlQuantity(event);
    if (event.target.classList.contains('increase')) controlQuantity(event, true);
})