'use client'

import { TonConnectButton, TonConnectUIProvider } from "@tonconnect/ui-react";

const UserProfile = () => {
    return (

        <TonConnectUIProvider
            manifestUrl="https://vercel.com/kotpavliks-projects/testweb3/DWt2W7q2FYZyLJLKedn9F2yhmPFm/source?f=src%2Ftonconnect-manifest.json">
            <div>
                Hello
                <TonConnectButton className="m-2 " />
            </div>
        </TonConnectUIProvider >

    );
}
export default UserProfile;

