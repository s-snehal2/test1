
"use strict";

/* =========================
   BUSINESS RESCUE GAME DATA
   ========================= */
const levels = [
{
 id:1,name:"Entertainment Analytics: Box Office Mystery",icon:"🎬",difficulty:3,budget:500000,
 problem:"Opening-weekend collections look strong, but the studio's overall profits are disappointing.",
 statement:"The biggest box-office hit may not be the best investment. Find the real profit driver.",
 rootCause:"Marketing and Production Costs Outweigh Net Revenue",
 evidence:[["Film A Contribution","₹45 Cr"],["Film B Contribution","₹35 Cr"],["Film C Contribution","₹30 Cr"],["Audience Rating vs Profit","Weak correlation"]],
 investigations:[
  {id:"contribution",title:"Estimated Film Contribution",type:"bar",desc:"Compare revenue after production and marketing costs.",correct:true,data:[["Film A",45],["Film B",35],["Film C",30]],unit:"₹ Cr"},
  {id:"boxoffice",title:"Box Office Collections",type:"bar",desc:"Rank films by gross collection only.",correct:false,data:[["Film A",100],["Film B",65],["Film C",110]],unit:"₹ Cr"},
  {id:"ratings",title:"Audience Rating",type:"bar",desc:"Compare audience ratings with each title.",correct:false,data:[["Film A",7.8],["Film B",8.6],["Film C",6.9]],unit:"/10"},
  {id:"marketing",title:"Marketing Spend",type:"bar",desc:"Compare campaign spend across releases.",correct:false,data:[["Film A",15],["Film B",5],["Film C",20]],unit:"₹ Cr"}
 ],
 second:[
  {id:"costmix",title:"Production + Marketing Cost Mix",type:"bar",desc:"Compare combined investment against revenue to expose contribution.",correct:true,data:[["Film A",55],["Film B",30],["Film C",80]],unit:"₹ Cr"},
  {id:"release",title:"Release Month",type:"bar",desc:"Release timing may influence opening, but does not explain contribution alone.",correct:false,data:[["Jan",72],["Mar",81],["Jun",75]],unit:"index"},
  {id:"screens",title:"Screen Count",type:"bar",desc:"More screens can raise gross collections but do not guarantee profit.",correct:false,data:[["Film A",850],["Film B",520],["Film C",1100]],unit:"screens"},
  {id:"ratings2",title:"Audience Rating vs Gross",type:"bar",desc:"Ratings alone are not a financial diagnosis.",correct:false,data:[["Film A",7.8],["Film B",8.6],["Film C",6.9]],unit:"/10"}
 ],
 solutions:[
  {id:"targetedMarketing",name:"Targeted Marketing for High-Return Audiences",cost:150000,impact:"Marketing efficiency +18%",score:28},
  {id:"budgetControls",name:"Production Budget Controls",cost:180000,impact:"Production overruns -15%",score:27},
  {id:"streaming",name:"Negotiate Streaming / Licensing Deals",cost:120000,impact:"Secondary revenue +12%",score:25},
  {id:"releasePlan",name:"Optimise Release and Screen Strategy",cost:90000,impact:"Screen efficiency +10%",score:18},
  {id:"starCampaign",name:"High-Cost Celebrity Campaign",cost:250000,impact:"Awareness +20%; uncertain conversion",score:4}
 ]
},
{
 id:2,name:"E-Commerce: The Profit Trap",icon:"🛒",difficulty:3,budget:500000,
 problem:"Revenue is growing, but cash and contribution margins are shrinking.",
 statement:"Customers are buying. Find out which products and order costs are draining profit.",
 rootCause:"High Returns and Excessive Discounts in Fashion",
 evidence:[["Fashion Return Rate","28%"],["Fashion Margin","7%"],["Discount Level","21% avg."],["Profit Trend","-38%"]],
 investigations:[
  {id:"margin",title:"Profit Margin by Category",type:"bar",desc:"Compare contribution margins across categories.",correct:true,data:[["Electronics",18],["Fashion",7],["Home",14],["Beauty",16]],unit:"%"},
  {id:"revenue",title:"Category Revenue",type:"bar",desc:"High revenue does not guarantee high contribution.",correct:false,data:[["Electronics",420],["Fashion",510],["Home",280],["Beauty",360]],unit:"₹k"},
  {id:"discount",title:"Average Discount",type:"bar",desc:"Compare discount levels by category.",correct:false,data:[["Electronics",8],["Fashion",21],["Home",11],["Beauty",9]],unit:"%"},
  {id:"shipping",title:"Shipping Cost Trend",type:"line",desc:"Shipping increased, but not enough to explain the full decline.",correct:false,data:[["Jan",42],["Feb",43],["Mar",44],["Apr",45]],unit:"₹k"}
 ],
 second:[
  {id:"returnsRoot",title:"Return Rate by Category",type:"bar",desc:"Fashion returns are unusually high and align with the margin collapse.",correct:true,data:[["Electronics",9],["Fashion",28],["Home",12],["Beauty",8]],unit:"%"},
  {id:"fees",title:"Payment and Fulfilment Fees",type:"bar",desc:"Fees matter, but category returns and discounts are the strongest combined signal.",correct:false,data:[["Electronics",7],["Fashion",9],["Home",8],["Beauty",6]],unit:"% of sales"},
  {id:"stock",title:"Inventory Age",type:"bar",desc:"Ageing stock is a risk but does not explain the observed return spike.",correct:false,data:[["Electronics",22],["Fashion",41],["Home",27],["Beauty",19]],unit:"days"},
  {id:"ads",title:"Advertising Cost",type:"bar",desc:"Ad spend contributes to costs but is not the primary issue.",correct:false,data:[["Electronics",32],["Fashion",48],["Home",24],["Beauty",29]],unit:"₹k"}
 ],
 solutions:[
  {id:"fitContent",name:"Improve Product Sizing and Descriptions",cost:100000,impact:"Expectation mismatch -20%",score:27},
  {id:"returnControl",name:"Fix High-Return Fashion Products",cost:160000,impact:"Fashion returns -35%",score:32},
  {id:"discountControl",name:"Reduce Unprofitable Discounts",cost:90000,impact:"Contribution margin +6%",score:25},
  {id:"shippingOpt",name:"Optimise Fulfilment and Shipping",cost:120000,impact:"Fulfilment cost -12%",score:18},
  {id:"moreAds",name:"Increase Broad Advertising",cost:200000,impact:"Traffic +18%; profitability uncertain",score:3}
 ]
},
{
 id:3,name:"Manufacturing: Factory Failure",icon:"🏭",difficulty:4,budget:800000,
 problem:"Production volume is healthy, but defects, rework, and late orders are rising.",
 statement:"Do not buy expensive machinery until the data identifies the bottleneck.",
 rootCause:"Low Inspection Coverage on Product C Batches",
 evidence:[["Product C Defects","17–19%"],["Inspection Coverage","49–55%"],["Other Product Defects","3–6%"],["Rework Cost","+31%"]],
 investigations:[
  {id:"defects",title:"Defect Rate by Product",type:"bar",desc:"Compare defect rates by product line.",correct:true,data:[["A",4],["B",5],["C",17],["D",6]],unit:"%"},
  {id:"volume",title:"Units Produced",type:"bar",desc:"Production volume remains broadly similar.",correct:false,data:[["A",2460],["B",2340],["C",3710],["D",1210]],unit:"units"},
  {id:"downtime",title:"Machine Downtime",type:"bar",desc:"Downtime has increased but does not explain the concentrated defect spike alone.",correct:false,data:[["M1",6],["M2",8],["M3",7],["M4",5]],unit:"%"},
  {id:"supplier",title:"Supplier Defect Rate",type:"bar",desc:"Supplier quality is mixed, so check it alongside inspection and product.",correct:false,data:[["S1",5],["S2",7],["S3",6],["S4",8]],unit:"%"}
 ],
 second:[
  {id:"inspection",title:"Inspection Coverage by Batch",type:"bar",desc:"Product C batches with low inspection coverage show the highest defects.",correct:true,data:[["B103",52],["B105",49],["B107",55],["Other batches",86]],unit:"% inspected"},
  {id:"overtime",title:"Overtime Hours",type:"bar",desc:"Overtime is a consequence and secondary cost, not the root cause.",correct:false,data:[["Shift A",120],["Shift B",134],["Shift C",128]],unit:"hours"},
  {id:"maintenance",title:"Maintenance Spend",type:"bar",desc:"Maintenance spend is not enough to explain the inspection gap.",correct:false,data:[["Q1",95],["Q2",98],["Q3",93]],unit:"₹k"},
  {id:"training",title:"Training Completion",type:"bar",desc:"Training completion is stable across the period.",correct:false,data:[["Q1",74],["Q2",75],["Q3",76]],unit:"%"}
 ],
 solutions:[
  {id:"inspectionProgram",name:"Restore Risk-Based Quality Inspection",cost:220000,impact:"Critical defect rate -40%",score:34},
  {id:"batchAudit",name:"Audit Product C Batch Process",cost:180000,impact:"Repeat defects -25%",score:27},
  {id:"supplierAudit",name:"Supplier Quality Audit",cost:140000,impact:"Supplier-related defects -18%",score:17},
  {id:"maintenancePlan",name:"Preventive Maintenance Plan",cost:200000,impact:"Downtime -20%",score:18},
  {id:"replaceLine",name:"Replace Entire Production Line",cost:650000,impact:"Capacity +25%; high capital risk",score:8}
 ]
},
{
 id:4,name:"Aviation: Flight Profitability Crisis",icon:"✈️",difficulty:4,budget:1000000,
 problem:"Passenger numbers are high, but route profitability is falling and delays are expensive.",
 statement:"A full aircraft is not automatically a profitable flight. Analyse routes, load factor, and operating cost.",
 rootCause:"Weak Route Contribution and Delay Costs on Selected Routes",
 evidence:[["Route N Contribution","Negative"],["Seat Occupancy","91%"],["Fuel Cost per Seat","+19%"],["Delay Costs","+26%"]],
 investigations:[
  {id:"routeProfit",title:"Contribution by Route",type:"bar",desc:"Compare revenue minus route operating costs.",correct:true,data:[["Route A",18],["Route B",11],["Route N",-4],["Route D",15]],unit:"₹L"},
  {id:"load",title:"Seat Occupancy",type:"bar",desc:"Route N has high occupancy, but occupancy alone hides costs.",correct:false,data:[["Route A",78],["Route B",82],["Route N",91],["Route D",76]],unit:"%"},
  {id:"fuel",title:"Fuel Cost per Seat",type:"bar",desc:"Fuel is a contributor, but compare it with route-level contribution.",correct:false,data:[["Route A",3200],["Route B",3450],["Route N",4300],["Route D",3100]],unit:"₹"},
  {id:"delays",title:"Delay Minutes",type:"bar",desc:"Delays add cost and customer disruption.",correct:false,data:[["Route A",18],["Route B",24],["Route N",67],["Route D",21]],unit:"min"}
 ],
 second:[
  {id:"delayCost",title:"Delay Cost by Route",type:"bar",desc:"Route N combines low contribution with the highest delay costs.",correct:true,data:[["Route A",1.2],["Route B",1.8],["Route N",5.4],["Route D",1.4]],unit:"₹L"},
  {id:"baggage",title:"Baggage Claims",type:"bar",desc:"Claims affect satisfaction but do not explain the main route loss.",correct:false,data:[["Route A",12],["Route B",17],["Route N",19],["Route D",11]],unit:"per 1k"},
  {id:"ticket",title:"Average Ticket Price",type:"bar",desc:"Ticket prices are competitive; route costs remain the stronger signal.",correct:false,data:[["Route A",7800],["Route B",7200],["Route N",8100],["Route D",7600]],unit:"₹"},
  {id:"staff",title:"Ground Turnaround Staffing",type:"bar",desc:"Staffing differences should be considered, but are not the main measured loss.",correct:false,data:[["Route A",24],["Route B",26],["Route N",25],["Route D",23]],unit:"staff"}
 ],
 solutions:[
  {id:"schedule",name:"Redesign Schedule and Turnaround Plan",cost:250000,impact:"Delay costs -22%",score:30},
  {id:"routeReview",name:"Renegotiate / Restructure Weak Route",cost:200000,impact:"Route contribution +₹3L",score:34},
  {id:"fuel",name:"Fuel Efficiency Programme",cost:220000,impact:"Fuel cost -8%",score:24},
  {id:"pricing",name:"Route-Specific Pricing and Fare Rules",cost:150000,impact:"Yield +6%",score:20},
  {id:"fleet",name:"Acquire Additional Aircraft",cost:850000,impact:"Capacity +20%; high fixed cost",score:2}
 ]
},
{
 id:5,name:"Healthcare: Hospital Bottleneck",icon:"🏥",difficulty:4,budget:1200000,
 problem:"Waiting times and patient dissatisfaction are rising while expensive facilities remain unevenly utilised.",
 statement:"Do not add staff everywhere. Find the department and scheduling bottleneck first.",
 rootCause:"Appointment Scheduling Bottleneck in Diagnostics",
 evidence:[["Diagnostics Wait","+48%"],["No-Show Rate","19%"],["Equipment Utilisation","62%"],["Patient Rating","-0.8★"]],
 investigations:[
  {id:"wait",title:"Average Waiting Time by Department",type:"bar",desc:"Identify the department driving long waits.",correct:true,data:[["General OPD",34],["Diagnostics",79],["Cardiology",42],["Orthopaedics",38]],unit:"min"},
  {id:"staffing",title:"Staffing by Department",type:"bar",desc:"Staffing levels matter but need to be compared with demand and scheduling.",correct:false,data:[["General OPD",18],["Diagnostics",12],["Cardiology",10],["Orthopaedics",11]],unit:"staff"},
  {id:"occupancy",title:"Facility Utilisation",type:"bar",desc:"Overall utilisation hides time-slot and appointment mismatch.",correct:false,data:[["General OPD",81],["Diagnostics",62],["Cardiology",77],["Orthopaedics",73]],unit:"%"},
  {id:"ratings",title:"Patient Ratings",type:"bar",desc:"Ratings reflect the impact but not the operational cause.",correct:false,data:[["General OPD",4.1],["Diagnostics",3.2],["Cardiology",3.9],["Orthopaedics",4.0]],unit:"/5"}
 ],
 second:[
  {id:"noshow",title:"No-Shows and Slot Utilisation",type:"bar",desc:"Diagnostics has high no-shows and uneven slot use, creating queues despite spare capacity.",correct:true,data:[["Morning",91],["Afternoon",54],["Evening",62]],unit:"% slot use"},
  {id:"equipment",title:"Equipment Downtime",type:"bar",desc:"Downtime is not high enough to explain the queue by itself.",correct:false,data:[["MRI",4],["CT",5],["X-Ray",3],["Ultrasound",4]],unit:"%"},
  {id:"supplies",title:"Medical Supply Costs",type:"bar",desc:"Supply cost changes do not explain waiting times.",correct:false,data:[["Q1",320],["Q2",328],["Q3",331]],unit:"₹k"},
  {id:"admissions",title:"Admissions by Month",type:"line",desc:"Demand increased modestly but does not explain the scheduling mismatch alone.",correct:false,data:[["Jan",720],["Feb",735],["Mar",742],["Apr",750]],unit:"patients"}
 ],
 solutions:[
  {id:"booking",name:"Introduce Demand-Based Appointment Scheduling",cost:260000,impact:"Waiting time -25%",score:34},
  {id:"reminders",name:"Reduce No-Shows with Reminders and Confirmation",cost:120000,impact:"No-shows -30%",score:25},
  {id:"crossTrain",name:"Cross-Train Scheduling and Support Staff",cost:180000,impact:"Peak-hour capacity +15%",score:22},
  {id:"hours",name:"Extend Diagnostic Hours Selectively",cost:300000,impact:"Capacity +18%; higher operating cost",score:17},
  {id:"newWing",name:"Build a New Diagnostic Wing",cost:950000,impact:"Long-term capacity +25%; high capital cost",score:3}
 ]
},
{
 id:6,name:"CEO's Last Decision",icon:"📊",difficulty:5,budget:1500000,
 problem:"A diversified company is running out of cash. Departments disagree about the cause, and the CEO has one final recovery budget.",
 statement:"Connect the operational and financial signals. Every intervention has a company-wide trade-off.",
 rootCause:"Cash Pressure from Weak Branch Contribution and Inventory Lock-Up",
 evidence:[["Cash Runway","6 weeks"],["Inventory Days","+32%"],["Branch C Contribution","Negative"],["Customer Churn","+17%"]],
 investigations:[
  {id:"branch",title:"Contribution by Branch",type:"bar",desc:"Compare branch contribution after operating costs.",correct:true,data:[["Branch A",32],["Branch B",18],["Branch C",-12],["Branch D",21]],unit:"₹L"},
  {id:"revenue",title:"Revenue by Branch",type:"bar",desc:"Revenue alone can hide unprofitable operations.",correct:false,data:[["Branch A",120],["Branch B",96],["Branch C",88],["Branch D",104]],unit:"₹L"},
  {id:"inventory",title:"Inventory Days by Category",type:"bar",desc:"Inventory ties up cash and may be part of the problem.",correct:false,data:[["Fast movers",24],["Seasonal",68],["Slow movers",91],["Critical",35]],unit:"days"},
  {id:"churn",title:"Customer Churn Trend",type:"line",desc:"Churn matters but does not alone explain immediate cash pressure.",correct:false,data:[["Jan",8],["Feb",10],["Mar",12],["Apr",15]],unit:"%"}
 ],
 second:[
  {id:"cash",title:"Inventory Cash Lock-Up",type:"bar",desc:"Slow-moving inventory and negative branch contribution jointly create cash pressure.",correct:true,data:[["Fast movers",8],["Seasonal",19],["Slow movers",27],["Critical",10]],unit:"₹L tied up"},
  {id:"headcount",title:"Headcount by Branch",type:"bar",desc:"Headcount needs context and is not the clearest driver by itself.",correct:false,data:[["Branch A",42],["Branch B",38],["Branch C",41],["Branch D",39]],unit:"people"},
  {id:"marketing",title:"Marketing Spend",type:"bar",desc:"Spend is not uniformly wasteful; blanket cuts risk profitable branches.",correct:false,data:[["Branch A",8],["Branch B",7],["Branch C",6],["Branch D",7]],unit:"₹L"},
  {id:"supplier",title:"Supplier Payment Terms",type:"bar",desc:"Terms offer some flexibility but do not solve operating losses alone.",correct:false,data:[["Supplier A",30],["Supplier B",45],["Supplier C",30]],unit:"days"}
 ],
 solutions:[
  {id:"inventory",name:"Liquidate / Rebalance Slow-Moving Inventory",cost:300000,impact:"Cash released +₹6L",score:32},
  {id:"branchPlan",name:"Restructure Negative-Contribution Branch",cost:350000,impact:"Monthly loss reduced by 40%",score:34},
  {id:"retention",name:"Targeted Customer Retention Programme",cost:250000,impact:"Churn -12%",score:22},
  {id:"terms",name:"Renegotiate Supplier Payment Terms",cost:180000,impact:"Short-term cash pressure reduced",score:21},
  {id:"blanketCuts",name:"Across-the-Board Staff and Marketing Cuts",cost:400000,impact:"Immediate spend down; revenue risk high",score:3}
 ]
}
];


