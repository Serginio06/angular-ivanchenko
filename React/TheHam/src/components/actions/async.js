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

export const asyncMoreNews = () => dispatch => {

    console.log ('asyncGetInitNews');

    setTimeout (()=> {
        // fetch ('./usersData.json').then (resp=> {
        fetch ('./data.json').then (resp =>resp.json ()).then (resp=> {

            console.log('resp',resp);

            dispatch ({
                type: "GET-MORE-NEWS",
                payload: resp
            })

        });

    }, 0)
};


export const asyncGetInitNews = () => dispatch => {

    console.log ('asyncGetInitNews');

    setTimeout (()=> {
        // fetch ('./usersData.json').then (resp=> {
        fetch ('./data.json').then (resp =>resp.json ()).then (resp=> {

            console.log('resp',resp);

            dispatch ({
                type: "GET-INIT-NEWS",
                payload: resp
            })

        });

    }, 0)
};





// export const asyncSearch = (age) => dispatch => {
//
//     setTimeout (()=> {
//         fetch ('usersData.json').then (resp=>resp.json ()).then (resp=> {
//
//             console.log ('Async SEARCH-USERS resp', resp);
//
//             dispatch ({
//                 type: "SEARCH-USERS",
//                 payload: age
//             })
//         });
//
//     }, 1500)
//
// };
