import type { ArticleTranslation } from "@/lib/articles"

// English versions of the bundled articles in seedData.ts, keyed by article id.
// The Vietnamese text in seedData.ts is the original.
export const seedArticlesEn: Record<string, ArticleTranslation> = {
  "17": {
    title: "The pain of demand forecasting in agricultural businesses — and how to fix it at the root",
    excerpt: "Fresh produce may be the hardest industry in the supply chain to forecast. The FAO estimates that 28–55% of fruit and vegetables are lost after harvest, mostly because of wrong forecasts and broken cold chains.",
    body: `# The pain of demand forecasting in agricultural businesses — and how to fix it at the root

## Introduction

Fresh produce is probably one of the **hardest industries to forecast** in the entire supply chain. Products are **highly perishable**, production depends on **weather and seasons**, supply chains are **fragmented**, and the market **swings wildly** with promotions and consumer trends.

> 📊 **The painful reality:** The FAO estimates that **28–55% of fruit and vegetables are lost after harvest** — mostly because of wrong forecasts and broken cold chains, not because the produce was "bad".

---

## 6 Core Pains & Root-Cause Fixes

---

### 1. Perishable products – a small mistake and the whole lot goes in the bin

**Symptoms:**
- Too little stock → stockouts, lost customers
- Too much stock → spoilage, dumping or clearance at a loss
- Decisions based on gut feeling ("it sold last year, so order the same this year")

**Root cause:** It is not because "the products are perishable" — that is simply their nature. The root cause is the **lack of real-time data** on shelf life, ripeness and sell-through speed for each specific lot.

**Root-cause fixes:**

| Fix | In practice |
|---|---|
| **FEFO instead of FIFO** | First Expired First Out — ship the lots with the shortest remaining shelf life first; this needs lot and expiry date tracking |
| **Automatic "freshness window" alerts** | The ERP raises an alert when a product is about to leave its peak freshness window, triggering a promotion or a warehouse transfer in time |
| **Dynamic pricing** | Automatically lower the price based on remaining freshness (as Japanese supermarkets do with sushi and bento boxes) |

---

### 2. Forecasts "detached from the field" – growing one thing, selling another

**Symptoms:**
- The forecast lives in Excel and is updated once a month, while demand changes every day
- Sales knows a customer is about to run a big promotion, but purchasing doesn't → under-ordering
- POS (point of sale) data is not connected to the harvest plan

**Root cause:** It is not "bad people" but **data split into department silos**. Sales holds the market signals, but that information does not flow back to production and purchasing in time.

**Root-cause fixes:**

| Fix | In practice |
|---|---|
| **An integrated S&OP system** | Sales & Operations Planning — one process and one platform where sales, marketing, production and finance forecast together from a shared data set |
| **Connect POS → Harvest Plan** | Data from retail counters flows straight into harvest and growing-area planning, updated automatically every day |
| **Rolling forecast** | Instead of a fixed monthly forecast, roll it forward every week, always using the most recent 4–6 weeks as input |

---

### 3. Weather & climate – "Mother Nature" wrecks every plan

**Symptoms:**
- Out-of-season rain → harvest delayed by 2 weeks → delivery commitments broken
- Unusual heat → yield down 30% → not enough produce for supermarkets
- No plan B when the weather turns bad

**Root cause:** Most businesses use **generic (regional)** weather data that is not granular enough to forecast for a specific field. On top of that, the production plan is "static" — there are no contingency scenarios.

**Root-cause fixes:**

| Fix | In practice |
|---|---|
| **Microclimate forecasting** | Use IoT sensors for soil moisture, temperature and rainfall in the field itself → AI predicts the optimal harvest window |
| **Scenario planning** | Prepare 3 scenarios (good / average / bad) for each crop, with backup suppliers, backup cold storage and alternative transport routes |
| **Diversified sourcing** | Don't depend on a single growing area; contract with several geographic regions to make up for a failed harvest in one of them |

---

### 4. A broken cold chain – every link is a data "island"

**Symptoms:**
- The reefer truck arrives late and the temperature was breached, but nobody knows until the customer returns the goods
- Cold stores are out of sync: some full, some empty
- No visibility of where a lot is or what temperature it is at

**Root cause:** The "cold chain" is not really a chain — it is a set of disconnected links, each party managing its own segment and **not sharing data** with the others.

**Root-cause fixes:**

| Fix | In practice |
|---|---|
| **End-to-end IoT across the cold chain** | Temperature/humidity sensors on every pallet stream real-time data to a cloud **shared** by farm → transport → warehouse → supermarket |
| **Control tower** | A central "control tower": a dashboard showing the location, temperature and ETA of every lot in transit |
| **Proactive alerts** | When the temperature crosses a threshold, the system alerts automatically → the dispatcher can reroute the truck or find the nearest cold store |

---

### 5. Traceability – "we know, it's painful, and we keep talking about it"

**Symptoms:**
- Customers (especially large supermarkets and EU/US export buyers) require traceability per lot and per harvest date
- When goods are returned, nobody knows where the fault came from: the variety? the field? transport? the warehouse?
- A traceability report takes 2–3 days, and the customer cannot wait

**Root cause:** The data is scattered across notebooks, Excel files and photocopied certificates. There is **no single ID** linking seed → crop → harvest → packing → transport → shelf.

**Root-cause fixes:**

| Fix | In practice |
|---|---|
| **Blockchain / digital ledger** | Each lot has a unique hash, and each step writes an immutable block → traceability in **seconds** |
| **Lot-level QR codes** | Every case carries a QR code linked to its full history: harvest date, farmer name, fertilizer used, certifications |
| **Automated certification management** | The ERP tracks certification expiry dates (GlobalGAP, Organic...) and warns before they lapse |

---

### 6. Seasonality & supply-demand swings – "a good harvest means a bad price, a good price means a bad harvest"

**Symptoms:**
- In peak season: too much volume → prices collapse → farmers need a "rescue"
- Off season: shortages → high prices but nothing to sell
- No way to forecast peaks and troughs to plan deep processing or storage

**Root cause:** This is a **structural** problem: agricultural production follows natural seasons, while consumption happens all year round. There is no **balancing** mechanism between peak and off season.

**Root-cause fixes:**

| Fix | In practice |
|---|---|
| **Value-added processing** | Invest in drying, freezing, juicing, milling lines... to absorb surplus peak-season volume |
| **Managed contract farming** | Sign offtake contracts with farmers **on staggered planting schedules** — split growing areas into several planting waves 2–3 weeks apart |
| **AI demand sensing** | Use machine learning on hidden signals (social media trends, weather, holidays, competitor prices...) |
| **Market diversification** | Don't sell only domestically — use cross-border e-commerce and sign export contracts |

---

## The Big Picture

\`\`\`
                       ROOT-CAUSE SOLUTION
                       ═══════════════════

   Agri-specific ERP (AgriERP / Fresh Produce ERP)
   ┌──────────────────────────────────────────────────────┐
   │  AI Forecasting  │  IoT Cold Chain  │  Blockchain   │
   │  (smart          │  (temperature    │  (origin      │
   │   forecasting)   │   monitoring)    │   tracing)    │
   ├──────────────────────────────────────────────────────┤
   │  Control Tower   │  Integrated S&OP │  Scenario     │
   │  (central        │  (sales + buying │  Planning     │
   │   visibility)    │   + production)  │  (plan B)     │
   └──────────────────────────────────────────────────────┘
         │                                          │
         ▼                                          ▼
   Decisions based                        Flexible response
   on real-time                           to weather and
   data                                   seasons
\`\`\`

---

## Summary: the 3-pillar formula

| Pillar | Description | Concrete examples |
|---|---|---|
| **Digitize + Integrate** | All data (fields, warehouses, trucks, counters) on one platform, in real time | Agri ERP + IoT + QR codes |
| **AI & Predictive** | Machines learn from the past and catch future signals early | Demand sensing, microclimate forecasting |
| **Chain collaboration** | Share data and risk between farmers, businesses and retailers | Contract farming, a shared control tower |`,
  },
  "18": {
    title: "Purchasing strategy when produce prices jump every day",
    excerpt: "Produce prices change every day — sometimes every market session. This article looks at the two-way link between price and forecast, plus 4 hybrid purchasing strategies that help a business control cost.",
    body: `# Purchasing strategy when produce prices jump every day

## Introduction

When prices change every day — sometimes every market session — there cannot be **one** fixed purchasing strategy. You need a **hybrid set of strategies** with clear trigger rules.

---

## Part 1: How does price affect the forecast volume?

### The price–forecast "spiral"

\`\`\`
                      PRICE SPIKES
                           │
           ┌───────────────┼───────────────┐
           ▼               ▼               ▼
      Demand falls     Business cuts    Farmers hold
      (elasticity)     its forecast     back stock
           │               │               │
           └───────────────┼───────────────┘
                           ▼
                 FORECAST GETS "BENT"
               (drifting further from reality)
\`\`\`

**Three main effects:**

| Effect | Mechanism | Impact on the forecast |
|---|---|---|
| **Demand elasticity** | Price rises → consumers buy less or switch to substitutes | A forecast model based on sales history **no longer holds** |
| **Herd effect** | Prices rising → B2B customers rush to order early → phantom demand | The forecast is **temporarily inflated**, then collapses when prices cool |
| **Speculation** | Prices rising → farmers hold stock waiting for higher prices → artificial supply cut | The traditional supply–demand model **breaks completely** |

### The fix: a price-sensitive forecasting model

| Level | How | Concrete example |
|---|---|---|
| **Basic** | Add price as a variable in a regression model | \`Sales = α + β1×Price + β2×Season + β3×Promotion\` |
| **Intermediate** | Calculate price elasticity for each item | Tomatoes: ε = -1.8 (highly elastic). Watermelon: ε = -0.4 (fairly inelastic) |
| **Advanced** | Machine learning with "price-aware" features | An XGBoost/LSTM model fed with today's price, the price 7 days ago, the rate of price change... |

---

## Part 2: 4 purchasing strategies

### Strategy 1: Portfolio mix (combining purchasing channels)

This is the **foundation** strategy — never put all your eggs in one basket.

| Channel | Suggested share | When to use more of it? | Risk |
|---|---|---|---|
| **Forward contract** | 40–60% | When the market is rising and prices trend up long term | The spot price drops below the forward price |
| **Spot buying** | 20–30% | When prices are falling and the market is oversupplied | The spot price jumps suddenly |
| **Flex contract** | 10–20% | Always keep some to "balance" | Requires a good partner relationship |
| **Own production / linked growing areas** | 10–20% | When the business has its own growing areas | Harvest and weather risk |

**Example:** a fruit and vegetable business needing 100 tons/month

- 50 tons ── 3-month forward contract at a fixed price
- 25 tons ── daily spot buying from the wholesale market
- 15 tons ── flex contract: minimum purchase commitment, price = avg(7-day spot) ± 5%
- 10 tons ── linked growing area, with a floor price that protects farmers

---

### Strategy 2: Trigger-based buying

Set **trigger prices** calculated from historical data.

| Signal | Action | Logic |
|---|---|---|
| 🟢 Price ≤ **P25** (25th percentile over 12 months) | **Buy double** — stock up and negotiate long-term contracts | This is a relative low, a chance to lock in a low price |
| 🟡 **P25 < price < P75** | Buy normally according to plan | A "fair" price zone, no special reaction needed |
| 🔴 Price ≥ **P75** | **Cut spot buying, activate forwards** — buy only the minimum | Entering a high-price zone |
| 🚨 Price ≥ **P90** (spike) | **Stop spot buying**, sell down inventory if it's profitable | A price bubble — buying now is "catching a falling knife" |

> 💡 **P25, P75, P90** are percentiles of the 12-month price history.

---

### Strategy 3: Hedging & price insurance

| Instrument | Description | Suitable for |
|---|---|---|
| **Futures** | Buy/sell on a commodity exchange at a pre-agreed price | Exporters of dried agricultural products |
| **Options** | Buy the right (not the obligation) to buy at price X in the future | Businesses that want to cap their price |
| **CFD / Swap** | Swap the price difference with a financial counterparty | Businesses that want a purely financial hedge |
| **Commodity price insurance** | Pay a premium and get compensated if the price exceeds the agreed threshold | Mid-sized businesses that want to keep it simple |

---

### Strategy 4: Dynamic contracting ("smart" contracts)

| Flexible contract type | How it works | Use when |
|---|---|---|
| **Index-linked price** | Purchase price = wholesale market reference price × adjustment factor (±5–10%) | Both sides accept the volatility |
| **Collar contract** | Commitment: the price is no lower than X and no higher than Y | Long-term partner relationships |
| **Moving average price** | Purchase price = average spot price over the last 7/14/30 days | Prices are very volatile but have no long-term trend |
| **Two-part tariff** | A fixed part + a part that varies with the market price | Guaranteeing farmers a minimum income |

---

## Part 3: The daily purchasing playbook (5 steps)

\`\`\`
⏰ 6:00 AM: Receive the market price report
        │
        ▼
📊 STEP 1 — Classify the price signal
   • Today's price vs. P25/P50/P75 (12 months)
   • Rate of change: up/down how many % over the last 3–5 days?
   • Compare with the signed forward price → what is the gap?
        │
        ▼
🔮 STEP 2 — Adjust the volume forecast
   • Apply price elasticity: New forecast = Old forecast × (1 + ε × %ΔPrice)
   • Example: ε = -0.8, price up 10% → forecast down 8%
   • Cross-check against signals from sales
        │
        ▼
🛒 STEP 3 — Allocate the channel mix
   ┌──────────────────────────────────────────────────┐
   │  Price ≤ P25  →  Spot 60% | Forward 20% | Flex 20% │
   │  P25 < Price < P75 → Spot 30% | Forward 50% | Flex 20% │
   │  Price ≥ P75  →  Spot 10% | Forward 70% | Flex 20% │
   │  Price ≥ P90  →  Spot 0%  | Forward 80% | Flex 20% │
   └──────────────────────────────────────────────────┘
        │
        ▼
🤝 STEP 4 — Negotiate & place orders
   • Call 3 suppliers, compare price + quality + delivery time
   • Prefer suppliers with a flex contract
        │
        ▼
📝 STEP 5 — Record & learn
   • Record: actual purchase price, why this strategy was chosen
   • End of week: compare the actual purchase price with the market average
   • End of month: review how the portfolio mix performed
\`\`\`

---

## Simulation result: 12 weeks – 100 tons/month of tomatoes

| Metric | Strategy A (100% spot) | Strategy B (portfolio mix) |
|---|---|---|
| **Total cost** | 4.76 billion VND | 4.37 billion VND |
| **Savings** | - | 400 million VND (8.3%) |
| **Cost volatility** | High | 66% lower |

> 💡 **Payoff vs. "premium":** 21 million VND "lost" in week 9 vs. 397 million VND saved during the price spike = **19 times**.

---

## 5 golden rules

| # | Rule | Why? |
|---|---|---|
| 1 | **Never buy 100% spot** | A single day with a 30% price jump can wipe out a month of profit |
| 2 | **Always have trigger prices** | Decisions based on data, not gut feeling |
| 3 | **The forecast must be price-sensitive** | A model without a price variable is a blind model |
| 4 | **Relationships > transactions** | Flex contracts and sharing risk with farmers/suppliers last longer |
| 5 | **Data is your weapon** | 12–24 months of price history + AI forecasting = competitive advantage |`,
  },
  "1": {
    title: "Why do businesses have high inventory and still run out of stock?",
    excerpt: "A common problem in Vietnamese businesses: sales needs stock, the warehouse reports high inventory, yet production and purchasing are still caught off guard. The cause usually lies in the forecast, master data and inventory policy.",
    body: `# Why do businesses have high inventory and still run out of stock?

## The symptom
Sales needs to ship to a customer and the system shows plenty of inventory, but the stock actually available to sell does not cover real demand. Or the stock sits in another warehouse, is waiting for check-in, or is on hold...

## Root causes

### 1. Inaccurate forecast
There is no clear demand forecasting process. Sales guesses by feel, with no analysis of historical data.

### 2. Non-standard master data
- Wrong UoM (unit of measure)
- Wrong packaging specifications
- No cross-reference between warehouses

### 3. Unclear inventory policy
No safety stock levels and no reorder point.

## The fix

### Step 1: Review master data
Check and standardize UoM, packaging, weight and dimensions for every SKU.

### Step 2: Set safety stock
Use the formula:
\`\`\`
SS = (Max daily usage × Max lead time) - (Avg daily usage × Avg lead time)
\`\`\`

### Step 3: Set the reorder point
\`\`\`
ROP = (Avg daily usage × Lead time) + Safety Stock
\`\`\`

## Conclusion
High inventory with shortages is usually not caused by a lack of stock in the warehouse, but by not knowing where the stock is and whether it can actually be used.`,
  },
  "2": {
    title: "ABC/XYZ analysis: how to classify SKUs to prioritize inventory management",
    excerpt: "Not every SKU needs the same level of management. ABC/XYZ helps a business identify its important SKUs, its highly variable SKUs and the items that need tight control.",
    body: `# ABC/XYZ analysis: classifying SKUs to set priorities

## Why ABC/XYZ?

Not every SKU is equally important. 20% of SKUs can account for 80% of inventory value. Managing every SKU the same way wastes resources.

## ABC classification

Based on annual consumption value:

| Class | % of SKUs | % of value | Characteristics |
|------|-------|-----------|----------|
| A | 20% | 80% | Most important, needs tight control |
| B | 30% | 15% | In between |
| C | 50% | 5% | Less important |

### How to calculate:
1. Annual consumption value = Usage × Unit Cost
2. Sort in descending order
3. Calculate the cumulative %
4. Classify by threshold

## XYZ classification

Based on consumption variability:

| Class | Variability | Characteristics |
|------|-----------|----------|
| X | Low (<15%) | Stable, easy to forecast |
| Y | Medium (15–30%) | Moderately variable |
| Z | High (>30%) | Hard to forecast |

## Combining ABC + XYZ

| | X | Y | Z |
|---|---|---|---|
| A | AX: Stable, important | AY: Needs monitoring | AZ: Needs special attention |
| B | BX: Regular control | BY: Periodic review | BZ: Plan inventory carefully |
| C | CX: Basic control | CY: Simplify | CZ: Don't over-invest |

## Template
Use the ABC/XYZ template for a quick classification.`,
  },
  "3": {
    title: "S&OP for Vietnamese businesses: where to start?",
    excerpt: "S&OP doesn't have to be complicated. A business can start with a fixed meeting calendar, one agreed set of numbers and clear decision rules.",
    body: `# S&OP for Vietnamese businesses

## Definition
Sales & Operations Planning (S&OP) is a process that balances supply and demand and connects sales, planning, procurement and production.

## Where to start?

### 1. Set the frequency
- Monthly is the most common
- Weekly if volatility is high

### 2. Prepare the data
Before the meeting you need:
- The forecast from Sales
- The supply plan from Planning/Production
- Inventory status from the Warehouse
- Supplier lead times from Procurement

### 3. The meetings
There should be 4 meetings:

| Meeting | Who attends | Content |
|---------|------------|----------|
| 1. Data preparation | SCM lead | Compile the numbers |
| 2. Pre-S&OP | SCM team | Detailed review |
| 3. Main S&OP | Sales + SCM + Finance | Decisions |
| 4. Post-S&OP | SCM lead | Follow-up |

### 4. Output
- A balanced demand forecast
- A feasible supply plan
- Clear action items

## Note
You don't need expensive software. Start with Excel and upgrade later if needed.`,
  },
  "4": {
    title: "3PL evaluation checklist: don't just look at the warehouse rent",
    excerpt: "Warehouse rent is only one part. When choosing a 3PL, a business needs to assess SLAs, inventory accuracy, incident handling, reporting and liability when things go wrong.",
    body: `# 3PL evaluation checklist

## Don't just look at the price

Many businesses pick a 3PL just because it is cheap. But the hidden costs can be much higher.

## 3PL evaluation criteria

### 1. Operations (40%)
- WMS system
- Inbound and outbound processes
- FEFO/FIFO compliance
- Accuracy rate (>=98%)
- On-time delivery (>=95%)

### 2. Reporting (20%)
- Daily inventory report
- Monthly summary
- Exception alerts

### 3. Hidden fees (15%)
- Handling fees
- Storage fees
- Outbound fees
- COD fees

### 4. SLA & liability (15%)
- Discrepancy handling
- Compensation for lost goods
- Response time when issues occur

### 5. Scalability (10%)
- Peak season handling
- Multi-location
- Value-added services

## Checklist template
Use the attached file to evaluate your 3PL.`,
  },
  "5": {
    title: "Master data in SAP/WMS: small errors, big consequences",
    excerpt: "A wrong UoM, gross weight, batch rule or shelf life can corrupt inventory, plans and logistics cost, and cause daily operating errors.",
    body: `# Master data: small errors, big consequences

## Why does master data matter?

Wrong master data = every report is wrong.

## Common errors

### 1. UoM (unit of measure)
- Purchase = GB (gallon)
- Stock = L (liter)
- No conversion -> wrong inventory

### 2. Weight & volume
- Wrong gross weight -> wrong freight charges
- Wrong volume -> wrong container loading

### 3. Shelf life
- Not entered -> you only find out once the goods have expired
- Entered wrong -> goods rejected at dispatch

### 4. Batch rules
- Missing -> old stock cannot be tracked

## Prevention

### Validation checklist
- [ ] Cross-check purchasing and inventory UoM
- [ ] Verify weights with the supplier
- [ ] Set a shelf life for every SKU
- [ ] Review master data every quarter

### Process
1. The supplier sends the spec
2. SCM verifies it
3. Import into the system
4. Random spot checks

## Consequences if you don't
- Inventory doesn't match
- Wrong logistics costs
- Wrong production plans
- Compliance issues`,
  },
  "6": {
    title: "Supply chain KPIs: what to measure so reports aren't just for show",
    excerpt: "A good KPI set must drive decisions, not just make reports look nice. KPIs need to link planning, procurement, inventory, warehouse and logistics cost.",
    body: `# Supply chain KPIs: what to measure?

## Principles

A good KPI must:
1. Trigger an action when it deviates
2. Have a clear owner
3. Have a specific target

## KPIs by function

### Planning
- Forecast accuracy (>=85%)
- Plan vs. actual

### Procurement
- On-time delivery (>=95%)
- Supplier defect rate (<2%)

### Inventory
- Inventory accuracy (>=98%)
- Days of inventory (30–60 days)
- Dead stock ratio (<5%)

### Warehouse
- Order accuracy (>=99%)
- Cycle time (<24h)
- Space utilization (>=70%)

### Logistics
- On-time delivery (>=95%)
- Lead time
- Transportation cost (% of sales)

## Sample dashboard

| KPI | Target | Current | Status |
|-----|-------|---------|--------|
| Forecast acc | 85% | 78% | Warning |
| Inventory acc | 98% | 96.5% | OK |
| OTD | 95% | 97% | Good |

## Note
You don't need many KPIs. 10–15 KPIs are enough.`,
  },
  "7": {
    title: "What is a supply chain, and how is it different from logistics?",
    excerpt: "Supply chain is broader than logistics: it includes planning, purchasing, production, inventory, distribution and decision-making across the whole chain.",
    body: `# What is a supply chain, and how is it different from logistics?

## The real-world problem

Many businesses call everything related to warehousing and transport "logistics", while the root of the problem actually lies in planning, purchasing or coordination between departments.

## Core concept

A supply chain is the system that coordinates the flow of goods, information and decisions from suppliers to the end customer. Logistics is one part of that system, focused more on transport, storage and executing the flow of goods.

## Applying it in Vietnamese businesses

If you only optimize shipping without touching the forecast, master data or inventory policy, it is easy to cut local costs and still end up short of stock or overstocked across the whole system.

## Related template / tool

You can start with the Supply Chain Maturity Assessment to find out whether the business is weak in logistics execution or in overall supply chain management capability.

## Action takeaway

Before fixing a logistics metric, find out whether the problem lies in execution or in the wider supply chain structure.`,
  },
  "8": {
    title: "How do trend, seasonality, cycle and random variation differ?",
    excerpt: "To forecast better, first understand whether the data shows long-term growth, a seasonal pattern or just short-term noise.",
    body: `# How do trend, seasonality, cycle and random variation differ?

## The real-world problem

Many planning teams look at a few months of sales going up and down and quickly conclude that the market is booming or the product has weakened.

## Core concept

Trend is the long-term direction, seasonality is a pattern that repeats with the seasons, cycle is variation driven by longer business cycles, and random variation is noise with no clear pattern.

## Applying it in Vietnamese businesses

If you don't tell these patterns apart, it is easy to build inventory ahead of a short-term blip, or to cut purchasing too early when demand is simply seasonal.

## Related template / tool

The Demand Pattern Analyzer can be a first framework for the planning team to record and classify each type of variation before choosing a forecasting method.

## Action takeaway

Don't argue from gut feeling. Read the data by pattern first, then decide on the forecasting model and how much manual intervention to allow.`,
  },
  "9": {
    title: "Demand management is more than a forecast",
    excerpt: "The forecast is only one input. Demand management also covers commercial adjustments, communicating assumptions and aligning decisions between sales and supply.",
    body: `# Demand management is more than a forecast

## The real-world problem

Many companies have a forecast file, but when sales runs a promotion, supply doesn't know about it, and the plant keeps producing at its old pace.

## Core concept

Demand management is the process of creating, adjusting, communicating and agreeing on one view of demand. The forecast is one component, not the whole system.

## Applying it in Vietnamese businesses

A business should have a demand plan that shows sales history, commercial changes, market assumptions and the consensus version agreed by sales, planning and operations.

## Related template / tool

The Demand Plan Template records demand history, commercial adjustments and an assumption log so everyone sees the same picture.

## Action takeaway

If the forecast keeps missing, don't just change the formula. Check whether demand management has a mechanism to communicate and sign off assumptions.`,
  },
  "10": {
    title: "Forecasts are always wrong — so why forecast at all?",
    excerpt: "A forecast is not about guessing exactly right. It is about helping the business prepare capacity, inventory, materials and cash flow better than it does today.",
    body: `# Forecasts are always wrong — so why forecast at all?

## The real-world problem

Many teams skip forecasting because "every number is wrong anyway", and end up simply reacting to orders as they come in.

## Core concept

A forecast is a tool to guide decisions under uncertainty. Its value lies in helping you prepare ahead of time, not in hitting every SKU line exactly.

## Applying it in Vietnamese businesses

A business can use the forecast to commit raw material purchases, prepare warehouse capacity, frame production and see the risk of shortages or excess inventory in advance.

## Related template / tool

The Forecasting Starter Template and the Forecast Error Calculator are good frameworks for systematically tracking both the forecast and forecast error.

## Action takeaway

Don't ask whether the forecast is 100% right. Ask whether the current forecast is good enough to make better decisions than yesterday.`,
  },
  "11": {
    title: "S&OP is not a reporting meeting",
    excerpt: "If S&OP is just a place where departments read out numbers, the business will never have a real one-number plan to act on.",
    body: `# S&OP is not a reporting meeting

## The real-world problem

Many S&OP meetings run long but end without any clear decision on demand, capacity or customer priorities.

## Core concept

S&OP is a cross-functional decision-making process that balances demand, supply and finance. Reports are only inputs, not the end goal.

## Applying it in Vietnamese businesses

Separate the demand review, supply review and executive review so that each round has its own decision questions, instead of cramming everything into one presentation.

## Related template / tool

The S&OP Calendar & Meeting Pack and the S&OP Readiness Check help set the meeting rhythm, agendas and criteria for assessing rollout readiness.

## Action takeaway

If an S&OP cycle ends without clear decisions, owners and actions, it is still just a reporting meeting.`,
  },
  "12": {
    title: "From forecast to MRP: how should you understand the production planning flow?",
    excerpt: "Forecast, master plan, MRP and capacity planning form one connected flow. A break at any step throws the execution plan off.",
    body: `# From forecast to MRP: how should you understand the production planning flow?

## The real-world problem

Many businesses have a forecast, yet the plant still runs short of materials or gets overloaded, because the forecast is never turned into a logical chain of plans.

## Core concept

The forecast is the input to planning, the master plan turns demand into an operating direction, and MRP and capacity planning check feasibility against materials and resources.

## Applying it in Vietnamese businesses

If a business jumps straight from the forecast to purchasing or production without an intermediate planning layer, the risk of material mismatches, capacity overload and a badly structured inventory rises sharply.

## Related template / tool

The S&OP Calendar & Meeting Pack can help the business fix its planning rhythm, while the Warehouse Capacity Calculator helps spot warehouse and distribution constraints early.

## Action takeaway

Check the planning flow from forecast to MRP as one connected chain, not as separate files running in parallel.`,
  },
  "13": {
    title: "How to calculate lead time and reorder point for Vietnamese suppliers",
    excerpt: "Lead time is not just the number of days the supplier quotes. A business needs to measure actual lead time and its variability, then set a reorder point that fits purchasing conditions in Vietnam.",
    body: `# How to calculate lead time and reorder point for Vietnamese suppliers

## The real-world problem

Many businesses buy based on the lead time a supplier quotes by email: 7 days, 14 days, 30 days. In reality the goods keep arriving earlier or later, which leads to:
- Early arrivals → inventory goes up and takes up space
- Late arrivals → shortages, production stops
- The warehouse doesn't know the receiving schedule → slow check-in, wrong locations

The root problem: lead time is not just the number the supplier promises. It is a distribution with variability.

## Core concepts

### Lead time (LT)
The time from placing an order to receiving the goods at the warehouse. It includes:
- **Procurement LT**: supplier processing + production
- **Transport LT**: transport from the supplier to the warehouse
- **Receiving LT**: check-in, counting, put-away

Formula:
\`\`\`
Total LT = Procurement LT + Transport LT + Receiving LT
\`\`\`

### Lead time variability
How much the LT varies — measured by standard deviation:
\`\`\`
SD_LT = STDEV.S(lead time history, at least the last 10–15 orders)
\`\`\`

### Reorder point (ROP)
The inventory level that triggers a new order:
\`\`\`
ROP = (Avg Daily Usage × Avg LT) + Safety Stock
\`\`\`

### Safety stock (SS)
The buffer stock that protects against variability:
\`\`\`
SS = Z × √(LT_avg × SD_usage² + Usage_avg² × SD_LT²)
\`\`\`
With Z = 1.65 (95% service level) or Z = 2.33 (99% service level).

## Applying it in Vietnamese businesses

### Common issues with Vietnamese suppliers:

1. **The supplier quotes 7 days but it actually takes 10–15**
   - Why: missing input materials, weak production scheduling
   - Fix: track historical LT for 3 months and use P90 instead of the average

2. **Unstable domestic transport**
   - Tet holiday: +3–5 days
   - Storms: +2–3 days
   - Fix: add a seasonal buffer (2–5 days depending on the month)

3. **Slow check-in because the warehouse is overloaded**
   - Containers pile up at the end of the week
   - Not enough staff to count
   - Fix: spread the receiving schedule evenly across the week

### Steps:

**Step 1: Collect historical data**
Take the last 10–15 POs for each supplier and record:
- PO date, confirmation date, actual date received into the warehouse

**Step 2: Calculate**
\`\`\`
Avg LT = AVERAGE(LT history)
SD LT = STDEV.S(LT history)
P90 LT = PERCENTILE.INC(LT history, 0.90)
\`\`\`

**Step 3: Set the ROP**
\`\`\`
Safety Stock = Z × √(LT_avg × SD_usage² + Usage_avg² × SD_LT²)
ROP = (Avg Daily Usage × Avg LT) + Safety Stock
\`\`\`

**Step 4: Review monthly**
Update with the latest LT. If SD_LT goes up → renegotiate or find an alternative supplier.

## Related template / tool

The Supplier Lead Time Tracker and the Reorder Point Calculator are two Excel templates that track historical LT and calculate ROP and safety stock automatically.

## Action takeaway

Lead time cannot be guessed by feel. Track historical LT for at least 3 months, calculate its variability (SD), and set the ROP based on both usage and lead time variability. Start with your single most important supplier, then scale up.`,
  },
  "14": {
    title: "When demand and supply don't balance: how to handle it in S&OP",
    excerpt: "Demand > supply or demand < supply is normal. The question is whether the business has a clear decision mechanism to close the gap in S&OP, or whether meetings end with no action.",
    body: `# When demand and supply don't balance: how to handle it in S&OP

## The real-world problem

After consolidating demand and supply, the S&OP team usually finds a gap: demand above supply capacity, or demand below the minimum production volume. Yet the meeting ends with no concrete decision on allocation or cutbacks.

## 2 types of gap

### 1. Demand > supply (shortage)

Causes:
- Sales runs a promotion without warning
- The supplier delivers late or lacks capacity
- The warehouse lacks space or staff

**Decisions S&OP must make:**

| Situation | How to handle it | Who decides |
|------------|-----------|--------------|
| Short-term shortage (1–2 weeks) | Allocate by customer priority | Sales Director |
| Medium-term shortage (1–3 months) | Overtime + hire a 3PL | Ops Director |
| Long-term shortage (>3 months) | Invest in capacity / a new supplier | CEO + CFO |

**Allocation rules during a shortage:**

1. **Customer priority**: strategic customers come first
2. **Margin**: high-margin SKUs come first
3. **Contractual**: contractual commitments must be met first

\`\`\`
Allocation % = (Customer Score × Weight) / Total Score
Customer Score = (Revenue × 0.3) + (Margin × 0.3) + (Strategic Flag × 0.4)
\`\`\`

### 2. Demand < supply (surplus)

Causes:
- The forecast was too optimistic
- A competitor cut prices
- The market slowed down

**Decisions needed:**

| Situation | How to handle it | Who decides |
|------------|-----------|--------------|
| Short-term surplus (1–2 weeks) | Hold inventory, don't adjust production | Supply Chain Manager |
| Medium-term surplus (1–3 months) | Lower the production rate, delay supplier POs | Procurement + Planning |
| Long-term surplus (>3 months) | Promotions / price cuts, lower the stock target | Sales + CFO |

## Supporting tool

**Supply-Demand Gap Analysis** — an Excel file that compares:
- Demand plan (latest consensus)
- Supply plan (inventory + production + POs in transit)
- Gap = Supply - Demand
- Action: allocate if the gap is negative, cut purchasing if the gap is positive

## Action takeaway

After every S&OP cycle you must have:
- The gap in numbers (how much, which SKUs, which period)
- A concrete decision (allocation, production up/down, delayed POs)
- A clear owner for each action
- A review at the next S&OP cycle

If S&OP doesn't resolve gaps, it is just a reporting meeting.`,
  },
  "15": {
    title: "From demand review to executive S&OP: who does what in each round?",
    excerpt: "S&OP is not one meeting but four rounds. Each round has its own goal, participants and decisions. Mixing up any of them makes S&OP ineffective.",
    body: `# From demand review to executive S&OP: who does what in each round?

## The real-world problem

Many businesses call a monthly meeting with Sales, Planning, Production, Finance and the CEO "the S&OP meeting". In practice that meeting tries to cover far too much information, there isn't enough time to make decisions, and everyone leaves still not knowing who does what.

S&OP is a four-round process (phases). Each round has its own inputs and outputs. Get each round right and it delivers its own result.

## Round 1: Demand review

**Goal**: agree on one demand plan

**Who attends**:
- Sales (lead)
- Marketing
- Planning/SCM (data support)

**Inputs**:
- Historical sales data
- Promotion calendar
- Market intelligence
- New product launch plan

**Main content**:
1. Review actual sales vs. last cycle's forecast
2. Update the next cycle's forecast (baseline + promotional)
3. Record assumptions (assumption log)
4. Sign off the demand plan for 12–18 months

**Output**: the (consensus) demand plan — supply doesn't come in yet

**Template**: Demand Plan Template — forecast by customer/SKU/month, with assumptions and commercial adjustments recorded.

## Round 2: Supply review

**Goal**: build a supply plan that meets demand

**Who attends**:
- Planning/SCM (lead)
- Production
- Procurement
- Warehouse & Logistics

**Inputs**:
- The demand plan from round 1
- Inventory status (on-hand, in-transit)
- Production capacity
- Supplier lead time & capacity
- Warehouse capacity

**Main content**:
1. Run the supply plan (MRP or Excel)
2. Check capacity constraints (production, warehouse, suppliers)
3. Propose solutions (overtime, subcontracting, delays)
4. Identify supply gaps

**Output**: supply plan + supply-demand gap analysis

**Template**: Supply Plan Template — compares supply and demand for each SKU and lists the actions in progress.

## Round 3: Pre-S&OP (integrated reconciliation)

**Goal**: balance demand, supply and finance

**Who attends**:
- SCM Lead (lead)
- Sales Manager
- Production Manager
- Finance (cost impact)

**Inputs**:
- Demand plan (confirmed)
- Supply plan (feasible)
- Gap analysis
- Financial constraints (budget, cash flow)

**Main content**:
1. Resolve the gaps that rounds 1 and 2 could not close
2. Propose allocation scenarios (if demand > supply)
3. Propose inventory / production adjustments (if demand < supply)
4. Calculate the financial impact
5. Prepare recommendations for the executives

**Output**: the pre-S&OP pack — summary, gaps, recommendations, action items

**Template**: Pre-S&OP Pack — a 1-page summary: Demand vs. Supply, Gap, Recommended Decision, Financial Impact, Risk.

## Round 4: Executive S&OP

**Goal**: make the final decisions

**Who attends**:
- CEO (chair)
- CFO
- Sales Director
- Operations Director
- SCM Director (presents)

**Inputs**:
- The pre-S&OP pack (1-page summary)
- Issues that could not be resolved yet

**Main content**:
1. No re-presenting of detailed numbers — decisions only
2. Approve the recommendations from pre-S&OP
3. Decide on allocation, budget and capacity investment
4. Approve the one-number plan

**Output**: an approved one-number plan + action items + decision log

**Template**: Executive S&OP Meeting Deck — at most 5 slides: Summary, Demand vs. Supply, Key Decisions, Financial Impact, Action Log.

## The 4 rounds at a glance

| Round | Name | Timing | Lead | Output |
|------|-----|-----------|------|--------|
| 1 | Demand Review | Week 1 | Sales | Demand plan |
| 2 | Supply Review | Weeks 1–2 | Planning/SCM | Supply plan + gap |
| 3 | Pre-S&OP | Weeks 2–3 | SCM Lead | Recommendation pack |
| 4 | Executive S&OP | Week 3 | CEO | Approved one-number plan |

## Notes

- **Don't skip round 3**: many businesses jump from the supply review straight to the executive meeting, which leaves executives dealing with far too much detail
- **Don't merge rounds 1 and 2**: the demand review needs a sales mindset and the supply review needs an operations mindset — merge them and nobody can focus
- **Executives don't review numbers**: executive S&OP is for decisions, not a reporting meeting

## Action takeaway

Start with a clear 4-round calendar: who, does what, when, and what the output is. After 3 cycles, the business will see the difference between a "reporting meeting" and "real S&OP".`,
  },
  "16": {
    title: "S&OP in manufacturing vs. trading businesses: what's the difference?",
    excerpt: "Manufacturing S&OP is constrained by capacity, batch size and raw materials. Trading S&OP is constrained by MOQ, inventory aging and cash flow. Each needs a different approach.",
    body: `# S&OP in manufacturing vs. trading businesses: what's the difference?

## The real-world problem

Many businesses find an S&OP template online and copy it, without distinguishing whether they are a manufacturer or a trader. The result: a supply plan that isn't feasible because the wrong constraints were applied.

## S&OP in a manufacturing business

### Characteristics

| Factor | Impact on S&OP |
|--------|------------------|
| Fixed capacity | Production cannot be increased overnight |
| Minimum batch size | Small orders don't fill a batch → you have to build stock |
| Raw material lead time | Purchasing must be planned 1–3 months ahead |
| Changeover time | Running many SKUs → time lost to changeovers |
| Machine maintenance | The maintenance schedule affects capacity |

### S&OP decisions in manufacturing

**Demand review:**
- Demand > capacity → you can't simply increase production
- You have to decide: run overtime? Outsource? Delay which customers?

**Supply review:**
- Main constraints: machine hours, labor, raw material availability
- A capacity plan (RCCP — Rough Cut Capacity Planning) is needed to check feasibility

\`\`\`
Available Capacity = (Machines × Run hours/day × Days/month) × Utilization %
Required Capacity = Σ (Demand (units) × Run time per unit) + Changeover time
Gap = Available - Required
\`\`\`

**Distinctive outputs:**
- Production plan: weekly schedule by line
- Raw material plan: PO plan for suppliers (3–6 months)
- Capacity plan: machine utilization, whether overtime/subcontracting is needed

### Typical pain points

- Sales can sell it, but the plant lacks capacity
- Raw materials arrive late because of long supplier lead times
- Minimum batch sizes create unnecessary inventory

## S&OP in a trading (distribution) business

### Characteristics

| Factor | Impact on S&OP |
|--------|------------------|
| Supplier MOQ | You must buy more than you need |
| Inventory aging | Old stock → lower margin or write-off |
| Cash flow | Buying = paying first, selling = getting paid later |
| 3PL capacity | Dependent on outsourced warehousing |
| Promotion-driven | Large demand swings around promotions |

### S&OP decisions in trading

**Demand review:**
- Demand is seasonal + promotion-driven (less steady than manufacturing)
- Baseline and promotional demand must be separated

**Supply review:**
- Main constraints: supplier MOQ, 3PL capacity, cash
- The balance: buy enough to meet MOQ without carrying too much inventory

\`\`\`
MOQ Units = max(supplier MOQ, (Demand + Safety Stock) × Order Cycles)
Inventory Days = Current Stock / Avg Daily Sales
\`\`\`

**Distinctive outputs:**
- Procurement plan: PO plan by supplier, taking MOQ into account
- Inventory plan: target days of inventory, slow-moving SKU review
- Cash flow plan: cash out for purchasing

### Typical pain points

- Buying to MOQ → too much stock → aging → forced discounts
- Not enough 3PL capacity in peak season → extra warehousing has to be rented
- A cash squeeze → afraid to buy new stock

## Side-by-side comparison

| Criterion | Manufacturing | Trading |
|----------|---------|---------|
| Main constraints | Capacity, raw materials | MOQ, cash flow, 3PL |
| Planning horizon | Longer (3–12 months) | Shorter (1–6 months) |
| Supply plan complexity | High (BOM, routing, machines) | Medium (POs + 3PL) |
| Inventory risk | Raw material aging | Finished goods aging |
| Hardest decision | Allocating capacity during shortages | Balancing MOQ vs. inventory days |

## Applying it in Vietnamese businesses

- **Manufacturing** is often in the North (supporting industries). Issues: long supplier lead times from China, seasonal capacity (workers go home for Tet)
- **Trading** is concentrated in Ho Chi Minh City. Issues: 3PL peak season, and very high MOQs from large suppliers (Unilever, P&G, Nestlé)

## Action takeaway

Before rolling out S&OP, establish which type of business you are. Don't copy a manufacturing template into trading or vice versa. Adjust:
- The constraint set for the supply review
- The planning horizon
- The key decisions in executive S&OP`,
  },
}
