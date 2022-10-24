import * as S from "./style";
import { motion } from "framer-motion";
import React, { useRef } from "react";
import { useTheme, useThemeUpdate } from "../../../context/BurgerContext";
import {
  useSwitchPage,
  useSwitchPageUpdate,
} from "../../../context/SwitchPageAnimationContext";
import Link from "next/link";
import useEffect3d from "../../../hooks/use-effect3d";
import useTranslate from "../../../hooks/use-translate";
import useViewport from "../../../hooks/use-viewport";
import { breakpoints } from "../../mixins/breakpoints";

export const Layout = (props) => {
  return (
    <>
      <S.Layout>{props.children}</S.Layout>
    </>
  );
};

export const LayoutWrapper = (props) => {
  const { Element, transformPanel, handleMouseLeave } = useEffect3d(3);
  const changeTheme = useTheme();
  const toggleTheme = useThemeUpdate();
  const viewPort = useViewport();
  const { t, router } = useTranslate();

  return (
    <>
      <S.LayoutWrapper
        ref={Element}
        style={{ transform: changeTheme === false && "" }}
        className={
          (changeTheme && viewPort.width > breakpoints.lg && "burger") ||
          (changeTheme && viewPort.width < breakpoints.lg && "mobile")
        }
      >
        {changeTheme && viewPort.width > breakpoints.lg && (
          <S.LayoutToggle
            onMouseMove={transformPanel}
            onMouseLeave={handleMouseLeave}
            onClick={() => {
              toggleTheme();
              handleMouseLeave();
            }}
          />
        )}
        {props.children}
        <S.PaginationContainer>
          {t.commons.navigation.map(
            (link, index) =>
              !link.downloadPath && (
                <Link href={link.path} key={(link.path, index)}>
                  <S.PaginationItem
                    current={router.pathname === link.path ? true : false}
                  />
                </Link>
              )
          )}
        </S.PaginationContainer>
      </S.LayoutWrapper>
    </>
  );
};

export const LayoutDescription = (props) => {
  const switchPage = useSwitchPage();
  const switchPageUpdate = useSwitchPageUpdate();

  return (
    <>
      <S.Description>{props.children}</S.Description>
    </>
  );
};

export const LayoutContent = (props) => {
  const { noMobilePadding } = props;

  const switchPage = useSwitchPage();
  const switchPageUpdate = useSwitchPageUpdate();

  const heightRef = useRef();

  return (
    <>
      <S.Content nobg={props.nobg}>
        <S.ContentWrapper
          as={motion.div}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            type: "linear",
          }}
          ref={heightRef}
          className={noMobilePadding && "noMobilePadding"}
        >
          {props.children}
        </S.ContentWrapper>
      </S.Content>
    </>
  );
};
