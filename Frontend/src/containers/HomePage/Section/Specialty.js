import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Specialty.scss';
import { FormattedMessage } from 'react-intl';
import Slider from 'react-slick';
//import { getAllSpecialty } from '../../../services/userService';
//import { withRouter } from 'react-router';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"

class Specialty extends Component {
    // constructor(props){
    //     super(props)
    //     this.state = {
    //         dataSpecialty: []
    //     }
    // }

    // async componentDidMount(){
    //     let res = await getAllSpecialty();
    //     console.log('res: ', res)
    //     if(res && res.errCode === 0){
    //         this.setState({
    //             dataSpecialty: res.data ? res.data: []
    //         })
    //     }
    // }
    // handleViewDetailSpecialty = (item) => {
    //     this.props.history.push(`/detail-specialty/${item.id}`)
    // }

    render() {
        let settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
        };
        // let {dataSpecialty} = this.state;
        return (
            <div className=' section-specialty'>
                <div className='specialty-container'>
                    <div className="specialty-header">
                        <span className='title-section'>Chuyên khoa phổ biến</span>
                        <button className='btn-section'>xem thêm</button>
                    </div>

                    <div className='specialty-body'>
                        <Slider {...settings}>
                            <div className='specialty-customize'>
                                <div className='bg-image' />
                                <div>Cơ xương khớp 1</div>
                            </div>
                            <div className='specialty-customize'>
                                <div className='bg-image' />
                                <div>Cơ xương khớp 2</div>
                            </div>
                            <div className='specialty-customize'>
                                <div className='bg-image' />
                                <div>Cơ xương khớp 3</div>
                            </div>
                            <div className='specialty-customize'>
                                <div className='bg-image' />
                                <div>Cơ xương khớp 4</div>
                            </div>
                            <div className='specialty-customize'>
                                <div className='bg-image' />
                                <div>Cơ xương khớp 5</div>
                            </div>
                            <div className='specialty-customize'>
                                <div className='bg-image' />
                                <div>Cơ xương khớp 6</div>
                            </div>

                        </Slider>
                    </div>
                </div>
            </div>

            // <div className='section-share section-specialty'>
            //     <div className='section-container'>
            //         <div className='section-header'>
            //             <span className='title-section'>
            //                 <FormattedMessage id="homepage.specialty-popular"/>
            //             </span>
            //             <button className='btn-section'>
            //             <FormattedMessage id="homepage.more-infor"/>
            //             </button>
            //         </div>
            //         <div className='section-body'>
            //             <Slider {...this.props.settings}>
            //                 {dataSpecialty && dataSpecialty.length > 0 &&
            //                 dataSpecialty.map((item, index) => {
            //                     return (
            //                         <div className='section-customize specialty-child' key={index}
            //                         onClick={() => this.handleViewDetailSpecialty(item)}>
            //                         <div 
            //                         className='bg-img section-specialty'
            //                         style={{ backgroundImage: `url(${item.image})`}}></div>
            //                         <div className='specialty-name'>{item.name}</div>
            //                     </div>
            //                         )
            //                     })
            //                 }
            //             </Slider>
            //         </div>
            //     </div>
            // </div>
        );
    }

}

//map state của redux và tiêm vào react
//react lấy biến state thông qua biến state
const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    //gọi đến event của redux
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Specialty);
//connect: giữa react và redux