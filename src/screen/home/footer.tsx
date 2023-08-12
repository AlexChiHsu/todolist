import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const FooterContainer = styled.div`
  ${tw`
		w-full
		text-sm
		text-[#686B72]
		leading-[21px]
		font-normal
		pb-[15px]
		text-center
		z-50
	`}

  font-family: 'Roboto';
`;

export default function Footer() {
  return (
    <FooterContainer>
      WoW ! Movie © Code: Alex Hsu / Design: K.T
    </FooterContainer>
  );
}
