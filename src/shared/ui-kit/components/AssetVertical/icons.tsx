import { Icon, createIcon } from '@chakra-ui/react';
import { Resource } from '@schema/api-gateway';

const METAVERSE = createIcon({
  displayName: 'MetaverseIcon',
  viewBox: '0 0 12 12',
  path: [
    <path
      d="M6 0C2.68633 0 0 2.68633 0 6C0 9.31367 2.68633 12 6 12C9.31367 12 12 9.31367 12 6C12 2.68633 9.31367 0 6 0ZM0.683333 6.33333H2.011C2.04167 7.16867 2.185 7.957 2.42067 8.66667H1.386C0.973557 7.9541 0.732964 7.15516 0.683333 6.33333ZM6.33333 2.66667V0.693667C7.249 0.839 8.054 1.57867 8.59967 2.66667H6.33333ZM8.88367 3.33333C9.135 4.02767 9.29 4.82 9.32267 5.66667H6.33333V3.33333H8.88367ZM5.66667 0.693667V2.66667H3.40033C3.94567 1.57867 4.751 0.839 5.66667 0.693667ZM5.66667 3.33333V5.66667H2.67733C2.71 4.82 2.865 4.02767 3.11633 3.33333H5.66667ZM2.01133 5.66667H0.683333C0.733044 4.8449 0.97351 4.04601 1.38567 3.33333H2.42033C2.18533 4.043 2.042 4.83167 2.01133 5.66667ZM2.67733 6.33333H5.66667V8.66667H3.11633C2.865 7.97233 2.71 7.18033 2.67733 6.33333ZM5.66667 9.33333V11.3063C4.751 11.1607 3.94567 10.4213 3.40033 9.33333H5.66667ZM6.33333 11.3063V9.33333H8.6C8.05433 10.4213 7.249 11.1607 6.33333 11.3063ZM6.33333 8.66667V6.33333H9.323C9.29 7.18033 9.13533 7.97233 8.884 8.66667H6.33333ZM9.989 6.33333H11.3163C11.267 7.15517 11.0265 7.95414 10.614 8.66667H9.57933C9.81467 7.957 9.958 7.16867 9.989 6.33333ZM9.989 5.66667C9.958 4.83167 9.81467 4.043 9.57933 3.33333H10.614C11.0264 4.04588 11.2669 4.84484 11.3163 5.66667H9.989ZM10.1597 2.66667H9.32533C9.08633 2.132 8.79 1.66167 8.45233 1.267C9.11265 1.60965 9.69417 2.08637 10.1597 2.66667ZM3.54767 1.267C3.20967 1.66167 2.91333 2.132 2.67433 2.66667H1.84033C2.30592 2.08646 2.88742 1.60976 3.54767 1.267ZM1.84033 9.33333H2.67467C2.91333 9.868 3.20967 10.3383 3.54767 10.7327C2.88736 10.3901 2.30585 9.91353 1.84033 9.33333ZM8.45233 10.7327C8.79033 10.338 9.08633 9.868 9.32533 9.33333H10.1597C9.69416 9.91353 9.11264 10.3901 8.45233 10.7327Z"
      fill="#3B88C3"
    />,
  ],
});