const businessTables = {
  1: {
    columns:{film:"Film",genre:"Genre",releaseMonth:"Release Month",budget:"Production Budget Cr",marketing:"Marketing Spend Cr",gross:"Box Office Gross Cr",licensing:"Streaming / Licensing Cr",rating:"Audience Rating",screens:"Screens"},
    rows:[
      {film:"Film A",genre:"Drama",releaseMonth:"Jan",budget:40,marketing:15,gross:100,licensing:12,rating:7.8,screens:850},
      {film:"Film B",genre:"Thriller",releaseMonth:"Mar",budget:25,marketing:5,gross:65,licensing:8,rating:8.6,screens:520},
      {film:"Film C",genre:"Action",releaseMonth:"Jun",budget:60,marketing:20,gross:110,licensing:10,rating:6.9,screens:1100},
      {film:"Film D",genre:"Comedy",releaseMonth:"Aug",budget:22,marketing:7,gross:48,licensing:11,rating:7.9,screens:430},
      {film:"Film E",genre:"Drama",releaseMonth:"Oct",budget:35,marketing:12,gross:78,licensing:15,rating:8.1,screens:700},
      {film:"Film F",genre:"Thriller",releaseMonth:"Dec",budget:28,marketing:9,gross:72,licensing:9,rating:7.2,screens:610}
    ]
  },
  2: {
    columns:{category:"Category",product:"Product",orders:"Orders",revenue:"Revenue ₹k",discount:"Discount %",returns:"Return Rate %",shipping:"Shipping ₹k",fees:"Payment Fees %",margin:"Contribution Margin %",adSpend:"Ad Spend ₹k"},
    rows:[
      {category:"Electronics",product:"Headphones",orders:180,revenue:420,discount:8,returns:9,shipping:42,fees:7,margin:18,adSpend:32},
      {category:"Fashion",product:"Jackets",orders:240,revenue:510,discount:21,returns:28,shipping:63,fees:9,margin:7,adSpend:48},
      {category:"Home",product:"Lamps",orders:150,revenue:280,discount:11,returns:12,shipping:34,fees:8,margin:14,adSpend:24},
      {category:"Beauty",product:"Skincare",orders:210,revenue:360,discount:9,returns:8,shipping:29,fees:6,margin:16,adSpend:29},
      {category:"Fashion",product:"Shoes",orders:195,revenue:390,discount:18,returns:25,shipping:51,fees:9,margin:8,adSpend:41},
      {category:"Electronics",product:"Speakers",orders:125,revenue:310,discount:7,returns:7,shipping:28,fees:7,margin:19,adSpend:26},
      {category:"Fashion",product:"Denim",orders:170,revenue:330,discount:23,returns:31,shipping:47,fees:9,margin:6,adSpend:37},
      {category:"Home",product:"Storage",orders:130,revenue:230,discount:10,returns:11,shipping:31,fees:8,margin:15,adSpend:21}
    ]
  },
  3: {
    columns:{product:"Product",batch:"Batch",machine:"Machine",supplier:"Supplier",inspection:"Inspection Coverage %",defects:"Defect Rate %",units:"Units Produced",downtime:"Downtime %",rework:"Rework Cost ₹k",lateOrders:"Late Orders"},
    rows:[
      {product:"A",batch:"B101",machine:"M1",supplier:"S1",inspection:88,defects:4,units:1200,downtime:6,rework:18,lateOrders:3},
      {product:"B",batch:"B102",machine:"M2",supplier:"S2",inspection:84,defects:5,units:1180,downtime:8,rework:22,lateOrders:4},
      {product:"C",batch:"B103",machine:"M3",supplier:"S3",inspection:52,defects:17,units:1250,downtime:7,rework:68,lateOrders:13},
      {product:"D",batch:"B104",machine:"M1",supplier:"S4",inspection:86,defects:6,units:1210,downtime:5,rework:24,lateOrders:4},
      {product:"C",batch:"B105",machine:"M3",supplier:"S2",inspection:49,defects:19,units:1190,downtime:8,rework:75,lateOrders:16},
      {product:"A",batch:"B106",machine:"M2",supplier:"S1",inspection:91,defects:3,units:1240,downtime:6,rework:15,lateOrders:2},
      {product:"C",batch:"B107",machine:"M3",supplier:"S3",inspection:55,defects:16,units:1270,downtime:7,rework:64,lateOrders:12},
      {product:"B",batch:"B108",machine:"M4",supplier:"S4",inspection:83,defects:5,units:1160,downtime:5,rework:20,lateOrders:3}
    ]
  },
  4: {
    columns:{route:"Route",aircraft:"Aircraft",seats:"Seats",passengers:"Passengers",occupancy:"Seat Occupancy %",ticketRevenue:"Ticket Revenue ₹L",fuelCost:"Fuel Cost ₹L",delayMinutes:"Delay Minutes",delayCost:"Delay Cost ₹L",routeCost:"Other Route Costs ₹L",contribution:"Contribution ₹L"},
    rows:[
      {route:"Route A",aircraft:"A320",seats:180,passengers:140,occupancy:78,ticketRevenue:38,fuelCost:12,delayMinutes:18,delayCost:1.2,routeCost:6.8,contribution:18},
      {route:"Route B",aircraft:"B737",seats:190,passengers:156,occupancy:82,ticketRevenue:36,fuelCost:14,delayMinutes:24,delayCost:1.8,routeCost:9.2,contribution:11},
      {route:"Route N",aircraft:"A321",seats:200,passengers:182,occupancy:91,ticketRevenue:42,fuelCost:23,delayMinutes:67,delayCost:5.4,routeCost:17.6,contribution:-4},
      {route:"Route D",aircraft:"A320",seats:180,passengers:137,occupancy:76,ticketRevenue:35,fuelCost:11,delayMinutes:21,delayCost:1.4,routeCost:7.6,contribution:15},
      {route:"Route E",aircraft:"B737",seats:190,passengers:150,occupancy:79,ticketRevenue:37,fuelCost:13,delayMinutes:27,delayCost:2.1,routeCost:10.1,contribution:9}
    ]
  },
  5: {
    columns:{department:"Department",slot:"Time Slot",appointments:"Appointments",noShows:"No-Shows",wait:"Average Wait Min",staff:"Staff",utilisation:"Equipment Utilisation %",rating:"Patient Rating",cost:"Operating Cost ₹k"},
    rows:[
      {department:"General OPD",slot:"Morning",appointments:240,noShows:28,wait:34,staff:18,utilisation:81,rating:4.1,cost:420},
      {department:"Diagnostics",slot:"Morning",appointments:180,noShows:18,wait:79,staff:12,utilisation:91,rating:3.2,cost:510},
      {department:"Diagnostics",slot:"Afternoon",appointments:160,noShows:42,wait:51,staff:12,utilisation:54,rating:3.5,cost:490},
      {department:"Diagnostics",slot:"Evening",appointments:140,noShows:31,wait:62,staff:11,utilisation:62,rating:3.4,cost:470},
      {department:"Cardiology",slot:"Morning",appointments:110,noShows:12,wait:42,staff:10,utilisation:77,rating:3.9,cost:380},
      {department:"Orthopaedics",slot:"Afternoon",appointments:125,noShows:19,wait:38,staff:11,utilisation:73,rating:4.0,cost:360},
      {department:"General OPD",slot:"Evening",appointments:190,noShows:21,wait:29,staff:16,utilisation:78,rating:4.2,cost:390},
      {department:"Diagnostics",slot:"Late",appointments:95,noShows:22,wait:44,staff:8,utilisation:48,rating:3.7,cost:300}
    ]
  },
  6: {
    columns:{branch:"Branch",revenue:"Revenue ₹L",operatingCost:"Operating Cost ₹L",contribution:"Contribution ₹L",inventoryCategory:"Inventory Category",inventoryDays:"Inventory Days",cashTied:"Cash Tied Up ₹L",churn:"Customer Churn %",headcount:"Headcount",marketing:"Marketing Spend ₹L"},
    rows:[
      {branch:"Branch A",revenue:120,operatingCost:88,contribution:32,inventoryCategory:"Fast movers",inventoryDays:24,cashTied:8,churn:8,headcount:42,marketing:8},
      {branch:"Branch B",revenue:96,operatingCost:78,contribution:18,inventoryCategory:"Seasonal",inventoryDays:68,cashTied:19,churn:10,headcount:38,marketing:7},
      {branch:"Branch C",revenue:88,operatingCost:100,contribution:-12,inventoryCategory:"Slow movers",inventoryDays:91,cashTied:27,churn:17,headcount:41,marketing:6},
      {branch:"Branch D",revenue:104,operatingCost:83,contribution:21,inventoryCategory:"Critical",inventoryDays:35,cashTied:10,churn:9,headcount:39,marketing:7},
      {branch:"Branch A",revenue:118,operatingCost:87,contribution:31,inventoryCategory:"Fast movers",inventoryDays:26,cashTied:9,churn:8,headcount:42,marketing:8},
      {branch:"Branch B",revenue:94,operatingCost:77,contribution:17,inventoryCategory:"Seasonal",inventoryDays:72,cashTied:20,churn:11,headcount:38,marketing:7},
      {branch:"Branch C",revenue:86,operatingCost:99,contribution:-13,inventoryCategory:"Slow movers",inventoryDays:94,cashTied:29,churn:18,headcount:41,marketing:6},
      {branch:"Branch D",revenue:106,operatingCost:84,contribution:22,inventoryCategory:"Critical",inventoryDays:34,cashTied:10,churn:9,headcount:39,marketing:7}
    ]
  }
};


