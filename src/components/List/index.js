import React, { Component, Fragment } from 'react';
import { isEmpty, uniqueId } from 'lodash';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { AdsListRequestAction } from './actions';
import Card from '../Common/Card';

class List extends Component {
  componentDidMount() {
    this.props.AdsListRequestAction();
  }

  render() {
    const {
      list,
      status: { loading, failure },
      match: {
        params: { listId }
      }
    } = this.props;
    const listAds = !isEmpty(list)
      ? list.map(item => {
          if (!isEmpty(listId) && listId === item.id) {
            return (
              <Fragment key={uniqueId('afnpro-test-list-item-')}>
                <Helmet>
                  <title>{item.title}</title>
                </Helmet>
                <Card cardInfo={item} type="detail" />
              </Fragment>
            );
          }
          if (isEmpty(listId)) {
            return <Card key={uniqueId('afnpro-test-list-item-')} cardInfo={item} type="list" />;
          }
          return '';
        })
      : '';
    return (
      <div className="row">
        {loading && (
          <div className="progress">
            <div className="indeterminate" />
          </div>
        )}
        {!loading && !failure && isEmpty(listId) && (
          <Helmet>
            <title>List</title>
          </Helmet>
        )}
        {failure && <h2>Problem in your request, try again!</h2>}

        {listAds}
      </div>
    );
  }
}
export default connect(
  state => ({ list: state.list.data, status: state.list.status }),
  { AdsListRequestAction }
)(List);

List.propTypes = {
  AdsListRequestAction: PropTypes.func,
  list: PropTypes.arrayOf(PropTypes.object),
  match: PropTypes.objectOf(PropTypes.shape),
  status: PropTypes.objectOf(PropTypes.shape)
};
List.defaultProps = {
  AdsListRequestAction: '',
  list: [],
  match: {},
  status: {}
};
