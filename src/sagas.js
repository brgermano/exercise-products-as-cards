import 'regenerator-runtime/runtime';
import { fork } from 'redux-saga/effects';
import ListSaga from './components/List/sagas';

function* rootSaga() {
  yield fork(ListSaga);
}
export default rootSaga;
