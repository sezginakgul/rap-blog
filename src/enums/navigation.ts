export enum NavigationLinks {
  HABERLER = "Haberler",
  ETKINLIKLER = "Etkinlikler",
  MUZIKLER = "Müzikler",
  VIDEOLAR = "Videolar",
  ILETISIM = "İletişim",
}

export interface NavItem {
  title: string;
  href: string;
}

export const navItems: NavItem[] = [
  { title: NavigationLinks.HABERLER, href: "/category/haberler" },
  { title: NavigationLinks.ETKINLIKLER, href: "/category/etkinlikler" },
  { title: NavigationLinks.MUZIKLER, href: "/category/muzikler" },
  { title: NavigationLinks.VIDEOLAR, href: "/category/videolar" },
  { title: NavigationLinks.ILETISIM, href: "/iletisim" },
];
