import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './TableManageUser.scss';
import * as actions from "../../../store/actions";
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';
import './ManageDoctor.scss';
import Select from 'react-select';
import { CRUD_ACTIONS, LANGUAGES } from '../../../utils';
// import { saveDetailDoctor } from '../../../services/userService';
// import { getDetailInforDoctor } from '../../../services/userService';

// const options = [
//     { value: 'chocolate', label: 'chocolate' },
//     { value: 'strawberry', label: 'strawberry' },
//     { value: 'vanilla', label: 'vanilla' },
// ]

const mdParser = new MarkdownIt(/* Markdown-it options */);


class ManageDoctor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            //save to markdown table
            contentMarkdown: '',
            contentHTML: '',
            selectedOption: '',
            description: '',
            listDoctors: [],

        }
    }
    componentDidMount() {
        this.props.fetchAllDoctors();
        //this.props.getAllRequiredDoctorInfor();
    }

    buildDataInputSelect = (inputData) => {
        let result = [];
        let { language } = this.props;
        if (inputData && inputData.length > 0) {
            inputData.map((item, index) => {

                let object = {};

                let labelVi = `${item.lastName} ${item.firstName}`;
                let labelEn = `${item.firstName} ${item.lastName}`;

                object.label = language === LANGUAGES.VI ? labelVi : labelEn;
                object.value = item.id;
                result.push(object)
            })
        }
        return result;
    }


    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.allDoctors !== this.props.allDoctors) {
            let dataSelect = this.buildDataInputSelect(this.props.allDoctors,)
            this.setState({
                listDoctors: dataSelect
            })
        }

        if (prevProps.language !== this.props.language) {

            let dataSelect = this.buildDataInputSelect(this.props.allDoctors,);

            this.setState({
                listDoctors: dataSelect,


            })

        }
    }

    handleEditorChange = ({ html, text }) => {
        this.setState({
            contentMarkdown: text,
            contentHTML: html,
        })
    }
    
    handlSaveContentMarkdown = () => {
        this.props.saveDetailDoctor({
            contentHTML: this.state.contentHTML,
            contentMarkdown: this.state.contentMarkdown,
            description: this.state.description,
            doctorId: this.state.selectedOption.value,
        })
    }

    handleChange = selectedOption => {
        this.setState({ selectedOption });

    }

    handleOnChangeDesc = (event) => {
        this.setState({
            description: event.target.value
        });
    }

    render() {

        console.log('cgfg', this.state)

        return (

            <div className="manage-doctor-container">
                <div className="manage-doctor-title">
                    {/* <FormattedMessage id="admin.manage-doctor.title"/> */}
                    Tạo thông tin bác sĩ
                </div>
                <div className="more-infor">
                    <div className=" content-left form-group">

                        <label>
                            Chọn bác sĩ
                            {/* <FormattedMessage id="admin.manage-doctor.select-doctor"/> */}
                        </label>
                        <Select
                            value={this.state.selectedOption}
                            onChange={this.handleChange}
                            options={this.state.listDoctors}
                        //placeholder={<FormattedMessage id="admin.manage-doctor.select-doctor"/>}
                        />

                    </div>
                    <div className="content-right">
                        <label>Thông tin giới thiệu</label>
                        <textarea className="form-control" rows="4"
                            onChange={(event) => this.handleOnChangeDesc(event)}
                            value={this.state.description}
                        >
                            adsds
                        </textarea>
                    </div>

                </div>


                <div className="manage-doctor-editor">
                    <MdEditor
                        style={{ height: '300px' }}
                        renderHTML={text => mdParser.render(text)}
                        onChange={this.handleEditorChange}
                    />
                </div>


                <button
                    onClick={() => this.handlSaveContentMarkdown()}
                    className="save-content-doctor">
                    Lưu thông tin
                </button>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        language: state.app.language,
        allDoctors: state.admin.allDoctors,
        // allRequiredDoctorInfor: state.admin.allRequiredDoctorInfor,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        // fetchUserRedux: () => dispatch(actions.fetchAllUsersStart()),
        fetchAllDoctors: () => dispatch(actions.fetchAllDoctors()),
        // getAllRequiredDoctorInfor: () => dispatch(actions.getRequiredDoctorInfor()),
        saveDetailDoctor: (data) => dispatch(actions.saveDetailDoctor(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageDoctor);