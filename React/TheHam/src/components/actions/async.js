
export const asyncMoreNews = (quantity) => dispatch => {

    setTimeout (()=> {
        // fetch ('./usersData.json').then (resp=> {
        // fetch ('./data/data.json').then (resp =>resp.json ()).then (resp=> {

            // console.log('resp',resp);

            dispatch ({
                type: "GET-MORE-NEWS",
                payload: quantity
            });

        // });

    }, 0)
};


export const asyncGetInitNews = () => dispatch => {

    setTimeout (()=> {
        fetch ('./data/data.json').then (resp =>resp.json ()).then (resp=> {
            dispatch ({
                type: "GET-INIT-NEWS",
                payload: resp
            })
        });

    }, 0)
};


export const asyncGetInitFeedback = () => dispatch => {

    setTimeout (()=> {
        fetch ('./data/feedback.json').then (resp =>resp.json ()).then (resp=> {
            dispatch ({
                type: "GET-INIT-FEEDBACK",
                payload: resp
            })
        });
    }, 0)
};


