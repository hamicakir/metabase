import React from "react";
import { IndexRedirect } from "react-router";
import { t } from "ttag";

import { Route } from "metabase/hoc/Title";

import ErrorDetail from "./containers/ErrorDetail";
import ErrorOverview from "./containers/ErrorOverview";
import ToolsApp from "./containers/ToolsApp";

const getRoutes = (store: any) => (
  <Route path="tools" title={t`Tools`} component={ToolsApp}>
    <IndexRedirect to="errors" />
    <Route
      path="errors"
      title={t`Erroring Questions`}
      component={ErrorOverview}
    />
    <Route path="errors/:cardId" component={ErrorDetail} />
  </Route>
);

export default getRoutes;
