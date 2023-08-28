import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { auth, provide } from "../../config/firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

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
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>請登入帳號</DialogHeader>
        <DialogBody divider>
          <Button variant="text" color="red" onClick={login} className="mr-1">
            <span>google登入</span>
          </Button>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>取消</span>
          </Button>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleOpen}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
