import type {
  LicenseConfig,
  NavBarConfig,
  ProfileConfig,
  SiteConfig,
} from './types/config'
import { LinkPreset } from './types/config'

export const siteConfig: SiteConfig = {
  title: 'Grow Creators',
  subtitle: 'Home',
  lang: 'en',
  themeHue: 150,
  banner: {
    enable: false,
    src: 'assets/images/new-banner.png',
  },
}

export const navBarConfig: NavBarConfig = {
  links: [
    LinkPreset.Home,
    LinkPreset.Archive,
    LinkPreset.About,
    {
      name: 'Community',
      url: 'https://dsc.gg/growgpt',
      external: true,
    },
    {
      name: 'GrowGPT',
      url: 'https://dsc.gg/growgpt',
      external: true,
    },
  ],
}

export const profileConfig: ProfileConfig = {
  avatar: 'assets/images/new-avatar.webp',
  name: 'Teddy563 (b3arbu)',
  bio: '',
  links: [
    {
      name: 'Instagram',
      icon: 'fa6-brands:instagram',
      url: 'https://instagram.com/b3arbu',
    },
    {
      name: 'TikTok',
      icon: 'fa6-brands:tiktok',
      url: 'https://instagram.com/b3arbu',
    },
    {
      name: 'YouTube',
      icon: 'fa6-brands:youtube',
      url: 'https://instagram.com/b3arbu',
    },
    {
      name: 'Twitter',
      icon: 'fa6-brands:twitter',
      url: 'https://instagram.com/b3arbu',
    },
    {
      name: 'Discord',
      icon: 'fa6-brands:discord',
      url: 'https://instagram.com/b3arbu',
    },
  ],
}

export const licenseConfig: LicenseConfig = {
  enable: true,
  name: 'CC BY-NC-SA 4.0',
  url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
}
