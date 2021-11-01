import React from "react";
import { IndexRedirect } from "react-router";
import { t } from "ttag";

import { Route } from "metabase/hoc/Title";
import {
  PLUGIN_ADMIN_PERMISSIONS_TABLE_ROUTES,
  PLUGIN_ADMIN_PERMISSIONS_TABLE_GROUP_ROUTES,
} from "metabase/plugins";

import CollectionPermissionsPage from "./pages/CollectionPermissionsPage/CollectionPermissionsPage";
import DataPermissionsPage from "./pages/DataPermissionsPage/DataPermissionsPage";
import DatabasesPermissionsPage from "./pages/DatabasePermissionsPage/DatabasesPermissionsPage";
import GroupsPermissionsPage from "./pages/GroupDataPermissionsPage/GroupsPermissionsPage";

const getRoutes = () => (
  <Route title={t`Permissions`} path="permissions">
    <IndexRedirect to="data" />

    <Route path="data" component={DataPermissionsPage}>
      <IndexRedirect to="group" />

      <Route
        path="database(/:databaseId)(/schema/:schemaName)(/table/:tableId)"
        component={DatabasesPermissionsPage}
      >
        {PLUGIN_ADMIN_PERMISSIONS_TABLE_GROUP_ROUTES}
      </Route>

      <Route
        path="group(/:groupId)(/database/:databaseId)(/schema/:schemaName)"
        component={GroupsPermissionsPage}
      >
        {PLUGIN_ADMIN_PERMISSIONS_TABLE_ROUTES}
      </Route>
    </Route>

    <Route path="collections" component={CollectionPermissionsPage}>
      <Route path=":collectionId" />
    </Route>
  </Route>
);

export default getRoutes;
