import React, { Component } from 'react';

import { connect } from 'react-redux';
import './HomeHeader.scss'
class HomeHeader extends Component {

    render() {

        return (
            <React.Fragment>
            <div className='home-header-container'>
                <div className='home-header-content'>
                <div className='left-content'>
                <i className='fas fa-bars'></i>
                <div className='header-logo'></div>
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
            <div className='home-header-banner'>
                <div className='content-up'>
                <div className='title1'>NỀn TẢNG Y TẾ</div>
                <div className='title2'>CHĂM SÓC SỨC KHỎE TOÀN DIỆN</div>
                <div className='search'>
                <i className='fas fa-search'></i>
                <input type='text' placeholder="Tìm chuyên khoa khám bệnh" />
                </div>
                <div className='options'></div>
                </div>
                <div className='content-down'>
                            <div className='options'>
                                <div className='option-child'>
                                    <div className='icon-child'><i className='far fa-hospital'></i></div>
                                    <div className='text-child'>Khám chuyên khoa</div>
                                </div>
                                <div className='option-child'>
                                    <div className='icon-child'><i className='fas fa-mobile-alt'></i></div>
                                    <div className='text-child'>Khám từ xa</div>
                                </div>
                                <div className='option-child'>
                                    <div className='icon-child'><i className='fas fa-procedures'></i></div>
                                    <div className='text-child'>khám tổng quát</div>
                                </div>
                                <div className='option-child'>
                                    <div className='icon-child'><i class="fas fa-flask"></i></div>
                                    <div className='text-child'>Xét nghiệm y học</div>
                                </div>
                                <div className='option-child'>
                                    <div className='icon-child'><i className='fas fa-user-md'></i></div>
                                    <div className='text-child'>Sức khỏe tinh thần</div>
                                </div>
                                <div className='option-child'>
                                    <div className='icon-child'><i class="fas fa-briefcase-medical"></i></div>
                                    <div className='text-child'>Khám nha khoa</div>
                                </div>

                            </div>
                        </div>
            </div>
            </React.Fragment>
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