/* BIG-DATA UPGRADE: expand each industry into 240 deterministic, realistic records.
   Repeated categorical patterns preserve the hidden business signal while numeric
   variation makes visual aggregation more useful than inspecting individual rows. */
function expandBusinessTables(){
 const monthNames=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
 Object.entries(businessTables).forEach(([levelId,table])=>{
   const templates=table.rows.map(r=>({...r}));
   const keys=Object.keys(table.columns);
   const numericKeys=keys.filter(k=>templates.some(r=>typeof r[k]==="number"));
   const expanded=[];
   for(let i=0;i<240;i++){
     const template=templates[i%templates.length];
     const row={...template};
     const cycle=Math.floor(i/templates.length);
     row.recordId=`L${levelId}-${String(i+1).padStart(3,"0")}`;
     // Give every row an identity while retaining its meaningful segment.
     if(levelId==="1") { row.film=`Movie ${String(i+1).padStart(3,"0")}`; row.releaseMonth=monthNames[(i+cycle)%12]; }
     if(levelId==="2") { row.product=`SKU-${String((i%36)+1).padStart(3,"0")}`; }
     if(levelId==="3") { row.batch=`B${String(1001+i).padStart(4,"0")}`; }
     if(levelId==="4") { row.flightId=`FL-${String(i+1).padStart(3,"0")}`; }
     if(levelId==="5") { row.caseId=`PT-${String(i+1).padStart(3,"0")}`; }
     if(levelId==="6") { row.period=`Month ${String((i%12)+1).padStart(2,"0")}`; }
     numericKeys.forEach(k=>{
       const original=Number(template[k]);
       // Small repeatable variation prevents duplicate rows without erasing the signal.
       const wave=(((i*7 + keys.indexOf(k)*11 + Number(levelId)*13)% nine())-4)/100;
       row[k]=Number((original*(1+wave)).toFixed(Number.isInteger(original)?0:1));
     });
     // Keep key causal patterns pronounced in the data.
     if(levelId==="1" && template.genre==="Drama") { row.gross=Math.round(row.gross*1.04); }
     if(levelId==="2" && template.category==="Fashion") { row.returns=Math.max(row.returns,24); row.margin=Math.min(row.margin,9); row.discount=Math.max(row.discount,17); }
     if(levelId==="3" && template.product==="C") { row.inspection=Math.min(row.inspection,56); row.defects=Math.max(row.defects,15); row.rework=Math.max(row.rework,60); row.lateOrders=Math.max(row.lateOrders,10); }
     if(levelId==="4" && template.route==="Route N") { row.delayMinutes=Math.max(row.delayMinutes,58); row.delayCost=Math.max(row.delayCost,4.8); row.contribution=Math.min(row.contribution,-2); }
     if(levelId==="5" && template.department==="Diagnostics" && template.slot==="Morning") { row.wait=Math.max(row.wait,70); row.rating=Math.min(row.rating,3.4); }
     if(levelId==="6" && template.branch==="Branch C") { row.contribution=Math.min(row.contribution,-8); row.inventoryDays=Math.max(row.inventoryDays,82); row.cashTied=Math.max(row.cashTied,24); row.churn=Math.max(row.churn,15); }
     expanded.push(row);
   }
   if(!table.columns.recordId) table.columns.recordId="Record ID";
   if(levelId==="4" && !table.columns.flightId) table.columns.flightId="Flight ID";
   if(levelId==="5" && !table.columns.caseId) table.columns.caseId="Case ID";
   if(levelId==="6" && !table.columns.period) table.columns.period="Period";
   // IDs go at the end so the default chart uses a meaningful business category.
   expanded.forEach(r=>{ if(r.recordId!==undefined){} });
   table.rows=expanded.map(r=>{ const out={}; keys.forEach(k=>out[k]=r[k]);
     if(levelId==="4")out.flightId=r.flightId;
     if(levelId==="5")out.caseId=r.caseId;
     if(levelId==="6")out.period=r.period;
     out.recordId=r.recordId; return out; });
 });
}
function nine(){return 9;}
expandBusinessTables();

