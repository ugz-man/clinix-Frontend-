const className = "stroke-primary-300 h-5 w-5";
const color = "#2F4F7F";

import {
  HiOutlinePhone as HiOutlinePhoneIcon,
  HiOutlineEnvelope as HiOutlineEnvelopeIcon,
  HiOutlineMapPin as HiOutlineMapPinIcon,
  HiMagnifyingGlass as HiMagnifyingGlassIcon,
  HiMiniPhone as HiMiniPhoneIcon,
  HiOutlineClock as HiOutlineClockIcon,
  HiOutlineUser as HiOutlineUserIcon,
} from "react-icons/hi2";

import { FaXTwitter as FaXTwitterIcon } from "react-icons/fa6";

function HiOutlinePhone() {
  return <HiOutlinePhoneIcon className={`${className}`} />;
}

function HiOutlineEnvelope() {
  return <HiOutlineEnvelopeIcon className={`${className}`} />;
}

function HiOutlineMapPin() {
  return <HiOutlineMapPinIcon className={`${className}`} />;
}

function FaXTwitter() {
  return <FaXTwitterIcon color={`${color}`} className={`${className}`} />;
}

function HiMagnifyingGlass() {
  return <HiMagnifyingGlassIcon className={`${className}`} />;
}

function HiMiniPhone() {
  return <HiMiniPhoneIcon className={`${className}`} />;
}

function HiOutlineClock() {
  return <HiOutlineClockIcon className={`${className}`} />;
}

function HiOutlineUser({ classStyle }) {
  return <HiOutlineUserIcon className={`${className} ${classStyle}`} />;
}

export {
  HiOutlinePhone,
  HiOutlineEnvelope,
  HiOutlineMapPin,
  FaXTwitter,
  HiMagnifyingGlass,
  HiMiniPhone,
  HiOutlineClock,
  HiOutlineUser,
};
