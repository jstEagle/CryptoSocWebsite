
import { proposalQuery, daoQuery } from './queries';

const daoAddress = "0xc26c447eb0c9a783681245fca7f245cfb3f1dd6a"

export async function load() {
    const endpoint = 'https://gateway-arbitrum.network.thegraph.com/api/09ee157c2e5e6598d352197e957932f6/subgraphs/id/CgH5vtz9CJPdcSmD3XEh8fCVDjQjnRwrSawg71T1ySXW';

    try {
        const [proposalsResponse, daoResponse] = await Promise.all([
            fetch(endpoint, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    query: proposalQuery,
                    variables: { daoAddress }
                })
            }),
            fetch(endpoint, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    query: daoQuery
                })
            })
        ]);

        const proposalsData = await proposalsResponse.json();
        const daoData = await daoResponse.json();

        if (proposalsData.errors || daoData.errors) {
            throw new Error('GraphQL query failed');
        }

        const formattedProposals = proposalsData.data.proposals.map((proposal: any) => {
            const totalVoteBalance = Number(proposal.yesBalance) + Number(proposal.noBalance);
            const quorumRequired = (Number(proposal.dao.totalShares) * Number(proposal.dao.quorumPercent)) / 100;
            const progressPercent = (totalVoteBalance / quorumRequired) * 100;
            const date = new Date(Number(proposal.createdAt) * 1000);
            const ending = new Date(Number(proposal.votingEnds) * 1000);
            const currentDate = new Date();

            let propStatus;
            if (currentDate > ending) {
                // Voting period has ended
                if (totalVoteBalance >= quorumRequired) {
                    // Quorum reached
                    propStatus = Number(proposal.yesBalance) > Number(proposal.noBalance) ? "Passed" : "Failed";
                } else {
                    // Quorum not reached
                    propStatus = "Failed";
                }
            } else {
                // Still active
                propStatus = "Active";
            }
            
            return {
                title: proposal.title || `Proposal #${proposal.id}`,
                description: proposal.description || 'No description provided',
                id: proposal.id,
                progress: Math.min(progressPercent, 100),
                quorum: {
                    current: totalVoteBalance,
                    required: quorumRequired,
                    percent: proposal.dao.quorumPercent
                },
                status: propStatus,
                createdAt: date.toLocaleDateString('en-GB', {
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric'
                }),
                raw: {
                    yesVotes: proposal.yesVotes,
                    noVotes: proposal.noVotes,
                    yesBalance: proposal.yesBalance,
                    noBalance: proposal.noBalance,
                    votes: proposal.votes,
                    quorumPercent: proposal.dao.quorumPercent
                }
            };
        });

        const dao = daoData.data.dao;

        return {
            dao: {
                proposals: formattedProposals.sort((a: any, b: any) => {
                    const dateA = new Date(Number(proposalsData.data.proposals.find((p: any) => p.id === a.id)?.createdAt) * 1000);
                    const dateB = new Date(Number(proposalsData.data.proposals.find((p: any) => p.id === b.id)?.createdAt) * 1000);
                    return dateB.getTime() - dateA.getTime();
                }),
                activeProposals: dao.proposalOffering,
                activeMemberCount: dao.activeMemberCount || 0,
                totalShares: Math.floor(Number(dao.totalShares || 0) / 1e18),
                proposalCount: dao.proposalCount || formattedProposals.length,
                tokenBalance: '0',
                content: dao.profile?.[0]?.content || null,
                createdAt: new Date(Number(dao.createdAt) * 1000).toLocaleDateString('en-GB')
            }
        };
    } catch (error) {
        console.error('Error fetching DAO data:', error);
        return {
            dao: {
                proposals: [],
                activeMemberCount: 0,
                totalShares: 0,
                proposalCount: 0,
                tokenBalance: '0',
                content: null,
                createdAt: null
            }
        };
    }
};