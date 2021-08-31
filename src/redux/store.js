import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';
import ReduxThunk from 'redux-thunk';
import createSageMiddleware from 'redux-saga';
import rootSaga from './sagas/cartSagas';

const sagaMiddleware = createSageMiddleware();
const middleware = [sagaMiddleware];
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));

sagaMiddleware.run(rootSaga);

export default store;
