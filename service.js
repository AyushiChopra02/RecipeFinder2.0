const queryStrings ={
    app_id: process.env.REACT_APP_ID,
    app_key:process.env.REACT_APP_APP_KEY
}
export const fetchData = async (defalutQuery) => {
    const {app_id , app_key} = queryString;
    try {
        const data = await fetch()
    }
    catch(e){
        console.log(e, 'something went wrong')
        return e
    }
}