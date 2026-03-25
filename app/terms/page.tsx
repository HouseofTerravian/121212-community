import type { Metadata } from 'next'
import LegalLayout, { LegalSection } from '@/components/LegalLayout'

export const metadata: Metadata = {
  title: 'Terms of Service | 121212.community',
  description: 'Terms of Service for 121212.community, the city hub subdomain marketplace.',
}

export default function TermsPage() {
  return (
    <LegalLayout
      title="Terms of Service"
      subtitle="Effective January 1, 2025 | Last Updated March 1, 2026"
    >
      <LegalSection title="1. Acceptance of Terms">
        <p>
          By accessing or using 121212.community (the &ldquo;Platform&rdquo;), you agree to be bound by these Terms of Service (&ldquo;Terms&rdquo;). The Platform is operated by MCM Enterprises, an unregistered DBA of SlateRiver LLC, a New Mexico limited liability company. If you do not agree to these Terms, you must not access or use the Platform.
        </p>
        <p>
          These Terms constitute a legally binding agreement between you and MCM Enterprises. Your continued use of the Platform following the posting of any changes to these Terms constitutes acceptance of those changes. We reserve the right to modify these Terms at any time, and such modifications shall be effective immediately upon posting.
        </p>
      </LegalSection>

      <LegalSection title="2. Use of Platform">
        <p>
          121212.community is a curated marketplace for city-based subdomain hubs. Users may browse available city hubs, view active hub content, participate in bidding for available subdomains, and engage with hub content including events, products, music, places, and community reviews.
        </p>
        <p>
          You agree to use the Platform only for lawful purposes and in a manner that does not infringe upon the rights of, restrict, or inhibit the use and enjoyment of the Platform by any third party. Prohibited conduct includes, but is not limited to, harassment, defamation, transmission of obscene or offensive content, and any activity that disrupts the operation of the Platform.
        </p>
        <p>
          We reserve the right to suspend or terminate access to any user who violates these Terms or engages in conduct that we determine, in our sole discretion, to be harmful to the Platform, its users, or our business interests.
        </p>
      </LegalSection>

      <LegalSection title="3. Subdomain Licensing">
        <p>
          City hub subdomains (e.g., atlanta.121212.community) are licensed, not sold. Successful bidders receive a non-exclusive, non-transferable, revocable license to curate and manage content on their assigned subdomain for the duration of their license period, subject to renewal.
        </p>
        <p>
          The license does not convey any ownership interest in the 121212.community domain, the Platform&rsquo;s technology, brand assets, or intellectual property. MCM Enterprises retains full ownership and control of all subdomains, and may revoke a license at any time for violation of these Terms, failure to maintain content standards, or for any other reason deemed appropriate in our sole discretion.
        </p>
      </LegalSection>

      <LegalSection title="4. Bid Process">
        <p>
          Bids for available city hubs are submitted through the Platform&rsquo;s contact system or designated bidding interface. All bids are non-binding expressions of interest until formally accepted by MCM Enterprises. Payment is required only upon acceptance of a bid and execution of a license agreement.
        </p>
        <p>
          MCM Enterprises reserves the right to accept, reject, or counter any bid at its sole discretion. Bid amounts represent annual license fees and do not include any applicable taxes, transaction fees, or other charges that may apply. We are not obligated to accept the highest bid and may consider factors including but not limited to the bidder&rsquo;s qualifications, experience, and proposed content strategy.
        </p>
      </LegalSection>

      <LegalSection title="5. Curator Obligations">
        <p>
          Curators who successfully bid on and are awarded a city hub subdomain agree to maintain active, high-quality content that reflects the cultural identity of the assigned city. Curators must update hub content regularly, respond to community feedback in a timely manner, and comply with all applicable laws and regulations.
        </p>
        <p>
          Curators are responsible for ensuring that all content posted to their hub is accurate, non-infringing, and does not violate any third-party rights. Content that is discriminatory, defamatory, or otherwise harmful will result in immediate review and potential license revocation. Curators must not use their hub for any purpose that is misleading, fraudulent, or contrary to the mission of the 121212 ecosystem.
        </p>
      </LegalSection>

      <LegalSection title="6. Intellectual Property">
        <p>
          All intellectual property associated with the Platform &mdash; including but not limited to the 121212.community name, logo, branding, design, technology, and underlying code &mdash; is owned by MCM Enterprises and is protected by applicable intellectual property laws. No license or right is granted to use any such intellectual property except as expressly provided in these Terms.
        </p>
        <p>
          Curators retain ownership of original content they create and publish on their hubs. By publishing content on the Platform, curators grant MCM Enterprises a non-exclusive, worldwide, royalty-free license to display, distribute, and promote such content in connection with the operation and marketing of the Platform and the broader 121212 ecosystem.
        </p>
      </LegalSection>

      <LegalSection title="7. Limitation of Liability">
        <p>
          To the maximum extent permitted by applicable law, MCM Enterprises, SlateRiver LLC, and their officers, directors, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the Platform, including but not limited to loss of revenue, loss of data, or loss of business opportunities.
        </p>
        <p>
          In no event shall our total liability exceed the amount you have paid to MCM Enterprises in the twelve (12) months preceding the event giving rise to such liability. This limitation applies regardless of the theory of liability, whether based on warranty, contract, tort, or any other legal theory.
        </p>
      </LegalSection>

      <LegalSection title="8. Changes to Terms">
        <p>
          MCM Enterprises reserves the right to update or modify these Terms at any time. Material changes will be communicated via the Platform or by email to registered users. Your continued use of the Platform after changes are posted constitutes your acceptance of the revised Terms.
        </p>
        <p>
          We encourage you to review these Terms periodically to stay informed of any updates. The &ldquo;Last Updated&rdquo; date at the top of these Terms indicates when the most recent revisions were made.
        </p>
      </LegalSection>

      <LegalSection title="9. Contact">
        <p>
          For questions regarding these Terms of Service, please contact us at{' '}
          <a href="mailto:support@121212.community" className="text-purple-light hover:text-purple transition-colors duration-300">
            support@121212.community
          </a>.
        </p>
      </LegalSection>
    </LegalLayout>
  )
}
