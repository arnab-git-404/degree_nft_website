export type GuideTitle = {
  lead: string;
  accent: string;
};

export type GuideSection = {
  title: string;
  body: string;
  points?: string[];
  ordered?: boolean;
  tip?: string;
};

export type GuideTerm = {
  term: string;
  meaning: string;
};

export type GuideStep = {
  slug: string;
  number: string;
  navLabel: string;
  title: GuideTitle;
  summary: string;
  intro: string;
  duration: string;
  audience: string;
  need: string[];
  sections: GuideSection[];
  terms: GuideTerm[];
  checklist: string[];
};

export const guideSteps: GuideStep[] = [
  {
    slug: "wallet-basics",
    number: "01",
    navLabel: "Wallet basics",
    title: { lead: "What is a", accent: "crypto wallet?" },
    summary:
      "Why your degree needs a wallet, and why you never need to buy cryptocurrency.",
    intro:
      "A crypto wallet sounds like a place to store money. For DegreeNFT, it is simpler than that: it is the app that proves a credential belongs to you. No trading, no coins, no finance homework.",
    duration: "3 min read",
    audience: "First-time wallet users",
    need: [
      "No wallet needed for this step",
      "No cryptocurrency",
      "About three minutes",
    ],
    sections: [
      {
        title: "A wallet is a key, not a bank account",
        body:
          "It is natural to hear “wallet” and think of money. In DegreeNFT, a wallet works more like a signature. Your degree is written into a public record, and your wallet holds the one key that proves the record belongs to you.",
        points: [
          "The degree lives on a public ledger, not inside the wallet app.",
          "The wallet proves ownership when you claim or share the credential.",
          "Losing the app is recoverable. Losing your recovery phrase is not.",
        ],
      },
      {
        title: "What lives where",
        body:
          "Three pieces fit together. You only interact with the first one directly.",
        points: [
          "Your wallet app — the thing you install, open, and approve actions in.",
          "The Solana network — the public record where the credential is stored.",
          "The credential NFT — a unique digital certificate that points to your degree details.",
        ],
      },
      {
        title: "You do not need to buy cryptocurrency",
        body:
          "DegreeNFT uses Solana as a public record, not as an investment. You do not need to buy, trade, or hold any cryptocurrency to claim or share a degree. The claim flow is designed to be free for graduates, with network fees handled by the issuer or platform.",
        tip:
          "If a website asks you to buy crypto before you can claim a degree, stop. That is not how DegreeNFT works.",
      },
      {
        title: "The only rule you need today",
        body:
          "Your recovery phrase is the master key to your wallet. Anyone who has it can control the wallet. No legitimate university, wallet app, or support team will ever ask you to share it — not by email, not in a chat, not over the phone.",
        tip:
          "Write it down. Keep it offline. Never type it into a website you reached from a link.",
      },
    ],
    terms: [
      {
        term: "Wallet",
        meaning:
          "An app that holds the keys to your digital credentials. It does not hold the degree itself.",
      },
      {
        term: "On-chain",
        meaning:
          "Recorded on a public ledger that no single company can quietly change.",
      },
      {
        term: "NFT",
        meaning:
          "A unique digital token. Here it works like a tamper-evident certificate.",
      },
      {
        term: "Recovery phrase",
        meaning:
          "12–24 words that restore your wallet. Treat them like the keys to your home.",
      },
    ],
    checklist: [
      "I understand a wallet is not a bank account",
      "I know I do not need to buy cryptocurrency",
      "I know never to share my recovery phrase",
    ],
  },
  {
    slug: "create-wallet",
    number: "02",
    navLabel: "Create a wallet",
    title: { lead: "Create your", accent: "wallet." },
    summary:
      "Set up a free Solana wallet in about five minutes. Phantom is used here as the example.",
    intro:
      "You only do this once. Pick a wallet you trust, create it from the official source, and back it up properly. That backup is what makes your degree permanent for the rest of your career.",
    duration: "5 min setup",
    audience: "Graduates / first wallet",
    need: [
      "A phone or computer",
      "An email address",
      "A pen and paper",
      "About five minutes",
    ],
    sections: [
      {
        title: "Install the official app",
        body:
          "We use Phantom as the example because it is a popular Solana wallet. Backpack and Solflare work too. Download only from the official website or your phone's app store listing.",
        points: [
          "On a phone: search your app store for Phantom and check the publisher.",
          "On a computer: go to phantom.com directly and use the browser extension.",
          "Ignore download links sent in DMs, comments, or ads.",
        ],
        tip:
          "A fake wallet app is one of the most common ways people lose credentials. Take 30 seconds to check the source.",
      },
      {
        title: "Create a fresh wallet",
        body:
          "A new wallet keeps your academic record separate and easy to reason about. Do not reuse a wallet you use for trading or experiments.",
        ordered: true,
        points: [
          "Open Phantom and choose “Create new wallet”.",
          "Choose the secret recovery phrase option.",
          "Read the short explanation, then reveal the phrase.",
          "Write the words down in order — on paper.",
          "Confirm the words in the app to finish.",
        ],
      },
      {
        title: "Back up the words properly",
        body:
          "The 12 words are the only way to restore your wallet on a new device. Keep them somewhere offline and private.",
        points: [
          "Paper is fine. A safe or a locked drawer is better.",
          "Do not screenshot the phrase or save it in notes, email, or cloud storage.",
          "Do not type it into a website, a chat, or a “support” form.",
        ],
        tip:
          "If you lose your phone but still have the words, you can restore everything. If you lose the words, you can lose access.",
      },
      {
        title: "Copy your public address",
        body:
          "Your public address is a string of letters and numbers. It is safe to share — it is how your university sends your degree. Your recovery phrase is the opposite: never share it.",
      },
      {
        title: "Make sure Solana is selected",
        body:
          "Phantom supports several networks. DegreeNFT runs on Solana, so check that Solana is the active network before you claim. If you use another wallet, enable Solana in its network settings.",
      },
    ],
    terms: [
      {
        term: "Phantom",
        meaning:
          "A popular self-custody wallet for Solana. The desktop extension and mobile app are both supported.",
      },
      {
        term: "Public address",
        meaning:
          "Your wallet's shareable ID. It can receive credentials and is safe to send to your university.",
      },
      {
        term: "Self-custody",
        meaning:
          "You control the keys — and therefore the wallet. No company can recover your phrase for you.",
      },
      {
        term: "Recovery phrase",
        meaning:
          "The 12–24 word backup that restores your wallet on a new device. Keep it offline.",
      },
    ],
    checklist: [
      "I downloaded the app from an official source",
      "I wrote my recovery phrase on paper",
      "I have not shared my phrase with anyone",
      "I know where to find my public address",
    ],
  },
  {
    slug: "claim-degree",
    number: "03",
    navLabel: "Claim your degree",
    title: { lead: "Claim your", accent: "degree." },
    summary:
      "Accept the credential your university issued and move it into your own wallet.",
    intro:
      "The university has prepared the record. All that is left is for you to review it and approve the claim. Take a minute on the review screen — this is the moment the credential becomes yours.",
    duration: "5 min",
    audience: "Graduates",
    need: [
      "The claim link or email from your university",
      "Your wallet installed and unlocked",
      "About five minutes",
    ],
    sections: [
      {
        title: "Open the claim link",
        body:
          "When your institution issues the degree, it sends a claim link to the email address on record. Open it on the same phone or computer where your wallet is installed. The page shows exactly what is ready to be issued: your name, programme, award, and year.",
        tip:
          "No link yet? Check your spam folder, then contact your registrar. Only trust links from your institution or the official DegreeNFT domain.",
      },
      {
        title: "Connect your wallet",
        body:
          "Connecting only lets the registry see your public address. It does not give anyone access to your funds or your recovery phrase.",
        ordered: true,
        points: [
          "Tap “Connect wallet” on the claim page.",
          "Choose Phantom, or the wallet you installed.",
          "Approve the connection inside your wallet app.",
          "Check that the public address shown matches your wallet.",
        ],
      },
      {
        title: "Review before you approve",
        body:
          "Read every line on the claim page. Once the credential is written, corrections need the institution's help.",
        points: [
          "Your full name is spelled correctly.",
          "The programme and award match your records.",
          "The issuer is the right institution.",
          "The graduation year is correct.",
        ],
      },
      {
        title: "Approve the claim",
        body:
          "Approve the transaction in your wallet. The network writes the credential to your address in seconds. In the DegreeNFT flow, claiming is designed to be free for graduates — any network fee is handled by the issuer or platform.",
        tip:
          "If the wallet shows a fee you were not expecting, close the window and check with your registrar or the DegreeNFT team before approving.",
      },
      {
        title: "Wait for confirmation",
        body:
          "Keep the claim page open until you see a confirmation. The credential now belongs to your wallet address, not to an email inbox or a student portal. You can close the page and find it again inside DegreeNFT.",
      },
    ],
    terms: [
      {
        term: "Claim link",
        meaning:
          "A one-time link that connects a credential prepared by the university to your wallet.",
      },
      {
        term: "Connect",
        meaning:
          "Linking your wallet to an app so it can read your public address. It does not move assets.",
      },
      {
        term: "Transaction",
        meaning:
          "An action you approve in your wallet. Claiming a degree is one transaction.",
      },
      {
        term: "Mint",
        meaning:
          "The moment the credential is written to the blockchain. After minting, it exists permanently.",
      },
    ],
    checklist: [
      "The claim link came from my university or DegreeNFT",
      "I checked every detail before approving",
      "The app shows the credential as claimed",
      "My credential appears in my wallet",
    ],
  },
  {
    slug: "open-credential",
    number: "04",
    navLabel: "Open your credential",
    title: { lead: "Open and keep your", accent: "credential." },
    summary:
      "Find your degree, understand what it shows, and keep access safe for the future.",
    intro:
      "Your credential now exists independently of any portal. Here is how to read it, where to find it, and what to protect so it stays accessible for decades.",
    duration: "3 min",
    audience: "Graduates",
    need: [
      "Your wallet installed and unlocked",
      "The dApp open in a browser",
      "About three minutes",
    ],
    sections: [
      {
        title: "Open the dApp",
        body:
          "This is the easiest place to read your credential. Wallets show the token; DegreeNFT shows the meaning.",
        ordered: true,
        points: [
          "Open the DegreeNFT dApp.",
          "Connect the wallet you used to claim.",
          "Open “My credentials”.",
          "Select the degree to view its record.",
        ],
      },
      {
        title: "Or find it in your wallet",
        body:
          "In Phantom, open the Collectibles tab. Your credential appears there as an NFT. Wallets are built for tokens and images, so the display is less detailed — the DegreeNFT page is the readable view.",
      },
      {
        title: "Read the receipt",
        body:
          "Your credential page is more than a certificate image. It is a receipt for a public record.",
        points: [
          "Issuer — the university that signed it.",
          "Holder — your public wallet address.",
          "Status — valid, replaced, or revoked.",
          "Network record — a link to inspect the entry on Solana.",
          "Metadata — name, programme, award, and year.",
        ],
      },
      {
        title: "Keep access safe for later",
        body:
          "The credential lives on-chain, so it survives lost phones, closed portals, and websites that disappear. What it does not survive is losing access to your wallet. Keep your recovery phrase offline. When you change phones, restore the wallet before wiping the old one.",
        tip:
          "Your degree is permanent. Your access to it depends on the recovery phrase you backed up in step 02.",
      },
      {
        title: "Save a copy for your records",
        body:
          "Use the download or print option in the dApp to keep a copy for your own files. Treat that copy as a convenience, not the proof. An employer can only confirm the live record by opening the verification link.",
      },
    ],
    terms: [
      {
        term: "Collectible",
        meaning:
          "The tab in many wallets where NFTs and credentials appear. Wording varies by wallet.",
      },
      {
        term: "Metadata",
        meaning:
          "The details attached to a credential — your name, award, programme, year, and issuer.",
      },
      {
        term: "Explorer",
        meaning:
          "A public website for inspecting blockchain records. It is the independent source of truth.",
      },
      {
        term: "Revocation",
        meaning:
          "Marking a credential invalid when it was issued in error, replaced, or obtained fraudulently.",
      },
    ],
    checklist: [
      "I can open the credential in the dApp",
      "I checked my name and degree details",
      "My recovery phrase is stored safely offline",
      "I understand my degree remains on-chain",
    ],
  },
  {
    slug: "share-credential",
    number: "05",
    navLabel: "Share your degree",
    title: { lead: "Share it with an", accent: "employer." },
    summary:
      "Send a link that anyone can check — no wallet, account, or PDF required.",
    intro:
      "A DegreeNFT credential is verified through a link, not an attachment. The link always points to the live record, so it stays accurate as long as the credential exists.",
    duration: "2 min",
    audience: "Graduates & employers",
    need: [
      "Your credential open in the dApp",
      "The email, CV, or application where you want to share it",
      "About two minutes",
    ],
    sections: [
      {
        title: "Copy the share link",
        body:
          "Every credential has a public verification page. It shows the record without exposing your wallet or your personal contact details.",
        ordered: true,
        points: [
          "Open the credential in DegreeNFT.",
          "Tap “Share”.",
          "Copy the verification link.",
        ],
      },
      {
        title: "Send it wherever a degree is needed",
        body:
          "The link stays the same, and it always shows the current status of the credential.",
        points: [
          "Job applications and recruiter emails",
          "Your CV, portfolio, or personal site",
          "Admissions or immigration paperwork",
          "Anywhere you would previously attach a PDF",
        ],
      },
      {
        title: "What the other person sees",
        body:
          "The verification page is written for people who have never used crypto.",
        points: [
          "The issuing institution and its registry status.",
          "Your name, programme, award, and year.",
          "Whether the credential is currently valid.",
          "A link to the public on-chain record.",
        ],
      },
      {
        title: "What sharing does not do",
        body:
          "A verification link does not give anyone access to your wallet, your funds, or your recovery phrase. It does not let them edit the record. It is a read-only view of a credential that already belongs to you.",
        tip:
          "Anyone can screenshot a certificate. A verification link is different: it points to the live record, so changes and revocations are visible.",
      },
      {
        title: "If you lose the link",
        body:
          "Open DegreeNFT, connect your wallet, and open the credential again. The share link can be copied as many times as you need. You do not need to request a new one from your university.",
      },
    ],
    terms: [
      {
        term: "Verification page",
        meaning:
          "A public, read-only view of a credential. It requires no account or wallet to open.",
      },
      {
        term: "Share link",
        meaning:
          "The permanent URL for that verification page. It can be copied and sent anywhere.",
      },
      {
        term: "Read-only",
        meaning:
          "The viewer can check the record but cannot change it or access your wallet.",
      },
      {
        term: "Revocation",
        meaning:
          "If an institution updates the status, the verification page reflects it automatically.",
      },
    ],
    checklist: [
      "I copied the verification link, not just a screenshot",
      "I understand the link is read-only",
      "I know I never need to share my recovery phrase",
      "I can find the link again in the dApp",
    ],
  },
  {
    slug: "verify-degree",
    number: "06",
    navLabel: "Check a degree",
    title: { lead: "Check a degree in", accent: "two minutes." },
    summary:
      "For employers and anyone reviewing a DegreeNFT credential. No account or wallet required.",
    intro:
      "Verification is the easy part. Open the link, compare four details, and follow the public record if you want to inspect the source. You never need to connect a wallet to check someone else's degree.",
    duration: "2 min",
    audience: "Employers, admissions teams",
    need: [
      "The candidate's verification link or credential ID",
      "A browser",
      "No account or wallet",
    ],
    sections: [
      {
        title: "Open the link — no account needed",
        body:
          "If a candidate sends you a DegreeNFT link, open it in any browser. You do not need a wallet, an account, or any cryptocurrency. The page is a read-only verification view.",
      },
      {
        title: "Check four things",
        body:
          "The verification page is designed to make the important details obvious.",
        ordered: true,
        points: [
          "Issuer: is it an institution you recognise, marked as verified in the registry?",
          "Name: does it match the candidate?",
          "Award: does the programme and year match what they told you?",
          "Status: does the page say the credential is valid?",
        ],
      },
      {
        title: "Follow the on-chain record",
        body:
          "Tap “View on Solana” to inspect the public record yourself. This is the part a PDF cannot fake. You do not need to understand the technical details — the record should match the page you just read.",
        tip:
          "If the link and the on-chain record disagree, stop and ask the institution. Do not rely on a screenshot.",
      },
      {
        title: "If a credential is revoked",
        body:
          "A revoked credential is not valid. Institutions use revocation for errors, replacements, and fraud. Ask the candidate to request the current record from their registrar before you continue.",
      },
      {
        title: "No link? Start from the verifier",
        body:
          "Open the DegreeNFT verification page and paste the credential ID or wallet address the candidate provided. The result is the same public record — still no account required.",
      },
    ],
    terms: [
      {
        term: "Registry",
        meaning:
          "The list of institutions recognised as issuers. The page shows whether the issuer is on it.",
      },
      {
        term: "Credential ID",
        meaning:
          "The unique identifier for a degree. It can be used on the verifier when there is no link.",
      },
      {
        term: "Explorer",
        meaning:
          "A public blockchain viewer. Use it to confirm the record directly on Solana.",
      },
      {
        term: "Revocation",
        meaning:
          "The institution has marked the credential invalid. Treat a revoked degree as not valid.",
      },
    ],
    checklist: [
      "The issuer is on the verified registry",
      "The name matches the candidate",
      "The award and year match their claim",
      "The status is valid",
      "I checked the on-chain record for a high-stakes decision",
    ],
  },
];

export const glossary = [
  {
    term: "Wallet",
    meaning:
      "The app that holds the keys to your credentials. Think signature, not purse.",
  },
  {
    term: "Blockchain",
    meaning:
      "A public record book that no single company can quietly rewrite.",
  },
  {
    term: "Solana",
    meaning:
      "The network DegreeNFT uses to store credentials. It is fast and cheap to read.",
  },
  {
    term: "NFT",
    meaning:
      "A unique digital token. Here, it is a tamper-evident certificate.",
  },
  {
    term: "Recovery phrase",
    meaning:
      "12–24 words that restore your wallet. The most important thing to keep private.",
  },
  {
    term: "Network fee",
    meaning:
      "A small cost for writing to the blockchain. DegreeNFT's claim flow is designed so graduates do not pay it.",
  },
  {
    term: "Connect",
    meaning:
      "Linking your wallet to an app so it can see your public address. It does not move anything.",
  },
  {
    term: "Revoked",
    meaning:
      "A credential an institution has marked invalid — for example, after an error or a replacement.",
  },
];

export function getGuideStep(slug: string) {
  return guideSteps.find((step) => step.slug === slug);
}
