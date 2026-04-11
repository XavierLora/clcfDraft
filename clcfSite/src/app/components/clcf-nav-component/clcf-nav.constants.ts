//TODO: Move this to a service

export interface NavLink {
  name: string;
  path: string;
};

export const NAV_BAR_LINKS: NavLink[] = [
  { name: 'About', path: '/about' },
  { name: 'Parents', path: '/parents' },
  { name: 'Coaches', path: '/coaches' },
  { name: 'Support', path: '/sponsor' },
  { name: 'Bulletin', path: '/bulletin' },
];