const BLOCKCHAIN_SERVICE = createIcon({
  displayName: 'BlockchainServiceIcon',
  viewBox: '0 0 12 12',
  path: [
    <path
      d="M11 11.3333V12H9.99296V11.3333C9.99296 10.781 9.54196 10.3333 8.98596 10.3333V9.33331C10.0983 9.33331 11 10.229 11 11.3333Z"
      fill="#C6D5DB"
    />,
    <path
      d="M9.18167 9.99998C9.12433 9.99998 9.06933 10.0086 9.014 10.017V10.336C9.55667 10.351 9.993 10.7903 9.993 11.3333V12H10.3567V11.1666C10.3567 10.5223 9.83067 9.99998 9.18167 9.99998ZM7 11.3333V12H8.007V11.3333C8.007 10.781 8.458 10.3333 9.014 10.3333V9.33331C7.90167 9.33331 7 10.229 7 11.3333Z"
      fill="#E1E8ED"
    />,
    <path
      d="M8.84602 10C8.90335 10 8.95835 10.0087 9.01369 10.017V10.336C8.47102 10.351 8.03469 10.7903 8.03469 11.3333V12H7.67102V11.1667C7.67135 10.5223 8.19735 10 8.84602 10ZM11 0.666667V0H9.99302V0.666667C9.99302 1.219 9.54202 1.66667 8.98602 1.66667V2.66667C10.098 2.66667 11 1.771 11 0.666667Z"
      fill="#C6D5DB"
    />,
    <path
      d="M9.18167 2C9.12433 2 9.06933 1.99133 9.014 1.983V1.664C9.55667 1.64867 9.993 1.20967 9.993 0.666667V0H10.3567V0.833333C10.3567 1.47767 9.83033 2 9.18167 2ZM7 0.666667V0H8.007V0.666667C8.007 1.219 8.458 1.66667 9.014 1.66667V2.66667C7.90167 2.66667 7 1.771 7 0.666667Z"
      fill="#E1E8ED"
    />,
    <path
      d="M8.84605 2C8.90339 2 8.95839 1.99133 9.01372 1.983V1.664C8.47139 1.64867 8.03505 1.20967 8.03505 0.666667V0H7.67139V0.833333C7.67139 1.47767 8.19739 2 8.84605 2ZM8.98605 3.33333V4.33333C9.54205 4.33333 9.99305 4.781 9.99305 5.33333V6.66667C9.99305 7.219 9.54205 7.66667 8.98605 7.66667V8.66667C10.0984 8.66667 11.0001 7.771 11.0001 6.66667V5.33333C11.0001 4.229 10.0984 3.33333 8.98605 3.33333Z"
      fill="#C6D5DB"
    />,
    <path
      d="M9.18167 4C9.12434 4 9.06934 4.00867 9.01367 4.017V4.336C9.55634 4.351 9.99267 4.79033 9.99267 5.33333V6.66667C9.99267 7.20967 9.55634 7.64867 9.01367 7.664V7.983C9.06934 7.99133 9.12434 8 9.18167 8C9.83034 8 10.3563 7.47767 10.3563 6.83333V5.16667C10.3567 4.52233 9.83067 4 9.18167 4Z"
      fill="#E1E8ED"
    />,
    <path
      d="M8.007 5.33331C8.007 4.78098 8.458 4.33331 9.014 4.33331V3.33331C7.90167 3.33331 7 4.22898 7 5.33331V6.66665C7 7.77098 7.90167 8.66665 9.014 8.66665V7.66665C8.458 7.66665 8.007 7.21898 8.007 6.66665V5.33331Z"
      fill="#E1E8ED"
    />,
    <path
      d="M8.84596 4C8.19729 4 7.67129 4.52233 7.67129 5.16667V6.83333C7.67129 7.47767 8.19729 8 8.84596 8C8.90329 8 8.95829 7.99133 9.01363 7.983V7.664C8.47096 7.649 8.03463 7.20967 8.03463 6.66667V5.33333C8.03463 4.79033 8.47096 4.35133 9.01363 4.336V4.017C8.95863 4.00867 8.90363 4 8.84596 4ZM2.98596 6.33333V7.33333C3.54196 7.33333 3.99296 7.781 3.99296 8.33333V9.66667C3.99296 10.219 3.54196 10.6667 2.98596 10.6667V11.6667C4.0983 11.6667 4.99996 10.771 4.99996 9.66667V8.33333C4.99996 7.229 4.0983 6.33333 2.98596 6.33333Z"
      fill="#C6D5DB"
    />,
    <path
      d="M3.18167 7C3.12434 7 3.06934 7.00867 3.01367 7.017V7.336C3.55634 7.351 3.99267 7.79033 3.99267 8.33333V9.66667C3.99267 10.2097 3.55634 10.6487 3.01367 10.664V10.983C3.06934 10.9913 3.12434 11 3.18167 11C3.83034 11 4.35634 10.4777 4.35634 9.83333V8.16667C4.35667 7.52233 3.83067 7 3.18167 7Z"
      fill="#E1E8ED"
    />,
    <path
      d="M2.007 8.33331C2.007 7.78098 2.458 7.33331 3.014 7.33331V6.33331C1.90167 6.33331 1 7.22898 1 8.33331V9.66665C1 10.771 1.90167 11.6666 3.014 11.6666V10.6666C2.458 10.6666 2.007 10.219 2.007 9.66665V8.33331Z"
      fill="#E1E8ED"
    />,
    <path
      d="M2.84605 6.99998C2.19739 6.99998 1.67139 7.52231 1.67139 8.16665V9.83331C1.67139 10.4776 2.19739 11 2.84605 11C2.90339 11 2.95839 10.9913 3.01372 10.983V10.664C2.47139 10.6486 2.03505 10.2096 2.03505 9.66665V8.33331C2.03505 7.79031 2.47139 7.35131 3.01405 7.33598V7.01698C2.95872 7.00865 2.90372 6.99998 2.84605 6.99998ZM2.98605 0.333313V1.33331C3.54205 1.33331 3.99305 1.78098 3.99305 2.33331V3.66665C3.99305 4.21898 3.54205 4.66665 2.98605 4.66665V5.66665C4.09839 5.66665 5.00005 4.77098 5.00005 3.66665V2.33331C5.00005 1.22898 4.09839 0.333313 2.98605 0.333313Z"
      fill="#C6D5DB"
    />,
    <path
      d="M3.18167 0.99998C3.12433 0.99998 3.06933 1.00865 3.014 1.01698V1.33598C3.55667 1.35131 3.993 1.79031 3.993 2.33331V3.66665C3.993 4.20965 3.55667 4.64865 3.014 4.66398V4.98298C3.06933 4.99131 3.12433 4.99998 3.18167 4.99998C3.83033 4.99998 4.35633 4.47765 4.35633 3.83331V2.16665C4.35667 1.52231 3.83067 0.99998 3.18167 0.99998ZM2.007 2.33331C2.007 1.78098 2.458 1.33331 3.014 1.33331V0.333313C1.90167 0.333313 1 1.22898 1 2.33331V3.66665C1 4.77098 1.90167 5.66665 3.014 5.66665V4.66665C2.458 4.66665 2.007 4.21898 2.007 3.66665V2.33331Z"
      fill="#E1E8ED"
    />,
    <path
      d="M2.84605 1C2.19739 1 1.67139 1.52233 1.67139 2.16667V3.83333C1.67139 4.47767 2.19739 5 2.84605 5C2.90339 5 2.95839 4.99133 3.01372 4.983V4.664C2.47139 4.64867 2.03505 4.20967 2.03505 3.66667V2.33333C2.03505 1.79033 2.47139 1.35133 3.01405 1.336V1.017C2.95872 1.00867 2.90372 1 2.84605 1ZM9.66672 11C9.66672 11.1768 9.59648 11.3464 9.47146 11.4714C9.34643 11.5964 9.17686 11.6667 9.00005 11.6667C8.82324 11.6667 8.65367 11.5964 8.52865 11.4714C8.40362 11.3464 8.33339 11.1768 8.33339 11V7C8.33339 6.82319 8.40362 6.65362 8.52865 6.5286C8.65367 6.40357 8.82324 6.33333 9.00005 6.33333C9.17686 6.33333 9.34643 6.40357 9.47146 6.5286C9.59648 6.65362 9.66672 6.82319 9.66672 7V11Z"
      fill="#C6D5DB"
    />,
    <path
      d="M8.33337 6.99998V11C8.33337 11.1768 8.40361 11.3464 8.52864 11.4714C8.65366 11.5964 8.82323 11.6666 9.00004 11.6666V6.33331C8.82323 6.33331 8.65366 6.40355 8.52864 6.52858C8.40361 6.6536 8.33337 6.82317 8.33337 6.99998Z"
      fill="#EDF1F4"
    />,
    <path
      d="M9.66671 4.99998C9.66671 5.17679 9.59647 5.34636 9.47144 5.47138C9.34642 5.59641 9.17685 5.66665 9.00004 5.66665C8.82323 5.66665 8.65366 5.59641 8.52864 5.47138C8.40361 5.34636 8.33337 5.17679 8.33337 4.99998V0.99998C8.33337 0.823169 8.40361 0.653599 8.52864 0.528575C8.65366 0.403551 8.82323 0.333313 9.00004 0.333313C9.17685 0.333313 9.34642 0.403551 9.47144 0.528575C9.59647 0.653599 9.66671 0.823169 9.66671 0.99998V4.99998Z"
      fill="#C6D5DB"
    />,
    <path
      d="M8.33337 0.99998V4.99998C8.33337 5.17679 8.40361 5.34636 8.52864 5.47138C8.65366 5.59641 8.82323 5.66665 9.00004 5.66665V0.333313C8.82323 0.333313 8.65366 0.403551 8.52864 0.528575C8.40361 0.653599 8.33337 0.823169 8.33337 0.99998Z"
      fill="#EDF1F4"
    />,
    <path
      d="M3.66671 12H2.33337V9.99998C2.33337 9.82317 2.40361 9.6536 2.52864 9.52858C2.65366 9.40355 2.82323 9.33331 3.00004 9.33331C3.17685 9.33331 3.34642 9.40355 3.47144 9.52858C3.59647 9.6536 3.66671 9.82317 3.66671 9.99998V12Z"
      fill="#C6D5DB"
    />,
    <path
      d="M3.00004 9.33331C2.82323 9.33331 2.65366 9.40355 2.52864 9.52858C2.40361 9.6536 2.33337 9.82317 2.33337 9.99998V12H3.00004V9.33331Z"
      fill="#EDF1F4"
    />,
    <path
      d="M3.66671 7.99998C3.66671 8.17679 3.59647 8.34636 3.47144 8.47138C3.34642 8.59641 3.17685 8.66665 3.00004 8.66665C2.82323 8.66665 2.65366 8.59641 2.52864 8.47138C2.40361 8.34636 2.33337 8.17679 2.33337 7.99998V3.99998C2.33337 3.82317 2.40361 3.6536 2.52864 3.52858C2.65366 3.40355 2.82323 3.33331 3.00004 3.33331C3.17685 3.33331 3.34642 3.40355 3.47144 3.52858C3.59647 3.6536 3.66671 3.82317 3.66671 3.99998V7.99998Z"
      fill="#C6D5DB"
    />,
    <path
      d="M2.33337 3.99998V7.99998C2.33337 8.17679 2.40361 8.34636 2.52864 8.47138C2.65366 8.59641 2.82323 8.66665 3.00004 8.66665V3.33331C2.82323 3.33331 2.65366 3.40355 2.52864 3.52858C2.40361 3.6536 2.33337 3.82317 2.33337 3.99998Z"
      fill="#EDF1F4"
    />,
    <path
      d="M3.66671 0H2.33337V2C2.33337 2.17681 2.40361 2.34638 2.52864 2.4714C2.65366 2.59643 2.82323 2.66667 3.00004 2.66667C3.17685 2.66667 3.34642 2.59643 3.47144 2.4714C3.59647 2.34638 3.66671 2.17681 3.66671 2V0Z"
      fill="#C6D5DB"
    />,
    <path
      d="M3.00004 2.66667C2.82323 2.66667 2.65366 2.59643 2.52864 2.4714C2.40361 2.34638 2.33337 2.17681 2.33337 2V0H3.00004V2.66667Z"
      fill="#EDF1F4"
    />,
  ],
});

