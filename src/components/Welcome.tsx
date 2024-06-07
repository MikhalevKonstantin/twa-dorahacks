import { useState } from "react";
import styled from "styled-components";
import { Address, toNano, comment } from "ton";
import { useTonConnect } from "../hooks/useTonConnect";
import { Card, FlexBoxCol, FlexBoxRow, Button, Input } from "./styled/styled";
import myImage from './seal.png';    //6

export function Welcome() {
  const { sender, connected } = useTonConnect();

  const [tonAmount, setTonAmount] = useState("0.01");
  const [text, setText] = useState("");
  const [tonRecipient, setTonRecipient] = useState(
    "EQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAM9c"
  );

  return (
    <Card>
      <FlexBoxCol>
      <img src={myImage} alt="My Image" />
        <h3>Welcome to TONCHIk</h3>
        <FlexBoxRow>
          <label>Here you can connect your wallet </label>
        </FlexBoxRow>
        <FlexBoxRow>
          <label>And send some TONes </label>
        </FlexBoxRow>
      </FlexBoxCol>
    </Card>
  );
}
