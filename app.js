let tg = window.Telegram.WebApp;
tg.expand();

function sendOrder(serviceName) {
    tg.sendData(serviceName);
    tg.close();
}