import Image from "next/image";
import { useRouter } from "next/router";
import ChatHeaderIcon from "./src/components/ChatHeaderIcon";
import Logo from "./src/components/Logo";

export default {
  logo: <Logo />,
  logoLink: "/",
  project: {
    link: "https://github.com/Ruanrls",
  },
  chat: {
    link: "https://linkedin.com/in/ruan-rls",
    icon: <ChatHeaderIcon width={24} height={24} />,
  },
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== "/") {
      return {
        titleTemplate: "%s - My portfolio",
      };
    }
  },
  i18n: [
    { locale: "en", text: "English" },
    { locale: "pt", text: "Português" },
  ],
  primaryHue: {
    dark: 317,
    light: 200,
  },
  search: {
    placeholder: () => {
      const {locale} = useRouter();

      if (locale === "pt") return "Pesquisar...";

      return "Search...";
    },
    emptyResult: () => {
      const { locale } = useRouter();
      return (
        <div
          style={{
            width: "100%",
            height: "100px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {locale === "pt" ? "Nenhum resultado encontrado" : "No results found"}
        </div>
      );
    },
    loading: () => {
      const { locale } = useRouter();

      return (
        <div
          style={{
            width: "100%",
            height: "100px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {locale === "pt" ? "Carregando..." : "Loading..."}
        </div>
      );
    },
    error: () => {
      const { locale } = useRouter();

      if (locale === "pt") return "Erro ao carregar resultados";

      return "Error loading results";
    },
  },
  feedback: {
    content: null,
  },
  editLink: {
    component: () => null,
  },
  footer: {
    component: null,
  },
  themeSwitch: {
    useOptions() {
      const { locale } = useRouter();

      if (locale === "pt") {
        return {
          light: "Claro",
          dark: "Escuro",
          system: "Sistema",
        };
      }
      return {
        light: "Light",
        dark: "Dark",
        system: "System",
      };
    },
  },
 toc: {
  title: () => {
    const {locale} = useRouter()
    if (locale === "pt") {
      return "Conteúdo";
    }
    
    return "Contents";
  }
 }
};
