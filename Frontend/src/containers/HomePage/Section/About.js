import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

class About extends Component {

    render() {

        return (
            <div className='section-share section-about'>
                <div className='section-about-header'>
                    Truyền thông nói gì về Triết
                </div>
                <div className='section-about-content'>
                    <div className='content-left'>
                        <iframe width="100%" height="400px"
                            src="https://www.youtube.com/embed/xg0hNDgqurM"
                            title="PHÙNG KHÁNH LINH - ƯỚC ANH TAN NÁT CON TIM (OFFICIAL VISUALIZER)"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen>
                        </iframe>
                    </div>

                    <div className='content-right'>
                        <p>
                            Ngày Xưa Có Một Chuyện Tình xoay quanh câu chuyện tình bạn, tình yêu giữa hai chàng trai và một cô gái từ thuở ấu thơ cho đến khi trưởng thành,
                            phải đối mặt với những thử thách của số phận. Ba nhân vật Vinh, Miền, Phúc đã cùng yêu, cùng bỡ ngỡ bước vào đời, va vấp và vượt qua.
                            Bộ phim được chuyển thể từ truyện dài cùng tên của nhà văn Nguyễn Nhật Ánh, xuất bản lần đầu tiên vào năm 2016 và tái bản đến 20 lần
                            với các phiên bản bìa sách khác nhau cho đến nay. Tác phẩm này nhận nhiều đánh giá tích cực cùng sự yêu mến từ độc giả trên khắp cả nước nhờ câu chuyện nhẹ nhàng, lãng mạn
                            mà thấm đẫm suy ngẫm về tình yêu và cuộc sống.
                        </p>
                    </div>
                </div>
            </div>

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

export default connect(mapStateToProps, mapDispatchToProps)(About);
//connect: giữa react và redux
