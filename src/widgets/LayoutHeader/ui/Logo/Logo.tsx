import { FC } from "react";
import type { Logo as LogoType } from "@/widgets/LayoutHeader/model/types";

const Logo: FC<LogoType> = ({ logoName }: LogoType) => {
  return (
    <div className="flex-1 text-center">
      <a className="text-xl font-semibold hover:text-gray-600 transition-colors">{logoName}</a>
    </div>
  );
};

export default Logo;
