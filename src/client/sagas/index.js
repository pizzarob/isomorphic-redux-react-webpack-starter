import { LOCATION_CHANGE } from 'react-router-redux';
import { call, takeEvery } from 'redux-saga/effects';

function* locationChangeSaga() {
  yield call(console.log, 'LOCATION CHANGED - LOG FROM SAGA');
}

export default function* rootSaga() {
  yield [
    takeEvery(LOCATION_CHANGE, locationChangeSaga),
  ];
}
