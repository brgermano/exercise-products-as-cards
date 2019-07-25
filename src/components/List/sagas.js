import { takeLatest, call, put } from 'redux-saga/effects';
import { AFNPRO_EXERCISE_ADS_LIST_REQUEST, AFNPRO_EXERCISE_ADS_LIST_SUCCESS, AFNPRO_EXERCISE_ADS_LIST_FAILURE } from './actions';
import CallApi from '../Common/CallApi';

function* AdsListRequestSaga() {
  try {
    const AdsListRequestCall = yield call(CallApi, 'get', 'ads');
    const AdsListRequestData = AdsListRequestCall.data;
    const ads = AdsListRequestData.map(ad => ad.ads).flat();
    yield put({
      type: AFNPRO_EXERCISE_ADS_LIST_SUCCESS,
      ads
    });
  } catch (error) {
    yield put({
      type: AFNPRO_EXERCISE_ADS_LIST_FAILURE
    });
  }
}
export default function* ListSaga() {
  yield takeLatest(AFNPRO_EXERCISE_ADS_LIST_REQUEST, AdsListRequestSaga);
}
