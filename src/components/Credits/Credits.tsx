import styles from "./Credits.module.scss";

const links: { href: string; text: string }[] = [
  {
    href: "https://www.flaticon.com/authors/catalin-fertu",
    text: "Catalin Fertu",
  },
  {
    href: "https://www.flaticon.com/authors/vitaly-gorbachev",
    text: "Vitaly Gorbachev",
  },
  {
    href: "https://www.flaticon.com/authors/amonrat-rungreangfangsai",
    text: "amonrat rungreangfangsai",
  },
  {
    href: "https://www.flaticon.com/authors/surang",
    text: "surang",
  },
  {
    href: "https://www.flaticon.com/authors/eucalyp",
    text: "Eucalyp",
  },
  {
    href: "https://www.flaticon.com/authors/gowi",
    text: "GOWI",
  },
  {
    href: "https://www.flaticon.com/authors/linector",
    text: "Linector",
  },
  {
    href: "https://www.flaticon.com/authors/SBTS2018",
    text: "SBTS2018",
  },
  {
    href: "https://www.flaticon.com/authors/small.smiles",
    text: "small.smiles",
  },
  {
    href: "https://www.flaticon.com/authors/freepik",
    text: "Freepik",
  },
  {
    href: "https://www.flaticon.com/authors/smashicons",
    text: "Smashicons",
  },
  {
    href: "https://www.flaticon.com/authors/mayor-icons",
    text: "Mayor Icons",
  },
  {
    href: "https://www.flaticon.com/authors/photo3idea-studio",
    text: "photo3idea_studio",
  },
  {
    href: "https://www.flaticon.com/authors/monkik",
    text: "monkik",
  },
  {
    href: "https://www.flaticon.com/authors/iconixar",
    text: "iconixar",
  },
  {
    href: "https://www.flaticon.com/authors/umeicon",
    text: "Umeicon",
  },
  {
    href: "https://www.flaticon.com/authors/tanahcon",
    text: "Tanahcon",
  },
  {
    href: "https://www.flaticon.com/authors/lapiyee",
    text: "lapiyee",
  },
  {
    href: "https://www.flaticon.com/authors/kerismaker",
    text: "kerismaker",
  },
  {
    href: "https://www.flaticon.com/authors/mangsaabguru",
    text: "mangsaabguru",
  },
  {
    href: "https://www.flaticon.com/authors/bqlqn",
    text: "bqlqn",
  },
  {
    href: "https://www.flaticon.com/authors/imaginationlol",
    text: "imaginationlol",
  },
  {
    href: "https://www.flaticon.com/authors/icongeek26",
    text: "Icongeek26",
  },
  {
    href: "https://www.flaticon.com/authors/pixel-perfect",
    text: "Pixel perfect",
  },
  {
    href: "https://www.flaticon.com/authors/muhammad-tajudin",
    text: "Muhammad Tajudin",
  },
  {
    href: "https://www.flaticon.com/authors/тhor-зhai",
    text: "Nhor Phai",
  },
  {
    href: "https://www.flaticon.com/authors/nawicon",
    text: "nawicon",
  },
  {
    href: "https://www.flaticon.com/authors/еriangle-squad",
    text: "Triangle Squad",
  },
  {
    href: "https://www.flaticon.com/authors/juicy_fish",
    text: "juicy_fish",
  },
  {
    href: "https://www.flaticon.com/authors/kmg-design",
    text: "kmg design",
  },
  {
    href: "https://www.flaticon.com/authors/creaticca-creative-agency",
    text: "Creaticca Creative Agency",
  },
  {
    href: "https://www.flaticon.com/authors/yogi-aprelliyanto",
    text: "Yogi Aprelliyanto",
  },
  {
    href: "https://www.flaticon.com/authors/rasama-studio",
    text: "Rasama Studio",
  },
  {
    href: "https://www.flaticon.com/authors/rang",
    text: "rang",
  },
  {
    href: "https://www.flaticon.com/authors/vectors-market",
    text: "Vectors Market",
  },
  {
    href: "https://www.flaticon.com/authors/vector-stall",
    text: "Vector Stall",
  },
  {
    href: "https://www.flaticon.com/authors/romstu",
    text: "RomStu",
  },
  {
    href: "https://www.flaticon.com/authors/kemalmoe",
    text: "Kemalmoe",
  },
  {
    href: "https://www.flaticon.com/authors/afitrose",
    text: "afitrose",
  },
  {
    href: "https://www.flaticon.com/authors/vector-clans",
    text: "Vector Clans",
  },
  {
    href: "https://www.flaticon.com/authors/smalllikeart",
    text: "smalllikeart",
  },
  {
    href: "https://www.flaticon.com/authors/google",
    text: "google",
  },
  {
    href: "https://www.flaticon.com/authors/dave-gandy",
    text: "Dave Gandy",
  },
];

const Congrats = () => {
  return (
    <div className={styles.wrapper}>
      {links.map(({ href, text }) => (
        <a className={styles.link} href={href} key={text}>
          {text}
        </a>
      ))}
    </div>
  );
};

export default Congrats;
