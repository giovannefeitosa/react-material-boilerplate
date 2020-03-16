import React from 'react';
import { connect } from 'react-redux';
import { LoadingGif } from './styles';

const Loading = ({ loading }) => {
  if (loading) return <LoadingGif />;
  return <></>;
};

const mapState = state => ({
  loading: state.core.loading,
});

export default connect(mapState)(Loading);
