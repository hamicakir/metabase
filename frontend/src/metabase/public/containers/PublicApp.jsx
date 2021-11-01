import React, { Component } from "react";
import { connect } from "react-redux";

import PublicError from "metabase/public/components/PublicError";
import PublicNotFound from "metabase/public/components/PublicNotFound";

type Props = {
  children: any,
  errorPage?: { status: number },
};

const mapStateToProps = (state, props) => ({
  errorPage: state.app.errorPage,
});

@connect(mapStateToProps)
export default class PublicApp extends Component {
  props: Props;

  render() {
    const { children, errorPage } = this.props;
    if (errorPage) {
      if (errorPage.status === 404) {
        return <PublicNotFound />;
      } else {
        return <PublicError />;
      }
    } else {
      return children;
    }
  }
}
