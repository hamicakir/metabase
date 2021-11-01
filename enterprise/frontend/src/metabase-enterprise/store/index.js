import { t } from "ttag";

import MetabaseSettings from "metabase/lib/settings";
import { PLUGIN_ADMIN_NAV_ITEMS, PLUGIN_ADMIN_ROUTES } from "metabase/plugins";

import getRoutes from "./routes";

if (!MetabaseSettings.isHosted()) {
  PLUGIN_ADMIN_NAV_ITEMS.push({ name: t`Enterprise`, path: "/admin/store" });
  PLUGIN_ADMIN_ROUTES.push(getRoutes);
}
