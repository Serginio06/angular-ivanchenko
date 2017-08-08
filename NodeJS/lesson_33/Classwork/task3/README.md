 Задание:
Дано массив users:
```
users = [
{ name: 'Jane', age: 23 }, { name: 'John', age: 30 }, { name: 'Vasya', age: 25 },
{ name: 'Yvonne', age: 34 }, { name: 'Will', age: 18 }, {name: 'Jack', age: 26}
]
```
Реализуйте следующее:
* При GET-запросе по пути '/users' в
ответе сервера отправляется массив users в формате JSON.
* При POST-запросе по пути '/users' в массив users добавляется
элемент {name: 'random user', age: 30}.

Модифицируйте код предыдущей задачи. Реализуйте следующее:
* При PUT-запросе по пути '/users/index', где index - индекс элемента в массиве users, элемент
по указанному индексу заменяется на следующий объект: {name: 'updated name', age: 'updated age'}.
* При DELETE-запросе по пути '/users/index', где index - индекс элемента в массиве users,
происходит удаление элемента с указанным индексом из массива.


>>>>> $ npm start  -  to run application
>>>>> Use postman:
>>>>> GET on http://localhost:1337/users return users
>>>>> POST on http://localhost:1337/users return users with random one
>>>>> PUT on http://localhost:1337/users/index change user indicated by index
>>>>> DELETE on http://localhost:1337/users/index delete user by index