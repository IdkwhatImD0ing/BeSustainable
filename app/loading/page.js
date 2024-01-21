import { Stack } from "@mui/material";
import Item from "@mui/material/ListItem";

export default function Loading() {
  return (
    <Stack
      direction="column"
      sx={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Item
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "25%", // Adjust this value to move the Stack down
          width: "100%", // Make the Item the width of the screen
          margin: "auto", // Center the Item
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
        >
          <g clip-path="url(#clip0_49_440)">
            <path
              d="M6.46856 2.83788C6.60963 2.71905 6.78458 2.64772 6.96852 2.63402C7.15246 2.62031 7.33604 2.66494 7.49317 2.76156C10.5249 4.62743 12.1864 6.98806 13.0724 9.58642C13.2917 10.2294 13.4627 10.8847 13.5952 11.5479C14.4979 10.0303 15.94 8.82674 18.1121 7.95828C18.2652 7.89712 18.4325 7.88037 18.5947 7.90995C18.757 7.93953 18.9076 8.01424 19.0293 8.12551C19.151 8.23678 19.2389 8.38011 19.2829 8.53905C19.3268 8.69799 19.3251 8.86611 19.2779 9.02412L19.1191 9.55396C17.9261 13.5261 17.5603 14.7428 17.5603 17.5447C17.5603 17.7773 17.4679 18.0005 17.3033 18.165C17.1388 18.3295 16.9157 18.4219 16.683 18.4219C16.4504 18.4219 16.2273 18.3295 16.0628 18.165C15.8982 18.0005 15.8058 17.7773 15.8058 17.5447C15.8058 14.8647 16.1392 13.4217 17.0076 10.49C16.0234 11.1426 15.3751 11.9006 14.94 12.7401C14.2689 14.0331 14.0514 15.6191 14.0514 17.5447C14.0514 17.7773 13.9589 18.0005 13.7944 18.165C13.6299 18.3295 13.4068 18.4219 13.1741 18.4219C12.9415 18.4219 12.7183 18.3295 12.5538 18.165C12.3893 18.0005 12.2969 17.7773 12.2969 17.5447C12.2969 14.92 12.1828 12.4155 11.4118 10.1522C10.8942 8.6355 10.0766 7.21263 8.76427 5.93977C9.65642 9.32588 9.66519 12.5927 9.66519 17.321V17.5447C9.66519 17.7773 9.57277 18.0005 9.40826 18.165C9.24374 18.3295 9.02062 18.4219 8.78796 18.4219C8.5553 18.4219 8.33218 18.3295 8.16766 18.165C8.00315 18.0005 7.91073 17.7773 7.91073 17.5447C7.91073 15.5358 7.90195 13.7103 7.40456 12.1672C7.11859 11.2786 6.66769 10.483 5.92818 9.82152C6.73524 12.5874 7.0335 14.6349 7.0335 17.5447C7.0335 17.7773 6.94107 18.0005 6.77656 18.165C6.61205 18.3295 6.38892 18.4219 6.15626 18.4219C5.92361 18.4219 5.70048 18.3295 5.53597 18.165C5.37145 18.0005 5.27903 17.7773 5.27903 17.5447C5.27903 14.155 4.86498 12.0576 3.56931 8.17232C3.51657 8.01366 3.51029 7.84323 3.55118 7.68111C3.59207 7.51899 3.67844 7.37193 3.80012 7.25726C3.9218 7.14259 4.07371 7.06508 4.23797 7.03386C4.40223 7.00264 4.57199 7.01901 4.72725 7.08105C5.95099 7.56967 6.88086 8.22233 7.58264 8.99341C7.3478 7.22339 6.88975 5.49022 6.21942 3.83529C6.15074 3.66396 6.13784 3.47534 6.18257 3.29626C6.2273 3.11718 6.32738 2.95678 6.46856 2.83788Z"
              fill="#F0C571"
            />
          </g>
          <defs>
            <clipPath id="clip0_49_440">
              <rect
                width="21.0536"
                height="21.0536"
                fill="white"
                transform="translate(0.892883)"
              />
            </clipPath>
          </defs>
        </svg>
      </Item>
      <Item
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "-22px",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="27"
          height="15"
          viewBox="0 0 27 15"
          fill="none"
        >
          <path
            d="M24.7532 0.839233H2.27937C1.07154 0.839233 0.130449 1.90893 0.405805 3.08496C2.61321 12.5127 9.99282 14.7613 13.6497 14.6573C21.7047 14.3366 25.3584 7.73506 26.5778 3.04206C26.8786 1.88414 25.9496 0.839233 24.7532 0.839233Z"
            fill="#3FAA72"
          />
        </svg>
      </Item>
      <Item
        sx={{
          marginLeft: "10%",
          fontFamily: "Helvetica",
          fontSize: "24px",
          fontWeight: "400",
          color: "rgba(63, 170, 114, 1)",
          marginTop: "20%",
        }}
      >
        Hello lovely human,
      </Item>
      <Item
        sx={{
          marginLeft: "10%",
          fontFamily: "Helvetica",
          fontSize: "32px",
          fontWeight: "700",
          color: "rgba(63, 170, 114, 1)",
        }}
      >
        Every bite counts.
      </Item>
      <Item
        sx={{
          marginLeft: "10%",
          fontFamily: "Helvetica",
          fontSize: "32px",
          fontWeight: "700",
          color: "rgba(63, 170, 114, 1)",
          marginTop: "-14px",
        }}
      >
        So let's make it
      </Item>
      <Item
        sx={{
          marginLeft: "10%",
          fontFamily: "Helvetica",
          fontSize: "32px",
          fontWeight: "700",
          color: "rgba(63, 170, 114, 1)",
          marginTop: "-14px",
        }}
      >
        sustainable.
      </Item>

      <img
        src="/bag.png"
        style={{
          marginTop: "20%",
          position: "relative",
          display: "flex",
          justifyContent: "center",
          top: "0", // Adjust these values to position the image

          width: "181px",
          height: "181px",
          zIndex: "1",
        }}
        alt="bag"
      ></img>
      <Item
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: "center",

          alignItems: "center",
          color: "rgba(63, 170, 114, 1)",
          fontWeight: "700",
          fontSize: "20px",
          fontFamily: "Helvetica",
        }}
      >
        Please wait for you results to load...
      </Item>
    </Stack>
  );
}
