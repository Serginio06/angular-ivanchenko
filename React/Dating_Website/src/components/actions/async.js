// export const asyncGetTasks = () => dispatch=> {
//
//     setTimeout (()=> {
//
//
//         fetch('data.json').then(resp=>resp.json()).then(resp=>{
//
//             dispatch({
//                 type:"GET-TASKS-SUCCESS",
//                 payload:resp
//             })
//
//         });
//
//     }, 2000)
// };
//
export const asyncGetInitUsers = () => dispatch => {

    console.log ('asyncGetInitUsers');

    setTimeout (()=> {


        // fetch ('./usersData.json').then (resp=> {
        fetch ('./usersData.json').then (resp =>resp.json ()).then (resp=> {

            // console.log ('GET-INIT-USERS resp', resp.body.toString());
            // console.log (JSON.stringify(resp.body.toString()));

            console.log('resp',resp);
            
            dispatch ({
                type: "GET-INIT-USERS",
                payload: resp
            })

        });

    }, 0)
};

export const asyncSearch = (age) => dispatch => {

    setTimeout (()=> {
        fetch ('usersData.json').then (resp=>resp.json ()).then (resp=> {

            console.log ('Async SEARCH-USERS resp', resp);

            dispatch ({
                type: "SEARCH-USERS",
                payload: age
            })
        });

    }, 1500)

};
