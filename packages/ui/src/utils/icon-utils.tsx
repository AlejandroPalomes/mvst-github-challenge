import { type FC } from 'react';
import { BuildingIcon } from '../components/building-icon';
import { CaretIcon } from '../components/caret-icon';
import { EmailIcon } from '../components/email-icon';
import { FolderIcon } from '../components/folder-icon';
import { GithubIcon } from '../components/github-icon';
import { LinkedinIcon } from '../components/linkedin-icon';
import { LocationIcon } from '../components/location-icon';
import { PeopleIcon } from '../components/people-icon';
import { WorldIcon } from '../components/world-icon';
import type { IconType, IconComponent, IconProps } from './icon-types';

const IconsComponent: IconComponent = {
  building: BuildingIcon,
  caret: CaretIcon,
  email:EmailIcon,
  folder: FolderIcon,
  github: GithubIcon,
  linkedin: LinkedinIcon,
  location: LocationIcon,
  people: PeopleIcon,
  world: WorldIcon
};

export const getIcon = (name: IconType): FC<IconProps> => {
  const icon = IconsComponent[name];
  return icon;
};