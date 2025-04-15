import React, { useRef } from 'react'
import Layout from '@theme/Layout';

const ContributeForm = () => {
    const formInput = useRef<HTMLFormElement | null>(null);


    return (
        <Layout>
            <h1>Contribute</h1>
            <h2>Dm me on Telegram, @olafnub to discuss about potential opportunities!</h2>
            <p>Reminder that I will never ask for money or to download an unknown file</p>

        </Layout>
    )
}

export default ContributeForm