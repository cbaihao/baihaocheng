import PageLayout from "../../components/PageLayout";
import Link from "next/link";

export default function EmbodyWhatYouSeek() {
  return (
    <PageLayout title="Embody What You Seek">
      <div className="prose prose-gray max-w-none">
        <div className="text-gray-600 text-sm mb-8">
          <Link href="/writings" className="hover:text-black underline">
            ← Back to Drafts
          </Link>
        </div>

        <div className="text-gray-700 leading-relaxed space-y-6">
          <p>
            Inevitably, wanting something drives it away. Being attracts it.
          </p>

          <p>
            It&apos;s fascinating how consistently this works across different
            domains. In relationships, desperately wanting someone&apos;s
            attention repels them, while genuinely being comfortable with
            yourself attracts. In business, chasing money directly often fails,
            while being someone who creates value naturally generates wealth.
          </p>

          <p>
            There&apos;s something about the energetic quality of wanting versus
            being that others - and perhaps reality itself - responds to
            differently.
          </p>

          <p>
            This is not suggesting we should not want anything. The desire is
            the initial spark, the recognition of what's missing or what could
            be. Without that initial wanting, there's no direction, no energy to
            begin.
          </p>

          <p>
            But those who actually bring the desire to life have developed the
            discipline and wisdom to position their mind a certain way.
          </p>

          <p>Here's the mental shift.</p>

          <p>
            Wanting often carries desperation, scarcity, a sense that you don't
            have it. Being suggests you already contain what you seek. Wanting
            places the desired thing outside yourself, making you dependent on
            circumstances. Being makes you the source.
          </p>

          <p>
            Wanting projects into a future where you'll have it. Being brings
            that quality into the present moment.
          </p>

          <p>
            But don't we need to set goal? Isn't goal setting a 'want' in
            disguise.
          </p>

          <p>
            Just like we can set goal on leading indicators or lagging
            indicators, maybe the distinction is:
          </p>

          <ul className="list-disc ml-6 space-y-2">
            <li>
              Wanting-based goal setting: "I want X" → desperately seeking X →
              emphasise lack
            </li>
            <li>
              Being-based goal setting: "I am someone who..." → what would that
              person do? → natural action
            </li>
          </ul>

          <p>
            The goal becomes the expression of your being rather than the object
            of your wanting. You're not setting goals to GET something, you're
            setting goals to EXPRESS what you already are. And that's a more
            effective goal.
          </p>

          <p>
            But being-based goal might be more than just a technique - it might
            be more aligned with reality itself.
          </p>

          <p>
            The distinction lies in whether owning or being is the ultimate end
            state.
          </p>

          <p>
            Felix Dennis would say ownership is largely an illusion. What we
            call "owning" is just temporary stewardship of resources. Even
            that's a tiny subset of what exists. Also, we spend 99% of our time
            in states of being, not moments of having.
          </p>

          <p>
            Being, on the other hand, seems to be the constant thread. The
            awareness that experiences having, the consciousness that witnesses
            ownership coming and going - that's what persists through all the
            changes.
          </p>

          <p>
            Wanting-based goals are trying to possess slices of an infinite pie.
            Being-based goals are about becoming the kind of person who
            naturally participates in that abundance.
          </p>

          <p>
            We think we want things, but what we actually want is the state of
            being we imagine those things will give us. We want the house for
            the security. We want the relationship for the love. We want the
            achievement for the confidence.
          </p>

          <p>Being-based goals cut straight to what we actually seek.</p>

          <p>
            The practical paradox is, when you focus on being, you often end up
            with more effective stewardship of resources. It's like having
            becomes a byproduct of being rather than a goal in itself.
          </p>

          <p>
            If there's one line that captures this theme, it'd be the title of
            one of my favorite book: the score will take care of itself.
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link
            href="/writings"
            className="text-gray-600 hover:text-black underline"
          >
            ← Back to Drafts
          </Link>
        </div>
      </div>
    </PageLayout>
  );
}
