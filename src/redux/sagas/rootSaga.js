import { all } from 'redux-saga/effects';
import { watchAddToCartSaga, watchRemoveFromCartSaga } from './cartSagas';
import { watchFindCustomerSaga, watchFindEmployeeSaga } from './userSagas';

export default function* rootSaga() {
  yield all([watchFindCustomerSaga(), watchFindEmployeeSaga(), watchAddToCartSaga(), watchRemoveFromCartSaga()]);
}
