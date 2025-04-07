import React from 'react';
import Layout from '@theme/Layout';

export default function AllPaths() {
    return (
        <Layout>
            <div className="container margin-vert--lg">
                <h1 className="text--center margin-bottom--lg">All Paths</h1>
                {/* Row 1: Main Introduction Card */}
                <div className="row margin-bottom--lg">
                    <div className="col col--12">
                        <div className="card shadow--md padding-1">
                            <div className="card__image">
                                <img
                                    src="https://dotown.maeda-design-room.net/wp-content/uploads/2023/01/plant_sakura_01.png"
                                    alt="Blockchain Basics"
                                    title="Blockchain Basics"
                                />
                            </div>
                            <div className="card__body">
                                <h2>Blockchain Basics</h2>
                                <p>
                                    The foundation course is not to teach you A-Z of what blockchain and web3 is but instead 
                                    to give you a quick overview of what topics you'll come across in the future, and to also
                                    familiarize you with terms used in the industry. Learning the foundation will help you with more
                                    niche topics in the future.
                                </p>
                            </div>
                            <div className="card__footer">
                                <a href="/paths/foundation">
                                    <button className="button button--primary button--block padding-horiz--lg padding-vert--md">Explore</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Row 2: Two smaller cards */}
                <div className="row">
                    <div className="col col--6">
                        <div className="card shadow--md">
                            <div className="card__image">
                                <img
                                    src="https://dotown.maeda-design-room.net/wp-content/uploads/2022/01/town_vendingmachine_01.png"
                                    alt="Blockchain Exploration"
                                    title="Blockchain Exploration"
                                />
                            </div>
                            <div className="card__body">
                                <h4>Blockchain Exploration</h4>
                                <p>
                                    Learn about different blockchains such as Solana, Abstract, Ethereum, Bitcoin, Cosmos, etc.
                                </p>
                            </div>
                            <div className="card__footer">
                                <button className="button button--primary button--block" disabled>Coming...</button>
                            </div>
                        </div>
                    </div>
                    <div className="col col--6">
                        <div className="card shadow--md">
                            <div className="card__image">
                                <img
                                    src="https://dotown.maeda-design-room.net/wp-content/uploads/2022/01/town_planet_01.png"
                                    alt="Advanced Topics"
                                    title="Advanced Topics"
                                />
                            </div>
                            <div className="card__body">
                                <h4>Advanced Topics</h4>
                                <p>
                                    Dive deeper into advanced blockchain topics, including smart contracts, DeFi, and scalability solutions.
                                </p>
                            </div>
                            <div className="card__footer">
                                <button className="button button--primary button--block" disabled>Coming...</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
