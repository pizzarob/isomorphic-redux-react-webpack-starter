import { LOCATION_CHANGE } from 'react-router-redux';
import { call, takeEvery } from 'redux-saga/effects';

function* locationChangeSaga() {
  yield call(console.log, 'LOCATION CHANGED - EXAMPLE, THIS IS A CONSOLE LOG WITHIN A SAGA - sagas/index.js'); //eslint-disable-line
}

export default function* rootSaga() {
  yield [
    takeEvery(LOCATION_CHANGE, locationChangeSaga),
  ];
}
