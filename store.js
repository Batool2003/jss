var removeCartItemButtons = document.getElementsByClassName('btn-danger');
console.log(removeCartItemButtons);

for (var i = 0; i < removeCartItemButtons.length; i++) {
    var button = removeCartItemButtons[i];
    button.addEventListener('click', function (event) {
        var buttonClicked = event.target
        buttonClicked.parentElement.parentElement.remove()

    });
}










// }
// var removeCartItemButtons = document.getElementsByClassName('btn-danger');
// console.log(removeCartItemButtons);

// for (var i = 0; i < removeCartItemButtons.length; i++) {
//     var button = removeCartItemButtons[i];
//     button.addEventListener('click', function (event) {
//         console.log('Button clicked');
//         var buttonClicked = event.target;
//         var cartRow = buttonClicked.closest('.cart-row');
//         if (cartRow) {
//             cartRow.remove();
//             console.log('Item removed');
//         }
//     });
// }