export const LAYER_1 = createIcon({
  displayName: 'LayerOneIcon',
  viewBox: '0 0 12 12',
  path: [
    <path
      d="M8.57038 3.62233L6.25971 0.217328C6.05904 -0.0776719 5.74038 -0.0716719 5.55071 0.229661L3.42071 3.60999C3.23104 3.91133 3.36038 4.15799 3.70904 4.15799H4.33338V5.33333C4.33338 5.51014 4.40361 5.67971 4.52864 5.80473C4.65366 5.92976 4.82323 6 5.00004 6H7.00004C7.17685 6 7.34642 5.92976 7.47145 5.80473C7.59647 5.67971 7.66671 5.51014 7.66671 5.33333V4.15833H8.29938C8.64838 4.15833 8.77071 3.91733 8.57038 3.62233ZM1.21704 7.85833H0.479376C0.154376 7.85833 0.019043 7.621 0.019043 7.39133C0.019043 7.15466 0.188376 6.92499 0.479376 6.92499H2.96904C3.26038 6.92499 3.42938 7.15466 3.42938 7.39133C3.42938 7.62133 3.29404 7.85833 2.96904 7.85833H2.23204V11.2547C2.23204 11.5933 2.01571 11.7827 1.72471 11.7827C1.43371 11.7827 1.21738 11.5933 1.21738 11.2547L1.21704 7.85833ZM3.46538 9.33333C3.46538 7.92599 4.41238 6.84299 5.79271 6.84299C7.15238 6.84299 8.12038 7.96 8.12038 9.33333C8.12038 10.7337 7.18004 11.8237 5.79271 11.8237C4.41904 11.8237 3.46538 10.7337 3.46538 9.33333ZM7.06471 9.33333C7.06471 8.51466 6.63838 7.77666 5.79271 7.77666C4.94704 7.77666 4.52071 8.51466 4.52071 9.33333C4.52071 10.1587 4.93371 10.8893 5.79271 10.8893C6.65204 10.8893 7.06471 10.1587 7.06471 9.33333ZM8.54238 7.452C8.54238 7.134 8.73204 6.92466 9.07071 6.92466H10.2677C11.2627 6.92466 12 7.57366 12 8.54166C12 9.52933 11.2357 10.1453 10.3087 10.1453H9.55771V11.255C9.55771 11.5937 9.34138 11.783 9.05071 11.783C8.75938 11.783 8.54271 11.5937 8.54271 11.255L8.54238 7.452ZM9.55771 9.252H10.248C10.6737 9.252 10.9444 8.94066 10.9444 8.535C10.9444 8.12866 10.6737 7.81766 10.248 7.81766H9.55771V9.252Z"
      fill="#94969A"
    />,
  ],
});

export const SOCIAL = createIcon({
  displayName: 'SocialIcon',
  viewBox: '0 0 12 12',
  path: [
    <path
      d="M9.66671 6.90965V6.25531C10 5.91198 10.638 5.29198 10.797 4.49765C10.8444 4.52398 10.8154 4.54098 10.868 4.54098C11.1207 4.54098 11.2867 4.21331 11.2867 3.80865C11.2867 3.41065 11.068 3.08831 10.8204 3.07831C10.868 2.90631 10.891 2.67631 10.891 2.38098C10.891 1.39565 10.0414 0.212646 8.14004 0.212646C6.45071 0.212646 5.39204 1.39565 5.39204 2.38098C5.39204 2.66698 5.40904 2.90165 5.43937 3.08331C5.20704 3.11831 5.02371 3.42765 5.02371 3.80831C5.02371 4.21298 5.22837 4.54065 5.48137 4.54065C5.53371 4.54065 5.45837 4.52365 5.50537 4.49731C5.66437 5.29198 6.33337 5.91165 6.66671 6.25531V6.87098C5.33337 7.03498 4.33337 7.74698 4.33337 8.45931V8.72931C4.33337 8.99998 4.60771 8.99998 4.87804 8.99998H11.1214C11.3924 8.99998 11.6667 8.99998 11.6667 8.72931V8.45931C11.6667 7.79231 10.6667 7.12698 9.66671 6.90965Z"
      fill="#55ACEE"
    />,
    <path
      d="M5.66671 9.57633V8.922C6.00004 8.57867 6.63804 7.95867 6.79704 7.16433C6.84437 7.19067 6.81537 7.20767 6.86804 7.20767C7.12071 7.20767 7.28671 6.88 7.28671 6.47533C7.28671 6.07733 7.06804 5.755 6.82037 5.745C6.86804 5.573 6.89104 5.343 6.89104 5.04767C6.89104 4.06233 6.04137 2.87933 4.14004 2.87933C2.45037 2.87933 1.39204 4.06233 1.39204 5.04767C1.39204 5.33367 1.40904 5.56833 1.43937 5.75C1.20704 5.785 1.02371 6.09433 1.02371 6.475C1.02371 6.87967 1.22837 7.20733 1.48137 7.20733C1.53371 7.20733 1.45837 7.19033 1.50537 7.164C1.66437 7.95867 2.33337 8.57833 2.66671 8.922V9.53767C1.33337 9.70167 0.333374 10.4137 0.333374 11.126V11.3963C0.333374 11.6667 0.607707 11.6667 0.878041 11.6667H7.12137C7.39237 11.6667 7.66671 11.6667 7.66671 11.396V11.1257C7.66671 10.459 6.66671 9.79367 5.66671 9.57633Z"
      fill="#226699"
    />,
  ],
});

