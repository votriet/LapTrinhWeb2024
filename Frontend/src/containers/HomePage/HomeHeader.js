import React, { Component } from 'react';

import { connect } from 'react-redux';
import './HomeHeader.scss'
class HomeHeader extends Component {

    render() {

        return (
            <div className='home-header-container'>
                <div className='home-header-content'>
                <div className='left-content'>
                            {/* <i className='fas fa-bars'></i>
                            <img className='header-logo' src={logo} onClick={() => this.returnToHome()} /> */}
                        </div>
                        <div className='center-content'>
                        <div className='child-content'>
                                <div><b>Chuyên khoa</b></div>
                                <div className='subs-title'>tìm bác sĩ theo chuyên khoa</div>
                            {/* <div className='child-content'>
                                <div><b><FormattedMessage id="homeheader.speciality" /></b></div>
                                <div className='subs-title'><FormattedMessage id="homeheader.searchdoctor" /></div> */}
                            </div>

                            <div className='child-content'>
                                <div><b>Cơ Sở y tế</b></div>
                                <div className='subs-title'>tìm bác sĩ theo phòng khám</div>
                            {/* <div className='child-content'>
                                <div><b><FormattedMessage id="homeheader.speciality" /></b></div>
                                <div className='subs-title'><FormattedMessage id="homeheader.searchdoctor" /></div> */}
                            </div>
                            <div className='child-content'>
                                <div><b>Bác sĩ</b></div>
                                <div className='subs-title'>tìm bác sĩ theo bác sĩ</div>
                            {/* <div className='child-content'>
                                <div><b><FormattedMessage id="homeheader.speciality" /></b></div>
                                <div className='subs-title'><FormattedMessage id="homeheader.searchdoctor" /></div> */}
                            </div>
                            <div className='child-content'>
                                <div><b>Chuyên khoa</b></div>
                                <div className='subs-title'>tìm bác sĩ theo chuyên khoa</div>
                            {/* <div className='child-content'>
                                <div><b><FormattedMessage id="homeheader.speciality" /></b></div>
                                <div className='subs-title'><FormattedMessage id="homeheader.searchdoctor" /></div> */}
                            </div>
                            <div className='child-content'>
                                <div><b>Gói khám</b></div>
                                <div className='subs-title'>tìm bác sĩ theo tổng quát</div>
                            {/* <div className='child-content'>
                                <div><b><FormattedMessage id="homeheader.speciality" /></b></div>
                                <div className='subs-title'><FormattedMessage id="homeheader.searchdoctor" /></div> */}
                            </div>
                            {/* <div className='child-content'>
                                <div><b><FormattedMessage id="homeheader.health-facility" /></b></div>
                                <div className='subs-title'><FormattedMessage id="homeheader.select-room" /></div>
                            </div>
                            <div className='child-content'>
                                <div><b><FormattedMessage id="homeheader.doctor" /></b></div>
                                <div className='subs-title'><FormattedMessage id="homeheader.select-doctor" /></div>
                            </div>
                            <div className='child-content'>
                                <div><b><FormattedMessage id="homeheader.fee" /></b></div>
                                <div className='subs-title'><FormattedMessage id="homeheader.check-health" /></div>
                            </div>
                        </div> */}
                        <div className='right-content'>
                        <div className='support'><i className='fas fa-question-circle'></i>Hỗ trợ</div>
                            <div className="flag">VN</div>
                            </div>
                            {/* <div className='support'><i className='fas fa-question-circle'></i><FormattedMessage id="homeheader.support" /></div>
                            <div className={language === LANGUAGES.VI ? 'language-vi active' : 'language-vi'}>
                                <span onClick={() => this.changeLanguage(LANGUAGES.VI)}>VN</span>
                            </div>
                            <div className={language === LANGUAGES.EN ? 'language-en active' : 'language-en'}>
                                <span onClick={() => this.changeLanguage(LANGUAGES.EN)}>EN</span> */}
                            </div>
                        {/* </div> */}
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
