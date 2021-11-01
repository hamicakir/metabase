// Reducers needed for main application
import { combineReducers } from "redux";

/* admin */
import admin from "metabase/admin/admin";

/* alerts */
import alert from "metabase/alert/alert";

/* dashboards */
import dashboard from "metabase/dashboard/reducers";
import * as home from "metabase/home/reducers";

/* pulses */
import * as pulse from "metabase/pulse/reducers";

/* query builder */
import * as qb from "metabase/query_builder/reducers";

/* revisions */
import revisions from "metabase/redux/revisions";

/* data reference */
import reference from "metabase/reference/reference";

/* setup */
import * as setup from "metabase/setup/reducers";

import commonReducers from "./reducers-common";

export default {
  ...commonReducers,

  // main app reducers
  alert,
  dashboard,
  home: combineReducers(home),
  pulse: combineReducers(pulse),
  qb: combineReducers(qb),
  reference,
  revisions,
  setup: combineReducers(setup),
  admin,
};