export const CEFI = createIcon({
  displayName: 'CEFIIcon',
  viewBox: '0 0 12 12',
  path: [
    <path
      d="M11.3333 4.33333C11.3333 4.51014 11.2631 4.67971 11.138 4.80474C11.013 4.92976 10.8434 5 10.6666 5H8.66663C8.48982 5 8.32025 4.92976 8.19522 4.80474C8.0702 4.67971 7.99996 4.51014 7.99996 4.33333V3.66667C7.99996 3.48986 8.0702 3.32029 8.19522 3.19526C8.32025 3.07024 8.48982 3 8.66663 3H10.6666C10.8434 3 11.013 3.07024 11.138 3.19526C11.2631 3.32029 11.3333 3.48986 11.3333 3.66667V4.33333ZM3.99996 4.33333C3.99996 4.51014 3.92972 4.67971 3.8047 4.80474C3.67967 4.92976 3.5101 5 3.33329 5H1.33329C1.15648 5 0.986912 4.92976 0.861888 4.80474C0.736864 4.67971 0.666626 4.51014 0.666626 4.33333V3.66667C0.666626 3.48986 0.736864 3.32029 0.861888 3.19526C0.986912 3.07024 1.15648 3 1.33329 3H3.33329C3.5101 3 3.67967 3.07024 3.8047 3.19526C3.92972 3.32029 3.99996 3.48986 3.99996 3.66667V4.33333Z"
      fill="#DAC8B1"
    />,
    <path
      d="M12 11.3334C12 11.5102 11.9298 11.6797 11.8047 11.8048C11.6797 11.9298 11.5101 12 11.3333 12H0.666667C0.489856 12 0.320286 11.9298 0.195262 11.8048C0.0702379 11.6797 0 11.5102 0 11.3334V4.33335C0 4.15654 0.0702379 3.98697 0.195262 3.86195C0.320286 3.73693 0.489856 3.66669 0.666667 3.66669H11.3333C11.5101 3.66669 11.6797 3.73693 11.8047 3.86195C11.9298 3.98697 12 4.15654 12 4.33335V11.3334Z"
      fill="#F1DCC1"
    />,
    <path
      d="M7.33337 3V2.33333C7.33337 2.08733 7.19871 1.87467 7.00004 1.759V1.66667C7.00004 1.48986 6.9298 1.32029 6.80478 1.19526C6.67975 1.07024 6.51019 1 6.33337 1H5.66671C5.4899 1 5.32033 1.07024 5.1953 1.19526C5.07028 1.32029 5.00004 1.48986 5.00004 1.66667V1.759C4.80171 1.87467 4.66671 2.08733 4.66671 2.33333V3H4.33337V12H7.66671V3H7.33337Z"
      fill="#DAC8B1"
    />,
    <path
      d="M4.66663 2.33331H5.33329V2.99998H4.66663V2.33331ZM6.66663 2.33331H7.33329V2.99998H6.66663V2.33331ZM5.66663 2.33331H6.33329V2.99998H5.66663V2.33331Z"
      fill="#55ACEE"
    />,
    <path
      d="M5 5H5.66667V9.66667H5V5ZM6.33333 5H7V9.66667H6.33333V5Z"
      fill="#3B88C3"
    />,
    <path
      d="M7.99996 5.66669H8.66663V9.66669H7.99996V5.66669ZM9.33329 5.66669H9.99996V9.66669H9.33329V5.66669ZM10.6666 5.66669H11.3333V9.66669H10.6666V5.66669ZM0.666626 5.66669H1.33329V9.66669H0.666626V5.66669ZM1.99996 5.66669H2.66663V9.66669H1.99996V5.66669ZM3.33329 5.66669H3.99996V9.66669H3.33329V5.66669ZM0.666626 10H1.33329V10.6667H0.666626V10ZM1.99996 10H2.66663V10.6667H1.99996V10ZM3.33329 10H3.99996V10.6667H3.33329V10Z"
      fill="#55ACEE"
    />,
    <path
      d="M5 10H5.66667V10.6667H5V10ZM6.33333 10H7V10.6667H6.33333V10Z"
      fill="#3B88C3"
    />,
    <path
      d="M8 10H8.66667V10.6667H8V10ZM9.33333 10H10V10.6667H9.33333V10ZM10.6667 10H11.3333V10.6667H10.6667V10Z"
      fill="#55ACEE"
    />,
    <path
      d="M0.666626 11H1.33329V12H0.666626V11ZM1.99996 11H2.66663V12H1.99996V11ZM3.33329 11H3.99996V12H3.33329V11ZM4.99996 11H5.66663V12H4.99996V11ZM6.33329 11H6.99996V12H6.33329V11ZM7.99996 11H8.66663V12H7.99996V11ZM9.33329 11H9.99996V12H9.33329V11ZM10.6666 11H11.3333V12H10.6666V11Z"
      fill="#66757F"
    />,
  ],
});

