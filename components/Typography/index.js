import React from "react";
import styled from "styled-components";

const styledTypography = styled(
    ({variant, children, ...props}) => {
      if(variant != 'p' && variant != 'h1' && variant != 'h2' && variant !=  'h3' && variant !=  'h4' && variant !=  'h5' && variant !=  'h6' && variant != 'span') {
        variant = 'p'
        return React.createElement(variant, props, children)
      }
      return React.createElement(variant, props, children)
    }
)

export const Typography = styledTypography`
    ${props => props?.variant === 'p' || 
      props.variant === 'span' 
    ? `
      font-size: ${props.$size || '14px'};
      color: ${props.$color || '#fff'};
      font-weight: ${props.$fontWeight || '400'};
    `: ``}
`