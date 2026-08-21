import { SiteHeader } from '@/components/site-header'
import { HeroSection } from '@/components/hero-section'
import { StatsBar } from '@/components/stats-bar'
import { WhySection } from '@/components/why-section'
import { CurriculumSection } from '@/components/curriculum-section'
import { AudienceSection } from '@/components/audience-section'
import { ChallengeSection } from '@/components/challenge-section'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <HeroSection />
        <StatsBar />
        <WhySection />
        <CurriculumSection />
        <AudienceSection />
        <ChallengeSection />
      </main>
      <SiteFooter />
    </div>
  )
}