const chartPalette = ["#4f8f5b","#83b98a","#81918a","#b0c4b2","#639a72","#a7b8aa","#3f7350","#c4d4c6"];
function activeTable(){ return businessTables[gameState.level]; }
function tableRowsForBuilder(){
 const t=activeTable(), group=$("groupBy")?.value||"", value=$("valueCol")?.value||"", order=$("orderBy")?.value||"none", direction=$("sortDirection")?.value||"desc";
 let rows=t.rows.map(r=>({...r}));
 if(group && value){
   const sums={};
   rows.forEach(r=>{const k=String(r[group]);if(!sums[k])sums[k]={...r,[group]:k,[value]:0,__n:0};sums[k][value]+=Number(r[value])||0;sums[k].__n++});
   rows=Object.values(sums).map(r=>({...r,[value]:r[value]/(r.__n||1)}));
 }
 if(order!=="none") rows.sort((a,b)=>{
   const av=a[order],bv=b[order],cmp=typeof av==="number"&&typeof bv==="number"?av-bv:String(av).localeCompare(String(bv));
   return direction==="asc"?cmp:-cmp;
 });
 return rows;
}
function renderDataLab(){
 const l=currentLevel(), t=activeTable(), cols=Object.keys(t.columns);
 const numeric=cols.filter(c=>t.rows.some(r=>typeof r[c]==="number"));
 const categorical=cols.filter(c=>!numeric.includes(c));
 const defaultDimension=({1:"genre",2:"category",3:"product",4:"route",5:"department",6:"branch"})[gameState.level]||categorical[0];
 const options=(arr,selected)=>arr.map(c=>`<option value="${c}" ${c===selected?"selected":""}>${t.columns[c]}</option>`).join("");
 $("gameMain").innerHTML=`
  <div class="kicker">${gameState.phase==="first"?"DATA LAB · 01":"DATA LAB · 02"}</div>
  <h2>${gameState.phase==="first"?"Explore the business data":"Investigate the suspected cause"}</h2>
  <div class="problem"><strong>CEO BRIEF:</strong> ${l.statement} <span class="small">Use the table to choose fields, a chart, grouping and sorting. Your chart is your evidence.</span></div>
  <div class="data-table-wrap"><div class="data-table-title"><b>Business dataset · Big Data Mode</b><span class="small">${t.rows.length} records · ${cols.length} columns · inspect patterns, not just individual rows</span></div>
   <div class="table-scroll"><table class="data-table"><thead><tr>${cols.map(c=>`<th>${t.columns[c]}</th>`).join("")}</tr></thead><tbody id="datasetRows"></tbody></table></div>
   <div class="dataset-pager"><span class="small" id="datasetPageLabel"></span><div><button class="btn secondary" id="datasetPrev">← Previous</button> <button class="btn secondary" id="datasetNext">Next →</button> <button class="btn success" id="downloadCsvBtn">Download CSV</button></div></div>
  </div>
  <div class="builder-panel glass">
   <div class="builder-title"><div><div class="kicker">VISUALIZATION BUILDER</div><h3>Build your own chart</h3></div><span class="small">Choose columns + chart type</span></div>
   <div class="builder-controls">
    <label>Category / X-axis<select id="categoryCol">${options(categorical,defaultDimension)}</select></label>
    <label>Value / Y-axis<select id="valueCol">${options(numeric,numeric[numeric.length-1])}</select></label>
    <label>Chart type<select id="chartType"><option value="bar">Bar chart</option><option value="line">Line chart</option><option value="doughnut">Doughnut chart</option><option value="horizontal">Horizontal bar</option></select></label>
    <label>Group by<select id="groupBy"><option value="">No grouping</option>${options(categorical,defaultDimension)}</select></label>
    <label>Order by<select id="orderBy"><option value="none">Keep original order</option>${cols.map(c=>`<option value="${c}">${t.columns[c]}</option>`).join("")}</select></label>
    <label>Sort direction<select id="sortDirection"><option value="desc">Descending ↓</option><option value="asc">Ascending ↑</option></select></label>
   </div>
   <button class="btn success" id="buildChartBtn">BUILD VISUALIZATION →</button>
  </div>
  <div id="customViz" class="chart-wrap"><div class="chart-fallback">Choose your fields and build a chart to reveal the data pattern.</div></div>
  <div class="choice-footer"><div class="status" id="builderStatus">Build a chart to collect evidence. You can try different combinations.</div>
   <button class="btn" id="submitAnalysisBtn">SUBMIT ANALYSIS →</button></div>`;
 $("sidePanel").innerHTML=`
  <div class="kicker">ANALYST WORKSPACE</div><h3>${l.icon} ${l.name}</h3><p>${l.problem}</p><hr>
  <div class="small">Scoring target</div><h2>1,000 pts</h2>
  <p class="small">Build useful charts, group and sort data, then choose a budget-smart rescue strategy.</p>
  <hr><div class="small">Analyst checklist</div><p>1. Pick a category column<br>2. Pick a numeric measure<br>3. Choose a chart<br>4. Group or sort to reveal a pattern</p>`;
 gameState.tablePage=0; renderDatasetPage();
 $("datasetPrev").onclick=()=>{if(gameState.tablePage>0){gameState.tablePage--;renderDatasetPage();}};
 $("datasetNext").onclick=()=>{if((gameState.tablePage+1)*20<activeTable().rows.length){gameState.tablePage++;renderDatasetPage();}};
 $("downloadCsvBtn").onclick=exportActiveDataset;
 gameState.builderHasChart=false;
 gameState.builderQuality=0;
 $("buildChartBtn").onclick=()=>safe(()=>buildCustomChart(),()=>toast("Could not build chart. Please change the selected fields and try again."));
 $("submitAnalysisBtn").onclick=submitDataAnalysis;
 // Auto-render once so students can see the effect immediately, but still need to press Build to earn analysis points.
 safe(()=>renderDataTablePreview(),()=>{ $("customViz").innerHTML=`<div class="chart-fallback">Chart preview could not load. Choose your fields and press BUILD VISUALIZATION.</div>`; });
 updateHUD();
}
function renderDatasetPage(){
 const t=activeTable(), cols=Object.keys(t.columns), pageSize=20, start=gameState.tablePage*pageSize, rows=t.rows.slice(start,start+pageSize);
 const tbody=$("datasetRows"); if(!tbody)return;
 tbody.innerHTML=rows.map(r=>`<tr>${cols.map(c=>`<td>${typeof r[c]==="number"?r[c].toLocaleString("en-IN"):r[c]}</td>`).join("")}</tr>`).join("");
 $("datasetPageLabel").textContent=`Showing ${start+1}–${Math.min(start+pageSize,t.rows.length)} of ${t.rows.length} records · Page ${gameState.tablePage+1} of ${Math.ceil(t.rows.length/pageSize)}`;
 $("datasetPrev").disabled=gameState.tablePage===0; $("datasetNext").disabled=start+pageSize>=t.rows.length;
}
function exportActiveDataset(){
 const t=activeTable(), cols=Object.keys(t.columns);
 const csv=[cols.map(c=>`"${String(t.columns[c]).replaceAll('"','""')}"`).join(","),...t.rows.map(r=>cols.map(c=>`"${String(r[c]??"").replaceAll('"','""')}"`).join(","))].join("\r\n");
 const blob=new Blob(["\ufeff"+csv],{type:"text/csv;charset=utf-8;"}),url=URL.createObjectURL(blob),a=document.createElement("a");
 a.href=url;a.download=`itvedant-level-${gameState.level}-big-data.csv`;document.body.appendChild(a);a.click();a.remove();URL.revokeObjectURL(url);toast(`Exported ${t.rows.length} dataset records as CSV.`);
}
function renderDataTablePreview(){
 // Intentionally show a helpful starter chart preview for the default selections.
 buildCustomChart(true);
}
function buildCustomChart(isPreview=false){
 const t=activeTable(), category=$("categoryCol").value, value=$("valueCol").value, type=$("chartType").value, group=$("groupBy").value, order=$("orderBy").value, direction=$("sortDirection").value;
 if(!category||!value){toast("Choose both a category and a numeric value column.");return;}
 let rows=t.rows.map(r=>({...r}));
 if(group){
   const grouped={};
   rows.forEach(r=>{const k=String(r[group]);if(!grouped[k])grouped[k]={label:k,value:0,count:0};grouped[k].value+=Number(r[value])||0;grouped[k].count++});
   rows=Object.values(grouped).map(x=>({[category]:x.label,[value]:x.value/x.count}));
 } else {
   rows=rows.map(r=>({...r}));
 }
 if(order!=="none"){
   rows.sort((a,b)=>{const av=a[order],bv=b[order];const cmp=typeof av==="number"&&typeof bv==="number"?av-bv:String(av??"").localeCompare(String(bv??""));return direction==="asc"?cmp:-cmp});
 }
 const fullCount=rows.length; const data=rows.slice(0,20).map(r=>[String(r[category]),Number(r[value])||0]);
 const container=$("customViz");
 container.innerHTML=`<div class="chart-head"><div><b>${t.columns[value]} by ${t.columns[category]}</b><div class="small">${group?`Grouped by ${t.columns[group]} · `:""}${order!=="none"?`Ordered by ${t.columns[order]} (${direction})`:"Original order"} · ${type} chart</div></div></div><canvas id="customCanvas"></canvas><div class="chart-legend" id="chartLegend"></div><div class="small chart-insight" id="chartInsight"></div>`;
 const canvas=$("customCanvas");
 if(type==="doughnut")drawDoughnut(canvas,data);
 else if(type==="horizontal")drawBarChart(canvas,data,"",true);
 else if(type==="line")drawGenericLine(canvas,data);
 else drawBarChart(canvas,data,"",false);
 renderChartLegend(data,type,t.columns[value]);
 const max=data.reduce((a,b)=>b[1]>a[1]?b:a,data[0]||["",0]), min=data.reduce((a,b)=>b[1]<a[1]?b:a,data[0]||["",0]);
 $("chartInsight").textContent=`Highest: ${max[0]} (${max[1].toLocaleString("en-IN")}) · Lowest: ${min[0]} (${min[1].toLocaleString("en-IN")}). ${!group&&fullCount>20?`Showing first 20 of ${fullCount} records only — group by a meaningful field to uncover the full pattern.`:`Aggregated view based on ${fullCount} records. Compare with the business problem before choosing a strategy.`}`;
 if(!isPreview){
   gameState.builderHasChart=true;
   gameState.builderQuality=Math.min(100,gameState.builderQuality+15+(group?20:0)+(order!=="none"?15:0));
   $("builderStatus").textContent=`Chart built. Evidence quality: ${gameState.builderQuality}/100. Try another grouping or sort to compare patterns.`;
   playTone("correct");
 }
}

