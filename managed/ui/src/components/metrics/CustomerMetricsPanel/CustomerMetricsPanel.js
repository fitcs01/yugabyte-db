// Copyright (c) YugaByte, Inc.

import React, { Component } from 'react';
import { GraphPanelHeaderContainer, GraphPanelContainer } from '../../metrics';
import PropTypes from 'prop-types';

const graphPanelTypes = ['proxies', 'server', 'cql', 'redis', 'tserver', 'lsmdb'];

export default class CustomerMetricsPanel extends Component {
  static propTypes = {
    origin: PropTypes.oneOf(['customer', 'universe', 'table']).isRequired,
    nodePrefixes: PropTypes.array,
    width: PropTypes.number,
    tableName: PropTypes.string
  };

  static defaultProps = {
    nodePrefixes:[],
    tableName: null,
    width: null
  };

  render() {
    const { origin, nodePrefixes, width, tableName } = this.props;
    const graphPanelContainers = graphPanelTypes.map(function (type, idx) {
      return (<GraphPanelContainer key={idx} type={type} width={width}
                  nodePrefixes={nodePrefixes} tableName={tableName} />);
    });

    return (
      <GraphPanelHeaderContainer origin={origin}>
        {graphPanelContainers}
      </GraphPanelHeaderContainer>
    );
  }
}
