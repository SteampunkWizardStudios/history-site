"use client"

import styles from "../styles/bib.module.css";
import { useState, useEffect } from 'react';

export default function Bib({
  links = [
    "https://files.libcom.org/files/%5BAaron_Brenner,_Benjamin_Day,_Immanuel_Ness%5D_The_E(b-ok.org).pdf#page=650",
    "https://nmaahc.si.edu/explore/stories/childrens-crusade",
    "https://guides.loc.gov/this-month-in-business-history/february/flint-michigan-sit-down-strike",
    "https://nps.gov/lowe/learn/historyculture/the-mill-girls-of-lowell.htm",
    "https://guides.loc.gov/latinx-civil-rights/east-la-walkouts",
    "https://obamawhitehouse.archives.gov/sites/default/files/DREAM-Act-WhiteHouse-FactSheet.pdf",
    "https://www.lib.berkeley.edu/visit/bancroft/oral-history-center/projects/free-speech-movement",
  ],
}) {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  const trimLink = (link, maxLength = Math.floor(windowWidth / 24)) => {
    return link.length > maxLength ? link.substring(0, maxLength - 3) + "..." : link;
  };
    
      const getDomain = (url) => {
        return url.split("/")[2];
      };
      return (
        <>
          <h1 className={styles.title}>Bibliography</h1>
          <div className={styles.bib}>
            {links.map((link, index) => {
              const domain = getDomain(link);
              const trimmedLink = trimLink(link);
              const restOfLink = trimmedLink.substring(trimmedLink.indexOf(domain) + domain.length);
              return (
                <a key={index} href={link}>
                  <strong>{domain}</strong>{restOfLink}
                </a>
              );
            })}
          </div>
        </>
      );
}
