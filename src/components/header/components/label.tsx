import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Button from "../../common/button";
import { signOut } from "firebase/auth";
import { auth } from "../../../config/firebase";
import { useNavigate } from "react-router-dom";

interface ILabelProp {
  setIsShowLabel: Function;
  openLogin: boolean;
  setOpenLogin: Function;
}

const LabelContainer = styled.div<{ innerHeight?: any }>`
  height: 66;
  width: 103;
  ${tw`
    rounded-2xl
    p-2.5
    absolute
    right-8
    top-16
  `}

  @media (max-width: 720px) {
    right: 17px;
    top: ${({ innerHeight }) => innerHeight - 120}px;
  }

  background-color: #161616;
`;

export default function Label(props: ILabelProp) {
  const { setIsShowLabel } = props;
  const navigate = useNavigate();
  const onClick = () => {
    if (auth.currentUser === null) {
      navigate("/login");
    } else {
      signOut(auth)
        .then(() => {
          console.log("logout!!!!");
          navigate("/");
        })
        .catch((err) => console.log("logout error", err));
    }
    setIsShowLabel(false);
  };
  return (
    <LabelContainer innerHeight={window.innerHeight}>
      <Button
        isOpenBottomBar={false}
        onClick={onClick}
        text={auth.currentUser === null ? "登入" : "登出"}
        css={{ border: "none" }}
      />
    </LabelContainer>
  );
}