function renderChartLegend(data,type,valueLabel){
 const legend=$("chartLegend");
 const heading=document.createElement("b");
 heading.className="chart-legend-title";
 heading.textContent=type==="line"?"COLOR KEY · VALUE SERIES":"COLOR KEY · CATEGORY";
 legend.appendChild(heading);
 const items=document.createElement("div");
 items.className="chart-legend-items";
 const legendData=type==="line"?[[`${valueLabel} (Y-axis measure)`,chartPalette[0]]]:data.map((d,i)=>[`${d[0]} · ${Number(d[1]).toLocaleString("en-IN")}`,chartPalette[i%chartPalette.length]]);
 legendData.forEach(([label,color])=>{
  const item=document.createElement("span");
  item.className="chart-legend-item";
  const swatch=document.createElement("i");
  swatch.className=type==="line"?"chart-legend-swatch line":"chart-legend-swatch";
  swatch.style.setProperty("--legend-color",color);
  const text=document.createElement("span");
  text.textContent=label;
  item.append(swatch,text);
  items.appendChild(item);
 });
 legend.appendChild(items);
}

function prepCanvas(canvas){
 const rect=canvas.getBoundingClientRect();
 const w=Math.max(320,Math.floor(rect.width||760));
 const h=320;
 const dpr=window.devicePixelRatio||1;
 canvas.width=w*dpr; canvas.height=h*dpr;
 canvas.style.height=h+"px";
 const ctx=canvas.getContext("2d");
 ctx.setTransform(dpr,0,0,dpr,0,0);
 return {ctx,w,h};
}
function chartBase(ctx,w,h){
 ctx.clearRect(0,0,w,h);
 ctx.fillStyle="rgba(0,0,0,0)";
 ctx.fillRect(0,0,w,h);
}
function drawAxes(ctx,w,h){
 const left=54,bottom=42,top=20,right=18;
 ctx.strokeStyle="rgba(45,65,52,.12)";
 ctx.lineWidth=1;
 for(let i=0;i<5;i++){
  const y=top+(h-top-bottom)*i/4;
  ctx.beginPath();ctx.moveTo(left,y);ctx.lineTo(w-right,y);ctx.stroke();
 }
 ctx.strokeStyle="rgba(45,65,52,.35)";
 ctx.beginPath();ctx.moveTo(left,top);ctx.lineTo(left,h-bottom);ctx.lineTo(w-right,h-bottom);ctx.stroke();
}
function drawBarChart(canvas,data,title="",horizontal=false){
 const {ctx,w,h}=prepCanvas(canvas);chartBase(ctx,w,h);drawAxes(ctx,w,h);
 const left=horizontal?118:54,bottom=horizontal?28:62,top=22,right=18;
 const max=Math.max(1,...data.map(d=>Number(d[1])||0));
 const plotW=w-left-right,plotH=h-top-bottom;
 ctx.font="12px system-ui, sans-serif";
 if(horizontal){
  const rowH=plotH/Math.max(data.length,1);
  data.forEach((d,i)=>{
   const y=top+i*rowH+rowH*.18,bw=plotW*Math.max(0,Number(d[1])||0)/max;
   ctx.fillStyle=chartPalette[i%chartPalette.length];ctx.fillRect(left,y,bw,rowH*.62);
   ctx.fillStyle="#42544a";ctx.textAlign="right";ctx.fillText(String(d[0]).slice(0,16),left-9,y+rowH*.48);
   ctx.textAlign="left";ctx.fillText(Number(d[1]).toLocaleString("en-IN"),Math.min(w-44,left+bw+6),y+rowH*.48);
  });
 }else{
  const slot=plotW/Math.max(data.length,1),barW=Math.max(8,slot*.62);
  data.forEach((d,i)=>{
   const val=Math.max(0,Number(d[1])||0),bh=plotH*val/max,x=left+i*slot+(slot-barW)/2,y=top+plotH-bh;
   ctx.fillStyle=chartPalette[i%chartPalette.length];ctx.fillRect(x,y,barW,bh);
   ctx.fillStyle="#42544a";ctx.textAlign="center";
   ctx.fillText(val.toLocaleString("en-IN"),x+barW/2,Math.max(13,y-6));
   ctx.save();ctx.translate(x+barW/2,h-12);ctx.rotate(-.25);ctx.fillText(String(d[0]).slice(0,12),0,0);ctx.restore();
  });
 }
 ctx.textAlign="left";
}
function drawDoughnut(canvas,data){
 const {ctx,w,h}=prepCanvas(canvas);chartBase(ctx,w,h);
 const total=data.reduce((sum,d)=>sum+Math.max(0,Number(d[1])||0),0)||1;
 const cx=w*.42,cy=h*.49,r=Math.min(105,h*.34,w*.22),inner=r*.58;
 let start=-Math.PI/2;
 data.forEach((d,i)=>{
  const value=Math.max(0,Number(d[1])||0),end=start+value/total*Math.PI*2;
  ctx.beginPath();ctx.moveTo(cx,cy);ctx.arc(cx,cy,r,start,end);ctx.closePath();
  ctx.fillStyle=chartPalette[i%chartPalette.length];ctx.fill();start=end;
 });
 ctx.beginPath();ctx.arc(cx,cy,inner,0,Math.PI*2);ctx.fillStyle="#f8faf8";ctx.fill();
 ctx.textAlign="center";ctx.fillStyle="#42544a";ctx.font="bold 15px system-ui, sans-serif";ctx.fillText("Total",cx,cy-2);
 ctx.font="12px system-ui, sans-serif";ctx.fillStyle="#4f8f5b";ctx.fillText(total.toLocaleString("en-IN"),cx,cy+17);
 ctx.textAlign="left";
}

