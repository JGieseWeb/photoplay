import React from 'react';
import ProfileMenuBar from './ProfileMenuBar';
import AccountIcon from '../Icons/AccountIcon';
import NotificationIcon from '../Icons/NotificationIcon';
import SettingIcon from '../Icons/SettingIcon';
import HelpIcon from '../Icons/HelpIcon';
import LogoutIcon from '../Icons/LogoutIcon';

export default {
  title: 'Component/ProfileMenuBar',
  component: ProfileMenuBar,
};

export const Account = (): JSX.Element => (
  <ProfileMenuBar icon={<AccountIcon />} text="Account" />
);
export const Notifications = (): JSX.Element => (
  <ProfileMenuBar icon={<NotificationIcon />} text="Notifications" />
);
export const Settings = (): JSX.Element => (
  <ProfileMenuBar icon={<SettingIcon />} text="Settings" />
);
export const Help = (): JSX.Element => (
  <ProfileMenuBar icon={<HelpIcon />} text="Help" />
);
export const Logout = (): JSX.Element => (
  <ProfileMenuBar icon={<LogoutIcon />} text="Logout" />
);
