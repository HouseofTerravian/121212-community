import type { Metadata } from 'next'
import LegalLayout, { LegalSection } from '@/components/LegalLayout'

export const metadata: Metadata = {
  title: 'Affiliate Program | 121212.community',
  description: 'Affiliate Program details for 121212.community, the city hub subdomain marketplace.',
}

export default function AffiliatesPage() {
  return (
    <LegalLayout
      title="Affiliate Program"
      subtitle="Effective January 1, 2025 | Last Updated March 1, 2026"
    >
      <LegalSection title="1. Overview">
        <p>
          The 121212.community Affiliate Program allows approved participants to earn commissions by referring new curators, visitors, and customers to the Platform and the broader 121212 ecosystem. Our affiliate program is designed to reward community members who help grow and strengthen the network of Black cultural hubs across the country.
        </p>
        <p>
          The program is operated by MCM Enterprises, an unregistered DBA of SlateRiver LLC, a New Mexico LLC. Participation in the affiliate program constitutes acceptance of these terms and any additional guidelines we may publish from time to time.
        </p>
      </LegalSection>

      <LegalSection title="2. How It Works">
        <p>
          Approved affiliates receive a unique referral link that tracks visitors and conversions attributed to their efforts. When a referred user completes a qualifying action &mdash; such as bidding on and securing a city hub license, or making a qualifying purchase through the 121212 ecosystem &mdash; the affiliate earns a commission.
        </p>
        <p>
          We use a 30-day cookie window for attribution, meaning that if a referred user completes a qualifying action within 30 days of clicking your referral link, the commission is attributed to you. Commissions are calculated and paid on a monthly basis, with payouts processed on or before the 15th of the following month.
        </p>
      </LegalSection>

      <LegalSection title="3. Commission Structure">
        <p>
          Affiliates earn a percentage of qualifying transactions generated through their referral links. Commission rates vary by product type and are subject to change. Current commission rates are communicated to affiliates upon acceptance into the program and are available in the affiliate dashboard.
        </p>
        <p>
          There is no cap on affiliate earnings. The more you refer, the more you earn. Commissions are paid via the payment method specified in your affiliate account. A minimum payout threshold may apply, and any earned commissions below the threshold will roll over to the following month.
        </p>
      </LegalSection>

      <LegalSection title="4. Eligibility">
        <p>
          The affiliate program is open to individuals and entities who are at least 18 years of age and in good standing with the Platform. Applicants must submit an application through the designated process, and MCM Enterprises reserves the right to approve or deny any application at its sole discretion.
        </p>
        <p>
          Current city hub curators are eligible to participate in the affiliate program. However, self-referrals (referring yourself for a transaction you initiate) are not eligible for commission. We reserve the right to disqualify any referral that we determine to be fraudulent, manipulative, or otherwise in violation of the spirit of the program.
        </p>
      </LegalSection>

      <LegalSection title="5. Terms and Conditions">
        <p>
          Affiliates must not engage in any deceptive, misleading, or unethical marketing practices when promoting 121212.community. This includes, but is not limited to, spam, false advertising, trademark infringement, cookie stuffing, and any form of incentivized clicks or sign-ups that do not represent genuine interest in the Platform.
        </p>
        <p>
          MCM Enterprises reserves the right to modify commission rates, program terms, or payout schedules at any time with 30 days&rsquo; notice to active affiliates. We also reserve the right to terminate any affiliate account that violates these terms, with forfeiture of any unpaid commissions earned through prohibited activities.
        </p>
      </LegalSection>

      <LegalSection title="6. Contact">
        <p>
          For questions about the affiliate program, to apply, or to report an issue with your affiliate account, please contact us at{' '}
          <a href="mailto:support@121212.community" className="text-purple-light hover:text-purple transition-colors duration-300">
            support@121212.community
          </a>.
        </p>
      </LegalSection>
    </LegalLayout>
  )
}
