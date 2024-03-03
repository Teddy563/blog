import type {
  LicenseConfig,
  NavBarConfig,
  ProfileConfig,
  SiteConfig,
} from './types/config'
import { LinkPreset } from './types/config'

export const siteConfig: SiteConfig = {
  title: '563',
  subtitle: 'Media',
  lang: 'en',
  themeHue: 250,
  banner: {
    enable: false,
    src: 'assets/images/demo-banner.png',
  },
}

export const navBarConfig: NavBarConfig = {
  links: [
    LinkPreset.Home,
    LinkPreset.Archive,
    LinkPreset.About,
    {
      name: 'Discord',
      url: 'https://dsc.gg/563',
      external: true,
    },
  ],
}

export const profileConfig: ProfileConfig = {
  avatar: 'assets/images/avatar.png',
  name: 'Teddy563',
  bio: 'Unintentional Genius..',
  links: [
    {
      name: 'Instagram',
      icon: 'bi:instagram',
      url: 'https://instagram.com',
    },
    {
      name: 'TikTok',
      icon: 'fa6-brands:tiktok',
      url: 'https://store.steampowered.com',
    },
    {
      name: 'YouTube',
      icon: 'fa6-brands:youtube',
      url: 'https://youtube.com',
    },
  ],
}

export const licenseConfig: LicenseConfig = {
  enable: true,
  name: 'CC BY-NC-SA 4.0',
  url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
}
