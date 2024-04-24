import { combineReducers } from 'redux';

import Auth from './auth';
import Payslip from './payslip';

export default combineReducers({
  Auth,
  Payslip,
});
