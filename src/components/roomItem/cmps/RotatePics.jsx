import React, {memo} from 'react';
import PropTypes from "prop-types";
import {RotatePicsWrapper} from "@/components/roomItem/css/rotate-pics";
import {Carousel} from "antd"

const RotatePics = memo((props) => {
  const {picture_url} = props;
  
  return (
    <RotatePicsWrapper>
      <div className="img-box">
        {/* 轮播图 */}
        <Carousel arrows infinite={false}>
          {
            picture_url?.map(item => {
              return (<img className="img" src={item} key={item} alt=""/>)
            })
          }
        </Carousel>
      </div>
    </RotatePicsWrapper>
  );
})

RotatePics.propTypes = {
  picture_url: PropTypes.array
}
export default RotatePics;