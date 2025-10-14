---
layout: single
title: "Our Projects by Topics"
---


<!-- Top navigation -->
<nav class="research-topnav">
  <a href="#matching">Matching & Design</a>
  <a href="#overlap">Overlap & Robustness</a>
  <a href="#inference">Inference</a>
  <a href="#complex">Complex Structures</a>
  <a href="#applications">Applications</a>
</nav>

<div class="research-page">

  <hr>
  <!-- Matching -->
  <section id="matching" class="research-section">
    <h2 class="topic-title">Matching and Design</h2>
    <div class="topic-projects">

      <article>
        <h3>High-Dimensional Matching</h3>
        <p class="project-people">with Hajoung Lee</p>
        <p>
          This project develops a new many-to-many matching algorithm for high-dimensional settings
          that does not rely on outcome information. The goal is to construct matched sets that achieve
          strong covariate balance even when the number of covariates is large relative to the sample size.
          Along with the algorithm, we are designing diagnostic tools to evaluate matching quality in high
          dimensions and establishing inference procedures that remain valid in such complex settings.
        </p>
        <div class="tags">
          <span class="tag-label">Related:</span>
          <a href="#overlap" class="tag">Overlap & Robustness</a>
          <a href="#inference" class="tag">Inference</a>
          <a href="#complex" class="tag">Complex Structures</a>
        </div>
      </article>

      <article>
        <h3>Time Series Matching</h3>
        <p class="project-people">with Suehyun Kim</p>
        <p>
          This project introduces Reverse-Time Nested Matching (RTNM), a new design for staggered adoption
          and time-series settings. Instead of matching independently at each event time, RTNM builds matched
          sets in reverse chronological order, nesting later sets into earlier ones. This construction ensures
          coherent donor pools across time, stabilizes weights, and improves overlap by aggregating controls
          into virtual comparisons. The framework also facilitates design-based inference through set-level
          resampling, offering a principled way to estimate dynamic treatment effects CATT(g,h) in
          longitudinal observational studies.
        </p>
        <div class="tags">
          <span class="tag-label">Related:</span>
          <a href="#inference" class="tag">Inference</a>
          <a href="#complex" class="tag">Complex Structures</a>
        </div>
      </article>

      <article>
        <h3>Matching with Quantum Computing</h3>
        <p class="project-people">with Sangyong Park</p>
        <p>
          This project explores the potential of quantum optimization algorithms to address computational
          challenges in complex matching problems. We target practically difficult designs such as
          variable-ratio matching, multi-arm (1:1:1) matching, and cardinality matching. By reformulating
          these problems to leverage quantum speed-ups, we aim to evaluate whether quantum-based methods can
          deliver genuine improvements in solving NP-hard instances while maintaining covariate balance and
          interpretability.
        </p>
      </article>

    </div>
  </section>

  <hr>

  <!-- Overlap -->
  <section id="overlap" class="research-section">
    <h2 class="topic-title">Overlap and Robustness</h2>
    <div class="topic-projects">

      <article>
        <h3>Weak Overlap and Mixing Samples</h3>
        <p class="project-people">with Jaehyuk Jang and Suehyun Kim</p>
        <p>
          This project develops a framework for addressing weak overlap in observational studies by introducing
          a mixing-sample design. Instead of discarding units or relying on restrictive constraints, the method
          mixes portions of the treated and control groups to create better-aligned comparison populations.
          This approach provides a principled way to retain sample size while mitigating bias, and it yields
          tractable inference procedures that are robust under limited overlap. The framework is particularly
          useful in settings where traditional matching or weighting approaches fail to provide reliable estimates.
        </p>
      </article>

      <article>
        <h3>Quantifying Overlap</h3>
        <p class="project-people">with Geondo Park and Juyeon Kim</p>
        <p>
          This project develops a diagnostic framework for quantifying the degree of overlap between treated and
          control groups in observational studies. Building on ideas from mixture modeling, we approximate the
          covariate distribution as a two-component mixture and estimate the portion that is shared across groups.
          This approach yields a direct and interpretable measure of overlap, which can be used during exploratory
          data analysis to assess study feasibility before applying matching or weighting methods. The method is
          computationally efficient and provides clearer guidance than existing ad hoc diagnostics.
        </p>
      </article>

    </div>
  </section>

  <hr>

  <!-- Inference -->
  <section id="inference" class="research-section">
    <h2 class="topic-title">Inference</h2>
    <div class="topic-projects">

      <article>
        <h3>Time-Varying Treatment Effect</h3>
        <p class="project-people">with Sangjin Lee</p>
        <p>
          This project develops a randomization-based framework for evaluating treatment effects that evolve over
          time in matched observational studies. Existing survival tests often detect whether an effect exists
          overall but fail to reveal when the effect starts, how long it lasts, or whether it diminishes or reverses.
          We design new tests that use time-specific scores from pseudo-observations, allowing researchers to
          pinpoint the onset and duration of an effect. The framework includes both time-specific and overall tests,
          along with sensitivity analyses for unmeasured confounding. By applying these methods to matched cohort
          data, we aim to provide transparent, design-based inference that uncovers the dynamic nature of treatment
          effects in longitudinal settings.
        </p>
      </article>

      <article>
        <h3>Heterogeneous ATT in DID</h3>
        <p class="project-people">with Junho Jang</p>
        <p>
          This project investigates heterogeneity in the average treatment effect on the treated (ATT) within the
          difference-in-differences (DID) framework. While standard DID estimators assume a constant ATT over time,
          treatment effects can in practice vary with time since adoption or across subgroups. We develop methods to
          formally test and estimate such heterogeneity, providing tools to detect when a single average effect masks
          important temporal or group-specific differences. Our framework extends the robustness of DID designs while
          offering applied researchers more nuanced insight into the dynamics of treatment effects.
        </p>
      </article>

      <article>
        <h3>Randomization-based Testing for Causal Interaction</h3>
        <p class="project-people">with Zion Lee</p>
        <p>
          This project focuses on developing randomization-based methods to detect causal interaction in multi-arm
          treatment settings. Using the attributable effect framework, we design tests that reflect the assignment
          mechanism without relying on parametric modeling. We also incorporate sensitivity analysis to evaluate
          robustness against unmeasured confounding. The goal is to provide transparent and principled tools for
          determining whether treatment effects differ jointly across factors, extending design-based inference
          to complex interaction problems.
        </p>
      </article>

    </div>
  </section>

  <hr>

  <!-- Complex -->
  <section id="complex" class="research-section">
    <h2 class="topic-title">Complex Structures</h2>
    <div class="topic-projects">

      <article>
        <h3>Causal Derivative Effects</h3>
        <p class="project-people">with Suhwan Bong</p>
        <p>
          This project develops a framework to study causal derivative effects, which measure how small changes in
          a continuous treatment influence outcomes. Instead of dichotomizing exposures (e.g., low vs. high), we
          introduce a matching estimator that directly targets the local derivative effect at specific exposure levels.
          The approach is coupled with permutation tests for hypothesis testing and sensitivity analysis for unmeasured
          confounders, making inference more robust than model-based methods. We aim to apply this framework to
          biomedical studies—such as COPD imaging biomarkers—to identify meaningful thresholds and better understand
          disease progression.
        </p>
      </article>

    </div>
  </section>

  <hr>

  <!-- Applications -->
  <section id="applications" class="research-section">
    <h2 class="topic-title">Applications</h2>
    <div class="topic-projects">

      <article>
        <h3>COPD Progression</h3>
        <p class="project-people">with Geondo Park, Samsung Medical Center</p>
        <p>
          This project investigates the sequential relationship between functional small airway disease (fSAD) and
          emphysema in patients with early-stage COPD, using longitudinal CT imaging data. We applied parametric
          response mapping (PRM) to quantify emphysema and fSAD, and designed a matched analysis to minimize
          confounding. Across derivation and validation cohorts, we found that patients with low baseline emphysema
          but high fSAD showed significantly greater emphysema progression, whereas the reverse pathway
          (emphysema → fSAD) was not supported. These results provide causal evidence that small airway disease
          precedes emphysema, highlighting the value of PRM-based imaging biomarkers and design-based inference
          in understanding COPD pathophysiology.
        </p>
      </article>

      <article>
        <h3>Antiseizure Medication Adherence in Epilepsy</h3>
        <p class="project-people">with Geondo Park, SNU Hospital</p>
        <p>
          Using nationwide health insurance data from Korea, we analyze adherence to antiseizure medications among
          more than 190,000 epilepsy patients. We find overall adherence around 70%, with chronic patients showing
          better adherence than newly diagnosed patients. Socioeconomic and clinical predictors revealed disparities,
          with middle-income patients often showing the lowest adherence. These results underscore how policy and
          structural factors shape epilepsy care and equity.
        </p>
      </article>

    </div>
  </section>

</div>
