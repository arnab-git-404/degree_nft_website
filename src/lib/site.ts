const trimTrailingSlash = (value: string) => value.replace(/\/+$/, "");

export const siteUrl = trimTrailingSlash(
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
);
export const appUrl = trimTrailingSlash(
  process.env.NEXT_PUBLIC_APP_URL || "http://localhost:5173",
);

export const siteName = "DegreeNFT";
export const siteTitle = "DegreeNFT | Verified Academic Credentials on Solana";
export const siteDescription =
  "DegreeNFT lets universities issue tamper-proof academic credentials on Solana and gives students and employers instant verification.";
export const siteKeywords = [
  "DegreeNFT",
  "academic credentials",
  "Solana",
  "NFT certificates",
  "credential verification",
  "blockchain degrees",
];
export const googleSiteVerification =
  process.env.GOOGLE_SITE_VERIFICATION || undefined;
