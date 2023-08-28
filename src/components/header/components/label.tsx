import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Button from "../../common/button";
import { signOut } from "firebase/auth";
import { auth } from "../../../config/firebase";
import { useNavigate } from "react-router-dom";

interface ILabelProp {
  setIsShowLabel: Function;
}

const LabelContainer = styled.div`
  height: 66;
  width: 103;
  ${tw`
    rounded-2xl
    p-2.5
    flex
    absolute
    right-8
    top-16
  `}

  background-color: #161616;
`;

export default function Label(props: ILabelProp) {
  const { setIsShowLabel } = props;
  const navigate = useNavigate();
  const onClick = () => {
    signOut(auth)
      .then(() => {
        console.log("logout!!!!");
        navigate("/");
        setIsShowLabel(false);
      })
      .catch((err) => console.log("logout error", err));
  };
  return (
    <LabelContainer>
      <Button
        isOpenBottomBar={false}
        onClick={onClick}
        text="登出"
        css={{ border: "none" }}
      />
    </LabelContainer>
  );
}
