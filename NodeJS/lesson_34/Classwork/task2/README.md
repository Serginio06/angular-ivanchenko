 Задание:
###Задача 1
* Создайте Express сервер и подключите к нему модуль socket.io.

###Задача 2
Дополните код предыдущей задачи.

* С помощью socket.io сгенерируйте событие 'greet', которое
передаст следующие данные: {text: 'Hello from Socket.IO'}.
* Создайте клиента socket.io. Установите обработчик события 'greet', которая
выводит на экран данные, переданные через событие и генерирует событие 'receive_message'.
* На стороне сервера установите обработчик события 'receive_message', который
 выведет в консоль текст 'message received'.


>>>>> $ npm start  -  to run application
>>>>> Open in browser page - http://localhost:1337/ to see result of event 'greet' emit.