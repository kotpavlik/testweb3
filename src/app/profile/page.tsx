'use client'

import { TonConnectButton, TonConnectUIProvider } from "@tonconnect/ui-react";

const UserProfile = () => {
    return (

        <TonConnectUIProvider
            manifestUrl="https://vercel.com/kotpavliks-projects/testweb3/GjYUMqj8T36euNRL9mR54kizDAHR/source?f=src%2Fpublic%2Ftonconnect-manifest.json">
            <div>
                Hello
                <TonConnectButton className="m-2 " />
            </div>
        </TonConnectUIProvider >

    );
}
export default UserProfile;

