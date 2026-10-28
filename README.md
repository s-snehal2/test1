# I.T.VEDANT Business Rescue — Advanced Edition

## How to play
1. Choose one of six business investigations: entertainment, e-commerce, manufacturing, aviation, healthcare, or the CEO's cross-industry crisis.
2. Inspect the combined business dataset displayed on screen. The records include related operational and financial fields for investigation.
3. Choose category and value columns, chart type, group-by field, and order-by field.
4. Build visualizations in two investigation rounds and use the evidence to identify the root cause.
5. Select a rescue strategy within the realistic approved budget. Overspending is blocked.
6. Each level is worth up to 1,000 points; the six-level target is 6,000 points.

## Industries and budgets
- Entertainment analytics: ₹5,00,000
- E-commerce: ₹5,00,000
- Manufacturing: ₹8,00,000
- Aviation: ₹10,00,000
- Healthcare: ₹12,00,000
- CEO's last decision: ₹15,00,000

## Run locally
Open `business_rescue_game.html` in Chrome. It runs locally and does not require a server or external libraries.

For the multi-file version, keep `index.html`, `style.css`, `game.js`, and `itvedant-logo.png` in the same folder.


## Big Data Mode (updated)

Each of the six industry levels now contains **240 synthetic business records** (1,440 records total across the six level datasets). The data includes realistic variation while preserving the intended analytical patterns. Students see 20 rows per page, can browse the full dataset, and can download the active level as CSV.

The visualization workflow is mandatory: students must build a chart, group records by a meaningful dimension, and sort by a relevant field before submitting each investigation. The chart is limited to a readable number of points, while grouped views make the larger dataset analysable.

### Included CSV datasets
- `datasets/level_1_entertainment_box_office.csv`
- `datasets/level_2_ecommerce_profit_trap.csv`
- `datasets/level_3_manufacturing_factory_failure.csv`
- `datasets/level_4_aviation_route_profitability.csv`
- `datasets/level_5_healthcare_hospital_bottleneck.csv`
- `datasets/level_6_ceo_last_decision.csv`

All records are synthetic and intended for educational use, not operational business decisions.
