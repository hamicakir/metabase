import PropTypes from "prop-types";
import React from "react";

import LoadingAndErrorWrapper from "metabase/components/LoadingAndErrorWrapper";

import { SidebarRoot } from "./PermissionsSidebar.styled";
import {
  PermissionsSidebarContent,
  permissionSidebarContentPropTypes,
} from "./PermissionsSidebarContent";

export const permissionSidebarPropTypes = {
  isLoading: PropTypes.bool,
  error: PropTypes.string,
  ...permissionSidebarContentPropTypes,
};

export const PermissionsSidebar = ({ isLoading, error, ...contentProps }) => {
  return (
    <SidebarRoot>
      <LoadingAndErrorWrapper loading={isLoading} error={error} noWrapper>
        <PermissionsSidebarContent {...contentProps} />
      </LoadingAndErrorWrapper>
    </SidebarRoot>
  );
};

PermissionsSidebar.propTypes = permissionSidebarPropTypes;
