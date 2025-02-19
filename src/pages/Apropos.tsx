// src/pages/BlogPage.tsx
import React from 'react';
import Layout from '../components/Layout';
import Bio from '../components/Bio';

const AproposPage: React.FC = () => {
    return (
        <Layout>
            <main className="p-8 max-w-5xl mx-auto bg-orange-100/20">
                <Bio />
            </main>
        </Layout>
    );
};

export default AproposPage;