export const NFT = createIcon({
  displayName: 'NTF',
  viewBox: '0 0 12 12',
  path: [
    <path
      d="M11.6667 9.99998C11.6667 10.1768 11.5965 10.3464 11.4714 10.4714C11.3464 10.5964 11.1769 10.6666 11 10.6666H1.00004C0.82323 10.6666 0.65366 10.5964 0.528636 10.4714C0.403612 10.3464 0.333374 10.1768 0.333374 9.99998V1.99998C0.333374 1.82317 0.403612 1.6536 0.528636 1.52858C0.65366 1.40355 0.82323 1.33331 1.00004 1.33331H11C11.1769 1.33331 11.3464 1.40355 11.4714 1.52858C11.5965 1.6536 11.6667 1.82317 11.6667 1.99998V9.99998Z"
      fill="#D79E84"
    />,
    <path
      d="M11 1.33331H1.00004C0.82323 1.33331 0.65366 1.40355 0.528636 1.52858C0.403612 1.6536 0.333374 1.82317 0.333374 1.99998V9.99998C0.333374 10.1296 0.372041 10.2493 0.435707 10.3516L11.5457 1.61898C11.4846 1.53085 11.403 1.45884 11.308 1.40909C11.213 1.35934 11.1073 1.33334 11 1.33331Z"
      fill="#BF6952"
    />,
    <path
      d="M10.3333 7.33335V3.00002C10.3333 2.91161 10.2982 2.82683 10.2357 2.76432C10.1732 2.70181 10.0884 2.66669 9.99996 2.66669H1.99996C1.91155 2.66669 1.82677 2.70181 1.76426 2.76432C1.70174 2.82683 1.66663 2.91161 1.66663 3.00002V7.33335H10.3333Z"
      fill="#8CCAF7"
    />,
    <path
      d="M1.99996 9.33333H6.33329V7H1.66663V9C1.66663 9.08841 1.70174 9.17319 1.76426 9.2357C1.82677 9.29821 1.91155 9.33333 1.99996 9.33333Z"
      fill="#5DADEC"
    />,
    <path
      d="M6.33337 7V9.33333H10C10.0884 9.33333 10.1732 9.29821 10.2357 9.2357C10.2983 9.17319 10.3334 9.08841 10.3334 9V7H6.33337Z"
      fill="#292F33"
    />,
    <path
      d="M6.66668 6.33331C6.46235 6.33331 6.38268 6.70898 6.19835 6.99998C6.08202 7.18331 5.92435 7.33331 5.66668 7.33331C5.00002 7.33331 5.00002 8.33331 4.66668 8.33331C4.24802 8.33331 3.82935 8.85931 3.57568 9.33331H6.33335C6.62635 8.74731 6.92035 8.16198 7.66668 8.02898C7.77671 8.00943 7.88827 7.99972 8.00002 7.99998C9.00002 7.99998 9.03535 7.48231 9.33335 7.33331C9.78602 7.10698 10.0837 7.18765 10.3334 7.26298V6.33331H6.66668Z"
      fill="#67757F"
    />,
    <path
      d="M6.86471 4.70831C6.86475 4.62622 6.84861 4.54493 6.81722 4.46908C6.78583 4.39324 6.73979 4.32432 6.68175 4.26627C6.6237 4.20823 6.55478 4.16219 6.47894 4.1308C6.40309 4.09941 6.3218 4.08327 6.23971 4.08331C6.21337 4.08331 6.18804 4.08798 6.16237 4.09098C6.18224 3.9998 6.18143 3.90532 6.15999 3.81449C6.13856 3.72366 6.09704 3.63879 6.03849 3.56611C5.97995 3.49343 5.90587 3.4348 5.82168 3.39451C5.7375 3.35423 5.64536 3.33331 5.55204 3.33331C5.4465 3.33344 5.34273 3.36035 5.25043 3.41154C5.15814 3.46273 5.08036 3.53652 5.02437 3.62598C4.95353 3.59816 4.87815 3.58369 4.80204 3.58331C4.65068 3.58362 4.5046 3.63899 4.39107 3.73909C4.27754 3.83919 4.2043 3.97718 4.18504 4.12731C4.11293 4.09851 4.03603 4.08358 3.95837 4.08331C3.79261 4.08331 3.63364 4.14916 3.51643 4.26637C3.39922 4.38358 3.33337 4.54255 3.33337 4.70831C3.33337 4.87407 3.39922 5.03304 3.51643 5.15025C3.63364 5.26746 3.79261 5.33331 3.95837 5.33331C3.97204 5.33331 3.98504 5.32998 3.99871 5.32931L4.00004 5.33331H6.25004V5.33231C6.41389 5.32978 6.57016 5.26293 6.68516 5.14619C6.80015 5.02945 6.86464 4.87218 6.86471 4.70831Z"
      fill="white"
    />,
  ],
});

export const BRIDGE = createIcon({
  displayName: 'BridgeIcon',
  viewBox: '0 0 12 12',
  path: [
    <path
      d="M10.6667 5.98598C11.0981 6.25042 11.5432 6.49197 12 6.70965V6.01965C10.8217 5.40965 8.33767 3.86465 6.66667 0.99998C6.66667 0.99998 6.66667 0.333313 6 0.333313C5.33333 0.333313 5.33333 0.99998 5.33333 0.99998C3.66233 3.86465 1.17833 5.40965 0 6.01965V6.70965C0.456827 6.49197 0.901886 6.25042 1.33333 5.98598V6.99998H0V8.33331H5.33333V9.99998H6.66667V8.33331H12V6.99998H10.6667V5.98598ZM10 6.99998H8.66667V4.52165C9.09098 4.89079 9.53616 5.23525 10 5.55331V6.99998ZM2 5.55298C2.46386 5.23506 2.90904 4.89071 3.33333 4.52165V6.99998H2V5.55298ZM4 6.99998V3.90265C4.48506 3.42176 4.93092 2.90288 5.33333 2.35098V6.99998H4ZM6.66667 2.35131C7.06917 2.90315 7.51502 3.42202 8 3.90298V6.99998H6.66667V2.35131Z"
      fill="#FE5011"
    />,
  ],
});

