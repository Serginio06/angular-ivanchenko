/**
 * Created by sergiiivanchenko on 06/07/2017.
 */
import React, {Component} from 'react'
import UserList from './UserList.jsx';




class App extends Component{
render(){

    this.users =[{"id":1,"first_name":"Rozalin","last_name":"Zorzi","email":"rzorzi0@dion.ne.jp","gender":"Female","ip_address":"16.124.88.91"},
        {"id":2,"first_name":"Renaldo","last_name":"Blunden","email":"rblunden1@hubpages.com","gender":"Male","ip_address":"55.78.9.116"},
        {"id":3,"first_name":"Malinde","last_name":"Keller","email":"mkeller2@w3.org","gender":"Female","ip_address":"160.225.215.83"},
        {"id":4,"first_name":"Tammy","last_name":"Boik","email":"tboik3@so-net.ne.jp","gender":"Male","ip_address":"111.49.91.211"},
        {"id":5,"first_name":"Tibold","last_name":"Neggrini","email":"tneggrini4@ox.ac.uk","gender":"Male","ip_address":"118.180.165.27"},
        {"id":6,"first_name":"Trudi","last_name":"McSparran","email":"tmcsparran5@multiply.com","gender":"Female","ip_address":"140.37.110.164"},
        {"id":7,"first_name":"Cathi","last_name":"McArthur","email":"cmcarthur6@friendfeed.com","gender":"Female","ip_address":"231.109.106.169"},
        {"id":8,"first_name":"Jobey","last_name":"Draayer","email":"jdraayer7@spiegel.de","gender":"Female","ip_address":"94.150.131.124"},
        {"id":9,"first_name":"Barry","last_name":"Blagden","email":"bblagden8@storify.com","gender":"Male","ip_address":"231.247.208.215"},
        {"id":10,"first_name":"Lincoln","last_name":"Nelhams","email":"lnelhams9@salon.com","gender":"Male","ip_address":"14.73.91.132"}];

    return (
        <div>
            <UserList users={this.users} />
        </div>
    )
}

}

export default App;




