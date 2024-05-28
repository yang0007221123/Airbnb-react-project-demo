import React, {memo} from 'react';
import PropTypes from "prop-types";
import {TitleSectionWrapper} from "@/components/titleSection/style";

const TitleSection = memo((props) => {
  const {mainTitle, subTitle} = props;
  
  return (
    <TitleSectionWrapper>
      <div className="main">{mainTitle}</div>
      {subTitle && <div className="sub">{subTitle}</div>}
    </TitleSectionWrapper>
  );
})

TitleSection.propTypes = {
  mainTitle: PropTypes.string,
  subTitle: PropTypes.string
}

export default TitleSection;