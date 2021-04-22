import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import NavMenuItem from "../components/NavMenuItem";
import NavMenu from "../components/NavMenu";
import ImageBackground from "../components/ImageBackground";
import HorizontalScrollCanvas from "../components/HorizontalScrollCanvas";
import ContentSection from "../components/ContentSection";
import Titles from "../components/Titles";
import ContentHead from "../components/ContentHead";
import ArrowLink from "../components/ArrowLink";
import BackgroundWords from "../components/BackgroundWords";
import FauxPage from "../components/FauxPage";
import debounce from "../lib/debounce";
import CareerBox from "../components/CareerBox";
import MacScreen from "../components/MacScreen";
import UpArrow from "../components/UpArrow";
import DownArrow from "../components/DownArrow";

interface PageProps {
  frontPages: Array<FrontPage>;
  careers: Array<any>;
  brands: Array<any>;
  projects: Array<any>;
}

interface FrontPage {
  acf: FrontPageFields;
  id: number;
}

interface FrontPageFields {
  menu_title: string;
  number: number;
  main_title: string;
  subtitle: string;
  link_url: string;
  link_text: string;
  display_title: string;
}

interface Project {
  acf: ProjectFields;
  id: number;
}

interface ProjectFields {
  title: string;
  description: string;
  link_text: string;
  link_url: string;
  screenshot: ImgFields;
}

interface ImgFields {
  url: string;
  alt: string;
}

export default function Page({ frontPages, careers, projects } : PageProps) {
  //State which is updated with the scroll point of the window
  const [scrollY, setScrollY] = useState<number>(0);
  const [page, setPage] = useState<number>(0);

  const [currentProject, setCurrentProject] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", debounce(handleScroll));
    return () => window.removeEventListener("scroll", debounce(handleScroll));
  }, [debounce]);

  return (
    <Layout>
      <NavMenu>
        {frontPages.map((frontPage: FrontPage) => (
          <NavMenuItem
            title={frontPage.acf.menu_title}
            number={frontPage.acf.number}
            key={frontPage.id}
            page={page}
            setPage={setPage}
          />
        ))}
      </NavMenu>

      <HorizontalScrollCanvas scrollY={scrollY}>
        <FauxPage>
          <ContentSection
            alignment="left"
          >
            <ContentHead
              number={frontPages[0].acf.number}
              smallTitle="About me"
            />
            <Titles
              mainTitle={frontPages[0].acf.main_title}
              subtitle={frontPages[0].acf.subtitle}
              xl={true}
            />
          </ContentSection>
          {/*<ImageBackground
            src="/img/scar-no-bg.png"
            alt="man"
            scrollY={scrollY}
          />*/}
          <BackgroundWords
            words={frontPages[0].acf.display_title}
            scrollY={scrollY}
          />
        </FauxPage>
        
        
        <FauxPage key={projects[currentProject].id}>
          <button 
            css={`
              background: transparent;
              border: none;
              position: absolute;
              right: 200px;
              top: 20%;

              svg{
                height: 20px;
                transform: rotate(-90deg);
              }

              @media screen and (max-width: 1300px){
                right: 100px;
              }
            `}
            onClick={() => {
              if(currentProject < projects.length - 1){
                setCurrentProject(currentProject + 1);
              }else{
                setCurrentProject(0);
              }
            }}
          ><UpArrow /></button>

          <button 
            css={`
              background: transparent;
              border: none;
              position: absolute;
              right: 200px;
              top: 27%;

              svg{
                height: 20px;
                transform: rotate(90deg);
              }

              @media screen and (max-width: 1300px){
                right: 100px;
              }
              
            `}
            onClick={() => {
              if(currentProject > 0){
                setCurrentProject(currentProject - 1);
              }else{
                setCurrentProject(projects.length - 1);
              }
            }}
          ><UpArrow /></button>
          
          <ContentSection
            alignment="right"
          >
            <ContentHead
              number={frontPages[1].acf.number}
              smallTitle={frontPages[1].acf.menu_title}
            />
            <Titles
              mainTitle={projects[currentProject].acf.title}
              subtitle={projects[currentProject].acf.description}
            />
            <ArrowLink
              linkUrl={projects[currentProject].acf.link_url}
              linkText={projects[currentProject].acf.link_text}
            />
          </ContentSection>
          <MacScreen screenshot={projects[currentProject].acf.screenshot.url} />
        </FauxPage>

        <FauxPage>
          <ContentSection>
            <ContentHead
              number={frontPages[2].acf.number}
              smallTitle={frontPages[2].acf.menu_title}
            />
            <Titles
              mainTitle={frontPages[2].acf.main_title}
              subtitle={frontPages[2].acf.subtitle}
            />
            <ArrowLink
              linkUrl={frontPages[2].acf.link_url}
              linkText={frontPages[2].acf.link_text}
            />
          </ContentSection>
          <div>
            {careers.map((career) => (
              <CareerBox career={career.acf} key={career.id} />
            ))}
          </div>
        </FauxPage>
      </HorizontalScrollCanvas>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    "http://localhost:8888/wp-json/wp/v2/front-page?order=asc"
  );
  const frontPages = await res.json();

  const careersRes = await fetch(
    "http://localhost:8888/wp-json/wp/v2/job-listing?order=asc"
  );
  const careers = await careersRes.json();

  const brandsRes = await fetch(
    "http://localhost:8888/wp-json/wp/v2/brand?order=asc"
  );
  const brands = await brandsRes.json();

  const projectsRes = await fetch(
    "http://localhost:8888/wp-json/wp/v2/project?order=asc"
  );
  const projects = await projectsRes.json();

  return {
    props: {
      frontPages,
      careers,
      brands,
      projects
    },
  };
}
