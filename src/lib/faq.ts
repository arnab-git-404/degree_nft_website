export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export type FaqGroup = {
  id: string;
  title: string;
  description: string;
  items: FaqItem[];
};

export const faqGroups: FaqGroup[] = [
  {
    id: "the-basics",
    title: "The basics",
    description: "Start here if words like blockchain and NFT are new.",
    items: [
      {
        id: "do-i-need-to-understand-crypto",
        question: "Do I need to understand crypto to use DegreeNFT?",
        answer:
          "No. You need to install a wallet app and approve a couple of actions. Everything else — the network, the record, the certificate — is handled by the app. The step-by-step guide walks through it with no jargon.",
      },
      {
        id: "do-i-need-to-buy-cryptocurrency",
        question: "Do I need to buy cryptocurrency?",
        answer:
          "No. DegreeNFT uses Solana as a public record, not as an investment. You do not need to buy, trade, or hold any cryptocurrency. The claim flow is designed to be free for graduates, with network fees handled by the issuer or platform.",
      },
      {
        id: "what-is-a-blockchain",
        question: "What is a blockchain, in one sentence?",
        answer:
          "A shared record book that many computers keep a copy of, so no single company can quietly change what it says.",
      },
      {
        id: "what-is-an-nft",
        question: "What is an NFT?",
        answer:
          "A unique digital token. In DegreeNFT it works like a tamper-evident certificate: one record, tied to one wallet, that anyone can inspect.",
      },
      {
        id: "why-put-a-degree-on-chain",
        question: "Why put a degree on a blockchain at all?",
        answer:
          "Because a degree should still be verifiable after a portal shuts down or a PDF gets edited. An on-chain record gives the graduate ownership and gives employers a source of truth.",
      },
      {
        id: "which-blockchain",
        question: "Which blockchain does DegreeNFT use?",
        answer:
          "Solana. It is fast and inexpensive for the small amount of data a credential needs.",
      },
    ],
  },
  {
    id: "wallets-safety",
    title: "Wallets & safety",
    description: "The practical rules that keep your credential yours.",
    items: [
      {
        id: "which-wallet-should-i-use",
        question: "Which wallet should I use?",
        answer:
          "Phantom is a good default on Solana and is used in this guide. Backpack and Solflare are also popular. Download any wallet from its official website or app store listing — never from a link in a DM.",
      },
      {
        id: "will-degree-nft-ask-for-my-recovery-phrase",
        question: "Will DegreeNFT ever ask for my recovery phrase?",
        answer:
          "Never. No legitimate university, wallet, or support team will ask for your 12–24 words. If someone does, it is a scam. Close the conversation.",
      },
      {
        id: "what-if-i-lose-my-phone",
        question: "What happens if I lose my phone?",
        answer:
          "Install the wallet again on a new device and restore it with your recovery phrase. Your credential is on-chain, so it will reappear once the wallet is restored.",
      },
      {
        id: "what-if-i-lose-my-recovery-phrase",
        question: "What if I lose my recovery phrase?",
        answer:
          "If you still have access on a device, back the phrase up again immediately. If you have lost both the phrase and access, contact your registrar — they may be able to replace the credential, but they cannot recover your wallet for you.",
      },
      {
        id: "can-someone-steal-my-degree",
        question: "Can someone steal my degree?",
        answer:
          "Only someone with access to your wallet could move or use it, which is why the recovery phrase stays private. Verification is public and read-only, so sharing a credential link does not expose your wallet.",
      },
      {
        id: "can-i-use-an-exchange-wallet",
        question: "Can I keep my degree in an exchange account?",
        answer:
          "Use a self-custody wallet such as Phantom. Exchange accounts are designed for trading, may not display credential NFTs clearly, and do not give you the same control.",
      },
    ],
  },
  {
    id: "your-degree",
    title: "Getting your degree",
    description: "Claiming, keeping, and sharing your credential.",
    items: [
      {
        id: "how-do-i-know-a-degree-was-issued",
        question: "How do I know a degree has been issued to me?",
        answer:
          "Your institution sends a claim link to the email address on record, or your registrar tells you it is ready. The DegreeNFT dApp also shows credentials issued to your connected wallet.",
      },
      {
        id: "how-long-does-claiming-take",
        question: "How long does claiming take?",
        answer:
          "Usually under a minute once you approve the claim. The page confirms when the record is written.",
      },
      {
        id: "can-i-fix-a-typo",
        question: "Can I fix a typo in my degree?",
        answer:
          "Yes, but it is easier before you claim. Check your name, programme, and year on the claim page first. If something is wrong after claiming, contact your registrar — they can replace the record.",
      },
      {
        id: "can-a-university-revoke-my-degree",
        question: "Can the university revoke my degree?",
        answer:
          "An institution can revoke a credential when it was issued in error, replaced, or obtained fraudulently. The verification page always shows the current status, which is why a live link is stronger than a PDF.",
      },
      {
        id: "do-i-need-to-keep-the-claim-email",
        question: "Do I need to keep the claim email?",
        answer:
          "No. Once claimed, the credential belongs to your wallet and can be opened from the dApp. You can copy the verification link again at any time.",
      },
      {
        id: "can-i-download-a-copy",
        question: "Can I download a copy of my degree?",
        answer:
          "The dApp lets you save or print a copy for your records. Remember that a copy is documentation; an employer should confirm the live verification link.",
      },
    ],
  },
  {
    id: "employers-universities",
    title: "For employers & universities",
    description: "Verifying a credential, or issuing them at scale.",
    items: [
      {
        id: "do-employers-need-an-account",
        question: "Do employers need an account or wallet to verify?",
        answer:
          "No. A verification link opens in any browser and is read-only. No account, wallet, or cryptocurrency is required.",
      },
      {
        id: "what-should-an-employer-check",
        question: "What should an employer check?",
        answer:
          "Four things: the issuer, the graduate's name, the award and year, and whether the status is valid. Then follow the on-chain record if you want to inspect the source directly.",
      },
      {
        id: "can-a-pdf-be-verified",
        question: "Can a PDF be verified?",
        answer:
          "A PDF can be copied and edited. Use the live verification link or the credential ID. A PDF is useful as a record, but it is not proof on its own.",
      },
      {
        id: "what-does-revoked-mean",
        question: "What does “revoked” mean on a degree?",
        answer:
          "The institution has marked the credential invalid — for example, after a correction, a replacement, or fraud. Treat a revoked credential as not valid and ask for the current record.",
      },
      {
        id: "how-does-a-university-start-issuing",
        question: "How does a university start issuing?",
        answer:
          "The institution registers as an issuer, prepares a cohort file, and issues credentials to student wallets. Students then claim them. Open the dApp to explore the issuer flow or contact the team.",
      },
      {
        id: "what-student-data-goes-on-chain",
        question: "What student data goes on-chain?",
        answer:
          "Only the credential details needed for verification — typically the graduate's name, award, programme, year, and issuer. Contact details are not written to the public record. Your institution should confirm its data policy before issuing.",
      },
    ],
  },
];

export const featuredFaqIds = [
  "do-i-need-to-understand-crypto",
  "do-i-need-to-buy-cryptocurrency",
  "will-degree-nft-ask-for-my-recovery-phrase",
  "do-employers-need-an-account",
];

export function getFaqItem(id: string) {
  for (const group of faqGroups) {
    const item = group.items.find((faq) => faq.id === id);
    if (item) {
      return { ...item, groupId: group.id, groupTitle: group.title };
    }
  }
  return undefined;
}
