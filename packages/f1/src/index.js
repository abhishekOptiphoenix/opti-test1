import Theme from "./components";
import image from "@frontity/html2react/processors/image";
import iframe from "@frontity/html2react/processors/iframe";
import links from "./processor/links";
import {categoriesWidgetsHome} from './config'

const awsminF1 = {
  name: "@awsmin/f1",
  roots: {
    /**
     *  In Frontity, any package can add React components to the site.
     *  We use roots for that, scoped to the `theme` namespace.
     */
    theme: Theme,
  },
  state: {
    /**
     * State is where the packages store their default settings and other
     * relevant state. It is scoped to the `theme` namespace.
     */
    theme: {
      menu: [],
      isMobileMenuOpen: false,
      featured: {
        showOnList: false,
        showOnPost: false,
      }
    },
    source:{
      data:{
        "/ab-tests/":{
           isAbTest: true,
           isReady: true
        },
        "/about-us/":{
          isAbout: true,
          isReady: true
        },
        "/cro-plan/":{
          isCro: true,
          isReady: true
        },
        "/contact-us/":{
          isContact: true,
          isReady: true
        }
      }
    }
  },
  /**
   * Actions are functions that modify the state or deal with other parts of
   * Frontity like libraries.
   */
  actions: {
    theme: {
      toggleMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpen = !state.theme.isMobileMenuOpen;
      },
      closeMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpen = false;
      },
      beforeSSR: async ({ state, actions }) => {
        await Promise.all([
           actions.source.fetch("/contact-form"),
           actions.source.fetch("/newsletter"),
           actions.source.fetch("/footer-newsletter"),
           actions.source.fetch("/reviewed-form"),
           actions.source.fetch("/main-contact-us"),
           actions.source.fetch("/blogs"),
          ]),
          await Promise.all(
            Object.values(categoriesWidgetsHome)
              .map(category => actions.source.fetch(`/category/${category}/`))
          )
      }
    },
  },
  libraries: {
    html2react: {
      /**
       * Add a processor to `html2react` so it processes the `<img>` tags
       * inside the content HTML. You can add your own processors too
       */
      processors: [image, iframe, links],
    },
  },
};

export default awsminF1;
