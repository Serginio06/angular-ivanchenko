 Задание:
* Создайте Express сервер и подключите к нему модуль socket.io.
* На стороне сервера создайте пространство имен с произвольным именем,
которое генерирует событие 'message' и передает через событие объект {text: 'Hello from namespace'}.
* На стороне клиента создайте обработчик события 'message', который выводит
данные, переданные через событие, на экран и генерирует событие 'receive_message'. .
* На стороне сервера установите обработчик события 'receive_message', который
выведет в консоль текст 'message received'.


>>>>> $ npm start  -  to run application
>>>>> Open in browser page - http://localhost:1337/message to see result of event 'message' emit.