function drawGenericLine(canvas,data){
 const {ctx,w,h}=prepCanvas(canvas);chartBase(ctx,w,h);drawAxes(ctx,w,h);
 const max=Math.max(...data.map(d=>d[1]),1),left=52,bottom=38,plotW=w-left-22,plotH=h-bottom-24;
 ctx.strokeStyle=chartPalette[0];ctx.lineWidth=3;ctx.beginPath();
 data.forEach((d,i)=>{const x=left+i*(plotW/Math.max(1,data.length-1)),y=h-bottom-(d[1]/max)*plotH;i?ctx.lineTo(x,y):ctx.moveTo(x,y)});
 ctx.stroke(); data.forEach((d,i)=>{const x=left+i*(plotW/Math.max(1,data.length-1)),y=h-bottom-(d[1]/max)*plotH;ctx.fillStyle=chartPalette[0];ctx.beginPath();ctx.arc(x,y,4,0,Math.PI*2);ctx.fill();ctx.fillStyle="#42544a";ctx.textAlign="center";ctx.fillText(d[0].slice(0,10),x,h-14);ctx.fillText(String(d[1]),x,Math.max(14,y-7))});ctx.textAlign="left";
}
function submitDataAnalysis(){
 if(!gameState.builderHasChart){toast("Build at least one visualization before submitting.");return;}
 if(!$("groupBy")?.value || $("orderBy")?.value==="none"){toast("Big Data challenge: group the 240 records and sort by a relevant metric before submitting.");return;}
 const bonus=Math.min(250,100+Math.round(gameState.builderQuality*1.5));
 gameState.score+=bonus; gameState.levelAnalysisScore=(gameState.levelAnalysisScore||0)+bonus;
 toast(`Analysis submitted: +${bonus} points`);
 playTone("correct");
 if(gameState.phase==="first"){
   gameState.phase="second";
   gameState.builderHasChart=false;
   gameState.builderQuality=0;
   renderDataLab();
 }else{
   gameState.score=Math.min(850,gameState.score+150);
   gameState.phase="solutions";
   renderRootCause();
 }
 updateHUD();
}

/* =========================
   CENTRAL GAME STATE
   ========================= */
const bestScores = (()=>{ try{return JSON.parse(localStorage.getItem("itvedantBusinessRescueAdvancedBestScores")||"{}")}catch(e){return {}} })();
const gameState = {
 level:1, score:0, budget:0, spent:0, timeRemaining:1200,
 currentInvestigation:0, phase:"first", selectedSolutions:[], gameStatus:"playing",
 selectedAnalysis:null, builderHasChart:false, builderQuality:0, levelAnalysisScore:0, muted:false, timerId:null, tablePage:0
};

const $ = id => document.getElementById(id);
const fmt = n => "₹" + Number(n).toLocaleString("en-IN");
const currentLevel = () => levels.find(l => l.id === gameState.level);

function showScreen(id){
 document.querySelectorAll(".screen").forEach(s=>s.classList.remove("active"));
 $(id).classList.add("active");
}
function toast(msg){
 const el=$("toast"); el.textContent=msg; el.classList.add("show");
 clearTimeout(toast.t); toast.t=setTimeout(()=>el.classList.remove("show"),2600);
}
function safe(fn,fallback){
 try{return fn()}catch(err){console.error(err); if(fallback)fallback(err); return null}
}
function playTone(type){
 if(gameState.muted || !window.AudioContext) return;
 safe(()=>{
  const ctx=playTone.ctx||(playTone.ctx=new AudioContext());
  const o=ctx.createOscillator(), g=ctx.createGain();
  o.connect(g);g.connect(ctx.destination);
  const map={correct:[660,.12],wrong:[170,.18],win:[880,.18],click:[300,.05]};
  const [freq,dur]=map[type]||map.click;
  o.frequency.value=freq;o.type="sine";g.gain.setValueAtTime(.045,ctx.currentTime);
  g.gain.exponentialRampToValueAtTime(.001,ctx.currentTime+dur);
  o.start();o.stop(ctx.currentTime+dur);
 });
}
$("muteBtn").onclick=()=>{gameState.muted=!gameState.muted;$("muteBtn").textContent=gameState.muted?"🔇":"🔊";};

