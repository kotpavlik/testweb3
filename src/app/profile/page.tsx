'use client'

import { TonConnectButton, TonConnectUIProvider } from "@tonconnect/ui-react";

const UserProfile = () => {
    return (

        <TonConnectUIProvider
            manifestUrl="https://vercel.com/kotpavliks-projects/testweb3/Duwkpfbr57yf3TQbiKyJhMBmSXqV/source?f=src%2Ftonconnect-manifest.json"
            actionsConfiguration={{ twaReturnUrl: 'https://calc-jam-app.vercel.app/' }}>
            <div>
                Hello
                <TonConnectButton className="m-2 " />
            </div>
        </TonConnectUIProvider >

    );
}
export default UserProfile;

