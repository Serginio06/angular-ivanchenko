export const asyncGetTasks = () => dispatch=> {

    setTimeout (()=> {


        fetch('data.json').then(resp=>resp.json()).then(resp=>{

            dispatch({
                type:"UPLOAD-USERS",
                payload:resp
            })

        });

    }, 2000)
};


