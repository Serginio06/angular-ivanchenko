 Задание:
Дано массив users:
```
users = [
{ name: 'Jane', age: 23 }, { name: 'John', age: 30 }, { name: 'Vasya', age: 25 },
{ name: 'Yvonne', age: 34 }, { name: 'Will', age: 18 }, {name: 'Jack', age: 26}
]
```

Реализуйте следующее:
* При GET-запросе по пути /users массив users отображается на странице в виде списка(по свойству name).
При клике по каждому из элементов списка отправляется GET-запрос по пути /users/userID, где userID - свойство id массива users, соответствующее элементу списка.
* При GET-запросе по пути /users/userID на странице отображается информация о соответствующем
пользователе - свойства элемента массива users - name и age.

>>>S.Ivanchenko>>> $ npm start  -  to run application
>>>S.Ivanchenko>>> $ open in browser http://localhost:1337/users