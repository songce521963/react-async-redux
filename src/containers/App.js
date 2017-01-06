import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators }  from 'redux';
import { Search, Profile } from '../components';
import { fetchUserInfo } from '../actions/actions.js';
import './App.less';

/*function mapStateToProps(state) {
  return {
    profile: state.profile,
    isFetchingData: state.isFetchingData,
  };
}

const mapDispatchToProps = (dispatch) => ({
  fetchUserInfo: bindActionCreators(fetchUserInfo, dispatch),
  dispatch : dispatch
})*/

/*const App = ({fetchUserInfo, profile, isFetchingData}) =>{
  return (
      <div className='container'>
        <Search fetchUserInfo={fetchUserInfo} isFetchingData={isFetchingData} />
        {'name' in profile ? <Profile profile={profile} isFetchingData={isFetchingData} /> : ''}
      </div>
  )
}
*/


@connect(
  (state,props) => ({profile: state.profile, isFetchingData: state.isFetchingData}),
  (dispatch) =>({fetchUserInfo: bindActionCreators(fetchUserInfo, dispatch), dispatch})
)
export default class App extends Component {
  render() {
    const { fetchUserInfo, profile, isFetchingData } = this.props;
    return (
      <div className='container'>
        <Search fetchUserInfo={fetchUserInfo} isFetchingData={isFetchingData} />
        {'name' in profile ? <Profile profile={profile} isFetchingData={isFetchingData} /> : ''}
      </div>
    );
  }
}

/*export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);*/
