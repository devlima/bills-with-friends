import React, { FC } from "react";
import { Heading } from "components/Heading";
import { useState, useEffect } from "react";
import { Container } from "./Header.styled";
import Link from "next/link";

type HeaderProps = {
  line?: boolean;
};

const Header: FC<HeaderProps> = ({ line = false }) => {
  return (
    <Container>
      <Link href="/" passHref>
        <a>
          <Heading
            level={1}
            color="darkgray"
            weight="bold"
            size="large"
            line={line}
            lineHeight={1}
          >
            Bills with friends
          </Heading>
        </a>
      </Link>
    </Container>
  );
};

export default Header;