export const ZK_ROLLUP = createIcon({
  displayName: 'ZkRollupIcon',
  viewBox: '0 0 12 12',
  path: [
    <path
      d="M8.66671 9.33331H3.33337C2.80294 9.33331 2.29423 9.54403 1.91916 9.9191C1.54409 10.2942 1.33337 10.8029 1.33337 11.3333V12H10.6667V11.3333C10.6667 10.2286 9.77171 9.33331 8.66671 9.33331Z"
      fill="#292F33"
    />,
    <path
      d="M2.69428 11.1136C2.77794 11.1136 2.82794 12 2.82794 12H2.50928C2.50928 12 2.57361 11.1136 2.69428 11.1136ZM3.69428 11.1136C3.77794 11.1136 3.82794 12 3.82794 12H3.50894C3.50928 12 3.57361 11.1136 3.69428 11.1136ZM8.30961 11.1136C8.22594 11.1136 8.17594 12 8.17594 12H8.49461C8.49428 12 8.42994 11.1136 8.30961 11.1136ZM9.30961 11.1136C9.22594 11.1136 9.17594 12 9.17594 12H9.49461C9.49428 12 9.42994 11.1136 9.30961 11.1136Z"
      fill="#66757F"
    />,
    <path
      d="M4.12671 9.33331C4.12671 9.33331 4.20671 9.61265 4.38338 9.99031C4.65904 10.579 5.17204 11.4083 6.00004 11.804C6.82838 11.4083 7.34138 10.579 7.61671 9.99031C7.79338 9.61265 7.87338 9.33331 7.87338 9.33331H4.12671Z"
      fill="#FA743E"
    />,
    <path
      d="M6.00004 10.6666C6.77638 10.6666 7.29404 10.3266 7.61671 9.99031C7.79338 9.61265 7.87338 9.33331 7.87338 9.33331H4.12671C4.12671 9.33331 4.20671 9.61265 4.38338 9.99031C4.70604 10.3266 5.22371 10.6666 6.00004 10.6666Z"
      fill="#DD551F"
    />,
    <path
      d="M4.54672 9.36868C4.54672 9.66668 5.33339 10.033 6.00005 10.033C6.66672 10.033 7.45305 9.66668 7.45305 9.36901V8.09668H4.54639V9.36868H4.54672Z"
      fill="#F7DECE"
    />,
    <path
      d="M4.54403 8.65768C4.94937 9.11568 5.45203 9.23968 5.9987 9.23968C6.54503 9.23968 7.04737 9.11535 7.45303 8.65768V7.49402H4.5437V8.65768H4.54403Z"
      fill="#EEC2AD"
    />,
    <path
      d="M7.05061 1.10003C6.40895 0.892361 5.09195 0.946695 4.71461 1.43736C3.73328 1.45636 2.68695 2.41469 2.53595 3.58503C2.38661 4.74336 2.61428 5.20969 2.73295 6.08036C2.86728 7.06703 3.42195 7.38269 3.86528 7.51469C4.50328 8.35769 5.18161 8.32169 6.32061 8.32169C8.54461 8.32169 9.41095 6.83569 9.50461 4.30836C9.56095 2.78003 8.66395 1.62203 7.05061 1.10003Z"
      fill="#292F33"
    />,
    <path
      d="M8.51567 4.41465C8.30034 4.11665 8.02501 3.87665 7.42101 3.79198C7.64767 3.89565 7.86467 4.25432 7.89301 4.45265C7.92134 4.65098 7.94967 4.81132 7.77034 4.61298C7.05201 3.81898 6.26967 4.13165 5.49467 3.64665C4.95334 3.30798 4.78834 2.93298 4.78834 2.93298C4.78834 2.93298 4.72234 3.43298 3.90134 3.94265C3.66334 4.09032 3.37934 4.41932 3.22201 4.90532C3.10867 5.25465 3.14401 5.56598 3.14401 6.09798C3.14401 7.65132 4.42434 8.95732 6.00334 8.95732C7.58234 8.95732 8.86267 7.63965 8.86267 6.09798C8.86201 5.13165 8.76101 4.75432 8.51567 4.41465Z"
      fill="#F7DECE"
    />,
    <path
      d="M6.32033 6.89234H5.685C5.64283 6.89234 5.60239 6.87559 5.57257 6.84577C5.54275 6.81595 5.526 6.77551 5.526 6.73334C5.526 6.69117 5.54275 6.65073 5.57257 6.62091C5.60239 6.59109 5.64283 6.57434 5.685 6.57434H6.32033C6.3625 6.57434 6.40295 6.59109 6.43276 6.62091C6.46258 6.65073 6.47933 6.69117 6.47933 6.73334C6.47933 6.77551 6.46258 6.81595 6.43276 6.84577C6.40295 6.87559 6.3625 6.89234 6.32033 6.89234Z"
      fill="#C1694F"
    />,
    <path
      d="M4.73161 5.78033C4.64736 5.78033 4.56656 5.74686 4.50698 5.68729C4.44741 5.62771 4.41394 5.54692 4.41394 5.46266V5.145C4.41394 5.06075 4.44741 4.97995 4.50698 4.92037C4.56656 4.8608 4.64736 4.82733 4.73161 4.82733C4.81586 4.82733 4.89666 4.8608 4.95623 4.92037C5.01581 4.97995 5.04927 5.06075 5.04927 5.145V5.46266C5.04927 5.54692 5.01581 5.62771 4.95623 5.68729C4.89666 5.74686 4.81586 5.78033 4.73161 5.78033ZM7.27361 5.78033C7.18936 5.78033 7.10856 5.74686 7.04898 5.68729C6.98941 5.62771 6.95594 5.54692 6.95594 5.46266V5.145C6.95594 5.06075 6.98941 4.97995 7.04898 4.92037C7.10856 4.8608 7.18936 4.82733 7.27361 4.82733C7.35786 4.82733 7.43866 4.8608 7.49823 4.92037C7.55781 4.97995 7.59127 5.06075 7.59127 5.145V5.46266C7.59127 5.54692 7.55781 5.62771 7.49823 5.68729C7.43866 5.74686 7.35786 5.78033 7.27361 5.78033Z"
      fill="#662113"
    />,
    <path
      d="M6.04461 8.21898C5.12661 8.21898 4.84461 7.98398 4.79761 7.93631C4.75562 7.89644 4.73119 7.84152 4.72969 7.78364C4.72819 7.72575 4.74974 7.66964 4.78961 7.62765C4.82949 7.58565 4.8844 7.56122 4.94229 7.55972C5.00018 7.55822 5.05629 7.57978 5.09828 7.61965C5.11561 7.63198 5.33861 7.78198 6.04461 7.78198C6.77795 7.78198 6.98995 7.62031 6.99195 7.61865C7.01209 7.59868 7.03602 7.58294 7.06233 7.57236C7.08865 7.56178 7.11681 7.55657 7.14517 7.55704C7.17352 7.5575 7.2015 7.56363 7.22745 7.57507C7.25341 7.58651 7.27681 7.60303 7.29628 7.62365C7.33669 7.66602 7.35884 7.72256 7.35796 7.7811C7.35709 7.83964 7.33326 7.8955 7.29161 7.93665C7.24428 7.98398 6.96261 8.21898 6.04461 8.21898Z"
      fill="#C1694F"
    />,
    <path
      d="M10.7014 1.17031L6.03469 0.170315C6.01174 0.165315 5.98798 0.165315 5.96503 0.170315L1.29836 1.17031C1.26197 1.17809 1.22922 1.19782 1.20534 1.22636C1.18146 1.2549 1.16782 1.29062 1.16659 1.32781C1.16537 1.365 1.17662 1.40154 1.19857 1.43159C1.22052 1.46165 1.25189 1.48349 1.28769 1.49365L2.93569 1.96465C2.87169 2.16298 2.83336 2.39198 2.83336 2.66665C2.83336 3.42998 3.92836 3.83331 6.00003 3.83331C8.07169 3.83331 9.16669 3.42998 9.16669 2.66665C9.16669 2.39198 9.12836 2.16298 9.06436 1.96465L10.7127 1.49365C10.7485 1.48343 10.7798 1.46152 10.8017 1.43142C10.8236 1.40131 10.8348 1.36475 10.8335 1.32755C10.8322 1.29035 10.8185 1.25466 10.7945 1.22616C10.7706 1.19766 10.7378 1.178 10.7014 1.17031Z"
      fill="#292F33"
    />,
    <path
      d="M10.8267 1.28767C10.8144 1.24524 10.7859 1.20938 10.7473 1.1879C10.7087 1.16642 10.6632 1.16106 10.6207 1.173L6 2.49334L1.379 1.173C1.35795 1.16701 1.33592 1.16521 1.31417 1.16773C1.29242 1.17025 1.27138 1.17702 1.25225 1.18767C1.21362 1.20918 1.18511 1.24515 1.173 1.28767C1.16089 1.33019 1.16617 1.37579 1.18767 1.41442C1.20918 1.45305 1.24515 1.48156 1.28767 1.49367L5.95434 2.827C5.98406 2.83562 6.01561 2.83562 6.04534 2.827L10.712 1.49367C10.7331 1.48776 10.7528 1.47772 10.77 1.46414C10.7872 1.45056 10.8016 1.43371 10.8123 1.41456C10.8229 1.39541 10.8297 1.37434 10.8322 1.35256C10.8346 1.33078 10.8328 1.30872 10.8267 1.28767Z"
      fill="#66757F"
    />,
    <path
      d="M5.98596 1.16735L1.98596 1.50069C1.97729 1.50135 1.83329 1.51969 1.83329 1.66669V3.69835C1.73363 3.76035 1.66663 3.94502 1.66663 4.50002C1.66663 5.32835 1.81596 6.00002 1.99996 6.00002C2.18396 6.00002 2.33329 5.32835 2.33329 4.50002C2.33329 3.94502 2.26629 3.76035 2.16663 3.69835V1.82002L6.01396 1.49935C6.057 1.4944 6.09642 1.47288 6.12386 1.43936C6.15131 1.40584 6.16462 1.36294 6.16098 1.31977C6.15734 1.2766 6.13703 1.23655 6.10436 1.2081C6.07169 1.17964 6.02922 1.16503 5.98596 1.16735Z"
      fill="#FFCC4D"
    />,
  ],
});

