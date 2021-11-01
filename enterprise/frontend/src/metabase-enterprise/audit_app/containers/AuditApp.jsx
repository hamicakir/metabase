import React from "react";

import AuditSidebar from "../components/AuditSidebar";
import SidebarLayout from "../components/SidebarLayoutFixedWidth";

type Props = {
  children: React.Element,
};

const AuditApp = ({ children }: Props) => (
  <SidebarLayout sidebar={<AuditSidebar />}>
    <div>{children}</div>
  </SidebarLayout>
);

export default AuditApp;
