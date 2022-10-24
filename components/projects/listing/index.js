import { useEffect, useState } from "react";
import ProjectBox from "../projectBox";
import * as S from "./style";
import { useRouter } from "next/router";
import pl from "../../../locales/pl";
import en from "../../../locales/en";
import { motion } from "framer-motion";

const Listing = (props) => {
  const { projects } = props;
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : pl;

  let allTags = [t.projects.listing.btn];

  let tags = [];

  for (let i = 0; i < projects.length; i++) {
    allTags = allTags.concat(projects[i].technology);
    tags = [...new Set(allTags)];
  }

  const [selectedTag, setSelectedTag] = useState(allTags[0]);

  const [filteredList, setFiltersedList] = useState(projects);

  useEffect(() => {
    setFiltersedList(projects);
  }, [projects]);

  const filterByTags = (e) => {
    setSelectedTag(e.target.textContent);
  };

  const tagsMap = tags.map((tag, index) => (
    <S.Btn
      className={
        (selectedTag === tag && "active") ||
        (index === 0 && selectedTag === pl.projects.listing.btn && "active") ||
        (index === 0 && selectedTag === en.projects.listing.btn && "active")
      }
      key={(tag, index)}
      onClick={filterByTags}
    >
      {tag}
    </S.Btn>
  ));

  const filterSelected = filteredList
    .filter((project) => project.technology.includes(selectedTag))
    .map((project, index) => (
      <ProjectBox
        key={(project.link, index)}
        index={index}
        href={project.link}
        img={project.img}
        name={project.name}
        stack={project.technology}
        description={project.description}
      ></ProjectBox>
    ));

  const filterAll = filteredList.map((project, index) => (
    <ProjectBox
      key={(project.link, index)}
      index={index}
      href={project.link}
      img={project.img}
      name={project.name}
      stack={project.technology}
      description={project.description}
    ></ProjectBox>
  ));

  return (
    <>
      <S.Wrapper>
        <S.BtnWrapper>{tagsMap}</S.BtnWrapper>
        <S.Grid>
          {selectedTag === en.projects.listing.btn ||
          selectedTag === pl.projects.listing.btn
            ? filterAll
            : filterSelected}
        </S.Grid>
      </S.Wrapper>
    </>
  );
};

export default Listing;