export const LENDING = createIcon({
  displayName: 'LendingIcon',
  viewBox: '0 0 12 12',
  path: [
    <path
      d="M10.6326 7.97933C10.4333 5.77333 9.33329 4.66667 9.33329 4.66667L7.33329 2H4.66663L2.66663 4.66667C2.66663 4.66667 2.19363 5.14433 1.81096 6.09167C1.14796 6.31167 0.666626 6.92967 0.666626 7.66667C0.666913 7.89579 0.714726 8.12237 0.807042 8.33207C0.899358 8.54178 1.03417 8.73005 1.20296 8.885C1.0715 9.12468 1.00173 9.39331 0.999959 9.66667C0.999959 10.3193 1.37863 10.8787 1.92496 11.152C2.35263 11.7927 2.92396 12 3.33329 12H8.66663C9.12629 12 9.79096 11.7403 10.226 10.8967C10.8696 10.6663 11.3333 10.0567 11.3333 9.33333C11.333 9.06812 11.2692 8.80684 11.1473 8.57129C11.0254 8.33575 10.8489 8.13278 10.6326 7.97933ZM5.99996 2C6.18329 2 6.35263 1.94733 6.49996 1.86133C6.64763 1.94733 6.81696 2 6.99996 2C7.55229 2 8.33329 1.21867 8.33329 0.666667C8.33329 0.666667 8.33329 0 7.66663 0C7.40396 0 7.33329 0.333333 6.99996 0.333333C6.66663 0.333333 6.66663 0 5.99996 0C5.33329 0 5.33329 0.333333 4.99996 0.333333C4.66663 0.333333 4.59629 0 4.33329 0C3.66663 0 3.66663 0.666667 3.66663 0.666667C3.66663 1.21867 4.44796 2 4.99996 2C5.18296 2 5.35229 1.94733 5.49996 1.86133C5.64763 1.94733 5.81696 2 5.99996 2Z"
      fill="#FDD888"
    />,
    <path
      d="M8 2.00002C8 2.08843 7.96488 2.17321 7.90237 2.23572C7.83986 2.29823 7.75507 2.33335 7.66667 2.33335H4.33333C4.24493 2.33335 4.16014 2.29823 4.09763 2.23572C4.03512 2.17321 4 2.08843 4 2.00002C4 1.91161 4.03512 1.82683 4.09763 1.76432C4.16014 1.70181 4.24493 1.66669 4.33333 1.66669H7.66667C7.75507 1.66669 7.83986 1.70181 7.90237 1.76432C7.96488 1.82683 8 1.91161 8 2.00002Z"
      fill="#BF6952"
    />,
    <path
      d="M7.96697 8.18069C7.96697 6.68835 5.10663 6.78569 5.10663 5.88535C5.10663 5.44935 5.5403 5.23635 6.04363 5.23635C6.88963 5.23635 7.0403 5.75935 7.4233 5.75935C7.6943 5.75935 7.82497 5.59502 7.82497 5.41069C7.82497 4.98269 7.1503 4.65869 6.5033 4.54669V4.13335C6.5033 3.87569 6.28663 3.66669 6.01863 3.66669C5.7503 3.66669 5.5333 3.87569 5.5333 4.13335V4.56102C4.82797 4.71535 4.22097 5.18602 4.22097 5.95302C4.22097 7.38602 7.08063 7.32802 7.08063 8.33469C7.08063 8.68369 6.68797 9.03235 6.04363 9.03235C5.07663 9.03235 4.75463 8.40269 4.36197 8.40269C4.17063 8.40269 3.99963 8.55735 3.99963 8.79069C3.99963 9.16169 4.64563 9.60769 5.53397 9.73202L5.53363 9.73535V10.2014C5.53363 10.4587 5.75097 10.668 6.01897 10.668C6.28697 10.668 6.50397 10.4587 6.50397 10.2014V9.73535C6.50397 9.72969 6.5013 9.72535 6.50097 9.72035C7.3003 9.57702 7.96697 9.07635 7.96697 8.18069Z"
      fill="#67757F"
    />,
  ],
});

export const INFRA = createIcon({
  displayName: 'InfraIcon',
  viewBox: '0 0 12 12',
  path: [
    <path
      d="M11.3333 5H10.2127C10.1062 4.55068 9.92816 4.12142 9.68533 3.72867L10.4783 2.93567C10.5403 2.87376 10.5894 2.80025 10.6229 2.71935C10.6564 2.63845 10.6737 2.55174 10.6737 2.46417C10.6737 2.3766 10.6564 2.28988 10.6229 2.20898C10.5894 2.12808 10.5403 2.05458 10.4783 1.99267L10.007 1.52133C9.88198 1.39635 9.71244 1.32614 9.53567 1.32614C9.35889 1.32614 9.18935 1.39635 9.06433 1.52133L8.27133 2.31433C7.87853 2.07167 7.44928 1.89374 7 1.78733V0.666667C7 0.489856 6.92976 0.320286 6.80474 0.195262C6.67971 0.0702379 6.51014 0 6.33333 0L5.66667 0C5.48986 0 5.32029 0.0702379 5.19526 0.195262C5.07024 0.320286 5 0.489856 5 0.666667V1.78733C4.55068 1.89379 4.12142 2.07184 3.72867 2.31467L2.936 1.52167C2.81098 1.39669 2.64144 1.32648 2.46467 1.32648C2.28789 1.32648 2.11835 1.39669 1.99333 1.52167L1.52167 1.993C1.3967 2.11807 1.32648 2.28763 1.32642 2.46443C1.32636 2.64123 1.39646 2.81084 1.52133 2.936L2.31433 3.729C2.07168 4.12168 1.89374 4.55082 1.78733 5H0.666667C0.489856 5 0.320286 5.07024 0.195262 5.19526C0.0702379 5.32029 0 5.48986 0 5.66667L0 6.33333C0 6.51014 0.0702379 6.67971 0.195262 6.80474C0.320286 6.92976 0.489856 7 0.666667 7H1.78733C1.89385 7.44919 2.0719 7.87834 2.31467 8.271L1.52167 9.064C1.26167 9.324 1.26167 9.74667 1.522 10.007L1.99333 10.4783C2.25333 10.7383 2.67567 10.7383 2.936 10.4783L3.729 9.68533C4.12169 9.92829 4.55097 10.1064 5.00033 10.2127V11.3333C5.00033 11.5101 5.07057 11.6797 5.1956 11.8047C5.32062 11.9298 5.49019 12 5.667 12H6.33367C6.51048 12 6.68005 11.9298 6.80507 11.8047C6.9301 11.6797 7.00033 11.5101 7.00033 11.3333V10.2127C7.44953 10.1061 7.87867 9.9281 8.27133 9.68533L9.06433 10.4783C9.18935 10.6033 9.35889 10.6735 9.53567 10.6735C9.71244 10.6735 9.88198 10.6033 10.007 10.4783L10.4783 10.007C10.5403 9.94509 10.5894 9.87159 10.6229 9.79068C10.6564 9.70978 10.6737 9.62307 10.6737 9.5355C10.6737 9.44793 10.6564 9.36122 10.6229 9.28032C10.5894 9.19941 10.5403 9.12591 10.4783 9.064L9.68533 8.271C9.92829 7.87831 10.1064 7.44903 10.2127 6.99967H11.3333C11.5101 6.99967 11.6797 6.92943 11.8047 6.8044C11.9298 6.67938 12 6.50981 12 6.333V5.66633C11.9999 5.48958 11.9296 5.3201 11.8046 5.19514C11.6796 5.07019 11.5101 5 11.3333 5ZM6 8.66667C5.29276 8.66667 4.61448 8.38572 4.11438 7.88562C3.61428 7.38552 3.33333 6.70724 3.33333 6C3.33333 5.29276 3.61428 4.61448 4.11438 4.11438C4.61448 3.61428 5.29276 3.33333 6 3.33333C6.70724 3.33333 7.38552 3.61428 7.88562 4.11438C8.38572 4.61448 8.66667 5.29276 8.66667 6C8.66667 6.70724 8.38572 7.38552 7.88562 7.88562C7.38552 8.38572 6.70724 8.66667 6 8.66667Z"
      fill="#66757F"
    />,
  ],
});

