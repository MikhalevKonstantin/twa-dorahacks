import { useState } from "react";
import styled from "styled-components";
import { Address, toNano, comment } from "ton";
import { useTonConnect } from "../hooks/useTonConnect";
import { Card, FlexBoxCol, FlexBoxRow, Button, Input } from "./styled/styled";
import StyledText from './styled/text';

export function Welcomepageeng1() {
    return (
          <StyledText size="big">Welcome to TONCHI</StyledText>
          <StyledText weight="bold">choose your language</StyledText>
      );
}
    