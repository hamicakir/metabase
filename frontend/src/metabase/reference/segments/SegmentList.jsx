/* eslint "react/prop-types": "warn" */
import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";
import { t } from "ttag";

import AdminAwareEmptyState from "metabase/components/AdminAwareEmptyState";
import List from "metabase/components/List";
import S from "metabase/components/List.css";
import ListItem from "metabase/components/ListItem";
import LoadingAndErrorWrapper from "metabase/components/LoadingAndErrorWrapper";
import MetabaseSettings from "metabase/lib/settings";
import * as metadataActions from "metabase/redux/metadata";

import ReferenceHeader from "../components/ReferenceHeader";
import { getSegments, getError, getLoading } from "../selectors";

const emptyStateData = {
  title: t`Segments are interesting subsets of tables`,
  adminMessage: t`Defining common segments for your team makes it even easier to ask questions`,
  message: t`Segments will appear here once your admins have created some`,
  image: "app/assets/img/segments-list",
  adminAction: t`Learn how to create segments`,
  adminLink: MetabaseSettings.docsUrl(
    "administration-guide/07-segments-and-metrics",
    "creating-a-segment",
  ),
};

const mapStateToProps = (state, props) => ({
  entities: getSegments(state, props),
  loading: getLoading(state, props),
  loadingError: getError(state, props),
});

const mapDispatchToProps = {
  ...metadataActions,
};

@connect(mapStateToProps, mapDispatchToProps)
export default class SegmentList extends Component {
  static propTypes = {
    style: PropTypes.object.isRequired,
    entities: PropTypes.object.isRequired,
    loading: PropTypes.bool,
    loadingError: PropTypes.object,
  };

  render() {
    const { entities, style, loadingError, loading } = this.props;

    return (
      <div style={style} className="full">
        <ReferenceHeader name={t`Segments`} />
        <LoadingAndErrorWrapper
          loading={!loadingError && loading}
          error={loadingError}
        >
          {() =>
            Object.keys(entities).length > 0 ? (
              <div className="wrapper wrapper--trim">
                <List>
                  {Object.values(entities).map(
                    (entity, index) =>
                      entity &&
                      entity.id &&
                      entity.name && (
                        <li className="relative" key={entity.id}>
                          <ListItem
                            id={entity.id}
                            index={index}
                            name={entity.display_name || entity.name}
                            description={entity.description}
                            url={`/reference/segments/${entity.id}`}
                            icon="segment"
                          />
                        </li>
                      ),
                  )}
                </List>
              </div>
            ) : (
              <div className={S.empty}>
                <AdminAwareEmptyState {...emptyStateData} />
              </div>
            )
          }
        </LoadingAndErrorWrapper>
      </div>
    );
  }
}
