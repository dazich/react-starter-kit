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

  state = {
    count: 0,
  };

  componentDidMount() {
    console.info('this.props::::', this.props);
  }

  adds = async () => {
    await {};
    console.log('adds', this.state.count);
    this.setState({ x: 123, count: this.state.count + 11 }, () => console.info(1));
    console.info('count1', this.state)
    this.setState({ count: this.state.count + 1 }, () => console.info(2));
    console.info('count2', this.state)

    await new Promise(resolve => {
      this.setState({ count: this.state.count + 1 }, () => console.info(2));
      console.info('count2', this.state)
      resolve();
    })

    setTimeout(() => {
      // this.setState({ count: this.state.count + 1 }, () => console.info(4));
      // console.info('count4', this.state.count)
    })

    this.setState({ count: this.state.count + 1 }, () => console.info(5));
    console.info('count6', this.state)

  };

  render() {
    const { count } = this.state;
    console.info('rendering............')
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1 onClick={() => this.adds()}>
            React.js News：{count}-{this.props.count}
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
  add: async count => {
    setTimeout(() => dispatch(testThunk()), 1000);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
