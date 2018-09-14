/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.css';
import { add, testThunk } from '../../actions/runtime';

class Home extends React.Component {
  static propTypes = {
    news: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
        content: PropTypes.string,
      }),
    ).isRequired,
  };

  componentDidMount() {
    console.info('this.props::::', this.props);
  }

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1 onClick={() => this.props.add(1)}>
            React.js News：{this.props.count}
          </h1>
          {this.props.news.map(item => (
            <article key={item.link} className={s.newsItem}>
              <h1 className={s.newsTitle}>
                <a href={item.link}>{item.title}</a>
              </h1>
              <div
                className={s.newsDesc}
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{ __html: item.content }}
              />
            </article>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    count: state.add.count,
  };
};

const mapDispatchToProps = dispatch => ({
  add: async (count) => {
    setTimeout(() => dispatch(testThunk()), 1000);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
