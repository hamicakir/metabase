/* eslint-disable react/prop-types */
import React from "react";
import { t } from "ttag";

import LdapAndEmailForm from "metabase/auth/components/LdapAndEmailForm";
import { PLUGIN_AUTH_PROVIDERS } from "metabase/plugins";

const EmailButton = ({ children }) => (
  <div className="pt2 cursor-pointer text-grey-1 text-right">{t`Sign in with email`}</div>
);

const PASSWORD_PROVIDER = {
  name: "password",
  Button: EmailButton,
  Panel: LdapAndEmailForm,
};

PLUGIN_AUTH_PROVIDERS.push(providers => [...providers, PASSWORD_PROVIDER]);
