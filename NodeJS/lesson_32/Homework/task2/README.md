 Задание:
Создайте страницу регистрации пользователей.

База данных для сохранения сессий(таблица sessions) и пользователей(таблица users) находится
в папке db рядом с файлом с задачами.
Модуль для работы с паролем(его хэширования и проверки) находится в папке Homework рядом
с файлом с задачами.

* Создайте страницу с полями ввода username и password и кнопкой sign up.
* Если поля ввода не пустые, при нажатии на кнопку sign up, пароль хэшируется. Хэш
пароля и имя пользователя
сохраняются в таблице users базы данных session_test.


>>>>> $ npm start  -  to run application
>>>>> Open in browser page - http://localhost:1337/ to see result of select.
>>>>> mySQL user: root@localhost  password: 123456 database:'newschema'