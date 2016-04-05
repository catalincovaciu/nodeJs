// setTimeout does not pause, but schedules the 'callback' code to be executed in 5 secs
function placeOrder(orderNumber) {
    console.log('Customer order: ', orderNumber);

    cookAndDeliverFood(function () {
        console.log('Delivered food order: ', orderNumber);
    });
}

// Simulate a 5 second operation
function cookAndDeliverFood(callback) {
    setTimeout(callback, 5000);
}

// Simulate user web req
placeOrder(1);
placeOrder(2);
placeOrder(3);
placeOrder(4);
placeOrder(5);
placeOrder(6);