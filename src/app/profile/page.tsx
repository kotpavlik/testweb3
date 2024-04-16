'use client'

import { TonConnectButton, TonConnectUIProvider } from "@tonconnect/ui-react";

const UserProfile = () => {
    return (

        <TonConnectUIProvider
            manifestUrl="https://github.com/kotpavlik/testweb3/blob/main/public/tonconnect-manifest.json">
            <div>
                Hello
                <TonConnectButton className="m-2 " />
            </div>
        </TonConnectUIProvider >

    );
}
export default UserProfile;