export const GAMEFI = createIcon({
  displayName: 'GameFiIcon',
  viewBox: '0 0 12 12',
  path: [
    <path
      d="M8.66667 10.3334H10V11.6667H8.66667V10.3334ZM2 10.3334H3.33333V11.6667H2V10.3334ZM10 3.33335H9.33333V2.66669H8.66667V2.00002H7.66667V0.666687H7V2.00002H5V0.666687H4.33333V2.00002H3.33333V2.66669H2.66667V3.33335H2V5.66669H0.666667V6.33335H2V8.66669H3.33333V10.3334H5V8.66669H7V10.3334H8.66667V8.66669H10V6.33335H11.3333V5.66669H10V3.33335ZM5.33333 7.00002H4V4.33335H5.33333V7.00002ZM6.66667 7.00002V4.33335H8V7.00002H6.66667ZM11.3333 2.00002H12V5.66669H11.3333V2.00002ZM0 2.00002H0.666667V5.66669H0V2.00002Z"
      fill="#553986"
    />,
  ],
});

export const DEFI = createIcon({
  displayName: 'DeFiIcon',
  viewBox: '0 0 12 12',
  path: [
    <path
      d="M0.264717 5.37067C0.59805 5.37067 2.22305 5.81867 2.43138 6.14133L2.00438 6.1C2.00438 6.1 0.702383 5.68333 0.36905 5.68333C0.0353832 5.68333 0.264717 5.37067 0.264717 5.37067Z"
      fill="#5C913B"
    />,
    <path
      d="M3.6667 0.666646C4.00004 0.99998 4.6667 2.99998 4.6667 3.99998C4.6667 4.99998 4.00004 5.99998 5.33337 6.66665C6.6667 7.33331 7.00037 6.33331 7.00037 4.99998C7.00037 3.66665 6.6667 2.33331 6.33337 1.66665C6.00004 0.99998 5.6667 1.66665 5.6667 1.66665C5.6667 1.66665 5.33337 0.333313 5.00004 0.333313C4.6667 0.333313 4.6667 0.99998 4.6667 0.99998C4.6667 0.99998 4.00004 0.333313 3.6667 0.333313C3.33337 0.333313 3.6667 0.666646 3.6667 0.666646Z"
      fill="#99AAB5"
    />,
    <path
      d="M3.33332 5C4.33332 5 4.66666 6.33333 5.33332 6.33333C5.99999 6.33333 5.66666 5.33333 6.33332 5.33333C6.99999 5.33333 9.66666 3.66667 9.66666 1.66667C9.66666 -0.333332 10.6667 0.666668 10.6667 1.33333C11 1.33333 11.3333 1.862 11.3333 2.33333C11.3333 2.66667 11.3333 3 11 3.33333C11.3333 3.33333 11.6667 4 11.3333 4.33333C11.6667 5.33333 11 6.33333 10.3333 6.66667C10.3333 7 9.66666 7.66667 8.99999 7.33333C8.99999 7.33333 8.66666 8.33333 7.99999 8C7.99999 8 9.01732 8.56133 9.33332 8.66667C10.3333 9 11.6667 9 11.6667 9C11.6667 9 11.6667 9.33333 11 9.66667C11 9.66667 11.3333 10 11 10.3333C10.6667 10.6667 10.3333 10.6667 10.3333 10.6667C10.3333 10.6667 10.6667 11.3333 9.66666 11C8.66666 10.6667 7.66666 9.66667 7.66666 9.66667C7.66666 9.66667 5.99999 10 4.66666 9.33333C3.33332 8.66667 2.66666 7.33333 2.66666 6.66667C2.66666 6 1.66666 6.33333 1.33332 6.33333C0.99999 6.33333 1.99999 5.66667 2.33332 5.66667C2.33332 5.66667 2.33332 5 3.33332 5Z"
      fill="#CCD6DD"
    />,
    <path
      d="M2.31672 6.00634C2.31672 6.00634 4.12938 6.88134 4.96272 8.22501C5.59605 9.24634 5.89005 11.1103 5.89005 11.1103C5.89005 11.1103 5.90438 11.2983 5.58772 10.35C5.25438 9.35001 4.84872 8.25401 4.15038 7.62067C3.03572 6.61034 2.56705 6.45401 2.12972 6.20401C2.01905 6.14101 2.20205 5.97501 2.31672 6.00634Z"
      fill="#5C913B"
    />,
    <path
      d="M5.39935 9.51334C5.39935 9.51334 6.07869 9.54767 6.43502 10.2263C6.79102 10.905 6.41736 11.8643 6.41736 11.8643C6.41736 11.8643 5.50069 11.4417 5.26335 10.882C5.02602 10.322 5.39935 9.51334 5.39935 9.51334ZM4.68835 7.92067C4.68835 7.92067 5.11302 8.39967 5.87435 8.489C6.63569 8.57867 7.24802 8.02934 7.24802 8.02934C7.24802 8.02934 6.53335 7.37267 5.92535 7.35167C5.31769 7.33 4.68835 7.92067 4.68835 7.92067ZM3.33936 6.87134C3.33936 6.87134 2.66769 6.981 2.38936 7.69534C2.11102 8.40967 2.53102 9.032 2.53102 9.032C2.53102 9.032 3.37569 8.74934 3.54936 8.16634C3.72302 7.584 3.33936 6.87134 3.33936 6.87134Z"
      fill="#5C913B"
    />,
  ],
});

export const AssetVerticalIcons: Record<
  Resource.Asset.AssetVertical,
  typeof Icon
> = {
  METAVERSE,
  BLOCKCHAIN_SERVICE,
  LAYER_1,
  SOCIAL,
  CEFI,
  NFT,
  BRIDGE,
  ZK_ROLLUP,
  LENDING,
  INFRA,
  GAMEFI,
  DEFI,
};
