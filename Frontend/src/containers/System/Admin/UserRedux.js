import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { getAllCodeService } from "../../../services/userService";
import { LANGUAGES, CRUD_ACTIONS, CommonUtils } from '../../../utils';
import * as action from "../../../store/actions"

class UserRedux extends Component {

    constructor(props) {
        super(props);
        this.state = {
            genderArr: [],

        }
    }

    async componentDidMount() {

        this.props.getGenderStart();
        // try {
        //  let res =   await getAllCodeService('gender');

        //  if (res && res.errCode===0) {
        //     this.setState({
        //         genderArr:res.data
        //     })

        //  }
        //  console.log('de de',res)

        // } catch (e) {
        //     console.log(e)

        // }
    }

    componentDidUpdate(preProps, preState, snapshot) {
        // render => didUpdate
        // hien tai (this) qua khu (pre)
        // []   [3]
        // [3]   [3]

        if (preProps.genderRedux != this.props.genderRedux) {
            this.setState(
                {
                    genderArr: this.props.genderRedux
                }
            )

        }
    }

    render() {
        // console.log('staefw', this.state)
        let genders = this.state.genderArr;
        let language = this.props.language;
        console.log('check props from redux: ', this.props.genderRedux);

        return (
            <div className='user-redux-container'>
                <div className='title'>
                    Quản lí người dùng
                </div>
                <div className="user-redux-body" >
                    <div className="container">
                        <div className="row">
                            <div className="col-12 my-3"><FormattedMessage id="manage-user.add" /></div>
                            {/* <div className="col-12 ">{isGetGenders === true ? 'Loading genders' : ''}</div> */}

                            <div className="col-3">

                                <label><FormattedMessage id="manage-user.email" /></label>
                                <input className="form-control" type="email"

                                // value={email}
                                // onChange={(event) => { this.onChangeInput(event, 'email') }}
                                // disabled={this.state.action === CRUD_ACTIONS.EDIT ? true : false}
                                />

                            </div>

                            <div className="col-3">
                                <label><FormattedMessage id="manage-user.password" /></label>
                                <input className="form-control" type="password"

                                // value={password}
                                // onChange={(event) => { this.onChangeInput(event, 'password') }}
                                // disabled={this.state.action === CRUD_ACTIONS.EDIT ? true : false}

                                />


                            </div>

                            <div className="col-3">
                                <label><FormattedMessage id="manage-user.first-name" /></label>
                                <input className="form-control" type="text"
                                // value={firstName}
                                // onChange={(event) => { this.onChangeInput(event, 'firstName') }}

                                />


                            </div>

                            <div className="col-3">
                                <label><FormattedMessage id="manage-user.last-name" /></label>
                                <input className="form-control" type="text "

                                // value={lastName}
                                // onChange={(event) => { this.onChangeInput(event, 'lastName') }}

                                />


                            </div>
                            {/* <div className="col-3">
                                <label><FormattedMessage id="manage-user.phone-number" /></label>
                                <input className="form-control" type="text "

                                    value={phoneNumber}
                                    onChange={(event) => { this.onChangeInput(event, 'phoneNumber') }}

                                />


                            </div> */}
                            <div className="col-9">
                                <label><FormattedMessage id="manage-user.address" /></label>
                                <input className="form-control" type="text "

                                // value={address}
                                // onChange={(event) => { this.onChangeInput(event, 'address') }}

                                />


                            </div>
                            <div className="col-3">
                                <label><FormattedMessage id="manage-user.gender" /></label>
                                <select className="form-control"
                                // value={gender}
                                // // value={firstName}
                                // onChange={(event) => { this.onChangeInput(event, 'gender') }}

                                >

                                    {genders && genders.length > 0 &&
                                        genders.map((item, index) => {
                                            return (
                                                <option key={index} value={item.keyMap}>
                                                    {language === LANGUAGES.VI ?
                                                        item.valueVi : item.valueEn}</option>
                                            )
                                        })}


                                </select>

                            </div>

                            <div className="col-3">
                                <label><FormattedMessage id="manage-user.position" /></label>
                                <select className="form-control"
                                // value={position}

                                // //value={firstName}
                                // onChange={(event) => { this.onChangeInput(event, 'position') }}

                                >
                                    <option selected>choose...</option>
                                    <option>...</option>
                                    {/* {positions && positions.length > 0
                                        && positions.map((item, index) => {
                                            return (
                                                <option key={index} value={item.keyMap}>
                                                    {language === LANGUAGES.VI ?
                                                        item.valueVi : item.valueEn}</option>
                                            );
                                        }
                                        )} */}
                                </select>

                            </div>
                            <div className="col-3">
                                <label><FormattedMessage id="manage-user.role" /></label>
                                <select className="form-control"

                                //value={firstName}
                                // onChange={(event) => { this.onChangeInput(event, 'role') }}
                                // value={role}
                                >
                                    <option selected>choose...</option>
                                    <option>...</option>
                                    {/* {roles && roles.length > 0
                                        && roles.map((item, index) => {
                                            return (
                                                <option key={index} value={item.keyMap}>
                                                    {language === LANGUAGES.VI ?
                                                        item.valueVi : item.valueEn}</option>
                                            );
                                        }
                                        )} */}

                                </select>

                            </div>
                            <div className="col-3">
                                <label><FormattedMessage id="manage-user.image" /></label>
                                <div className="preview-img-container">
                                    <input type="text" className='form-control'
                                    //id="previewImg"
                                    //type="file" hidden

                                    //  onChange={(event) => this.handleOnChangeImage(event)}
                                    />

                                    {/* <label className="label-upload" htmlFor="previewImg">Tải ảnh <i className="fas fa-upload"></i></label>
                                    <div className="preview-image"
                                        //previewImgURL
                                        style={{ backgroundImage: `url(${this.state.previewImgURL})` }}

                                        onClick={() => this.openPreviewImage()}
                                    >



                                    </div> */}

                                </div>
                            </div>
                            <div className="col-12 my-3">
                                <button className='btn btn-primary'
                                // {this.state.action === CRUD_ACTIONS.EDIT ? "btn btn-warning" : "btn btn-primary"}
                                // onClick={() => this.handleSaveUser()}

                                >

                                    {/* {this.state.action === CRUD_ACTIONS.EDIT ?
                                        <FormattedMessage id="manage-user.edit" />
                                        :
                                        <FormattedMessage id="manage-user.save" />
                                    } */}

                                    <FormattedMessage id="manage-user.save" />
                                </button>
                            </div>
                            {/* <div className="col-12  mb-5">
                                <TableManageUser
                                    handleEditUserFromParentKey={this.handleEditUserFromParent}
                                    action={this.state.action}


                                />
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        language: state.app.language,
        genderRedux: state.admin.genders
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getGenderStart: () => dispatch(action.fetchGenderStart())
        // processLogout: () => dispatch(actions.processLogout()),
        // changeLanguageAppRedux: (language) => dispatch(actions.changeLanguageApp(language))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
