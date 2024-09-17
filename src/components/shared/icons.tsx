interface IconProps {
  size?: number;
  fill?: string;
}
const AddCircle = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.66602 9.66699C5.66602 9.11471 6.11373 8.66699 6.66602 8.66699H8.66602V6.66699C8.66602 6.11471 9.11373 5.66699 9.66602 5.66699C10.2183 5.66699 10.666 6.11471 10.666 6.66699V8.66699H12.666C13.2183 8.66699 13.666 9.11471 13.666 9.66699C13.666 10.2193 13.2183 10.667 12.666 10.667H10.666V12.667C10.666 13.2193 10.2183 13.667 9.66602 13.667C9.11373 13.667 8.66602 13.2193 8.66602 12.667V10.667H6.66602C6.11373 10.667 5.66602 10.2193 5.66602 9.66699Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.66602 17.667C14.0843 17.667 17.666 14.0853 17.666 9.66699C17.666 5.24871 14.0843 1.66699 9.66602 1.66699C5.24774 1.66699 1.66602 5.24871 1.66602 9.66699C1.66602 14.0853 5.24774 17.667 9.66602 17.667ZM9.66602 16.067C13.2006 16.067 16.066 13.2016 16.066 9.66699C16.066 6.13237 13.2006 3.26699 9.66602 3.26699C6.13139 3.26699 3.26602 6.13237 3.26602 9.66699C3.26602 13.2016 6.13139 16.067 9.66602 16.067Z"
        fill="currentColor"
      />
    </svg>
  );
};

const MinusCircle = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 9C6.44772 9 6 9.44772 6 10C6 10.5523 6.44772 11 7 11H13C13.5523 11 14 10.5523 14 10C14 9.44772 13.5523 9 13 9H7Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM16.4 10C16.4 13.5346 13.5346 16.4 10 16.4C6.46538 16.4 3.6 13.5346 3.6 10C3.6 6.46538 6.46538 3.6 10 3.6C13.5346 3.6 16.4 6.46538 16.4 10Z"
        fill="currentColor"
      />
    </svg>
  );
};

const PlayCircle = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="30" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="m10.65 15.75l4.875-3.125q.35-.225.35-.625t-.35-.625L10.65 8.25q-.375-.25-.763-.038t-.387.663v6.25q0 .45.388.663t.762-.038M12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"
      />
    </svg>
  );
};

export const PauseCircle = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="30" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M9 16h2V8H9zm4 0h2V8h-2zm-1 6q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"
      />
    </svg>
  );
};
const Trash = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 5.11133H17"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.4448 5.11133V16.0002C15.4448 16.778 14.667 17.5558 13.8892 17.5558H6.11146C5.33369 17.5558 4.55591 16.778 4.55591 16.0002V5.11133"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.88916 5.11111V3.55556C6.88916 2.77778 7.66694 2 8.44472 2H11.5558C12.3336 2 13.1114 2.77778 13.1114 3.55556V5.11111"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const Split = () => {
  return (
    <svg
      width={24}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.66667 15.8337H4.16667C3.33333 15.8337 2.5 15.0003 2.5 14.167V5.83366C2.5 5.00033 3.33333 4.16699 4.16667 4.16699H6.66667"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.3333 4.16699H15.8333C16.6666 4.16699 17.4999 5.00033 17.4999 5.83366V14.167C17.4999 15.0003 16.6666 15.8337 15.8333 15.8337H13.3333"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 3.33301V16.6663"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const Music = ({ size = 24 }: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} viewBox="0 0 24 24">
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <path d="M9 18V5l12-2v13" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="18" cy="16" r="3" />
      </g>
    </svg>
  );
};

export const TextIcon = ({ size = 24 }: IconProps) => {
  return (
    <svg
      width={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.75 9H15V10.5H18.75C18.9489 10.5 19.1397 10.579 19.2803 10.7197C19.421 10.8603 19.5 11.0511 19.5 11.25V12.75H16.5C15.9034 12.7506 15.3315 12.9878 14.9097 13.4097C14.4878 13.8315 14.2506 14.4034 14.25 15V15.75C14.2506 16.3466 14.4878 16.9185 14.9097 17.3403C15.3315 17.7622 15.9034 17.9994 16.5 18H21V11.25C20.9994 10.6534 20.7622 10.0815 20.3403 9.65967C19.9185 9.23784 19.3466 9.0006 18.75 9ZM16.5 16.5C16.3011 16.5 16.1103 16.421 15.9697 16.2803C15.829 16.1397 15.75 15.9489 15.75 15.75V15C15.75 14.8011 15.829 14.6103 15.9697 14.4697C16.1103 14.329 16.3011 14.25 16.5 14.25H19.5V16.5H16.5ZM12 18H13.5L9 5.25H7.5L3 18H4.5L5.7705 14.25H10.7303L12 18ZM6.27825 12.75L8.151 7.22175H8.3505L10.2225 12.75H6.27825Z"
        fill="currentColor"
      />
    </svg>
  );
};
export { AddCircle, MinusCircle, PlayCircle, Trash, Split };