$("startBtn").onclick=()=>{playTone("click");renderLevels();showScreen("levelsScreen")};

function renderLevels(){
 $("levelGrid").innerHTML=levels.map(l=>`
  <article class="level-card glass" data-level="${l.id}">
   <div><div class="level-icon">${l.icon}</div><div class="level-num">LEVEL ${l.id} · MAX 1,000 PTS</div><div class="small level-best">PERSONAL BEST: ${(bestScores[l.id]||0).toLocaleString("en-IN")} pts</div>
   <h3 style="margin-top:7px">${l.name}</h3><p>${l.problem}</p></div>
   <div><div class="difficulty">${[1,2,3,4,5].map(i=>`<i class="dot ${i<=l.difficulty?"on":""}"></i>`).join("")}</div>
   <button class="btn" style="width:100%;margin-top:14px">START INVESTIGATION →</button></div>
  </article>`).join("");
 document.querySelectorAll(".level-card").forEach(card=>card.onclick=()=>startLevel(Number(card.dataset.level)));
}
function startLevel(id){
 const l=levels.find(x=>x.id===id); if(!l)return;
 Object.assign(gameState,{level:id,score:0,budget:l.budget,spent:0,timeRemaining:1200,currentInvestigation:0,phase:"first",selectedSolutions:[],evidenceSeen:[],gameStatus:"playing",selectedAnalysis:null,builderHasChart:false,builderQuality:0,levelAnalysisScore:0});
 clearInterval(gameState.timerId); gameState.timerId=setInterval(tick,1000);
 updateHUD(); renderInvestigation();
 showScreen("gameScreen"); playTone("click");
}
function tick(){
 if(gameState.gameStatus!=="playing")return;
 gameState.timeRemaining=Math.max(0,gameState.timeRemaining-1); updateHUD();
 if(gameState.timeRemaining===0) failure("TIME OUT","The clock reached zero before the business could be rescued.");
}
function updateHUD(){
 const l=currentLevel(); if(!l)return;
 $("hudBusiness").textContent=l.icon+" "+l.name;
 $("hudLevel").textContent=l.id;
 $("hudScore").textContent=gameState.score;
 $("hudBudget").textContent=fmt(Math.max(0,l.budget-gameState.spent));
 const m=Math.floor(gameState.timeRemaining/60),s=gameState.timeRemaining%60;
 $("hudTime").textContent=`${String(m).padStart(2,"0")}:${String(s).padStart(2,"0")}`;
 const progress=gameState.phase==="first"?0.15:gameState.phase==="second"?0.4:gameState.phase==="solutions"?0.68:1;
 $("hudProgress").style.width=(progress*100)+"%";
}


