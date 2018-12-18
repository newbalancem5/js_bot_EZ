'use strict';

const Telega = require('node-telegram-bot-api');
    
const token = '682285060:AAGrvXULKEAey9LQj51P71bUxoG-xL4euN0';
const bot = new Telega(token,{polling:true});


bot.on('message',function (msg){
  const id = msg.from.id,
        _messageText = msg.text,
        messageText =  _messageText.toLowerCase();

  if (messageText==='привет')  {
     bot.sendMessage(id,'Эщкере,всем эчпочмак');
  }
  else if (messageText==='биточек') {
    request('https://blockchain.info/ru/ticker', function(error, response, body){
        if (!error && response.statusCode === 200) {
          const data = JSON.parse(body);
          data.forEach(function(value, index) {
            bot.sendMessage(id,(`Валюта: ${value.buy} | продажа ${value.sell}`))
          })
          }


})

}
else if (messageText===('как поднять бабла?')) {
  bot.sendMessage(id,'спроси у Чернова Ильи https://vk.com/ichernov67 ')
}
else if (messageText===('чернов')) {
  let file = __dirname + `/img/ch.jpg`;
  bot.sendPhoto(id,file);
}
else if (messageText===('песня')) {
  let file = __dirname + `/audio/aka.mp3`;
  bot.sendAudio(id,file);
}
else {
  bot.sendMessage(id,'Поднимай бабла,а я только учусь')
}
});
