import React from "react";
import reactLoading from "assets/icons/loading.json";
import lottie from "lottie-web";
import * as S from "./styles";

export const Loading: React.FC = () => {
  React.useEffect(() => {
    const instance = lottie.loadAnimation({
      container: document.querySelector("#react-loading") as Element,
      animationData: reactLoading,
      renderer: "svg",
      loop: true,
      autoplay: true,
    });

    return () => instance.destroy();
  }, []);

  return <S.Loading id="react-loading" />;
};
