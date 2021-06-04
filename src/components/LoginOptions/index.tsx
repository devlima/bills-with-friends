import { Heading } from "components/Heading";
import React, { FC } from "react";
import { Button, Wrapper } from "./LoginOptions.styled";

const data = [
  {
    name: "Google",
    icone: "/assets/images/icone-login-google.svg",
    onClick: null,
  },
  {
    name: "GitHub",
    icone: "/assets/images/icone-login-github.svg",
    onClick: null,
  },
  {
    name: "Discord",
    icone: "/assets/images/icone-login-discord.svg",
    onClick: null,
  },
];

const LoginOptions: FC = () => {
  return (
    <div>
      <Heading level={2} size="normal" weight="bold" line>
        Login with
      </Heading>
      <Wrapper>
        {data.map((option, index) => (
          <Button key={`loginOption${index}`}>
            <img src={option.icone} alt={option.name} title={option.name} />
          </Button>
        ))}
      </Wrapper>
    </div>
  );
};

export default LoginOptions;
