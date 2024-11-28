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
// import { CRUD_ACTIONS, LANGUAGES } from '../../../utils';
// import { saveDetailDoctor } from '../../../services/userService';
// import { getDetailInforDoctor } from '../../../services/userService';

const options = [
    { value: 'chocolate', label: 'chocolate' },
    { value: 'strawberry', label: 'strawberry' },
    { value: 'vanilla', label: 'vanilla' },
]

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

        }
    }
    componentDidMount() {

    }



    componentDidUpdate(prevProps, prevState, snapshot) {

    }

    handleEditorChange = ({ html, text }) => {
        this.setState({
            contentMarkdown: text,
            contentHTML: html,


        }

        )

    }
    handlSaveContentMarkdown = () => {
        console.log('check state', this.state)
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

        //console.log('cgfg',this.state)


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
                            options={options}
                        //placeholder={<FormattedMessage id="admin.manage-doctor.select-doctor"/>}

                        />

                    </div>
                    <div className="content-right">
                        <label>thông tin giới thiệu</label>
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
                    className= "save-content-doctor">
                     Lưu thông tin
                </button>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        // language: state.app.language,
        // allDoctors: state.admin.allDoctors,
        // allRequiredDoctorInfor: state.admin.allRequiredDoctorInfor,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        //fetchUserRedux: () => dispatch(actions.fetchAllUsersStart()),
        // fetchAllDoctors: () => dispatch(actions.fetchAllDoctors()),
        // getAllRequiredDoctorInfor: () => dispatch(actions.getRequiredDoctorInfor()),
        // saveDetailDoctor: (data) => dispatch(actions.saveDetailDoctor(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageDoctor);
