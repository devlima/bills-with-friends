import Header from "components/Header";
import LoginOptions from "components/LoginOptions";
import { FlexWrapper, Wrapper, Box, Image } from "./login.styled";

const Login = () => {
  return (
    <FlexWrapper>
      <Header line />
      <Wrapper>
        <Box>
          <a
            href="https://storyset.com/internet"
            tabIndex={0}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/assets/images/login-image.svg"
              aria-hidden="true"
              alt="Security Illustration by Freepik Storyset"
              title="Security Illustration by Freepik Storyset"
            />
          </a>
        </Box>
        <Box>
          <LoginOptions />
        </Box>
      </Wrapper>
    </FlexWrapper>
  );
};

export default Login;
