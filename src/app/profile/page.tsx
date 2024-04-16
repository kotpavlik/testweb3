'use client'

import { TonConnectButton, TonConnectUIProvider } from "@tonconnect/ui-react";

const UserProfile = () => {
    return (

        <TonConnectUIProvider manifestUrl="https://testweb3-seven.vercel.app/tonconnect-manifest.json" actionsConfiguration={{ twaReturnUrl: 'https://calc-jam-app.vercel.app/' }}>
            <div>
                Hello
                <TonConnectButton className="m-2 " />
            </div>
        </TonConnectUIProvider >

    );
}
export default UserProfile;