import { aiPracticeContent } from "@/content/approach";

export function AiPracticeSection() {
  return (
    <section className="ai-practice" aria-labelledby="ai-practice-title">
      <div className="content-container ai-practice__inner">
        <header className="ai-practice__header">
          <p className="eyebrow">How I use AI</p>
          <h2 id="ai-practice-title">{aiPracticeContent.statement}</h2>
        </header>

        <div className="ai-practice__columns">
          <div className="ai-practice__column">
            <h3>AI helps with</h3>
            <ul>
              {aiPracticeContent.helpsWith.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="ai-practice__column">
            <h3>I remain responsible for</h3>
            <ul>
              {aiPracticeContent.responsibility.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="ai-practice__operating">
          <p className="technical-label">Operating approach</p>
          <ul>
            {aiPracticeContent.operatingPrinciples.map((principle) => (
              <li key={principle}>{principle}</li>
            ))}
          </ul>
        </div>

        <div className="ai-practice__loop">
          <p className="technical-label">Working loop</p>
          <ol>
            {aiPracticeContent.workingLoop.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </div>

        <p className="ai-practice__tools">{aiPracticeContent.toolsLine}</p>
      </div>
    </section>
  );
}
