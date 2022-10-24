import * as S from "./style";
import Link from "next/link";
import Image from "next/image";

import { StyledLink } from "../../mixins/styledLink";

import React from "react";

import BurgerMenu from "../burger";
import { useTheme, useThemeUpdate } from "../../../context/BurgerContext";

import Router from "next/router";

import useTranslate from "../../../hooks/use-translate";

import { useSwitchPageUpdate } from "../../../context/SwitchPageAnimationContext";

import { motion } from "framer-motion";

const Header = () => {
  const { t, router } = useTranslate();
  const changeTheme = useTheme();
  const toggleTheme = useThemeUpdate();
  const switchPageUpdate = useSwitchPageUpdate();

  const linkHandler = (href) => {
    toggleTheme();

    setTimeout(() => {
      switchPageUpdate();
    }, 300);

    setTimeout(() => {
      Router.push(href);
    }, 300);
  };

  const navItems = t.commons.navigation.map((link, index) => (
    <S.NavItem key={(link.name, index)}>
      <S.NavItemWrapper
        as={motion.div}
        initial={{ x: "-150%", opacity: 0 }}
        animate={
          !changeTheme ? { x: "-150%", opacity: 0 } : { x: "0px", opacity: 1 }
        }
        transition={{
          duration: 0.3,
          delay: changeTheme && 0.15 + index * 0.05,
          type: "cubic-bezier(0.075, 0.82, 0.165, 1)",
        }}
      >
        <StyledLink
          onClick={() => {
            link.path && link.path !== "" ? linkHandler(link.path) : null;
          }}
          current={router.pathname === link.path ? true : false}
        >
          {!link.downloadPath && link.name}
          {link.downloadPath && (
            <a download href={link.downloadPath}>
              {link.name}
            </a>
          )}
        </StyledLink>

        <S.NavItemDescription>{link.description}</S.NavItemDescription>
      </S.NavItemWrapper>
    </S.NavItem>
  ));

  const languages = router.locales.map((locale) => (
    <li key={locale}>
      {router.locale !== locale && (
        <Link href={router.asPath} locale={locale}>
          <S.Language>{locale}</S.Language>
        </Link>
      )}
    </li>
  ));

  const languagesMobile = router.locales.map((locale) => (
    <li key={locale}>
      {router.locale !== locale && (
        <Link href={router.asPath} locale={locale}>
          <S.LanguageMobile>{locale}</S.LanguageMobile>
        </Link>
      )}
    </li>
  ));

  const socials = (
    <S.Socials>
      <S.SocialItem>
        <a
          target="_blank"
          id="github"
          rel="noreferrer"
          href="https://github.com/wbudziak"
        >
          <img src="/icons/github.svg" alt="github"></img>
        </a>
      </S.SocialItem>
      <S.SocialItem>
        <a
          target="_blank"
          rel="noreferrer"
          id="linkedin"
          href="https://www.linkedin.com/in/wojciech-budziak-6854301bb/"
        >
          <img src="/icons/linkedin.svg" alt="linkedin"></img>
        </a>
      </S.SocialItem>
    </S.Socials>
  );

  return (
    <>
      <S.Header>
        <S.Wrapper>
          <Link href={"/"}>
            <S.Avatar src="./images/avatar.jpg" alt="avatar" />
          </Link>

          <S.BurgerContainer>
            <BurgerMenu onClick={toggleTheme} isOpen={changeTheme} />
          </S.BurgerContainer>

          <S.Bottom>
            {socials}
            <ul>{languages}</ul>
          </S.Bottom>
        </S.Wrapper>

        <S.Nav
          as={motion.ul}
          initial={{ x: "-100%" }}
          animate={!changeTheme ? { x: "-100%" } : { x: 0 }}
          transition={{ duration: 0.3, type: "linear" }}
        >
          {navItems}
          <ul>{languagesMobile}</ul>
        </S.Nav>
      </S.Header>
    </>
  );
};

export default React.memo(Header);
