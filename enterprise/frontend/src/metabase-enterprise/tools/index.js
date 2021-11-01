import { t } from "ttag";

import { hasPremiumFeature } from "metabase-enterprise/settings";

import { PLUGIN_ADMIN_NAV_ITEMS, PLUGIN_ADMIN_ROUTES } from "metabase/plugins";

import getToolsRoutes from "./routes";

if (hasPremiumFeature("audit_app")) {
  PLUGIN_ADMIN_NAV_ITEMS.push({ name: t`Tools`, path: "/admin/tools" });
  PLUGIN_ADMIN_ROUTES.push(getToolsRoutes);
}