function renderInvestigation(){ renderDataLab(); }
function renderRootCause(){
 const l=currentLevel();
 $("gameMain").innerHTML=`
  <div class="kicker">ROOT CAUSE FOUND</div><h2>${l.rootCause}</h2>
  <p>You connected the signal to the business impact. Now prove it with the evidence.</p>
  <div class="evidence-grid grid">${l.evidence.map(e=>`<div class="evidence glass"><span class="small">${e[0]}</span><strong class="${String(e[1]).startsWith("+")?"down":"down"}">${e[1]}</strong></div>`).join("")}</div>
  <div class="root-cause">
   <div class="glass" style="padding:24px"><h3>🧠 Analyst Conclusion</h3><p>${rootExplanation(l)}</p>
   <p><b>Don't treat the symptom. Find the root cause using data.</b></p></div>
   <div class="glass" style="padding:24px"><h3>Evidence chain</h3><p>Signal → operational cause → customer impact → financial impact</p>
   <div class="progress" style="height:13px;margin-top:20px"><i style="width:100%"></i></div></div>
  </div>
  <div class="choice-footer"><div class="status">Score +150 · Root cause confirmed</div><button class="btn success" id="toSolutions">BUILD RESCUE STRATEGY →</button></div>`;
 $("sidePanel").innerHTML=`<div class="kicker">CEO UPDATE</div><h3>We found the signal.</h3><p>${l.rootCause} is the issue management must fix first.</p><hr><div class="small">Approved budget</div><h2>${fmt(l.budget)}</h2><p>Spend carefully. The strongest strategy fixes the cause, not just the symptom.</p>`;
 $("toSolutions").onclick=()=>{gameState.phase="solutions";renderSolutions()};
 updateHUD();
}
function rootExplanation(l){
 const text={
  1:"Film gross is not the same as studio contribution. Production and marketing costs must be weighed against theatrical and secondary licensing revenue; a balanced campaign and licensing plan can improve return on investment.",
  2:"Fashion combines the highest discounts with unusually high returns and low margin. Better product information, targeted return reduction, and discount discipline address the combined cause.",
  3:"Product C batches show a concentrated defect spike where inspection coverage is low. Restore risk-based inspections and audit the process before committing to a costly full-line replacement.",
  4:"Route N has high occupancy but negative contribution, high fuel costs, and expensive delays. Route-specific schedule and cost changes matter more than simply adding aircraft.",
  5:"Diagnostics has long waits alongside uneven slot utilisation and high no-shows. Demand-based scheduling and reminders can use existing capacity more effectively without compromising care.",
  6:"Negative contribution at Branch C and cash trapped in slow-moving inventory jointly pressure the company's runway. Targeted restructuring and inventory rebalancing are safer than blanket cuts."
 };
 return text[l.id];
}
function renderSolutions(){
 const l=currentLevel();gameState.phase="solutions";
 $("gameMain").innerHTML=`
  <div class="kicker">BUSINESS SOLUTION STAGE</div><h2>Choose how to rescue the business.</h2>
  <div class="problem"><strong>BUDGET APPROVED:</strong> ${fmt(l.budget)} · Drag solutions into the Selected Strategy zone, or tap a solution to add/remove it.</div>
  <div class="grid solutions">${l.solutions.map(s=>`
   <article class="solution glass" draggable="true" data-s="${s.id}">
    <div class="small">STRATEGY</div><h3>${s.name}</h3><div class="cost">${fmt(s.cost)}</div><div class="impact">${s.impact}</div>
   </article>`).join("")}</div>
  <div class="strategy-zone" id="dropZone"><b>SELECTED STRATEGY</b><div class="small">Drop solutions here</div><div class="selected-list" id="selectedList"></div></div>
  <div class="budget-row"><b>Budget</b><b id="budgetText">${fmt(l.budget)}</b></div><div class="budget-bar"><i id="budgetBar"></i></div>
  <div class="choice-footer"><div class="status" id="strategyStatus">Choose a combination that attacks the root cause.</div><button class="btn success" id="executeBtn">EXECUTE STRATEGY →</button></div>`;
 $("sidePanel").innerHTML=`<div class="kicker">ROOT CAUSE</div><h3>${l.rootCause}</h3><p>Best strategies directly improve the cause you discovered.</p><hr><div class="small">Remaining</div><h2 id="sideRemaining">${fmt(l.budget)}</h2><div class="small">Selected actions</div><div id="sideCount">0</div>`;
 document.querySelectorAll(".solution").forEach(el=>{
  el.onclick=()=>toggleSolution(el.dataset.s);
  el.addEventListener("dragstart",e=>e.dataTransfer.setData("text/plain",el.dataset.s));
 });
 const zone=$("dropZone");
 zone.addEventListener("dragover",e=>{e.preventDefault();zone.classList.add("over")});
 zone.addEventListener("dragleave",()=>zone.classList.remove("over"));
 zone.addEventListener("drop",e=>{e.preventDefault();zone.classList.remove("over");toggleSolution(e.dataTransfer.getData("text/plain"))});
 $("executeBtn").onclick=executeStrategy;
 updateSolutionsUI();
 updateHUD();
}
function toggleSolution(id){
 const l=currentLevel(),s=l.solutions.find(x=>x.id===id);if(!s)return;
 const exists=gameState.selectedSolutions.includes(id);
 if(exists){gameState.selectedSolutions=gameState.selectedSolutions.filter(x=>x!==id);playTone("click")}
 else if(gameState.spent+s.cost<=l.budget){gameState.selectedSolutions.push(id);playTone("correct")}
 else {playTone("wrong");toast("BUDGET EXCEEDED — Choose a lower-cost strategy.");$("gameMain").classList.add("shake");setTimeout(()=>$("gameMain").classList.remove("shake"),450);return}
 updateSolutionsUI();
}
function updateSolutionsUI(){
 const l=currentLevel(),selected=l.solutions.filter(s=>gameState.selectedSolutions.includes(s.id));
 gameState.spent=selected.reduce((sum,s)=>sum+s.cost,0);
 document.querySelectorAll(".solution").forEach(el=>el.classList.toggle("selected",gameState.selectedSolutions.includes(el.dataset.s)));
 $("selectedList").innerHTML=selected.length?selected.map(s=>`<span class="selected-chip">${s.name} · ${fmt(s.cost)} ✕</span>`).join(""):"<span class='small'>No strategies selected yet.</span>";
 $("budgetText").textContent=fmt(Math.max(0,l.budget-gameState.spent));
 $("sideRemaining").textContent=fmt(Math.max(0,l.budget-gameState.spent));
 $("sideCount").textContent=selected.length;
 $("budgetBar").style.width=Math.min(100,(gameState.spent/l.budget)*100)+"%";
 $("strategyStatus").textContent=selected.length?`${selected.length} action${selected.length>1?"s":""} selected · ${fmt(gameState.spent)} committed`:"Choose a combination that attacks the root cause.";
 updateHUD();
}
function executeStrategy(){
 if(!gameState.selectedSolutions.length){toast("Select at least one business action.");return;}
 const l=currentLevel(), selected=l.solutions.filter(s=>gameState.selectedSolutions.includes(s.id));
 const directMap={1:["targetedMarketing","budgetControls","streaming"],2:["fitContent","returnControl","discountControl"],3:["inspectionProgram","batchAudit"],4:["schedule","routeReview","fuel"],5:["booking","reminders","crossTrain"],6:["inventory","branchPlan","terms"]};
 const directIds=directMap[l.id]||[];
 const direct=selected.filter(s=>directIds.includes(s.id));
 const impact=selected.reduce((sum,s)=>sum+s.score,0);
 const directImpact=direct.reduce((sum,s)=>sum+s.score,0);
 const rootCoverage=Math.round((directImpact/Math.max(1,impact))*100);
 const budgetEfficiency=Math.round((impact/Math.max(1,gameState.spent))*100);
 const decisionScore=Math.round(directImpact*5+impact*2+Math.min(30,budgetEfficiency/5));
 const threshold={1:115,2:105,3:120,4:110,5:108,6:110}[l.id]||110;
 const rescued=decisionScore>=threshold && rootCoverage>=45;
 gameState.score+=decisionScore;
 if(rescued) victory(selected,decisionScore,rootCoverage); else badStrategy(selected,decisionScore,rootCoverage);
}
function outcomeValues(l,rescued,selected){
 const base={
  1:["+18%","+12%","+15%","+14%","+21%"],2:["-35%","+6%","+17%","+12%","+19%"],
  3:["-40%","-25%","+15%","+26%","+21%"],4:["-22%","+₹3L","-8%","+6%","+18%"],
  5:["-25%","-30%","+15%","+18%","+12%"],6:["+₹6L","-40%","-12%","+14%","+10%"]
 }[l.id];
 if(rescued)return base;
 return l.id===1?["+20%","-4%","-8%","+2%","+1%"]:["+2%","-6%","-4%","+3%","0%"];
}
function victory(selected,decisionScore,rootCoverage){
 gameState.gameStatus="won";clearInterval(gameState.timerId);playTone("win");confetti();
 // Rescue completion adds a large bonus; scores are capped at 1,000 per level.
 gameState.score=Math.min(1000,gameState.score+Math.max(100,250+Math.round((rootCoverage||0)*1.5)));
 bestScores[gameState.level]=Math.max(bestScores[gameState.level]||0,gameState.score);
 try{localStorage.setItem("itvedantBusinessRescueAdvancedBestScores",JSON.stringify(bestScores))}catch(e){}

 const l=currentLevel(), vals=outcomeValues(l,true,selected);
 $("gameMain").innerHTML=`
  <div style="text-align:center;padding:10px 0"><div class="kicker">STRATEGY EXECUTED</div><h2>🎉 BUSINESS RESCUED</h2>
  <p>Your strategy attacked the root cause and produced a simulated recovery.</p></div>
  <div class="grid outcome-grid">${["Root Cause KPI","Customer Impact","Retention / Operations","Sales / Conversion","Profit / Efficiency"].map((x,i)=>`<div class="outcome glass"><span class="small">${x}</span><strong>${vals[i]}</strong></div>`).join("")}</div>
  <div class="glass" style="padding:24px;margin-top:18px"><h3>CEO MESSAGE</h3><p>Excellent investigation. You followed evidence, identified the cause, and allocated resources instead of treating the symptom.</p></div>
  <div class="choice-footer"><div><b>Final Score: ${gameState.score} / 1,000</b><div class="small">Level best: ${bestScores[l.id]} pts · ${fmt(l.budget-gameState.spent)} budget remained</div></div><button class="btn" id="restartBtn">RESTART LEVEL</button><button class="btn secondary" id="levelsBtn">CHOOSE ANOTHER LEVEL</button></div>`;
 $("sidePanel").innerHTML=`<div class="kicker">MISSION COMPLETE</div><h3>🏆 Analyst Grade</h3><h2>RESCUED</h2><p>Root cause: <b>${l.rootCause}</b></p><hr><div class="small">Final score</div><h2>${gameState.score}</h2>`;
 bindEnd();
 updateHUD();
}
function badStrategy(selected){
 gameState.gameStatus="lost";clearInterval(gameState.timerId);playTone("wrong");
 const l=currentLevel();
 $("gameMain").innerHTML=`
  <div class="failure"><div style="font-size:48px">❌</div><div class="kicker">SIMULATION RESULT</div><h2>BUSINESS NOT RESCUED</h2>
  <p>Your strategy did not address <b>${l.rootCause}</b> strongly enough, or used the budget inefficiently.</p>
  <div class="glass" style="padding:20px;text-align:left;margin-top:18px"><h3>What happened?</h3><p>${badExplanation(l)}</p></div>
  <p><b>You treated the symptom instead of solving the root cause.</b></p>
  <div class="choice-footer" style="justify-content:center"><button class="btn" id="retryStrategy">TRY AGAIN</button><button class="btn secondary" id="retryLevel">RESTART LEVEL</button></div></div>`;
 $("sidePanel").innerHTML=`<div class="kicker">POST-MORTEM</div><h3>Strategy failed</h3><p>Review the evidence and choose actions that directly influence the root cause.</p><hr><div class="small">Root cause</div><strong>${l.rootCause}</strong>`;
 $("retryStrategy").onclick=()=>{gameState.gameStatus="playing";gameState.selectedSolutions=[];gameState.spent=0;renderSolutions()};
 $("retryLevel").onclick=()=>startLevel(l.id);
}
function badExplanation(l){
 if(l.id===1)return "Chasing gross box-office collections or spending more on broad promotion ignores the production and marketing cost mix. The studio needs contribution-led investment and secondary revenue.";
 if(l.id===2)return "Broad advertising may increase orders, but it does not fix high fashion returns and unprofitable discounting.";
 if(l.id===3)return "Replacing an entire line is expensive when the evidence points to low inspection coverage in a specific product and batch combination.";
 if(l.id===4)return "Adding aircraft or chasing seat occupancy does not resolve a route with negative contribution and unusually high delay costs.";
 if(l.id===5)return "Adding capacity everywhere costs more without fixing the diagnostic scheduling mismatch and no-show pattern.";
 return "Blanket cuts may damage profitable branches and customer retention. The recovery plan should target negative contribution and cash trapped in slow-moving inventory.";
}

function bindEnd(){
 $("restartBtn").onclick=()=>startLevel(gameState.level);
 $("levelsBtn").onclick=()=>{clearInterval(gameState.timerId);renderLevels();showScreen("levelsScreen")};
}
function failure(title,msg){
 gameState.gameStatus="lost";clearInterval(gameState.timerId);
 $("gameMain").innerHTML=`<div class="failure"><div style="font-size:50px">❌</div><div class="kicker">MISSION FAILED</div><h2>${title}</h2><p>${msg}</p><button class="btn danger" id="restartFailure">RESTART GAME</button></div>`;
 $("sidePanel").innerHTML=`<div class="kicker">POST-MORTEM</div><h3>Investigation ended.</h3><p>Correct analytical choices are required to move forward.</p>`;
 $("restartFailure").onclick=()=>startLevel(gameState.level);
 $("gameMain").classList.add("shake");setTimeout(()=>$("gameMain").classList.remove("shake"),450);
}
function confetti(){
 const c=$("confetti");c.innerHTML="";
 for(let i=0;i<90;i++){const e=document.createElement("i");e.style.left=Math.random()*100+"%";e.style.top=(-10-Math.random()*30)+"%";e.style.background=["#cfe6d0","#9dd4a4","#87a79a","#dfe5d9","#67b96d"][i%5];e.style.transform=`rotate(${Math.random()*360}deg)`;e.style.animationDelay=Math.random()*.7+"s";c.appendChild(e)}
 setTimeout(()=>c.innerHTML="",4000);
}

document.addEventListener("click", (event) => {
 const target = event.target.closest("#chooseBtn");
 if (!target || target.disabled) return;
 if (typeof commitAnalysis === "function") commitAnalysis();
});

window.addEventListener("resize",()=>{const c=$("mainCanvas");if(c&&gameState.selectedAnalysis)safe(()=>drawChart(c,gameState.selectedAnalysis),()=>{})});
renderLevels();
