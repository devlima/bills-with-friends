import Link from "next/link";
import { FC } from "react";
import { Picture } from "./Avatar.styled";

type AvatarProps = {
  user?: string;
};

const Avatar: FC<AvatarProps> = ({ user = "error" }) => {
  return (
    <Link href={`/profile/${user}`} passHref>
      <Picture>
        <img
          src="/assets/images/avatar.jpg"
          alt="Avatar picture: Gabriel Lima"
        />
      </Picture>
    </Link>
  );
};

export default Avatar;
