import { WagmiConfig, createClient, useAccount } from "wagmi";
import { RainbowKitProvider, ConnectButton } from "@rainbow-me/rainbowkit";
import { useEffect, useState } from "react";

import { client, chains } from "./client.mjs";
import Bell from "./Bell.jsx";

const shorten = (address) =>
  address.slice(0, 6) +
  "..." +
  address.slice(address.length - 4, address.length);

const LearnMore = () => {
  const { isConnected } = useAccount();
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    setDisplay(!isConnected);
  }, [isConnected]);

  return display ? (
    <div style={{ textAlign: "center", paddingRight: "4px" }}>
      <a
        href="/welcome"
        style={{ textDecoration: "underline", color: "black" }}
      >
        Learn more <br />
        about 🥝
      </a>
    </div>
  ) : null;
};

const SettingsSVGFull = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
    <rect width="256" height="256" fill="none" />
    <path d="M216,130.16q.06-2.16,0-4.32l14.92-18.64a8,8,0,0,0,1.48-7.06,107.6,107.6,0,0,0-10.88-26.25,8,8,0,0,0-6-3.93l-23.72-2.64q-1.48-1.56-3-3L186,40.54a8,8,0,0,0-3.94-6,107.29,107.29,0,0,0-26.25-10.86,8,8,0,0,0-7.06,1.48L130.16,40Q128,40,125.84,40L107.2,25.11a8,8,0,0,0-7.06-1.48A107.6,107.6,0,0,0,73.89,34.51a8,8,0,0,0-3.93,6L67.32,64.27q-1.56,1.49-3,3L40.54,70a8,8,0,0,0-6,3.94,107.71,107.71,0,0,0-10.87,26.25,8,8,0,0,0,1.49,7.06L40,125.84Q40,128,40,130.16L25.11,148.8a8,8,0,0,0-1.48,7.06,107.6,107.6,0,0,0,10.88,26.25,8,8,0,0,0,6,3.93l23.72,2.64q1.49,1.56,3,3L70,215.46a8,8,0,0,0,3.94,6,107.71,107.71,0,0,0,26.25,10.87,8,8,0,0,0,7.06-1.49L125.84,216q2.16.06,4.32,0l18.64,14.92a8,8,0,0,0,7.06,1.48,107.21,107.21,0,0,0,26.25-10.88,8,8,0,0,0,3.93-6l2.64-23.72q1.56-1.48,3-3L215.46,186a8,8,0,0,0,6-3.94,107.71,107.71,0,0,0,10.87-26.25,8,8,0,0,0-1.49-7.06ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z" />
  </svg>
);

const SettingsSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
    <rect width="256" height="256" fill="none" />
    <circle
      cx="128"
      cy="128"
      r="40"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M130.05,206.11c-1.34,0-2.69,0-4,0L94,224a104.61,104.61,0,0,1-34.11-19.2l-.12-36c-.71-1.12-1.38-2.25-2-3.41L25.9,147.24a99.15,99.15,0,0,1,0-38.46l31.84-18.1c.65-1.15,1.32-2.29,2-3.41l.16-36A104.58,104.58,0,0,1,94,32l32,17.89c1.34,0,2.69,0,4,0L162,32a104.61,104.61,0,0,1,34.11,19.2l.12,36c.71,1.12,1.38,2.25,2,3.41l31.85,18.14a99.15,99.15,0,0,1,0,38.46l-31.84,18.1c-.65,1.15-1.32,2.29-2,3.41l-.16,36A104.58,104.58,0,0,1,162,224Z"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
  </svg>
);

const ProfileSVGFull = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
    <rect width="256" height="256" fill="none" />
    <path d="M172,120a44,44,0,1,1-44-44A44,44,0,0,1,172,120Zm52-72V208a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48ZM208,208V48H48V208h3.67a80.58,80.58,0,0,1,26.07-38.25q3.08-2.48,6.36-4.62a4,4,0,0,1,4.81.33,59.82,59.82,0,0,0,78.18,0,4,4,0,0,1,4.81-.33q3.28,2.15,6.36,4.62A80.58,80.58,0,0,1,204.33,208H208Z" />
  </svg>
);

const ProfileSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
    <rect width="256" height="256" fill="none" />
    <circle
      cx="128"
      cy="120"
      r="40"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <rect
      x="40"
      y="40"
      width="176"
      height="176"
      rx="8"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M57.78,216a72,72,0,0,1,140.44,0"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
  </svg>
);
const Settings = () => {
  const { address, isConnected } = useAccount();
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    if (address && isConnected) {
      setDisplay(true);
    } else {
      setDisplay(false);
    }
  }, [address, isConnected]);

  return display ? (
    <a
      title="Settings"
      href="/settings"
      style={{ color: "black", textDecoration: "none", display: "block" }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <div className="svg-container">
          {window.location.pathname === "/settings" ? (
            <SettingsSVGFull />
          ) : (
            <SettingsSVG />
          )}
        </div>
        <span>Settings</span>
      </div>
    </a>
  ) : null;
};

const Profile = () => {
  const { address, isConnected } = useAccount();
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    if (address && isConnected) {
      setDisplay(true);
    } else {
      setDisplay(false);
    }
  }, [address, isConnected]);

  return display ? (
    <a
      title="Profile"
      href={"/upvotes?address=" + address}
      style={{ color: "black", textDecoration: "none", display: "block" }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <div className="svg-container">
          {window.location.pathname.includes("/upvotes") ? (
            <ProfileSVGFull />
          ) : (
            <ProfileSVG />
          )}
        </div>
        <span>Profile</span>
      </div>
    </a>
  ) : null;
};

const DisconnectSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
    <rect width="256" height="256" fill="none" />
    <line
      x1="144"
      y1="144"
      x2="120"
      y2="168"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line x1="144" y1="144" x2="120" y2="168" fill="#231f20" />
    <line
      x1="112"
      y1="112"
      x2="88"
      y2="136"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line x1="112" y1="112" x2="88" y2="136" fill="#231f20" />
    <line
      x1="64"
      y1="112"
      x2="144"
      y2="192"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="58.06"
      y1="197.94"
      x2="24"
      y2="232"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M132,180l-29,29a24,24,0,0,1-33.94,0L47,186.91A24,24,0,0,1,47,153l29-29"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="112"
      y1="64"
      x2="192"
      y2="144"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="197.94"
      y1="58.06"
      x2="232"
      y2="24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M180,132l29-29a24,24,0,0,0,0-33.94L186.91,47A24,24,0,0,0,153,47L124,76"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
  </svg>
);
const DisconnectButton = () => {
  return (
    <ConnectButton.Custom>
      {({ account, chain, mounted, openConnectModal, openAccountModal }) => {
        const connected = account && chain && mounted;
        if (connected) {
          return (
            <div
              title="Disconnect Wallet"
              onClick={openAccountModal}
              className="sidebar-div"
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <div className="svg-container">
                  <DisconnectSVG />
                </div>
                <span>Disconnect</span>
              </div>
            </div>
          );
        } else {
          return null;
        }
      }}
    </ConnectButton.Custom>
  );
};

const CustomConnectButton = () => {
  const buttonStyle = {
    borderRadius: "2px",
    padding: "5px 15px 5px 15px",
    backgroundColor: "black",
    border: "1px solid black",
    color: "white",
    textAlign: "center",
    textDecoration: "none",
    cursor: "pointer",
    width: "100px",
  };

  return (
    <ConnectButton.Custom>
      {({ account, chain, mounted, openConnectModal }) => {
        if (!mounted) return;
        const connected = account && chain;
        if (connected) {
          return <Bell to="/activity"></Bell>;
        } else {
          return (
            <a
              title="Connect Wallet"
              style={buttonStyle}
              onClick={openConnectModal}
            >
              {connected ? (
                <span style={{ color: "#828282" }}>
                  <span
                    style={{
                      color: "black",
                      marginRight: "5px",
                      display: "inline-block",
                    }}
                  ></span>
                </span>
              ) : (
                ""
              )}

              {connected ? shorten(account) : "Connect"}
            </a>
          );
        }
      }}
    </ConnectButton.Custom>
  );
};

const Connector = ({ children }) => {
  return (
    <WagmiConfig client={client}>
      <RainbowKitProvider chains={chains}>{children}</RainbowKitProvider>
    </WagmiConfig>
  );
};

export const ConnectedProfile = () => (
  <Connector>
    <Profile />
  </Connector>
);
export const ConnectedDisconnectButton = () => (
  <Connector>
    <DisconnectButton />
  </Connector>
);
export const ConnectedConnectButton = () => (
  <Connector>
    <CustomConnectButton />
  </Connector>
);
export const ConnectedSettings = () => (
  <Connector>
    <Settings />
  </Connector>
);
export const ConnectedLearnMore = () => (
  <Connector>
    <LearnMore />
  </Connector>
);
