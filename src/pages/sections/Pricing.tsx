import { Link as RouterLink } from 'react-router-dom';

// Data
import pricingData from '../../data/pricing.json';

// ---------

function Pricing() {
  return (
    <section id="pricing" className="section full-width">
      <div className="section-wrapper block content-1170 center-relative">
        <div className="content-wrapper">
          <div className="two_third">
            <div className="info-text">{pricingData.introText}</div>
          </div>
          <div className="one_third last">{pricingData.leftText}</div>
          <div className="clear"></div>

          {pricingData.plans.map((plan, i) => (
            <div
              className={`one_third ${
                pricingData.plans.length === i + 1 && 'last'
              }`}
              key={'pricing-plan-' + i}>
              <div className="pricing-table">
                <div className="pricing-table-header">
                  <div className={`pricing-table-title ${plan.classColor}`}>
                    {plan.title}
                  </div>
                </div>
                <div className="pricing-table-price">{plan.value}</div>
                <div className="pricing-table-desc">{plan.period}</div>
                <div className="pricing-table-content-holder">
                  <ul>
                    {plan.features.map((feat, j) => (
                      <li key={'pricing-plan-features-' + j}>{feat}</li>
                    ))}
                  </ul>
                </div>
                <RouterLink
                  to={plan.actionLink.to}
                  className="pricing-button scroll">
                  {plan.actionLink.text}
                </RouterLink>
              </div>
            </div>
          ))}

          <div className="clear"></div>
        </div>
        <div className="clear"></div>
      </div>
    </section>
  );
}

export default Pricing;
