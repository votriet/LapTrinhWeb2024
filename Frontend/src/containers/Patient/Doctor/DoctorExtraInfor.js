import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";
import './DoctorExtraInfor.scss';
//import moment, { lang } from 'moment';
//import localization from 'moment/locale/vi';
import { LANGUAGES } from '../../../utils';
import { getScheduleDoctorByDate } from '../../../services/userService';
import { FormattedMessage } from 'react-intl';

class DoctorExtraInfor extends Component {

    constructor(props) {
        super(props);
        this.state = {  
            isShowDetailInfor: false,
            
        }
    }
    async componentDidMount() {
       
    }
    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.language !== prevProps.language) {
           
        }  
        
    } 
    
    showHideDetailInfor =(status) =>{
        this.setState({
            isShowDetailInfor: status

        })
    }
    render() {

       let {isShowDetailInfor, extraInfor} =this.state;
      

        //console.log("check state",this.state)
       return (
            <div className="doctor-extra-infor-container">
               <div className="content-up">
                    

                    <div className="text-address">
                        Địa chỉ khám 
                    </div>
                    <div className="name-clinic">
                        {/* {extraInfor && extraInfor.nameClinic ? extraInfor.nameClinic: ''} */}
                        Phòng khám
                        </div>
                    <div className="detail-address">
                    {/* {extraInfor && extraInfor.addressClinic ? extraInfor.addressClinic: ''} */}
                        địa chỉ
                        </div>


               </div>
               <div className="content-down">
                
                {isShowDetailInfor === false &&
                    <div className="short-infor">
                        {/* <FormattedMessage id="patient.extra-infor-doctor.price"/>  
                         */}
                         Giá 25k
                         
                          
                       <span className="detail" onClick={()=>this.showHideDetailInfor(true)}>
                       {/* <FormattedMessage id="patient.extra-infor-doctor.detail"/>  */}
                        </span>
                    </div>
                }
                {isShowDetailInfor === true &&
                <>
                    <div className="title-price"> 
                        Giá Khám
                           .</div>
                    <div className="detail-infor">
                        <div className="price">
                            <span className="left">  
                                {/* <FormattedMessage id="patient.extra-infor-doctor.price"/>  */}
                                 Giá
                                 </span>
                            <span className="right"> 
                            25000đ
                          </span>
                        </div>

                        <div className="note">
                        Được ưu tiên
                        </div>
                        
                        </div>
                    <div className="payment">
                    Hình thức

                    </div>
                    <div className="hide-price">
                        <span onClick={()=>this.showHideDetailInfor(false)}>
                       Ẩn bảng giá  
                            </span>
                            </div>
                </>
                }

                    
                   
               </div>
               
               
               
               
                </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DoctorExtraInfor);
