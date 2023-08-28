import React from "react";
import { Button, Dialog } from "@material-tailwind/react";
import { auth, provide } from "../../config/firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import {
  DialogButton,
  DialogButtonText,
  DialogContainer,
  DialogIconDiv,
  DialogTitle,
} from "./styles/dialogStyles";
import Icon from "../../components/common/icons/icon";

export function DialogScreen() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);
  const navigate = useNavigate();

  const login = async () => {
    const result = await signInWithPopup(auth, provide);
    console.log(result);
    navigate("/");
  };

  return (
    <>
      <Button onClick={handleOpen} variant="gradient">
        Open Dialog
      </Button>
      <Dialog
        className="items-center flex justify-center bg-transparent"
        open={open}
        handler={handleOpen}
      >
        <DialogContainer>
          <DialogTitle>請登入帳號</DialogTitle>
          <DialogButton onClick={login}>
            <DialogIconDiv>
              <Icon name={"google"} width={24} height={24} />
            </DialogIconDiv>
            <DialogButtonText>Google 登入</DialogButtonText>
          </DialogButton>
          <DialogButton onClick={handleOpen} cancel={true}>
            <DialogButtonText cancel={true}>取消</DialogButtonText>
          </DialogButton>
        </DialogContainer>
      </Dialog>
    </>
  );
}
