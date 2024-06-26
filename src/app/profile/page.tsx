'use client'

import { TonConnectButton, TonConnectUIProvider } from "@tonconnect/ui-react";

const UserProfile = () => {
    return (

        <TonConnectUIProvider
            manifestUrl="https://kotpavlik.github.io/testweb3/public/tonconnect-manifest.json"
            actionsConfiguration={{ twaReturnUrl: 'https://calc-jam-app.vercel.app/' }}>
            <div>
                Hello
                <TonConnectButton className="m-2 " />
            </div>
        </TonConnectUIProvider >

    );
}
export default UserProfile;

