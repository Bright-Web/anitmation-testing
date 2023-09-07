import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  padding-top: ${({pt}) => (pt ? pt : 0)}rem;
  padding-bottom: ${({pb}) => (pb ? pb : 0)}rem;
  padding-left: ${({pl}) => (pl ? pl : 0)}rem;
  padding-right: ${({pr}) => (pr ? pr : 0)}rem;
  margin-top: ${({mt}) => (mt ? mt : 0)}rem;
  margin-bottom: ${({mb}) => (mb ? mb : 0)}rem;
  margin-left: ${({ml}) => (ml ? ml : 0)}rem;
  margin-right: ${({mr}) => (mr ? mr : 0)}rem;
`;

//----- Option for spacing above -----//

const Spacing = (props) => {
  return <StyledContainer {...props}>{props.children}</StyledContainer>;
};

export default Spacing;
