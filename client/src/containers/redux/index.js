//pure function
function reducer (state, action) {
    if (!state) return {
        title: 'default',
    };
    switch (action.type) {
        case 'UPDATE_TITLE':
            return { ...state, title: action.title };
        default:
            return state
    }
}
const store = createStore(reducer);
store.subscribe(() => renderApp(store.getState()));
// first time render
renderApp(store.getState());

store.dispatch(({type:'UPDATE_TITLE', title: 'changed'}));

function renderApp (appState) {
    const titleDOM = document.getElementById('title');
    titleDOM.innerHTML = appState.title.text;
}


function createStore (stateChanger) {
    let state = null;
    const listeners = [];
    const subscribe = (listener) => listeners.push(listener);
    const getState = () => state;
    const dispatch = (action) => {
        state = stateChanger(state, action);
        listeners.forEach((listener) => listener())
    };
    dispatch({});
    return { getState, dispatch, subscribe }
}