import type { Metadata } from 'next'
import LegalLayout, { LegalSection } from '@/components/LegalLayout'

export const metadata: Metadata = {
  title: 'Refund Policy | 121212.community',
  description: 'Refund Policy for 121212.community, the city hub subdomain marketplace.',
}

export default function RefundsPage() {
  return (
    <LegalLayout
      title="Refund Policy"
      subtitle="Effective January 1, 2025 | Last Updated March 1, 2026"
    >
      <LegalSection title="1. Hub License Refunds">
        <p>
          City hub subdomain licenses are billed annually. If you are unsatisfied with your hub license for any reason, you may request a full refund within 30 days of your initial license activation date. Refund requests must be submitted in writing to our support team.
        </p>
        <p>
          After the 30-day refund window, annual license fees are non-refundable. This policy exists because significant resources are allocated to onboarding curators, provisioning subdomains, and integrating hubs into the 121212 ecosystem. Partial refunds are not available for mid-term cancellations.
        </p>
        <p>
          Upon approval of a refund, the associated subdomain will be deactivated and returned to &ldquo;available&rdquo; status in the marketplace. All content published to the hub during the license period may be archived or removed at MCM Enterprises&rsquo; discretion.
        </p>
      </LegalSection>

      <LegalSection title="2. Bid Refunds">
        <p>
          Payment is collected only upon acceptance of a bid and execution of a license agreement. If your bid is not accepted, no payment is collected and no refund is necessary. Bids are non-binding expressions of interest until formally accepted.
        </p>
        <p>
          In the event that a payment is collected in error prior to bid acceptance, a full refund will be issued within 5 business days. If a license agreement is executed and then voided by MCM Enterprises for reasons unrelated to the curator&rsquo;s conduct, a full refund of the license fee will be provided.
        </p>
      </LegalSection>

      <LegalSection title="3. Processing">
        <p>
          Approved refunds are processed within 10 business days and returned to the original payment method. Processing times may vary depending on your financial institution. You will receive an email confirmation once your refund has been initiated.
        </p>
        <p>
          MCM Enterprises is not responsible for delays caused by third-party payment processors or financial institutions. If you have not received your refund within 15 business days of approval, please contact your financial institution before reaching out to our support team.
        </p>
      </LegalSection>

      <LegalSection title="4. Exceptions">
        <p>
          Refunds will not be issued in cases where a hub license has been revoked due to violation of the Terms of Service, including but not limited to: posting prohibited content, misrepresentation, failure to maintain content standards, or any conduct deemed harmful to the Platform or the 121212 community.
        </p>
        <p>
          MCM Enterprises reserves the right to deny refund requests that it determines, in its sole discretion, to be fraudulent, abusive, or made in bad faith. Repeated refund requests by the same individual may result in permanent suspension from the Platform.
        </p>
      </LegalSection>

      <LegalSection title="5. Contact">
        <p>
          For refund requests or questions about this policy, please contact us at{' '}
          <a href="mailto:support@121212.community" className="text-purple-light hover:text-purple transition-colors duration-300">
            support@121212.community
          </a>. Please include your name, the city hub in question, and the reason for your request.
        </p>
      </LegalSection>
    </LegalLayout>
  )
}
