export default (state, action) => {
    const { type, payload } = action

    switch (type) {
        case 'INCREMENT': return state + 1
    }

    return state
}