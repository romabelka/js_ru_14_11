import jquery from 'jquery'

export default store => next => action => {
    const { callAPI, ...rest } = action
    if (!callAPI) return next(action)

    jquery.get(callAPI)
        .done(response => {
            next({...rest, response})
        })
}